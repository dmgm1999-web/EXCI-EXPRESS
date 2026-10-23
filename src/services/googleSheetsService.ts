/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { getAccessToken } from './googleAuthService';
import { VideoClass } from '../types';

/**
 * Extracts a spreadsheet ID and optional tab gid from a Google Sheets URL or raw ID.
 */
export function extractSpreadsheetInfo(input: string): { spreadsheetId: string; gid?: string } {
  if (!input) return { spreadsheetId: '' };
  const trimmed = input.trim();

  // Extract gid if present (?gid=123 or #gid=123)
  const gidMatch = trimmed.match(/[?&#]gid=([0-9]+)/);
  const gid = gidMatch ? gidMatch[1] : undefined;

  const match = trimmed.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);
  if (match && match[1]) {
    return { spreadsheetId: match[1], gid };
  }

  // If it's already an ID
  if (/^[a-zA-Z0-9-_]{15,}$/.test(trimmed)) {
    return { spreadsheetId: trimmed, gid };
  }

  return { spreadsheetId: trimmed, gid };
}

/**
 * Backwards-compatible helper returning just the spreadsheet ID string.
 */
export function extractSpreadsheetId(input: string): string {
  return extractSpreadsheetInfo(input).spreadsheetId;
}

/**
 * Normalizes YouTube video IDs from URLs, embed links, shortlinks, or raw 11-char IDs.
 * Returns empty string if not a valid YouTube ID/URL.
 */
export function extractYouTubeId(urlOrId: string): string {
  if (!urlOrId) return '';
  const trimmed = String(urlOrId).trim();

  // Exact 11-char YouTube ID (alphanumeric, underscores, hyphens)
  if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) {
    return trimmed;
  }

  // Matches youtu.be/<id>
  const shortMatch = trimmed.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
  if (shortMatch && shortMatch[1]) return shortMatch[1];

  // Matches watch?v=<id>
  const watchMatch = trimmed.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
  if (watchMatch && watchMatch[1]) return watchMatch[1];

  // Matches embed/<id>, shorts/<id>, live/<id>, v/<id>
  const pathMatch = trimmed.match(/youtube\.com\/(?:embed|v|shorts|live)\/([a-zA-Z0-9_-]{11})/);
  if (pathMatch && pathMatch[1]) return pathMatch[1];

  // Matches any youtube domain with 11-char ID
  const anyYt = trimmed.match(/(?:youtube\.com|youtu\.be).*?([a-zA-Z0-9_-]{11})/);
  if (anyYt && anyYt[1]) return anyYt[1];

  return '';
}

/**
 * Robust CSV parser that handles quotes, escaped quotes, newlines, and commas.
 */
export function parseCSV(csvText: string): string[][] {
  const lines: string[][] = [];
  let currentRow: string[] = [];
  let currentCell = '';
  let insideQuotes = false;

  for (let i = 0; i < csvText.length; i++) {
    const char = csvText[i];
    const nextChar = csvText[i + 1];

    if (char === '"') {
      if (insideQuotes && nextChar === '"') {
        currentCell += '"';
        i++; // skip escaped quote
      } else {
        insideQuotes = !insideQuotes;
      }
    } else if (char === ',' && !insideQuotes) {
      currentRow.push(currentCell.trim());
      currentCell = '';
    } else if ((char === '\r' || char === '\n') && !insideQuotes) {
      if (char === '\r' && nextChar === '\n') {
        i++; // skip \r\n
      }
      currentRow.push(currentCell.trim());
      currentCell = '';
      if (currentRow.some(c => c.length > 0)) {
        lines.push(currentRow);
      }
      currentRow = [];
    } else {
      currentCell += char;
    }
  }

  if (currentCell.length > 0 || currentRow.length > 0) {
    currentRow.push(currentCell.trim());
    if (currentRow.some(c => c.length > 0)) {
      lines.push(currentRow);
    }
  }

  return lines;
}

/**
 * Parses a 2D array of spreadsheet rows into a structured VideoClass array.
 * Intelligently detects headers, column order, and raw values.
 * Specifically honors MODULO + LECCIONES for titles and TEMAS for descriptions.
 */
export function parseSheetRowsToVideos(rows: any[][]): VideoClass[] {
  if (!rows || rows.length === 0) return [];

  // Filter out empty rows
  const cleanRows = rows.filter(
    r => Array.isArray(r) && r.some(c => c !== null && c !== undefined && String(c).trim().length > 0)
  );
  if (cleanRows.length === 0) return [];

  // Helper to normalize strings for comparison (lowercased, accents removed, trimmed)
  const normalize = (str: any) =>
    String(str || '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .trim();

  // Step 1: Detect if row 0 is a header row
  const row0 = cleanRows[0].map(c => String(c || '').trim());
  const row0Norm = row0.map(c => normalize(c));

  const headerKeywords = [
    'id', 'url', 'link', 'enlace', 'video', 'youtube',
    'modulo', 'module', 'mod',
    'leccion', 'lecciones', 'lesson', 'lessons',
    'tema', 'temas', 'topic', 'topics',
    'titulo', 'title', 'nombre', 'clase',
    'duracion', 'duration', 'tiempo', 'time', 'minutos', 'length',
    'nivel', 'level', 'dificultad',
    'categoria', 'category', 'seccion', 'area',
    'descripcion', 'description', 'resumen'
  ];

  const matchesKeyword = row0Norm.some(c => headerKeywords.some(kw => c.includes(kw)));
  const row0HasVideoUrl = row0.some(c => extractYouTubeId(c) !== '');
  const isGenericColLetters = row0.every(c => !c || /^[A-Z]{1,3}$/.test(c));

  let dataRows = cleanRows;
  let headerRowNorm: string[] | null = null;

  if (isGenericColLetters) {
    // Drop GViz generic column letters row
    dataRows = cleanRows.slice(1);
    if (dataRows.length > 0) {
      const newRow0 = dataRows[0].map(c => String(c || '').trim());
      const newRow0Norm = newRow0.map(c => normalize(c));
      const newMatches = newRow0Norm.some(c => headerKeywords.some(kw => c.includes(kw)));
      const newHasVideo = newRow0.some(c => extractYouTubeId(c) !== '');
      if (newMatches && !newHasVideo) {
        headerRowNorm = newRow0Norm;
        dataRows = dataRows.slice(1);
      }
    }
  } else if (matchesKeyword && !row0HasVideoUrl) {
    headerRowNorm = row0Norm;
    dataRows = cleanRows.slice(1);
  }

  // Step 2: Determine column indices
  let idCol = -1;
  let moduloCol = -1;
  let leccionCol = -1;
  let temasCol = -1;
  let titleCol = -1;
  let descCol = -1;
  let durationCol = -1;
  let levelCol = -1;
  let catCol = -1;

  if (headerRowNorm) {
    headerRowNorm.forEach((col, idx) => {
      // Modulo
      if (moduloCol === -1 && (col.includes('modulo') || col.includes('module') || col === 'mod' || col.startsWith('mod '))) {
        moduloCol = idx;
      }
      // Lecciones
      else if (leccionCol === -1 && (col.includes('leccion') || col.includes('lesson'))) {
        leccionCol = idx;
      }
      // Temas (for Description)
      else if (temasCol === -1 && (col.includes('tema') || col.includes('topic'))) {
        temasCol = idx;
      }
      // ID / Link / URL
      else if (idCol === -1 && (col.includes('url') || col.includes('link') || col.includes('enlace') || col.includes('youtube') || col.includes('video'))) {
        idCol = idx;
      } else if (idCol === -1 && /^(id|video)$/.test(col)) {
        idCol = idx;
      }
      // Title
      else if (titleCol === -1 && (col.includes('titulo') || col.includes('title') || col.includes('nombre') || col.includes('clase') || col.includes('subject'))) {
        titleCol = idx;
      }
      // Duration
      else if (durationCol === -1 && (col.includes('duracion') || col.includes('duration') || col.includes('tiempo') || col.includes('minuto') || col.includes('length'))) {
        durationCol = idx;
      }
      // Description
      else if (descCol === -1 && (col.includes('descripcion') || col.includes('description') || col.includes('resumen') || col.includes('detalles') || col.includes('info'))) {
        descCol = idx;
      }
      // Level
      else if (levelCol === -1 && (col.includes('nivel') || col.includes('level') || col.includes('dificultad'))) {
        levelCol = idx;
      }
      // Category
      else if (catCol === -1 && (col.includes('categoria') || col.includes('category') || col.includes('seccion') || col.includes('area'))) {
        catCol = idx;
      }
    });
  }

  // If idCol wasn't found from header, find it by checking which column has YouTube URLs
  if (idCol === -1) {
    const colYtCounts: Record<number, number> = {};
    dataRows.forEach(row => {
      row.forEach((cell, idx) => {
        if (extractYouTubeId(cell)) {
          colYtCounts[idx] = (colYtCounts[idx] || 0) + 1;
        }
      });
    });
    let bestCol = -1;
    let maxCount = 0;
    Object.entries(colYtCounts).forEach(([col, count]) => {
      if (count > maxCount) {
        maxCount = count;
        bestCol = Number(col);
      }
    });
    if (bestCol !== -1) idCol = bestCol;
  }

  // Step 3: Map data rows to VideoClass objects
  const videos: VideoClass[] = [];
  dataRows.forEach((row, index) => {
    // Find YouTube ID
    let cleanId = idCol !== -1 ? extractYouTubeId(row[idCol]) : '';
    if (!cleanId) {
      for (let c = 0; c < row.length; c++) {
        const candidate = extractYouTubeId(row[c]);
        if (candidate) {
          cleanId = candidate;
          break;
        }
      }
    }

    // Skip row if no valid video ID could be found
    if (!cleanId) return;

    // Title from MODULO + LECCIONES
    let rawModulo = moduloCol !== -1 ? String(row[moduloCol] || '').trim() : '';
    let rawLeccion = leccionCol !== -1 ? String(row[leccionCol] || '').trim() : '';

    if (/^\d+$/.test(rawModulo)) rawModulo = `Módulo ${rawModulo}`;
    if (/^\d+$/.test(rawLeccion)) rawLeccion = `Lección ${rawLeccion}`;

    // Clean up trailing punctuation from rawModulo and leading from rawLeccion
    rawModulo = rawModulo.replace(/[\-–—:]+$/, '').trim();
    rawLeccion = rawLeccion.replace(/^[\-–—:]+/, '').trim();

    let title = '';
    if (rawModulo && rawLeccion) {
      // Place lecciones underneath modulo without hyphen between them
      title = `${rawModulo}\n${rawLeccion}`.trim();
    } else if (rawModulo) {
      title = rawModulo;
    } else if (rawLeccion) {
      title = rawLeccion;
    } else if (titleCol !== -1 && row[titleCol]) {
      title = String(row[titleCol]).trim();
    }

    if (!title || title === cleanId) {
      for (let c = 0; c < row.length; c++) {
        if (c !== idCol && c !== durationCol && c !== temasCol && row[c]) {
          const text = String(row[c]).trim();
          if (text.length > 2 && !extractYouTubeId(text) && !/^\d{1,2}:\d{2}$/.test(text)) {
            title = text;
            break;
          }
        }
      }
    }
    const finalTitle = title || `Video Clase ${index + 1}`;

    // Duration (if available)
    let rawDuration = durationCol !== -1 ? String(row[durationCol] || '').trim() : '';
    if (!rawDuration || !/^\d{1,2}:\d{2}$/.test(rawDuration)) {
      const foundTime = row.find(c => /^\d{1,2}:\d{2}$/.test(String(c || '').trim()));
      rawDuration = foundTime ? String(foundTime).trim() : '';
    }

    // Description from TEMAS
    let rawTemas = temasCol !== -1 ? String(row[temasCol] || '').trim() : '';
    if (!rawTemas && descCol !== -1) {
      rawTemas = String(row[descCol] || '').trim();
    }
    const description = rawTemas;

    // Level
    let rawLevel = levelCol !== -1 ? String(row[levelCol] || '').trim() : '';
    const level = rawLevel || 'EXCI Prep';

    // Category (derived from MODULO or Category column)
    let rawCat = catCol !== -1 ? String(row[catCol] || '').trim() : '';
    if (!rawCat && rawModulo) {
      rawCat = rawModulo;
    }
    const category = rawCat || 'EXCI UANL';

    videos.push({
      id: cleanId,
      modulo: rawModulo || undefined,
      leccion: rawLeccion || undefined,
      titleEs: finalTitle,
      titleEn: finalTitle,
      descriptionEs: description,
      descriptionEn: description,
      duration: rawDuration,
      level: level,
      categoryEs: category,
      categoryEn: category
    });
  });

  return videos;
}

/**
 * Helper to parse GViz JSON response into a 2D array of rows.
 */
function parseGVizResponse(text: string): any[][] {
  const jsonMatch = text.match(/google\.visualization\.Query\.setResponse\(([\s\S]*)\);/);
  if (!jsonMatch || !jsonMatch[1]) {
    throw new Error('Formato de respuesta de Google Sheets no reconocido.');
  }

  const data = JSON.parse(jsonMatch[1]);
  if (data.status === 'error') {
    const msg = data.errors?.[0]?.detailed_message || data.errors?.[0]?.message || 'Error en la consulta de Google Sheet.';
    throw new Error(msg);
  }

  const table = data.table;
  if (!table) return [];

  const rows: any[][] = [];

  // Check if cols have user-defined labels (not empty, not just "A", "B", "C")
  const colsHaveLabels = table.cols && table.cols.some((c: any) => 
    c.label && c.label.trim().length > 0 && !/^[A-Z]{1,3}$/.test(c.label.trim())
  );

  if (colsHaveLabels) {
    const headerRow = table.cols.map((col: any) => String(col.label || '').trim());
    rows.push(headerRow);
  }

  if (table.rows && table.rows.length > 0) {
    table.rows.forEach((r: any) => {
      const rowCells = (r.c || []).map((cell: any) => (cell ? cell.v ?? cell.f ?? '' : ''));
      rows.push(rowCells);
    });
  }

  return rows;
}

/**
 * Fetches video information from a Google Sheet tab named "videos" (or "Videos" / gid / first tab).
 * Supports authenticated Google Sheets v4 API and public GViz / CSV fallbacks.
 */
export async function fetchVideosFromGoogleSheet(
  spreadsheetIdOrUrl: string, 
  sheetName: string = 'videos'
): Promise<{ videos: VideoClass[]; sheetTitle?: string; source: 'api' | 'gviz' | 'csv' }> {
  const { spreadsheetId, gid } = extractSpreadsheetInfo(spreadsheetIdOrUrl);
  if (!spreadsheetId) {
    throw new Error('ID o enlace (URL) de Google Sheet inválido.');
  }

  const token = await getAccessToken();

  // 1. Try authenticated Google Sheets API v4 if OAuth token is present
  if (token) {
    try {
      const metaRes = await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}?fields=properties.title,sheets.properties`,
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );

      if (metaRes.ok) {
        const meta = await metaRes.json();
        const sheetTitle = meta.properties?.title || 'Google Sheet';
        const sheets: Array<{ title: string; sheetId: number }> = 
          meta.sheets?.map((s: any) => ({
            title: s.properties?.title || '',
            sheetId: s.properties?.sheetId ?? 0
          })) || [];

        // Match priority:
        // a) If gid is provided, find sheet by gid
        // b) Tab matching sheetName case-insensitively ('videos')
        // c) Tab containing 'video'
        // d) First sheet
        let targetTitle = sheetName;
        if (gid !== undefined) {
          const byGid = sheets.find(s => String(s.sheetId) === String(gid));
          if (byGid) targetTitle = byGid.title;
        } else {
          const exact = sheets.find(s => s.title.toLowerCase() === sheetName.toLowerCase());
          if (exact) {
            targetTitle = exact.title;
          } else {
            const partial = sheets.find(s => s.title.toLowerCase().includes('video'));
            if (partial) {
              targetTitle = partial.title;
            } else if (sheets.length > 0) {
              targetTitle = sheets[0].title;
            }
          }
        }

        const range = `'${targetTitle}'!A1:Z500`;
        const valRes = await fetch(
          `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${encodeURIComponent(range)}`,
          {
            headers: { Authorization: `Bearer ${token}` }
          }
        );

        if (valRes.ok) {
          const valData = await valRes.json();
          const rows = valData.values || [];
          const videos = parseSheetRowsToVideos(rows);
          if (videos.length > 0) {
            return { videos, sheetTitle: `${sheetTitle} (${targetTitle})`, source: 'api' };
          }
        }
      }
    } catch (err) {
      console.warn('OAuth Sheets API attempt failed, attempting public fallbacks:', err);
    }
  }

  // 2. Public Fallback via Google Visualization API (GViz)
  const gvizUrlsToTry: string[] = [];
  if (gid !== undefined) {
    gvizUrlsToTry.push(`https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=out:json&headers=1&gid=${gid}`);
  }
  gvizUrlsToTry.push(
    `https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=out:json&headers=1&sheet=${encodeURIComponent(sheetName)}`,
    `https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=out:json&headers=1&sheet=Videos`,
    `https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=out:json&headers=1`
  );

  for (const url of gvizUrlsToTry) {
    try {
      const res = await fetch(url);
      if (res.ok) {
        const text = await res.text();
        if (text.includes('google.visualization.Query.setResponse')) {
          const rows = parseGVizResponse(text);
          const videos = parseSheetRowsToVideos(rows);
          if (videos.length > 0) {
            return { videos, sheetTitle: 'Google Sheet (Pública)', source: 'gviz' };
          }
        }
      }
    } catch {
      // Continue to next URL
    }
  }

  // 3. Public Fallback via Direct CSV Export
  const csvUrlsToTry: string[] = [];
  if (gid !== undefined) {
    csvUrlsToTry.push(`https://docs.google.com/spreadsheets/d/${spreadsheetId}/export?format=csv&gid=${gid}`);
  }
  csvUrlsToTry.push(
    `https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(sheetName)}`,
    `https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=out:csv&sheet=Videos`,
    `https://docs.google.com/spreadsheets/d/${spreadsheetId}/export?format=csv`
  );

  for (const url of csvUrlsToTry) {
    try {
      const res = await fetch(url);
      if (res.ok) {
        const csvText = await res.text();
        if (csvText && !csvText.includes('<!DOCTYPE html>')) {
          const rows = parseCSV(csvText);
          const videos = parseSheetRowsToVideos(rows);
          if (videos.length > 0) {
            return { videos, sheetTitle: 'Google Sheet (CSV)', source: 'csv' };
          }
        }
      }
    } catch {
      // Continue to next URL
    }
  }

  // If all methods failed, analyze why to provide a friendly, actionable Spanish error
  if (!token) {
    throw new Error(
      'No se pudo acceder a la hoja de Google Sheets. Si el documento es privado, haz clic en "Iniciar sesión con Google" en esta ventana, o compártelo en Google Sheets con permiso "Cualquier persona con el enlace puede ver".'
    );
  }

  throw new Error(
    'No se encontraron video clases válidas en la hoja. Verifica que la pestaña se llame "videos" o que contenga enlaces de YouTube.'
  );
}

/**
 * List the user's Google Spreadsheets from Google Drive.
 */
export async function listUserSpreadsheets(): Promise<Array<{ id: string; name: string; modifiedTime?: string }>> {
  const token = await getAccessToken();
  if (!token) {
    throw new Error('Se requiere autenticación para listar hojas de cálculo de Drive.');
  }

  const res = await fetch(
    `https://www.googleapis.com/drive/v3/files?q=mimeType='application/vnd.google-apps.spreadsheet'&fields=files(id,name,modifiedTime)&orderBy=modifiedTime desc&pageSize=20`,
    {
      headers: { Authorization: `Bearer ${token}` }
    }
  );

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.error?.message || 'Error al obtener hojas de Google Drive.');
  }

  const data = await res.json();
  return data.files || [];
}

/**
 * Creates a template Google Spreadsheet in the user's Google Drive with a "videos" sheet
 * pre-populated with standard EXCI video classes.
 * Mandatory user confirmation must be handled before calling this function.
 */
export async function createTemplateSpreadsheet(
  defaultVideos: VideoClass[]
): Promise<{ id: string; spreadsheetUrl: string }> {
  const token = await getAccessToken();
  if (!token) {
    throw new Error('Inicia sesión con Google para crear la hoja en tu Google Drive.');
  }

  // 1. Create Spreadsheet with a sheet named 'videos'
  const createRes = await fetch('https://sheets.googleapis.com/v4/spreadsheets', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      properties: {
        title: 'EXCI Video Clases - UANL'
      },
      sheets: [
        {
          properties: {
            title: 'videos',
            gridProperties: {
              frozenRowCount: 1
            }
          }
        }
      ]
    })
  });

  if (!createRes.ok) {
    const errorData = await createRes.json().catch(() => ({}));
    throw new Error(errorData.error?.message || 'Error al crear la hoja en Google Sheets.');
  }

  const sheetData = await createRes.json();
  const spreadsheetId = sheetData.spreadsheetId;
  const spreadsheetUrl = sheetData.spreadsheetUrl || `https://docs.google.com/spreadsheets/d/${spreadsheetId}/edit`;

  // 2. Populate values
  const header = [
    'Enlace / Video URL',
    'Título (Español)',
    'Title (English)',
    'Descripción (Español)',
    'Description (English)',
    'Duración',
    'Nivel',
    'Categoría'
  ];

  const rows = [
    header,
    ...defaultVideos.map(v => [
      `https://www.youtube.com/watch?v=${v.id}`,
      v.titleEs,
      v.titleEn,
      v.descriptionEs,
      v.descriptionEn,
      v.duration,
      v.level,
      v.categoryEs
    ])
  ];

  await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/videos!A1:H${rows.length}?valueInputOption=USER_ENTERED`,
    {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        values: rows
      })
    }
  );

  // 2. Also populate an initial 'emails' tab header in the spreadsheet
  try {
    await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}:batchUpdate`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          requests: [
            {
              addSheet: {
                properties: {
                  title: 'emails',
                  gridProperties: { frozenRowCount: 1 }
                }
              }
            }
          ]
        })
      }
    );

    const emailHeaders = [['email inscrito', 'nombre', 'estado']];
    await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/emails!A1:C1?valueInputOption=USER_ENTERED`,
      {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          values: emailHeaders
        })
      }
    );
  } catch (err) {
    console.warn('Could not add emails tab automatically during template creation:', err);
  }

  return { id: spreadsheetId, spreadsheetUrl };
}

/**
 * Normalizes email strings, removing spaces and lowercasing.
 */
export function normalizeEmail(email: any): string {
  if (!email) return '';
  return String(email).trim().toLowerCase();
}

/**
 * Validates whether a string looks like an email address.
 */
export function isValidEmail(email: string): boolean {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}

/**
 * Parses a 2D array of spreadsheet rows from the "emails" tab into a unique list of emails.
 * Specifically looks for column "email inscrito" (or variations like "email", "correo", "correo inscrito").
 */
export function parseSheetRowsToEmails(rows: any[][]): string[] {
  if (!rows || rows.length === 0) return [];

  // Filter out empty rows
  const cleanRows = rows.filter(
    r => Array.isArray(r) && r.some(c => c !== null && c !== undefined && String(c).trim().length > 0)
  );
  if (cleanRows.length === 0) return [];

  const normalize = (str: any) =>
    String(str || '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .trim();

  // Step 1: Detect header row
  const row0 = cleanRows[0].map(c => String(c || '').trim());
  const row0Norm = row0.map(c => normalize(c));

  const isGenericColLetters = row0.every(c => !c || /^[A-Z]{1,3}$/.test(c));
  let dataRows = cleanRows;
  let headerRowNorm: string[] | null = null;

  if (isGenericColLetters) {
    dataRows = cleanRows.slice(1);
    if (dataRows.length > 0) {
      const newRow0 = dataRows[0].map(c => String(c || '').trim());
      const newRow0Norm = newRow0.map(c => normalize(c));
      const hasEmailHeader = newRow0Norm.some(c => c.includes('email') || c.includes('correo') || c.includes('inscrit'));
      if (hasEmailHeader) {
        headerRowNorm = newRow0Norm;
        dataRows = dataRows.slice(1);
      }
    }
  } else {
    const hasEmailHeader = row0Norm.some(c => c.includes('email') || c.includes('correo') || c.includes('inscrit'));
    if (hasEmailHeader) {
      headerRowNorm = row0Norm;
      dataRows = cleanRows.slice(1);
    }
  }

  // Step 2: Find target column index
  let targetCol = -1;

  if (headerRowNorm) {
    // 1. Exact priority: "email inscrito" or "correo inscrito"
    targetCol = headerRowNorm.findIndex(c => 
      c === 'email inscrito' || 
      c === 'correo inscrito' || 
      c === 'email_inscrito' || 
      c === 'correo_inscrito' ||
      c.includes('email inscrito') ||
      c.includes('correo inscrito')
    );

    // 2. Next priority: "email", "emails", "correo", "correos"
    if (targetCol === -1) {
      targetCol = headerRowNorm.findIndex(c => 
        c === 'email' || 
        c === 'emails' || 
        c === 'correo' || 
        c === 'correos' ||
        c.includes('email') ||
        c.includes('correo')
      );
    }

    // 3. Next priority: "inscrito" or "inscritos"
    if (targetCol === -1) {
      targetCol = headerRowNorm.findIndex(c => c.includes('inscrit'));
    }
  }

  // Fallback: If header wasn't matched, check which column contains the most valid emails
  if (targetCol === -1) {
    const colEmailCounts: Record<number, number> = {};
    dataRows.forEach(row => {
      row.forEach((cell, idx) => {
        const str = normalizeEmail(cell);
        if (isValidEmail(str)) {
          colEmailCounts[idx] = (colEmailCounts[idx] || 0) + 1;
        }
      });
    });

    let bestCol = -1;
    let maxCount = 0;
    Object.entries(colEmailCounts).forEach(([col, count]) => {
      if (count > maxCount) {
        maxCount = count;
        bestCol = Number(col);
      }
    });
    if (bestCol !== -1) targetCol = bestCol;
  }

  // Step 3: Collect emails
  const emailSet = new Set<string>();

  dataRows.forEach(row => {
    if (targetCol !== -1 && row[targetCol] !== undefined) {
      const email = normalizeEmail(row[targetCol]);
      if (isValidEmail(email)) {
        emailSet.add(email);
        return;
      }
    }

    // If target col didn't have email in this row, scan other cells in this row
    for (let c = 0; c < row.length; c++) {
      const candidate = normalizeEmail(row[c]);
      if (isValidEmail(candidate)) {
        emailSet.add(candidate);
        break;
      }
    }
  });

  return Array.from(emailSet);
}

/**
 * Fetches enrolled emails from a Google Sheet tab named "emails" (or "Emails", "correos", etc.).
 * Specifically extracts emails from the column "email inscrito" (or "email", "correo").
 * Supports authenticated Google Sheets v4 API and public GViz / CSV fallbacks.
 */
export async function fetchEnrolledEmailsFromGoogleSheet(
  spreadsheetIdOrUrl: string,
  sheetName: string = 'emails'
): Promise<{ emails: string[]; sheetTitle?: string; source: 'api' | 'gviz' | 'csv' }> {
  const { spreadsheetId } = extractSpreadsheetInfo(spreadsheetIdOrUrl);
  if (!spreadsheetId) {
    throw new Error('ID o enlace (URL) de Google Sheet inválido.');
  }

  const token = await getAccessToken();

  // 1. Try authenticated Google Sheets API v4 if OAuth token is present
  if (token) {
    try {
      const metaRes = await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}?fields=properties.title,sheets.properties`,
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );

      if (metaRes.ok) {
        const meta = await metaRes.json();
        const sheetTitle = meta.properties?.title || 'Google Sheet';
        const sheets: Array<{ title: string; sheetId: number }> = 
          meta.sheets?.map((s: any) => ({
            title: s.properties?.title || '',
            sheetId: s.properties?.sheetId ?? 0
          })) || [];

        // Match priority for tab:
        // a) Exact match for sheetName ('emails')
        // b) Tab containing 'email' or 'correo' or 'inscrit'
        let targetTitle = sheetName;
        const exact = sheets.find(s => s.title.toLowerCase() === sheetName.toLowerCase());
        if (exact) {
          targetTitle = exact.title;
        } else {
          const partial = sheets.find(s => {
            const low = s.title.toLowerCase();
            return low.includes('email') || low.includes('correo') || low.includes('inscrit');
          });
          if (partial) {
            targetTitle = partial.title;
          }
        }

        const range = `'${targetTitle}'!A1:Z500`;
        const valRes = await fetch(
          `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${encodeURIComponent(range)}`,
          {
            headers: { Authorization: `Bearer ${token}` }
          }
        );

        if (valRes.ok) {
          const valData = await valRes.json();
          const rows = valData.values || [];
          const emails = parseSheetRowsToEmails(rows);
          if (emails.length > 0) {
            return { emails, sheetTitle: `${sheetTitle} (${targetTitle})`, source: 'api' };
          }
        }
      }
    } catch (err) {
      console.warn('OAuth Sheets API attempt failed for emails, attempting public fallbacks:', err);
    }
  }

  // 2. Public Fallback via Google Visualization API (GViz)
  const gvizUrlsToTry = [
    `https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=out:json&headers=1&sheet=${encodeURIComponent(sheetName)}`,
    `https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=out:json&headers=1&sheet=emails`,
    `https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=out:json&headers=1&sheet=Emails`,
    `https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=out:json&headers=1&sheet=inscritos`,
    `https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=out:json&headers=1&sheet=Inscritos`,
    `https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=out:json&headers=1&sheet=email`,
    `https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=out:json&headers=1&sheet=correos`
  ];

  for (const url of gvizUrlsToTry) {
    try {
      const res = await fetch(url);
      if (res.ok) {
        const text = await res.text();
        if (text.includes('google.visualization.Query.setResponse')) {
          const rows = parseGVizResponse(text);
          const emails = parseSheetRowsToEmails(rows);
          if (emails.length > 0) {
            return { emails, sheetTitle: 'Google Sheet (Pública)', source: 'gviz' };
          }
        }
      }
    } catch {
      // Continue to next URL
    }
  }

  // 3. Public Fallback via Direct CSV Export
  const csvUrlsToTry = [
    `https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(sheetName)}`,
    `https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=out:csv&sheet=emails`,
    `https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=out:csv&sheet=Emails`,
    `https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=out:csv&sheet=inscritos`,
    `https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=out:csv&sheet=Inscritos`,
    `https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=out:csv&sheet=correos`
  ];

  for (const url of csvUrlsToTry) {
    try {
      const res = await fetch(url);
      if (res.ok) {
        const csvText = await res.text();
        if (csvText && !csvText.includes('<!DOCTYPE html>')) {
          const rows = parseCSV(csvText);
          const emails = parseSheetRowsToEmails(rows);
          if (emails.length > 0) {
            return { emails, sheetTitle: 'Google Sheet (CSV)', source: 'csv' };
          }
        }
      }
    } catch {
      // Continue to next URL
    }
  }

  return { emails: [], sheetTitle: 'Google Sheet', source: 'gviz' };
}
