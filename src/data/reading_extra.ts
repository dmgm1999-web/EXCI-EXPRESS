import { Practice } from '../types';

export const readingEasyPractices: Practice[] = [
  {
    id: 'r-e-1',
    skill: 'reading',
    level: 'easy',
    title: "Friend's Email",
    description: 'Read a simple email about weekend plans.',
    content: 'Subject: Weekend Hike\n\nHi Sarah, are you free this Saturday? I want to go for a hike in the Blue Mountains. We can meet at the train station at 9:00 AM. Don\'t forget to bring water and some sandwiches! See you soon, Tom.',
    questions: [
      { id: 'q1', text: 'When does Tom want to go for a hike?', options: ['Friday', 'Saturday', 'Sunday', 'Monday'], correctAnswer: 'Saturday' },
      { id: 'q2', text: 'Where will they meet?', options: ['At a cafe', 'At the mountains', 'At the train station', 'At Sarah\'s house'], correctAnswer: 'At the train station' }
    ]
  },
  {
    id: 'r-e-2',
    skill: 'reading',
    level: 'easy',
    title: 'Library Rules',
    description: 'Read a sign posted at the entrance of a library.',
    content: 'LIBRARY RULES\n1. No food or drinks inside.\n2. Please keep your mobile phones on silent.\n3. Return all books to the front desk.\n4. Opening hours: 9 AM - 8 PM daily.',
    questions: [
      { id: 'q1', text: 'What must you do with your mobile phone?', options: ['Turn it off', 'Leave it outside', 'Keep it on silent', 'Use it only for calls'], correctAnswer: 'Keep it on silent' },
      { id: 'q2', text: 'What time does the library close?', options: ['8 AM', '9 AM', '8 PM', '9 PM'], correctAnswer: '8 PM' }
    ]
  },
  {
    id: 'r-e-3',
    skill: 'reading',
    level: 'easy',
    title: 'Lost Cat Poster',
    description: 'Read a poster about a missing pet.',
    content: 'LOST CAT: MISSY\nMissy is a small, ginger cat with white paws. She was last seen near Oak Street on Monday. She is very friendly but might be scared. If you see her, please call 555-0192. There is a reward for her safe return.',
    questions: [
      { id: 'q1', text: 'What color is Missy?', options: ['Black', 'Grey', 'Ginger', 'White'], correctAnswer: 'Ginger' },
      { id: 'q2', text: 'When was she last seen?', options: ['Monday', 'Tuesday', 'Sunday', 'Friday'], correctAnswer: 'Monday' }
    ]
  },
  {
    id: 'r-e-4',
    skill: 'reading',
    level: 'easy',
    title: 'Movie Ticket',
    description: 'Read the details on a movie ticket.',
    content: 'CINEMA WORLD\nMovie: The Secret Forest (3D)\nDate: May 15th\nTime: 7:30 PM\nSeat: Row F, Seat 12\nPrice: $12.50\nPlease arrive 15 minutes early.',
    questions: [
      { id: 'q1', text: 'Which seat does the person have?', options: ['Row F, Seat 10', 'Row F, Seat 12', 'Row G, Seat 12', 'Row E, Seat 15'], correctAnswer: 'Row F, Seat 12' },
      { id: 'q2', text: 'What time does the movie start?', options: ['15:00', '19:30', '15:30', '20:00'], correctAnswer: '19:30' }
    ]
  },
  {
    id: 'r-e-5',
    skill: 'reading',
    level: 'easy',
    title: 'Quick Salad',
    description: 'Read the instructions for a basic salad.',
    content: 'Ingredients: 2 tomatoes, 1 cucumber, a small lettuce, and Italian dressing.\nInstructions:\n1. Wash all vegetables.\n2. Slice the tomatoes and cucumber.\n3. Tear the lettuce into small pieces.\n4. Mix everything in a bowl and add the dressing.',
    questions: [
      { id: 'q1', text: 'Which vegetable needs to be sliced?', options: ['Lettuce', 'Tomato', 'Carrot', 'Onion'], correctAnswer: 'Tomato' },
      { id: 'q2', text: 'What is the last step?', options: ['Wash vegetables', 'Slice cucumber', 'Add dressing', 'Tear lettuce'], correctAnswer: 'Add dressing' }
    ]
  },
  {
    id: 'r-e-6',
    skill: 'reading',
    level: 'easy',
    title: 'Bus Schedule',
    description: 'Read a text message about meeting times.',
    content: 'Text: "Hey Alex, I checked the bus. The 105 bus arrives at Central Station at 10:15 AM and 10:45 AM. If we take the 10:15 one, we can get to the park by 11:00. Let me know which one you prefer!"',
    questions: [
      { id: 'q1', text: 'What time does the first bus arrive at Central Station?', options: ['10:00 AM', '10:15 AM', '10:45 AM', '11:00 AM'], correctAnswer: '10:15 AM' },
      { id: 'q2', text: 'Where are they going?', options: ['Central Station', 'The park', 'The bus stop', 'Work'], correctAnswer: 'The park' }
    ]
  },
  {
    id: 'r-e-7',
    skill: 'reading',
    level: 'easy',
    title: 'Weather Alert',
    description: 'Read an automated weather alert.',
    content: 'WEATHER ALERT: Heavy rain and strong winds expected from 4 PM to 9 PM tonight. Please stay indoors and avoid driving if possible. Keep windows closed and secure loose items in your garden. The temperature will drop to 12 degrees by midnight.',
    questions: [
      { id: 'q1', text: 'When is the bad weather expected to end?', options: ['4 PM', '9 PM', 'Midnight', 'Tomorrow morning'], correctAnswer: '9 PM' },
      { id: 'q2', text: 'What temperature is expected by midnight?', options: ['4 degrees', '9 degrees', '12 degrees', '15 degrees'], correctAnswer: '12 degrees' }
    ]
  },
  {
    id: 'r-e-8',
    skill: 'reading',
    level: 'easy',
    title: 'Shopping List',
    description: 'Read a handwritten shopping note.',
    content: 'TO BUY:\n- 2 Liters of Milk\n- 1 Dozen Eggs\n- 500g Chicken Breast\n- A bag of spinach\n- Coffee beans (dark roast if possible)\nNote: Use the discount coupon in my wallet!',
    questions: [
      { id: 'q1', text: 'How much milk should be bought?', options: ['1 Liter', '2 Liters', '3 Liters', '500ml'], correctAnswer: '2 Liters' },
      { id: 'q2', text: 'Where is the discount coupon?', options: ['In the kitchen', 'In the car', 'In the wallet', 'On the fridge'], correctAnswer: 'In the wallet' }
    ]
  },
  {
    id: 'r-e-9',
    skill: 'reading',
    level: 'easy',
    title: 'Museum Tickets',
    description: 'Read the pricing list for a local museum.',
    content: 'MUSEUM OF ART\n- Adults: $20\n- Students (with ID): $12\n- Seniors (over 65): $15\n- Children (under 12): FREE\n*Guided tours are an extra $5 per person and start every hour.',
    questions: [
      { id: 'q1', text: 'How much does a senior pay for a ticket?', options: ['$12', '$15', '$20', '$5'], correctAnswer: '$15' },
      { id: 'q2', text: 'Who can enter the museum for free?', options: ['Students', 'Seniors', 'Children under 12', 'Everyone'], correctAnswer: 'Children under 12' }
    ]
  },
  {
    id: 'r-e-10',
    skill: 'reading',
    level: 'easy',
    title: 'Rome Postcard',
    description: 'Read a short message on a postcard.',
    content: 'Dear Maria,\nRome is beautiful! Yesterday we visited the Colosseum and today we are going to the Vatican. The food is amazing—I had the best pizza ever last night. It is very hot and sunny here. See you next week! Love, Clara.',
    questions: [
      { id: 'q1', text: 'Where did Clara go yesterday?', options: ['Post office', 'The Vatican', 'The Colosseum', 'The beach'], correctAnswer: 'The Colosseum' },
      { id: 'q2', text: 'Which food did she mention?', options: ['Pasta', 'Pizza', 'Gelato', 'Salad'], correctAnswer: 'Pizza' }
    ]
  },
  {
    id: 'r-e-11',
    skill: 'reading',
    level: 'easy',
    title: 'Cafe Menu',
    description: 'Read a simple menu.',
    content: 'BREAKFAST SPECIALS\n- Classic Toast: Honey or Jam ($4.00)\n- Fruit Bowl: Seasonal fruits and yogurt ($7.50)\n- Avocado Toast: With a poached egg ($9.00)\n- Pancakes: With maple syrup and berries ($10.00)\n*Add coffee or tea for only $2.00!',
    questions: [
      { id: 'q1', text: 'How much is the Fruit Bowl?', options: ['$4.00', '$7.50', '$9.00', '$10.00'], correctAnswer: '$7.50' },
      { id: 'q2', text: 'What is included with the Avocado Toast?', options: ['Bacon', 'A poached egg', 'Honey', 'Maple syrup'], correctAnswer: 'A poached egg' }
    ]
  },
  {
    id: 'r-e-12',
    skill: 'reading',
    level: 'easy',
    title: 'Doctor Notice',
    description: 'Read a text message from a medical clinic.',
    content: 'Reminder: You have an appointment with Dr. Smith tomorrow, Wednesday, at 2:15 PM at Northside Clinic. Please bring your insurance card and any current medications. If you need to cancel, please call 555-9876 today.',
    questions: [
      { id: 'q1', text: 'What time is the appointment?', options: ['12:15 PM', '2:15 PM', 'Wednesday', 'Northside'], correctAnswer: '2:15 PM' },
      { id: 'q2', text: 'What should you bring with you?', options: ['Insurance card', 'A friend', 'Money', 'Lunch'], correctAnswer: 'Insurance card' }
    ]
  },
  {
    id: 'r-e-13',
    skill: 'reading',
    level: 'easy',
    title: 'Office Rules',
    description: 'Read a short notice on the office wall.',
    content: 'OFFICE NOTICE: Starting Monday, we will have a new security system. Everyone must use their ID badges to enter the building after 6:00 PM. Also, please remember to turn off the lights and coffee machine before you leave. Thank you for your cooperation.',
    questions: [
      { id: 'q1', text: 'When should you use your ID badge to enter?', options: ['Before 9:00 AM', 'After 6:00 PM', 'All day', 'Only on Monday'], correctAnswer: 'After 6:00 PM' },
      { id: 'q2', text: 'What should be turned off before leaving?', options: ['The computers', 'The lights and coffee machine', 'The security system', 'The internet'], correctAnswer: 'The lights and coffee machine' }
    ]
  },
  {
    id: 'r-e-14',
    skill: 'reading',
    level: 'easy',
    title: 'Order Receipt',
    description: 'Read an order confirmation email.',
    content: 'Order #44211 Confirmed!\nItem: Bluetooth Headphones ($89.00)\nShipping: Standard (3-5 business days)\nDelivery Address: 12 Main St, Apartment 4B\nThank you for shopping with TechMart! You will receive a tracking number once your item is shipped.',
    questions: [
      { id: 'q1', text: 'What did the customer buy?', options: ['A phone', 'Headphones', 'A laptop', 'A speaker'], correctAnswer: 'Headphones' },
      { id: 'q2', text: 'How long will shipping take?', options: ['1-2 days', '3-5 days', 'A week', '10-12 days'], correctAnswer: '3-5 days' }
    ]
  },
  {
    id: 'r-e-15',
    skill: 'reading',
    level: 'easy',
    title: 'Flight Board',
    description: 'Read information from an airport screen.',
    content: 'Departures:\n- BA215 to Paris: On Time (Gate A4)\n- QF44 to Sydney: Delayed (Gate B12)\n- LH10 to Berlin: Boarding (Gate C2)\n- EK90 to Dubai: Last Call (Gate A10)',
    questions: [
      { id: 'q1', text: 'Which flight is currently boarding?', options: ['BA215', 'QF44', 'LH10', 'EK90'], correctAnswer: 'LH10' },
      { id: 'q2', text: 'What is the status of the flight to Sydney?', options: ['On Time', 'Delayed', 'Boarding', 'Cancelled'], correctAnswer: 'Delayed' }
    ]
  },
  {
    id: 'r-e-16',
    skill: 'reading',
    level: 'easy',
    title: 'Pool Rules',
    description: 'Read rules for a public swimming pool.',
    content: 'POOL RULES\n- All swimmers must shower before entering the pool.\n- No running on the pool deck.\n- Children under 8 must be accompanied by an adult.\n- Diving is only allowed in the deep end.',
    questions: [
      { id: 'q1', text: 'What must you do before entering the pool?', options: ['Run', 'Shower', 'Eat', 'Change'], correctAnswer: 'Shower' },
      { id: 'q2', text: 'Who must have an adult with them?', options: ['Everyone', 'Children under 8', 'Seniors', 'Divers'], correctAnswer: 'Children under 8' }
    ]
  },
  {
    id: 'r-e-17',
    skill: 'reading',
    level: 'easy',
    title: 'Garden Class',
    description: 'Read an advertisement for a gardening class.',
    content: 'GARDENING FOR BEGINNERS\nJoin us this Sunday from 10 AM to 1 PM. Learn how to plant herbs and vegetables in small spaces. The cost is $15 and includes seeds to take home. Location: Community Garden, Green Street.',
    questions: [
      { id: 'q1', text: 'How long is the workshop?', options: ['1 hour', '2 hours', '3 hours', 'All day'], correctAnswer: '3 hours' },
      { id: 'q2', text: 'What is included in the cost?', options: ['Lunch', 'Herbs', 'Seeds', 'Tools'], correctAnswer: 'Seeds' }
    ]
  },
  {
    id: 'r-e-18',
    skill: 'reading',
    level: 'easy',
    title: 'Cafe Job',
    description: 'Read a help wanted sign.',
    content: 'HELP WANTED: Part-time server needed for weekend shifts. Experience is preferred but not essential. We are looking for someone friendly and reliable. Contact us at jobs@thecoffeecorner.com with your resume.',
    questions: [
      { id: 'q1', text: 'When are the shifts?', options: ['Mornings', 'Weeknights', 'Weekends', 'Monday to Friday'], correctAnswer: 'Weekends' },
      { id: 'q2', text: 'Is experience required?', options: ['Yes, always', 'No, but preferred', 'Only for chefs', 'Not at all'], correctAnswer: 'No, but preferred' }
    ]
  },
  {
    id: 'r-e-19',
    skill: 'reading',
    level: 'easy',
    title: 'Lost Keys Note',
    description: 'Read a note found in an apartment lobby.',
    content: 'FOUND: A set of keys with a blue car keychain. I found them in the parking lot yesterday morning. If they are yours, please call Apartment 302 or leave a message with the building manager.',
    questions: [
      { id: 'q1', text: 'What color is the keychain?', options: ['Red', 'Blue', 'Green', 'Silver'], correctAnswer: 'Blue' },
      { id: 'q2', text: 'Where were the keys found?', options: ['In the lobby', 'In the elevator', 'In the parking lot', 'In Apartment 302'], correctAnswer: 'In the parking lot' }
    ]
  },
  {
    id: 'r-e-20',
    skill: 'reading',
    level: 'easy',
    title: 'Pet Shop Event',
    description: 'Read a flyer for a new store.',
    content: 'GRAND OPENING: Sunny Paws Pet Shop! Join us this Saturday at 10:00 AM. Free treats for every cat and dog that visits on opening day. We sell premium food, toys, and beds for all your furry friends. 10% discount on all fish tanks this week!',
    questions: [
      { id: 'q1', text: 'What is happening on Saturday at 10:00 AM?', options: ['A pet show', 'A grand opening', 'A dog walk', 'A cat sale'], correctAnswer: 'A grand opening' },
      { id: 'q2', text: 'What item has a 10% discount this week?', options: ['Dog food', 'Cat toys', 'Fish tanks', 'Pet beds'], correctAnswer: 'Fish tanks' }
    ]
  },
  {
    id: 'r-e-21',
    skill: 'reading',
    level: 'easy',
    title: 'Gym Offer',
    description: 'Read a promotional email from a local gym.',
    content: 'Limited Time Offer: Sign up for a 6-month membership at City Fitness and get your first month for only $1! Access to all classes and the swimming pool included. Offer ends Friday, June 20th. Don\'t wait, start your fitness journey today!',
    questions: [
      { id: 'q1', text: 'How much is the first month under this offer?', options: ['$1', '$6', '$20', 'Free'], correctAnswer: '$1' },
      { id: 'q2', text: 'Does the membership include swimming pool access?', options: ['No', 'Yes', 'Only on weekends', 'For an extra fee'], correctAnswer: 'Yes' }
    ]
  },
  {
    id: 'r-e-22',
    skill: 'reading',
    level: 'easy',
    title: 'Potluck Invite',
    description: 'Read an invitation from a neighbor.',
    content: 'Hi Neighbors! We are having a potluck dinner this Friday evening at 7:00 PM at our place (House #14). Everyone should bring one dish to share. We will provide soft drinks and paper plates. Please let us know if you can come by Thursday.',
    questions: [
      { id: 'q1', text: 'What time does the dinner start?', options: ['6:00 PM', '7:00 PM', '8:00 PM', 'Midnight'], correctAnswer: '7:00 PM' },
      { id: 'q2', text: 'What should guests bring?', options: ['Paper plates', 'Soft drinks', 'One dish to share', 'Nothing'], correctAnswer: 'One dish to share' }
    ]
  },
  {
    id: 'r-e-23',
    skill: 'reading',
    level: 'easy',
    title: 'Library PCs',
    description: 'Read guidelines for using library computers.',
    content: 'COMPUTER USE: You can use the library computers for a maximum of 60 minutes. Please book your session at the front desk. Printing costs $0.20 per page for black and white and $0.50 for color. Please save your work on a USB drive.',
    questions: [
      { id: 'q1', text: 'What is the time limit for using a computer?', options: ['30 minutes', '60 minutes', '2 hours', 'No limit'], correctAnswer: '60 minutes' },
      { id: 'q2', text: 'How much does it cost to print a color page?', options: ['$0.10', '$0.20', '$0.50', '$1.00'], correctAnswer: '$0.50' }
    ]
  },
  {
    id: 'r-e-24',
    skill: 'reading',
    level: 'easy',
    title: 'Yoga Schedule',
    description: 'Read the weekly schedule for a yoga studio.',
    content: 'YOGA SCHEDULE:\n- Monday: Morning Zen (7:00 AM)\n- Tuesday: Power Flow (6:00 PM)\n- Wednesday: Restorative (5:30 PM)\n- Thursday: Hatha Yoga (8:00 AM)\n- Friday: Weekend Prep (5:00 PM)',
    questions: [
      { id: 'q1', text: 'Which class is on Thursday morning?', options: ['Power Flow', 'Restorative', 'Hatha Yoga', 'Morning Zen'], correctAnswer: 'Hatha Yoga' },
      { id: 'q2', text: 'What time is the Friday class?', options: ['7:00 AM', '8:00 AM', '5:00 PM', '6:00 PM'], correctAnswer: '5:00 PM' }
    ]
  },
  {
    id: 'r-e-25',
    skill: 'reading',
    level: 'easy',
    title: 'Delivery Note',
    description: 'Read a note left for a delivery driver.',
    content: 'TO THE DRIVER: If I am not home, please leave the package with my neighbor in Apartment 2B. Do not leave it on the doorstep as it might get wet if it rains. Thank you, Sarah (Apt 2A).',
    questions: [
      { id: 'q1', text: 'Where should the driver leave the package if Sarah is out?', options: ['Apartment 2A', 'Apartment 2B', 'The lobby', 'The doorstep'], correctAnswer: 'Apartment 2B' },
      { id: 'q2', text: 'Why shouldn\'t the package be left on the doorstep?', options: ['It might get stolen', 'It might get wet', 'It\'s too heavy', 'The neighbor is out'], correctAnswer: 'It might get wet' }
    ]
  },
  {
    id: 'r-e-26',
    skill: 'reading',
    level: 'easy',
    title: 'Farmer Market',
    description: 'Read an announcement for a local market.',
    content: 'FARMER\'S MARKET: Every Saturday morning in the Town Square from 8 AM to 1 PM. Fresh fruit, organic vegetables, and local honey. Support our local farmers! Note: Please bring your own reusable bags.',
    questions: [
      { id: 'q1', text: 'Where is the market held?', options: ['In the park', 'In the Town Square', 'At a farm', 'In a school'], correctAnswer: 'In the Town Square' },
      { id: 'q2', text: 'What are customers asked to bring?', options: ['Cash', 'Honey', 'Reusable bags', 'Fruits'], correctAnswer: 'Reusable bags' }
    ]
  },
  {
    id: 'r-e-27',
    skill: 'reading',
    level: 'easy',
    title: 'Dental Visit',
    description: 'Read a confirmation from a dentist.',
    content: 'Dear Mr. Miller, This is to confirm your dental check-up with Dr. Lee on Monday, July 10th at 11:30 AM. Please arrive 10 minutes early to fill out a health form. Our clinic is located on the 4th floor of the Medical Centre.',
    questions: [
      { id: 'q1', text: 'On which floor is the clinic?', options: ['1st', '2nd', '3rd', '4th'], correctAnswer: '4th' },
      { id: 'q2', text: 'Why should the patient arrive early?', options: ['To meet Dr. Lee', 'To park the car', 'To fill out a health form', 'To get a discount'], correctAnswer: 'To fill out a health form' }
    ]
  },
  {
    id: 'r-e-28',
    skill: 'reading',
    level: 'easy',
    title: 'Welcome Party',
    description: 'Read an invitation for university students.',
    content: 'WELCOME PARTY: All new students are invited to the Student Union this Friday at 8:00 PM. Meet your fellow students, enjoy free pizza, and listen to live music from the university band. Entrance is free with your student ID card.',
    questions: [
      { id: 'q1', text: 'What food will be provided for free?', options: ['Sandwiches', 'Pasta', 'Pizza', 'Burgers'], correctAnswer: 'Pizza' },
      { id: 'q2', text: 'What is needed for free entrance?', options: ['A ticket', 'A student ID card', 'A guest list', 'Money'], correctAnswer: 'A student ID card' }
    ]
  },
  {
    id: 'r-e-29',
    skill: 'reading',
    level: 'easy',
    title: 'Train Delay',
    description: 'Read an update from a transport company.',
    content: 'TRANSPORT UPDATE: The 8:45 AM train to Manchester is delayed by 20 minutes due to a signaling problem. Passengers for Manchester should wait on Platform 4. We apologize for the inconvenience.',
    questions: [
      { id: 'q1', text: 'How long is the delay?', options: ['10 minutes', '15 minutes', '20 minutes', '30 minutes'], correctAnswer: '20 minutes' },
      { id: 'q2', text: 'Which platform should Manchester passengers use?', options: ['Platform 1', 'Platform 2', 'Platform 3', 'Platform 4'], correctAnswer: 'Platform 4' }
    ]
  },
  {
    id: 'r-e-30',
    skill: 'reading',
    level: 'easy',
    title: 'Cookery Menu',
    description: 'Read the dishes planned for a cooking session.',
    content: 'MENU FOR TONIGHT\'S CLASS:\n1. Homemade Tomato Soup\n2. Grilled Chicken with Roast Potatoes\n3. Chocolate Lava Cake\n*Please wash your hands and put on an apron before we begin!',
    questions: [
      { id: 'q1', text: 'What is the main course?', options: ['Tomato Soup', 'Grilled Chicken', 'Roast Potatoes', 'Chocolate Cake'], correctAnswer: 'Grilled Chicken' },
      { id: 'q2', text: 'What should students do before starting?', options: ['Eat', 'Wash hands and put on an apron', 'Sit down', 'Buy ingredients'], correctAnswer: 'Wash hands and put on an apron' }
    ]
  },
  {
    id: 'r-e-31',
    skill: 'reading',
    level: 'easy',
    title: 'Lost Wallet',
    description: 'Read a note about a lost item.',
    content: 'LOST: A brown leather wallet. I lost it near the library on Tuesday afternoon. It contains my driving license and some cash. If found, please contact David at 555-0303. Small reward offered!',
    questions: [
      { id: 'q1', text: 'What material is the wallet made of?', options: ['Plastic', 'Fabric', 'Leather', 'Suede'], correctAnswer: 'Leather' },
      { id: 'q2', text: 'Where was the wallet lost?', options: ['In the library', 'Near the library', 'At the park', 'On a bus'], correctAnswer: 'Near the library' }
    ]
  },
  {
    id: 'r-e-32',
    skill: 'reading',
    level: 'easy',
    title: 'Apartment Rent',
    description: 'Read a short real estate advertisement.',
    content: 'FOR RENT: Bright one-bedroom apartment in a quiet street. 5-minute walk to the metro station. Fully furnished with a modern kitchen and a balcony. $1,200 per month (bills not included). Available from next month.',
    questions: [
      { id: 'q1', text: 'How many bedrooms does the apartment have?', options: ['One', 'Two', 'Three', 'None'], correctAnswer: 'One' },
      { id: 'q2', text: 'Are utility bills included in the price?', options: ['Yes', 'No', 'Only water', 'Only electricity'], correctAnswer: 'No' }
    ]
  },
  {
    id: 'r-e-33',
    skill: 'reading',
    level: 'easy',
    title: 'Cafe Hours',
    description: 'Read the notice on a cafe door.',
    content: 'THE COFFEE BEAN\nOpening Hours:\nMonday - Friday: 7:00 AM - 6:00 PM\nSaturday: 8:00 AM - 5:00 PM\nSunday: CLOSED\nTry our new blueberry muffins, baked fresh every morning!',
    questions: [
      { id: 'q1', text: 'What time does the cafe open on Saturdays?', options: ['7:00 AM', '8:00 AM', '9:00 AM', '6:00 PM'], correctAnswer: '8:00 AM' },
      { id: 'q2', text: 'What is the cafe\'s status on Sundays?', options: ['Open all day', 'Open late', 'Closed', 'Open early'], correctAnswer: 'Closed' }
    ]
  },
  {
    id: 'r-e-34',
    skill: 'reading',
    level: 'easy',
    title: 'Music Show',
    description: 'Read a flyer for a school event.',
    content: 'ANNUAL SPRING CONCERT: Performed by our talented students! Join us in the school hall this Thursday at 6:30 PM. Tickets are $5 for adults and $2 for children. All money goes towards buying new musical instruments for the school.',
    questions: [
      { id: 'q1', text: 'Where will the concert be held?', options: ['In the music room', 'In the park', 'In the school hall', 'In the library'], correctAnswer: 'In the school hall' },
      { id: 'q2', text: 'What will the money be used for?', options: ['A school trip', 'A new gym', 'New musical instruments', 'A party'], correctAnswer: 'New musical instruments' }
    ]
  },
  {
    id: 'r-e-35',
    skill: 'reading',
    level: 'easy',
    title: 'Senior Yoga',
    description: 'Read a notice for an exercise class.',
    content: 'GENTLE YOGA: Special class for seniors (over 60). Every Tuesday and Thursday at 10 AM. Focus on balance and flexibility. Wear comfortable clothing and bring a bottle of water. No experience necessary!',
    questions: [
      { id: 'q1', text: 'Who is this class for?', options: ['Children', 'Athletes', 'Seniors over 60', 'Anyone'], correctAnswer: 'Seniors over 60' },
      { id: 'q2', text: 'What time does the class start?', options: ['8 AM', '9 AM', '10 AM', '6 PM'], correctAnswer: '10 AM' }
    ]
  },
  {
    id: 'r-e-36',
    skill: 'reading',
    level: 'easy',
    title: 'Library Repair',
    description: 'Read a notice at a library\'s front door.',
    content: 'IMPORTANT: The Central Library will be closed for renovation from Monday, October 5th until Friday, October 9th. You can still return books using the outdoor drop-box. We will reopen on Saturday, October 10th at 9 AM.',
    questions: [
      { id: 'q1', text: 'When will the library reopen?', options: ['Monday', 'Friday', 'Saturday', 'Sunday'], correctAnswer: 'Saturday' },
      { id: 'q2', text: 'How can you return books while the library is closed?', options: ['Wait until Saturday', 'Use the outdoor drop-box', 'Mail them', 'Give them to a guard'], correctAnswer: 'Use the outdoor drop-box' }
    ]
  },
  {
    id: 'r-e-37',
    skill: 'reading',
    level: 'easy',
    title: 'Bike Sale',
    description: 'Read a classified advertisement.',
    content: 'FOR SALE: Blue mountain bike, 2 years old, in very good condition. Includes a helmet and a lock. Perfect for commuting or weekend trails. $150 or nearest offer. Call Mike at 555-4422.',
    questions: [
      { id: 'q1', text: 'What is included with the bike?', options: ['A lights set', 'A helmet and a lock', 'A rain cover', 'A basket'], correctAnswer: 'A helmet and a lock' },
      { id: 'q2', text: 'How old is the bike?', options: ['1 year', '2 years', '5 years', 'New'], correctAnswer: '2 years' }
    ]
  },
  {
    id: 'r-e-38',
    skill: 'reading',
    level: 'easy',
    title: 'Lunch Menu',
    description: 'Read the daily options at a school cafeteria.',
    content: 'TODAY\'S LUNCH:\n- Main: Beef Stew or Vegetable Lasagna\n- Sides: Mixed Salad or Garlicky Bread\n- Dessert: Apple Pie or Fruit Salad\n*Free water with every meal!',
    questions: [
      { id: 'q1', text: 'What is the vegetarian main option?', options: ['Beef Stew', 'Vegetable Lasagna', 'Mixed Salad', 'Apple Pie'], correctAnswer: 'Vegetable Lasagna' },
      { id: 'q2', text: 'What drink is free with the meal?', options: ['Juice', 'Milk', 'Water', 'Tea'], correctAnswer: 'Water' }
    ]
  },
  {
    id: 'r-e-39',
    skill: 'reading',
    level: 'easy',
    title: 'Park Meeting',
    description: 'Read a text message about a social gathering.',
    content: 'Text: "Hi everyone! We are meeting at the park near the fountain at 2:00 PM today. We are going to have a picnic and play some games. Don\'t forget to bring a blanket and some snacks! See you there!"',
    questions: [
      { id: 'q1', text: 'Where exactly in the park are they meeting?', options: ['At the entrance', 'Near the fountain', 'At the playground', 'By the lake'], correctAnswer: 'Near the fountain' },
      { id: 'q2', text: 'What should everyone bring?', options: ['Games', 'A blanket and snacks', 'Drinks', 'A chair'], correctAnswer: 'A blanket and snacks' }
    ]
  },
  {
    id: 'r-e-40',
    skill: 'reading',
    level: 'easy',
    title: 'Sick Note',
    description: 'Read a short medical note.',
    content: 'SICK NOTE: This is to certify that Mr. John Doe is unable to attend work for three days, from Tuesday to Thursday, due to a severe flu. He is advised to rest and stay hydrated. He should be fit to return on Friday.',
    questions: [
      { id: 'q1', text: 'How many days should John stay away from work?', options: ['Two', 'Three', 'Four', 'Five'], correctAnswer: 'Three' },
      { id: 'q2', text: 'When is he expected to return to work?', options: ['Wednesday', 'Thursday', 'Friday', 'Saturday'], correctAnswer: 'Friday' }
    ]
  }
];

export const readingMediumPractices: Practice[] = [
  {
    id: 'r-m-1',
    skill: 'reading',
    level: 'medium',
    title: 'Daily Walking',
    description: 'Read a short article about health.',
    content: 'Walking is one of the easiest and most effective ways to improve your health. Just 30 minutes of brisk walking every day can increase cardiovascular fitness, strengthen bones, and reduce excess body fat. It also boosts muscle power and endurance. Unlike many other forms of exercise, walking is free and doesn\'t require any special equipment or training. For many people, walking is also a great way to reduce stress and improve mental well-being.',
    questions: [
      { id: 'q1', text: 'How much walking is recommended daily?', options: ['15 minutes', '30 minutes', '60 minutes', '2 hours'], correctAnswer: '30 minutes' },
      { id: 'q2', text: 'What is mentioned as a benefit for mental health?', options: ['Strength training', 'Stress reduction', 'Memory improvement', 'Better sleep'], correctAnswer: 'Stress reduction' }
    ]
  },
  {
    id: 'r-m-2',
    skill: 'reading',
    level: 'medium',
    title: 'Home Working',
    description: 'Read a section from an employee handbook.',
    content: 'Employees may request to work from home up to two days per week. Requests must be submitted to the department manager at least 48 hours in advance. While working remotely, employees are expected to be available via email and instant messaging during core business hours (9:00 AM to 5:00 PM). A stable internet connection is the responsibility of the employee. Management reserves the right to cancel remote work privileges if performance standards are not met.',
    questions: [
      { id: 'q1', text: 'How many days a week can an employee work from home?', options: ['One', 'Two', 'Three', 'Five'], correctAnswer: 'Two' },
      { id: 'q2', text: 'When must a request be submitted?', options: ['24 hours before', '48 hours before', 'One week before', 'Every morning'], correctAnswer: '48 hours before' }
    ]
  },
  {
    id: 'r-m-3',
    skill: 'reading',
    level: 'medium',
    title: 'History of Tea',
    description: 'Read a text about the origin of tea.',
    content: 'Tea is the second most consumed beverage in the world after water. Legend has it that tea was discovered in China over 4,000 years ago by Emperor Shen Nung when some leaves from a wild tree blew into his pot of boiling water. Commercial tea production began in China around the 4th century and later spread to Japan and Europe. Today, India and China are the world\'s largest producers of tea, providing a wide variety of black, green, and oolong teas to the global market.',
    questions: [
      { id: 'q1', text: 'According to the legend, who discovered tea?', options: ['A Japanese monk', 'A Chinese emperor', 'An Indian farmer', 'A European merchant'], correctAnswer: 'A Chinese emperor' },
      { id: 'q2', text: 'Where did commercial tea production start?', options: ['India', 'Japan', 'China', 'England'], correctAnswer: 'China' }
    ]
  },
  {
    id: 'r-m-4',
    skill: 'reading',
    level: 'medium',
    title: 'Great Reef',
    description: 'Read an informative text about a world-famous natural wonder.',
    content: 'The Great Barrier Reef, located off the coast of Queensland, Australia, is the world\'s largest coral reef system. It is composed of over 2,900 individual reefs and 900 islands and can even be seen from outer space. This vast ecosystem supports an incredible diversity of life, including thousands of species of fish, sea turtles, and whales. However, the reef is currently facing significant threats from climate change. Rising ocean temperatures lead to coral bleaching, a process where corals lose their vibrant colors and become vulnerable to disease. Protection and conservation efforts are crucial to ensure the survival of this unique natural heritage.',
    questions: [
      { id: 'q1', text: 'Where is the Great Barrier Reef located?', options: ['Off the coast of Queensland', 'Near Sydney', 'In the Indian Ocean', 'In the Atlantic Ocean'], correctAnswer: 'Off the coast of Queensland' },
      { id: 'q2', text: 'What is coral bleaching caused by?', options: ['Overfishing', 'Ocean pollution', 'Rising ocean temperatures', 'Strong waves'], correctAnswer: 'Rising ocean temperatures' }
    ]
  },
  {
    id: 'r-m-5',
    skill: 'reading',
    level: 'medium',
    title: 'Green Fashion',
    description: 'Read a text about environmental awareness in the clothing industry.',
    content: 'Sustainable fashion refers to a movement and process of fostering change to fashion products and the fashion system towards greater ecological integrity and social justice. This involves more than just using organic materials; it also encompasses ethical manufacturing processes, fair wages for workers, and reducing the environmental impact Throughout the entire lifecycle of a garment. Consumers can participate by choosing quality over quantity, buying second-hand, and supporting brands that are transparent about their supply chain. As the fashion industry is one of the world\'s largest polluters, shifting towards sustainable practices is essential for environmental protection.',
    questions: [
      { id: 'q1', text: 'What does sustainable fashion encompass besides organic materials?', options: ['Expensive pricing', 'Ethical manufacturing and fair wages', 'Fast production', 'Television advertising'], correctAnswer: 'Ethical manufacturing and fair wages' },
      { id: 'q2', text: 'How can consumers support sustainable fashion according to the text?', options: ['Buying more clothes', 'Choosing quality over quantity', 'Ignoring labels', 'Following fast trends'], correctAnswer: 'Choosing quality over quantity' }
    ]
  },
  {
    id: 'r-m-6',
    skill: 'reading',
    level: 'medium',
    title: 'Smart Cities',
    description: 'Read an article about technology in urban planning.',
    content: 'A smart city is a framework that uses Information and Communication Technologies (ICT) to develop, deploy, and promote sustainable development practices to address growing urbanization challenges. By using sensors and data analytics, municipal governments can improve everything from traffic management and public transport to energy efficiency and waste collection. For example, smart streetlights can adjust their brightness based on real-time pedestrian activity, saving significant amounts of electricity. However, the implementation of smart city technology also raises important questions about data privacy and the security of urban infrastructure from cyberattacks.',
    questions: [
      { id: 'q1', text: 'What is a primary goal of a smart city?', options: ['Building more skyscrapers', 'Addressing urbanization challenges through technology', 'Moving people to the countryside', 'Providing free Wi-Fi for everyone'], correctAnswer: 'Addressing urbanization challenges through technology' },
      { id: 'q2', text: 'What concern is mentioned regarding smart cities?', options: ['High taxes', 'Data privacy and security', 'Lack of technology', 'Traffic jam increases'], correctAnswer: 'Data privacy and security' }
    ]
  },
  {
    id: 'r-m-7',
    skill: 'reading',
    level: 'medium',
    title: 'Net Evolution',
    description: 'Read a summary of internet history.',
    content: 'The internet began as a research project by the U.S. Department of Defense in the 1960s, known as ARPANET. Its original purpose was to allow computers at different universities to communicate with each other. In the early 1990s, Tim Berners-Lee invented the World Wide Web, which introduced the system of hyperlinks and web pages we use today. Since then, the internet has transformed from a scientific tool into an essential part of daily life, revolutionizing how we work, shop, and communicate. Today, over 5 billion people have access to the internet, and its impact continues to grow with the development of mobile technology and the Internet of Things (IoT).',
    questions: [
      { id: 'q1', text: 'What was the original name of the internet project?', options: ['The Web', 'ARPANET', 'DOTNET', 'UniLink'], correctAnswer: 'ARPANET' },
      { id: 'q2', text: 'Who invented the World Wide Web?', options: ['Steve Jobs', 'Bill Gates', 'Tim Berners-Lee', 'Alan Turing'], correctAnswer: 'Tim Berners-Lee' }
    ]
  },
  {
    id: 'r-m-8',
    skill: 'reading',
    level: 'medium',
    title: 'Mindful',
    description: 'Read a persuasive text about mental health techniques.',
    content: 'In our increasingly busy world, mindfulness has emerged as a popular technique for managing stress and improving concentration. Mindfulness involves bringing one\'s attention to the present moment without judgment. Research suggests that regular mindfulness practice can lower levels of cortisol, the hormone associated with stress, and improve emotional regulation. Simple exercises, such as mindful breathing or a body scan, can be done anywhere and take only a few minutes a day. While it is not a cure-all, many people find that incorporating mindfulness into their daily routine helps them feel more grounded and less overwhelmed by the demands of modern life.',
    questions: [
      { id: 'q1', text: 'What is the core principle of mindfulness?', options: ['Planning for the future', 'Focusing on the present without judgment', 'Solving complex problems', 'Ignoring all emotions'], correctAnswer: 'Focusing on the present without judgment' },
      { id: 'q2', text: 'Which hormone is associated with stress according to the text?', options: ['Adrenaline', 'Melatonin', 'Cortisol', 'Dopamine'], correctAnswer: 'Cortisol' }
    ]
  },
  {
    id: 'r-m-9',
    skill: 'reading',
    level: 'medium',
    title: 'Solar Power',
    description: 'Read a technical overview for general audiences.',
    content: 'Solar power is the conversion of energy from sunlight into electricity, either directly using photovoltaics (PV) or indirectly using concentrated solar power. PV cells convert light into an electric current using the photovoltaic effect. Solar energy is a clean, renewable resource that is available in abundance across much of the globe. As technology has improved and manufacturing costs have decreased, solar power has become an increasingly competitive alternative to fossil fuels. In addition to large-scale solar farms, many homeowners are now installing rooftop panels to reduce their electricity bills and their carbon footprint.',
    questions: [
      { id: 'q1', text: 'How do PV cells create electricity?', options: ['By burning coal', 'By using the photovoltaic effect', 'By spinning turbines', 'By collecting rain'], correctAnswer: 'By using the photovoltaic effect' },
      { id: 'q2', text: 'What has made solar power more competitive recently?', options: ['Government mandates', 'Improved technology and lower costs', 'Higher oil prices', 'Increased cloud cover'], correctAnswer: 'Improved technology and lower costs' }
    ]
  },
  {
    id: 'r-m-10',
    skill: 'reading',
    level: 'medium',
    title: 'Eco Variety',
    description: 'Read about ecological balance.',
    content: 'Biodiversity refers to the variety of life on Earth at all its levels, from genes to ecosystems. It encompasses the evolutionary, ecological, and cultural processes that sustain life. A high level of biodiversity is essential for healthy ecosystems, as it provides services like pollination, water purification, and nutrient cycling. Biodiversity also plays a critical role in human health by providing sources for many medicines. However, illegal logging, habitat destruction, and overexploitation of resources are significantly reducing biodiversity worldwide. Protecting natural habitats is necessary to maintain the delicate balance of our planet\'s life-support systems.',
    questions: [
      { id: 'q1', text: 'What does biodiversity encompass according to the text?', options: ['Only trees', 'Only animal species', 'Processes from genes to ecosystems', 'Only national parks'], correctAnswer: 'Processes from genes to ecosystems' },
      { id: 'q2', text: 'What is mentioned as a threat to biodiversity?', options: ['Pollination', 'Habitat destruction', 'Water purification', 'Nutrient cycling'], correctAnswer: 'Habitat destruction' }
    ]
  },
  {
    id: 'r-m-11',
    skill: 'reading',
    level: 'medium',
    title: 'Color Marketing',
    description: 'Read about how businesses use color.',
    content: 'Colors have a profound impact on human emotions and behavior, which is why color choice is a critical element in branding and marketing. For instance, red is often used to create a sense of urgency or excitement and can even stimulate appetite, which is why it\'s popular in food industry logos. Blue, conversely, is associated with trust, security, and reliability, making it a common choice for financial institutions and tech companies. Green is frequently linked to health, nature, and tranquility. Professional marketers carefully select a color palette that aligns with their brand values to influence consumer perception and drive sales.',
    questions: [
      { id: 'q1', text: 'Which color is often used to stimulate appetite?', options: ['Blue', 'Green', 'Red', 'Yellow'], correctAnswer: 'Red' },
      { id: 'q2', text: 'Why do financial institutions often use blue?', options: ['To look like the sky', 'To indicate nature', 'To convey trust and security', 'To suggest low prices'], correctAnswer: 'To convey trust and security' }
    ]
  },
  {
    id: 'r-m-12',
    skill: 'reading',
    level: 'medium',
    title: 'Printing Press',
    description: 'Read about the impact of Johannes Gutenberg\'s invention.',
    content: 'The invention of the movable-type printing press by Johannes Gutenberg in the mid-15th century is considered one of the most influential events in human history. Before the printing press, books were copied by hand, a slow and expensive process that meant only the wealthy and religious elite had access to information. Gutenberg\'s invention allowed for the rapid and relatively cheap mass production of books, leading to a dramatic increase in literacy rates and the spread of new ideas across Europe. This "Information Revolution" played a key role in the Renaissance and the Scientific Revolution by making knowledge accessible to a much broader audience.',
    questions: [
      { id: 'q1', text: 'How were books produced before the printing press?', options: ['They didn\'t exist', 'By hand', 'Using a different machine', 'By oral tradition only'], correctAnswer: 'By hand' },
      { id: 'q2', text: 'What was a direct consequence of Gutenberg\'s invention?', options: ['Lower literacy rates', 'Rapid mass production of books', 'The end of the Renaissance', 'More expensive books'], correctAnswer: 'Rapid mass production of books' }
    ]
  },
  {
    id: 'r-m-13',
    skill: 'reading',
    level: 'medium',
    title: 'Moon Landing',
    description: 'Read about the historic Apollo 11 mission.',
    content: 'On July 20, 1969, the Apollo 11 mission successfully landed the first humans on the Moon. Astronauts Neil Armstrong and Buzz Aldrin spent over two hours outside the lunar module, collecting samples and taking photographs, while Michael Collins remained in lunar orbit. This achievement was the result of years of intense research and development by NASA and involved hundreds of thousands of people. The moon landing was not only a major scientific and technological milestone but also a significant cultural event, with millions of people around the world watching the broadcast. It demonstrated the limits of human ingenuity and inspired future generations of scientists and explorers.',
    questions: [
      { id: 'q1', text: 'Who stayed in orbit while the others were on the Moon?', options: ['Neil Armstrong', 'Buzz Aldrin', 'Michael Collins', 'John Glenn'], correctAnswer: 'Michael Collins' },
      { id: 'q2', text: 'What did the astronauts do while on the Moon\'s surface?', options: ['Built a base', 'Collected samples', 'Met aliens', 'Repaired the ship'], correctAnswer: 'Collected samples' }
    ]
  },
  {
    id: 'r-m-14',
    skill: 'reading',
    level: 'medium',
    title: 'Greenhouse',
    description: 'Read an educational text about climate science.',
    content: 'The greenhouse effect is a natural process that warms the Earth\'s surface. When the Sun\'s energy reaches the Earth\'s atmosphere, some of it is reflected back to space and the rest is absorbed and re-radiated by greenhouse gases. These gases include carbon dioxide, methane, nitrous oxide, and water vapor. Without the greenhouse effect, Earth would be too cold to support most forms of life. However, human activities such as burning fossil fuels and deforestation have increased the concentration of these gases, leading to an enhanced greenhouse effect and global warming. Understanding this balance is vital for addressing current environmental challenges.',
    questions: [
      { id: 'q1', text: 'What would happen to Earth without the greenhouse effect?', options: ['It would be too hot', 'It would be too cold', 'It would have no atmosphere', 'It would be the same'], correctAnswer: 'It would be too cold' },
      { id: 'q2', text: 'Which of the following is NOT mentioned as a greenhouse gas?', options: ['Carbon dioxide', 'Methane', 'Nitrogen', 'Water vapor'], correctAnswer: 'Nitrogen' }
    ]
  },
  {
    id: 'r-m-15',
    skill: 'reading',
    level: 'medium',
    title: 'Healthy Diet',
    description: 'Read about the health benefits of regional eating habits.',
    content: 'The Mediterranean diet is based on the traditional eating habits of people living in countries bordering the Mediterranean Sea, such as Greece and Italy. This diet emphasizes plant-based foods, including fruits, vegetables, whole grains, beans, nuts, and seeds. Olive oil is the primary source of fat, and fish, poultry, and dairy are consumed in moderate amounts, while red meat is limited. Studies have consistently shown that following a Mediterranean diet is associated with a lower risk of heart disease, stroke, and overall mortality. Its focus on fresh, nutrient-dense foods makes it one of the healthiest dietary patterns in the world.',
    questions: [
      { id: 'q1', text: 'What is the primary source of fat in the Mediterranean diet?', options: ['Butter', 'Margarine', 'Olive oil', 'Coconut oil'], correctAnswer: 'Olive oil' },
      { id: 'q2', text: 'Which type of food is limited in this diet?', options: ['Fish', 'Fruits', 'Red meat', 'Whole grains'], correctAnswer: 'Red meat' }
    ]
  },
  {
    id: 'r-m-16',
    skill: 'reading',
    level: 'medium',
    title: 'Olympic History',
    description: 'Read about the origins and revival of the Olympic Games.',
    content: 'The original Olympic Games were held in Ancient Greece over 2,700 years ago in the city of Olympia. These games were part of a religious festival in honor of Zeus and featured events such as running, wrestling, and chariot racing. The ancient games were eventually abolished in 393 AD but were revived in the modern era by Baron Pierre de Coubertin. The first modern Olympic Games took place in Athens in 1896, involving 14 nations and 43 events. Today, the Olympics are the world\'s foremost sports competition, held every four years and alternating between Summer and Winter Games, bringing together thousands of athletes from around the globe.',
    questions: [
      { id: 'q1', text: 'Where were the first modern Olympic Games held?', options: ['Paris', 'Rome', 'Athens', 'London'], correctAnswer: 'Athens' },
      { id: 'q2', text: 'Who is credited with reviving the Olympic Games in the modern era?', options: ['Zeus', 'Pierre de Coubertin', 'Neil Armstrong', 'Michael Collins'], correctAnswer: 'Pierre de Coubertin' }
    ]
  },
  {
    id: 'r-m-17',
    skill: 'reading',
    level: 'medium',
    title: 'Wild Migration',
    description: 'Read about one of nature\'s most spectacular events.',
    content: 'The Great Migration is the largest overland migration of mammals in the world, involving over two million wildebeest, zebras, and gazelles moving across the Serengeti ecosystem in Tanzania and Kenya. This continuous journey is driven by the search for fresh grazing lands and water as the seasons change. One of the most dramatic points in the migration is the crossing of the Mara River, where animals must survive both strong currents and crocodiles. This event is not only a lifeline for the animals involved but also a crucial part of the local ecosystem, providing food for numerous predators like lions and hyenas.',
    questions: [
      { id: 'q1', text: 'Which animals are involved in the Great Migration?', options: ['Elephants and lions', 'Wildebeest, zebras, and gazelles', 'Giraffes and rhinos', 'Buffalo and leopards'], correctAnswer: 'Wildebeest, zebras, and gazelles' },
      { id: 'q2', text: 'What is the main driver of the migration?', options: ['Avoiding predators', 'Finding fresh grazing and water', 'Mating season', 'Colder temperatures'], correctAnswer: 'Finding fresh grazing and water' }
    ]
  },
  {
    id: 'r-m-18',
    skill: 'reading',
    level: 'medium',
    title: 'Dual Language',
    description: 'Read about the cognitive advantages of bilingualism.',
    content: 'Learning a second language offers far more than just the ability to communicate with people from different cultures. Cognitive scientists have found that bilingualism can improve executive functions such as problem-solving, multitasking, and focusing. This is because the brain must constantly "switch" between different linguistic systems, which keeps the mind sharp and adaptable. Furthermore, some studies suggest that speaking multiple languages can delay the onset of age-related cognitive decline, such as dementia. Beyond the mental benefits, being bilingual can also enhance career opportunities and provide a deeper understanding of global perspectives and traditions.',
    questions: [
      { id: 'q1', text: 'What cognitive function is specifically mentioned as being improved by bilingualism?', options: ['Artistic ability', 'Problem-solving', 'Musical talent', 'Physical speed'], correctAnswer: 'Problem-solving' },
      { id: 'q2', text: 'What long-term health benefit is associated with speaking multiple languages?', options: ['Better eyesight', 'Reduced risk of flu', 'Delays cognitive decline like dementia', 'Faster metabolism'], correctAnswer: 'Delays cognitive decline like dementia' }
    ]
  },
  {
    id: 'r-m-19',
    skill: 'reading',
    level: 'medium',
    title: 'Statue of Liberty',
    description: 'Read about the origins and meaning of this famous monument.',
    content: 'The Statue of Liberty, officially named "Liberty Enlightening the World," was a gift from France to the United States to commemorate the centennial of the signing of the Declaration of Independence. Designed by sculptor Frédéric Auguste Bartholdi and with an internal structure built by Gustave Eiffel, the statue was dedicated on October 28, 1886. Standing on Liberty Island in New York Harbor, it has since become a universal symbol of freedom and democracy. The copper statue has turned green over time due to oxidation. For millions of immigrants arriving by sea, the sight of the statue was their first glimpse of a new life in America.',
    questions: [
      { id: 'q1', text: 'Who designed the internal structure of the Statue of Liberty?', options: ['Frédéric Auguste Bartholdi', 'Gustave Eiffel', 'Tim Berners-Lee', 'Johannes Gutenberg'], correctAnswer: 'Gustave Eiffel' },
      { id: 'q2', text: 'Why did France give the statue to the United States?', options: ['To end a war', 'To celebrate the Declaration of Independence centennial', 'To promote tourism', 'As a trade agreement'], correctAnswer: 'To celebrate the Declaration of Independence centennial' }
    ]
  },
  {
    id: 'r-m-20',
    skill: 'reading',
    level: 'medium',
    title: 'Honey Making',
    description: 'Read about the fascinating process of honey production by bees.',
    content: 'Honey production begins with bees collecting nectar from flowers using their long, tube-shaped tongues. Back at the hive, the bees pass the nectar to worker bees, who chew it for about half an hour to break down complex sugars. The mixture is then placed into honeycomb cells. As the bees fan the cells with their wings, the water evaporates, thickening the liquid into the honey we know. Finally, the bees seal the cells with beeswax to store the honey for later use. This remarkable process results in a food source that is not only delicious for humans but also essential for the survival of the bee colony.',
    questions: [
      { id: 'q1', text: 'What do bees use to collect nectar from flowers?', options: ['Their wings', 'Their tube-shaped tongues', 'Their feet', 'Their antennae'], correctAnswer: 'Their tube-shaped tongues' },
      { id: 'q2', text: 'What causes the nectar mixture to thicken into honey?', options: ['Adding more sugar', 'The bees chewing it longer', 'Evaporation caused by bees fanning their wings', 'Cooling temperatures'], correctAnswer: 'Evaporation caused by bees fanning their wings' }
    ]
  },
  {
    id: 'r-m-21',
    skill: 'reading',
    level: 'medium',
    title: 'Industrial Era',
    description: 'Read about the shift from agrarian to industrial societies.',
    content: 'The Industrial Revolution, which began in Great Britain in the late 18th century, was a period of major technological and socio-economic change. It marked the transition from hand production methods to new chemical manufacturing and iron production processes, the increasing use of steam power, and the development of machine tools. This shift led to the rise of the factory system and rapid urbanization as people moved from the countryside to cities in search of work. While the Industrial Revolution significantly increased the standard of living for many, it also brought challenges such as poor working conditions and environmental pollution, shaping the modern world as we know it.',
    questions: [
      { id: 'q1', text: 'Where did the Industrial Revolution begin?', options: ['France', 'United States', 'Great Britain', 'Germany'], correctAnswer: 'Great Britain' },
      { id: 'q2', text: 'What was a major socio-economic effect mentioned in the text?', options: ['People moving to the countryside', 'Rapid urbanization', 'A decrease in manufacturing', 'The end of the steam engine'], correctAnswer: 'Rapid urbanization' }
    ]
  },
  {
    id: 'r-m-22',
    skill: 'reading',
    level: 'medium',
    title: 'Ocean Climate',
    description: 'Read about the role of the oceans in regulating temperature.',
    content: 'Ocean currents act as a global conveyor belt, transporting warm water and precipitation from the equator toward the poles and cold water from the poles back to the tropics. This process is essential for regulating the Earth\'s climate and preventing extreme temperature differences. For example, the Gulf Stream carries warm water from the Gulf of Mexico across the Atlantic to Western Europe, making its climate significantly milder than it would otherwise be. These currents are driven by various factors, including wind, water temperature, salinity levels, and the Earth\'s rotation. Any significant disruption to these currents could have profound impacts on global weather patterns.',
    questions: [
      { id: 'q1', text: 'Which specific current makes Western Europe\'s climate milder?', options: ['The Arctic Current', 'The Gulf Stream', 'The Pacific Drift', 'The Indian Current'], correctAnswer: 'The Gulf Stream' },
      { id: 'q2', text: 'What drives ocean currents according to the text?', options: ['Fish migration', 'Wind, temperature, salinity, and rotation', 'Ocean pollution', 'Moon phases'], correctAnswer: 'Wind, temperature, salinity, and rotation' }
    ]
  },
  {
    id: 'r-m-23',
    skill: 'reading',
    level: 'medium',
    title: 'Great Wall',
    description: 'Read about the history and construction of this massive defense system.',
    content: 'The Great Wall of China is a series of fortifications made of stone, brick, tampered earth, and other materials, built along an east-to-west line across the historical northern borders of China. It was constructed over several centuries by various dynasties to protect the Chinese empire against raids and invasions from nomadic groups. While often referred to as a single wall, it is actually a complex network of walls, watchtowers, and fortresses. The most famous sections were built during the Ming Dynasty (1368–1644). Contrary to popular belief, the Great Wall is not a single continuous line and was not solely built for defense but also for border control and trade regulation.',
    questions: [
      { id: 'q1', text: 'Why was the Great Wall primarily built?', options: ['To attract tourists', 'For housing', 'To protect against raids and invasions', 'As a religious monument'], correctAnswer: 'To protect against raids and invasions' },
      { id: 'q2', text: 'During which dynasty were the most famous sections built?', options: ['Han Dynasty', 'Tang Dynasty', 'Ming Dynasty', 'Qin Dynasty'], correctAnswer: 'Ming Dynasty' }
    ]
  },
  {
    id: 'r-m-24',
    skill: 'reading',
    level: 'medium',
    title: 'Cloud Physics',
    description: 'Read about the atmospheric processes behind cloud formation.',
    content: 'Cloud formation begins when water on Earth\'s surface evaporates into water vapor and rises into the atmosphere. As the air rises, it cools, and the water vapor condenses around tiny particles called condensation nuclei, such as dust or sea salt. These tiny water droplets or ice crystals group together to form clouds. The type of cloud that forms depends on the altitude, temperature, and amount of moisture in the air. For example, cumulus clouds are fluffy and white, typically indicating fair weather, while dark cumulonimbus clouds often signal approaching storms. Clouds play a vital role in Earth\'s water cycle and radiation balance.',
    questions: [
      { id: 'q1', text: 'What is the role of condensation nuclei in cloud formation?', options: ['They freeze the water', 'They act as a surface for water vapor to condense on', 'They heat the air', 'They reflect sunlight'], correctAnswer: 'They act as a surface for water vapor to condense on' },
      { id: 'q2', text: 'Which type of cloud typically indicates a storm is coming?', options: ['Cumulus', 'Stratus', 'Cumulonimbus', 'Cirrus'], correctAnswer: 'Cumulonimbus' }
    ]
  },
  {
    id: 'r-m-25',
    skill: 'reading',
    level: 'medium',
    title: 'Bermuda Triangle',
    description: 'Read about the legends and scientific theories of the North Atlantic.',
    content: 'The Bermuda Triangle is a loosely defined region in the western part of the North Atlantic Ocean where a number of aircraft and ships are said to have disappeared under mysterious circumstances. While popular culture often attributes these events to paranormal activity or extraterrestrial life, many scientists and maritime experts point to more earthly explanations. These include unpredictable weather patterns, powerful currents like the Gulf Stream, and the prevalence of magnetic compass variations. Furthermore, data from the U.S. Coast Guard indicates that the number of disappearances in the Bermuda Triangle is not significantly higher than in other well-traveled areas of the ocean.',
    questions: [
      { id: 'q1', text: 'What is a scientific explanation for disappearances in the Bermuda Triangle?', options: ['Aliens', 'Magnetic compass variations', 'Sea monsters', 'Time portals'], correctAnswer: 'Magnetic compass variations' },
      { id: 'q2', text: 'According to the U.S. Coast Guard, how many disappearances occur in the Bermuda Triangle?', options: ['Significantly more than elsewhere', 'Not significantly more than other busy areas', 'None at all', 'Millions per year'], correctAnswer: 'Not significantly more than other busy areas' }
    ]
  },
  {
    id: 'r-m-26',
    skill: 'reading',
    level: 'medium',
    title: 'Silk Road Trade',
    description: 'Read about the ancient network of trade routes.',
    content: 'The Silk Road was an ancient network of trade routes that connected the East and West, stretching from China to the Mediterranean Sea. Established during the Han Dynasty, it was not a single road but a series of interconnected paths used by merchants to transport luxury goods, most notably silk, spices, and precious metals. Beyond the exchange of commodities, the Silk Road facilitated the spread of religions, philosophies, and technologies, such as the compass and papermaking. This cultural exchange significantly influenced the development of civilizations along the route and laid the groundwork for modern global interconnectedness.',
    questions: [
      { id: 'q1', text: 'Which commodity was most famously traded along the Silk Road?', options: ['Tea', 'Silk', 'Oil', 'Gold'], correctAnswer: 'Silk' },
      { id: 'q2', text: 'What besides goods was spread along the Silk Road?', options: ['Religions and technologies', 'Languages only', 'Animals only', 'Diseases only'], correctAnswer: 'Religions and technologies' }
    ]
  },
  {
    id: 'r-m-27',
    skill: 'reading',
    level: 'medium',
    title: 'Vitamin D',
    description: 'Read about the importance of Vitamin D for human health.',
    content: 'Vitamin D is unique because your body can produce it when your skin is exposed to sunlight. It plays a crucial role in maintaining healthy bones and teeth by helping the body absorb calcium from the diet. A deficiency in Vitamin D can lead to bone deformities such as rickets in children and bone pain caused by osteomalacia in adults. While sunlight is the best source, Vitamin D can also be found in a few foods, including fatty fish and egg yolks. In areas with limited sunlight during winter, many health professionals recommend taking Vitamin D supplements to maintain optimal levels for overall health and immune function.',
    questions: [
      { id: 'q1', text: 'Which mineral does Vitamin D help the body absorb?', options: ['Iron', 'Sodium', 'Calcium', 'Magnesium'], correctAnswer: 'Calcium' },
      { id: 'q2', text: 'What is the primary way the body gets Vitamin D?', options: ['Eating vegetables', 'Drinking milk', 'Skin exposure to sunlight', 'Sleeping'], correctAnswer: 'Skin exposure to sunlight' }
    ]
  },
  {
    id: 'r-m-28',
    skill: 'reading',
    level: 'medium',
    title: 'London Fire 1666',
    description: 'Read about the historic fire that reshaped a city.',
    content: 'The Great Fire of London began on September 2, 1666, in a bakery on Pudding Lane. Due to a combination of dry weather, strong winds, and the close proximity of wooden buildings, the fire spread rapidly through the city, destroying thousands of homes and many major landmarks, including St. Paul\'s Cathedral. Remarkably, while the property damage was immense, very few people were recorded as having died in the blaze. In the aftermath, London was rebuilt with wider streets and buildings primarily made of brick and stone rather than wood, significantly improving the city\'s fire safety and sanitation for future generations.',
    questions: [
      { id: 'q1', text: 'Where did the Great Fire of London start?', options: ['In a palace', 'In a church', 'In a bakery on Pudding Lane', 'At the docks'], correctAnswer: 'In a bakery on Pudding Lane' },
      { id: 'q2', text: 'How was London different after being rebuilt?', options: ['It had more wooden houses', 'It had wider streets and used brick/stone', 'It was much smaller', 'It became a farm'], correctAnswer: 'It had wider streets and used brick/stone' }
    ]
  },
  {
    id: 'r-m-29',
    skill: 'reading',
    level: 'medium',
    title: 'Everyday AI',
    description: 'Read about common applications of AI technology.',
    content: 'While often associated with science fiction, Artificial Intelligence (AI) is already integrated into many aspects of our daily routines. Virtual assistants like Siri and Alexa use AI-driven natural language processing to understand and respond to user commands. Streaming services like Netflix and Spotify use AI algorithms to analyze user behavior and recommend movies or music based on individual preferences. Furthermore, AI is increasingly used in finance for fraud detection and in healthcare for medical imaging analysis. As AI technology continues to evolve, its presence in our lives is expected to grow, offering more personalized and efficient services across various industries.',
    questions: [
      { id: 'q1', text: 'How do streaming services use AI according to the text?', options: ['To create new movies', 'To recommend content based on user behavior', 'To charge higher prices', 'To delete old accounts'], correctAnswer: 'To recommend content based on user behavior' },
      { id: 'q2', text: 'Mention one sector where AI is used for fraud detection.', options: ['Education', 'Agriculture', 'Finance', 'Fashion'], correctAnswer: 'Finance' }
    ]
  },
  {
    id: 'r-m-30',
    skill: 'reading',
    level: 'medium',
    title: 'Hubble Telescope',
    description: 'Read about the impact of this orbital observatory.',
    content: 'Launched in 1990, the Hubble Space Telescope has revolutionized our understanding of the universe. Because it orbits above the Earth\'s atmosphere, it is free from the atmospheric distortion that plagues ground-based telescopes, allowing it to capture incredibly clear images of distant galaxies, nebulae, and planets. Throughout its mission, Hubble has helped scientists determine the age of the universe, discover dark energy, and observe the birth and death of stars. Despite facing initial technical problems with its mirror, Hubble has been serviced by astronauts several times, extending its life and enabling it to continue providing groundbreaking scientific data.',
    questions: [
      { id: 'q1', text: 'Why are Hubble\'s images clearer than those from ground telescopes?', options: ['It has a bigger lens', 'It orbits above atmospheric distortion', 'It is closer to stars', 'It uses film instead of digital'], correctAnswer: 'It orbits above atmospheric distortion' },
      { id: 'q2', text: 'What is one scientific discovery mentioned that was helped by Hubble?', options: ['Alien life', 'Dark energy', 'A new moon for Earth', 'The core of the Sun'], correctAnswer: 'Dark energy' }
    ]
  },
  {
    id: 'r-m-31',
    skill: 'reading',
    level: 'medium',
    title: 'Importance of Sleep',
    description: 'Read about the physiological functions of sleep.',
    content: 'Sleep is a vital biological process that is essential for physical and mental health. During sleep, the body undergoes various reparative processes, such as muscle growth, tissue repair, and the release of growth hormones. In the brain, sleep is crucial for memory consolidation, which is the process of turning short-term memories into long-term ones. Lack of sleep can lead to impaired cognitive function, mood swings, and a weakened immune system. Most adults need between 7 to 9 hours of quality sleep per night to function optimally. Prioritizing good sleep hygiene, such as maintaining a regular sleep schedule, can significantly improve overall well-being.',
    questions: [
      { id: 'q1', text: 'What brain process is specifically linked to sleep in the text?', options: ['Creative thinking', 'Problem solving', 'Memory consolidation', 'Language learning'], correctAnswer: 'Memory consolidation' },
      { id: 'q2', text: 'How much sleep is recommended for most adults?', options: ['4-6 hours', '7-9 hours', '10-12 hours', 'Exactly 8 hours'], correctAnswer: '7-9 hours' }
    ]
  },
  {
    id: 'r-m-32',
    skill: 'reading',
    level: 'medium',
    title: 'Great Depression',
    description: 'Read about the worst economic downturn in modern history.',
    content: 'The Great Depression was a severe worldwide economic downturn that began with the stock market crash in October 1929, known as Black Tuesday. The ensuing economic collapse led to massive unemployment, poverty, and a sharp decline in international trade. Businesses folded, and many people lost their life savings as banks failed. In the United States, President Franklin D. Roosevelt introduced the "New Deal," a series of programs and reforms aimed at providing relief, recovery, and reform. While the Great Depression eventually ended with the onset of World War II, it fundamentally changed the role of government in the economy and the lives of millions across the globe.',
    questions: [
      { id: 'q1', text: 'What event marked the beginning of the Great Depression?', options: ['World War I', 'The stock market crash of 1929', 'The invention of the internet', 'A global drought'], correctAnswer: 'The stock market crash of 1929' },
      { id: 'q2', text: 'What was the name of President Roosevelt\'s recovery program?', options: ['The Big Plan', 'The New Deal', 'Economic Shift', 'The Freedom Act'], correctAnswer: 'The New Deal' }
    ]
  },
  {
    id: 'r-m-33',
    skill: 'reading',
    level: 'medium',
    title: 'Wind Power',
    description: 'Read about how wind is converted into electricity.',
    content: 'Wind power is one of the fastest-growing sources of renewable energy in the world. Modern wind turbines work by capturing the kinetic energy of the wind and converting it into mechanical power, which is then used to spin a generator to create electricity. Unlike fossil fuels, wind energy is clean and produces no direct greenhouse gas emissions. While some people express concerns about the visual impact of wind farms or their effect on bird populations, technological improvements continue to address these issues. Large-scale offshore wind farms, in particular, have great potential for generating vast amounts of electricity to meet the world\'s growing energy needs.',
    questions: [
      { id: 'q1', text: 'How do wind turbines create electricity?', options: ['By burning wind', 'By converting kinetic energy into mechanical power to spin a generator', 'By heating sea water', 'By using mirrors'], correctAnswer: 'By converting kinetic energy into mechanical power to spin a generator' },
      { id: 'q2', text: 'What is an advantage of wind power mentioned in the text?', options: ['It is cheap to build always', 'It produces no direct greenhouse gas emissions', 'It is silent', 'It doesn\'t need batteries'], correctAnswer: 'It produces no direct greenhouse gas emissions' }
    ]
  },
  {
    id: 'r-m-34',
    skill: 'reading',
    level: 'medium',
    title: 'Dietary Fiber',
    description: 'Read about the importance of dietary fiber.',
    content: 'Dietary fiber, found in plant foods like fruits, vegetables, and whole grains, is an essential part of a healthy diet. Unlike other food components, fiber isn\'t digested by your body. Instead, it passes relatively intact through your stomach and intestines. There are two types: soluble fiber, which can help lower blood cholesterol levels, and insoluble fiber, which promotes digestive health by adding bulk to stool. A diet high in fiber can also help maintain a healthy weight and reduce the risk of diabetes and heart disease. Increasing fiber intake should be done gradually alongside drinking plenty of water.',
    questions: [
      { id: 'q1', text: 'Where is dietary fiber found?', options: ['Meat and fish', 'Dairy products', 'Plant foods like fruits and vegetables', 'Sodas'], correctAnswer: 'Plant foods like fruits and vegetables' },
      { id: 'q2', text: 'What is a benefit of soluble fiber mentioned in the text?', options: ['Helps lower blood cholesterol', 'Builds muscle', 'Improves eyesight', 'Increases energy quickly'], correctAnswer: 'Helps lower blood cholesterol' }
    ]
  },
  {
    id: 'r-m-35',
    skill: 'reading',
    level: 'medium',
    title: 'Ancient Glyphs',
    description: 'Read about the key to unlocking ancient Egyptian writing.',
    content: 'The Rosetta Stone is a granodiorite stele discovered in 1799 that provided the key to modern understanding of Egyptian hieroglyphs. The stone features a decree issued at Memphis in 196 BC on behalf of King Ptolemy V. The decree appears in three scripts: Ancient Egyptian hieroglyphs, Demotic script, and Ancient Greek. Because researchers could already read Ancient Greek, they were able to use the Greek text to decipher the hieroglyphs. This breakthrough, led by scholars like Jean-François Champollion, allowed historians to read thousands of years of ancient Egyptian records for the first time.',
    questions: [
      { id: 'q1', text: 'In how many different scripts was the Rosetta Stone decree written?', options: ['One', 'Two', 'Three', 'Four'], correctAnswer: 'Three' },
      { id: 'q2', text: 'Why was the Ancient Greek text on the stone important?', options: ['It was a beautiful poem', 'It allowed researchers to decipher the hieroglyphs', 'It was the only original text', 'It proved the stone was from Greece'], correctAnswer: 'It allowed researchers to decipher the hieroglyphs' }
    ]
  },
  {
    id: 'r-m-36',
    skill: 'reading',
    level: 'medium',
    title: 'Life of Bees',
    description: 'Read about the critical role bees play in the environment.',
    content: 'Bees are among the most important pollinators in the natural world. As they move from flower to flower in search of nectar and pollen for food, they transfer pollen grains between plants. This process, known as pollination, is essential for the reproduction of many plants, including many crops that humans rely on for food. In fact, it is estimated that one out of every three bites of food we eat is the result of animal pollination. However, bee populations are facing threats from pesticide use, habitat loss, and climate change. Protecting bees is not just about saving an insect, but about ensuring the security of our global food supply.',
    questions: [
      { id: 'q1', text: 'Why do bees move from flower to flower?', options: ['To sleep', 'To find nectar and pollen for food', 'To hide from predators', 'To exercise'], correctAnswer: 'To find nectar and pollen for food' },
      { id: 'q2', text: 'How much of human food is estimated to rely on animal pollination?', options: ['10%', '25%', 'One-third (33%)', 'Over 75%'], correctAnswer: 'One-third (33%)' }
    ]
  },
  {
    id: 'r-m-37',
    skill: 'reading',
    level: 'medium',
    title: 'Mars Missions',
    description: 'Read about the scientific curiosity surrounding the Red Planet.',
    content: 'Mars, often called the Red Planet, has been a focus of space exploration for decades. Scientists are particularly interested in Mars because evidence suggests that liquid water once flowed on its surface, raising the possibility that life may have existed there in the past. Numerous robotic missions, including rovers like Curiosity and Perseverance, have been sent to explore the Martian landscape, analyze soil samples, and search for biosignatures. These missions face significant challenges, such as the thin atmosphere and extreme temperatures. The data collected from these explorations is paving the way for potential human missions to Mars in the future.',
    questions: [
      { id: 'q1', text: 'Why are scientists especially interested in Mars?', options: ['It is made of gold', 'Evidence of past liquid water', 'It has a thick atmosphere', 'It is very close to Earth'], correctAnswer: 'Evidence of past liquid water' },
      { id: 'q2', text: 'Mention one robotic rover currently exploring or having explored Mars.', options: ['Apollo', 'Voyager', 'Curiosity', 'Hubble'], correctAnswer: 'Curiosity' }
    ]
  },
  {
    id: 'r-m-38',
    skill: 'reading',
    level: 'medium',
    title: 'Photo Progress',
    description: 'Read about the journey from film to digital images.',
    content: 'Photography has undergone a dramatic transformation since the first permanent photograph was taken in the early 19th century. Early cameras were large, required long exposure times, and captured images on metal or glass plates. The introduction of flexible film by George Eastman in the late 1800s made photography more accessible to the public. The late 20th century saw the rise of digital photography, which replaced film with electronic sensors. Today, with the integration of high-quality cameras into smartphones, nearly everyone has the ability to capture and share images instantly. While the technology has changed, the core purpose of photography—to preserve a moment in time—remains the same.',
    questions: [
      { id: 'q1', text: 'What did digital photography replace?', options: ['Glass plates', 'Film', 'Metal plates', 'Paintings'], correctAnswer: 'Film' },
      { id: 'q2', text: 'Who made photography more accessible by introducing flexible film?', options: ['Johannes Gutenberg', 'George Eastman', 'Gustave Eiffel', 'Neil Armstrong'], correctAnswer: 'George Eastman' }
    ]
  },
  {
    id: 'r-m-39',
    skill: 'reading',
    level: 'medium',
    title: 'Steam Engine',
    description: 'Read about the machine that powered the Industrial Revolution.',
    content: 'The development of the steam engine was a pivotal moment in human history. While early versions existed, it was James Watt\'s improvements in the late 18th century that made the engine efficient enough for industrial use. Steam power allowed factories to be located anywhere, rather than just near running water, and revolutionized transportation through the development of steamships and locomotives. This increased efficiency in manufacturing and transport led to unprecedented economic growth and societal changes. The steam engine laid the foundation for modern mechanized industry and changed how people lived and worked across the globe.',
    questions: [
      { id: 'q1', text: 'Whose improvements made the steam engine efficient for industrial use?', options: ['Isaac Newton', 'James Watt', 'Albert Einstein', 'Thomas Edison'], correctAnswer: 'James Watt' },
      { id: 'q2', text: 'How did steam power change the location of factories?', options: ['They had to be near coal mines', 'They could be located anywhere', 'They had to stay near rivers', 'They were built underground'], correctAnswer: 'They could be located anywhere' }
    ]
  },
  {
    id: 'r-m-40',
    skill: 'reading',
    level: 'medium',
    title: 'City Growth',
    description: 'Read about the global trend of people moving to cities.',
    content: 'Urbanization is the process by which a growing percentage of a population lives in cities rather than rural areas. This trend is driven by various factors, including better job opportunities, access to education and healthcare, and the promise of a more diverse lifestyle. While cities are often hubs of innovation and economic growth, rapid urbanization also presents significant challenges, such as housing shortages, traffic congestion, and increased pollution. Sustainable urban planning is essential to manage this growth effectively and ensure that cities remain livable for all residents. Today, over half of the world\'s population lives in urban areas, a trend that is expected to continue.',
    questions: [
      { id: 'q1', text: 'What is one reason mentioned for people moving to cities?', options: ['Cleaner air', 'Better job opportunities', 'Lower cost of living', 'More space'], correctAnswer: 'Better job opportunities' },
      { id: 'q2', text: 'What is a challenge of rapid urbanization according to the text?', options: ['Lack of schools', 'Housing shortages', 'Too much silence', 'Fewer jobs'], correctAnswer: 'Housing shortages' }
    ]
  }
];

export const readingHardPractices: Practice[] = [
  {
    id: 'r-h-1',
    skill: 'reading',
    level: 'hard',
    title: 'AI at Work',
    description: 'Read a complex analysis of the labor market.',
    content: 'The rapid integration of Artificial Intelligence (AI) into the global workforce has sparked a multifaceted debate regarding its long-term impact on employment. While proponents argue that AI will augment human capabilities and catalyze the creation of entirely new industries, critics express profound concerns about the potential for widespread job displacement, particularly in sectors reliant on repetitive tasks. Economic historians point out that technological advancements have historically resulted in temporary dislocation followed by net job growth; however, the unprecedented speed and cognitive focus of current AI breakthroughs suggest that the modern transition may be fundamentally different from the Industrial Revolution.',
    questions: [
      { id: 'q1', text: 'What is a primary concern mentioned by critics of AI?', options: ['Lower wages', 'Increased taxes', 'Job displacement', 'Reduced creativity'], correctAnswer: 'Job displacement' },
      { id: 'q2', text: 'How do economic historians view technological shifts based on the text?', options: ['As purely negative', 'As leading to net job loss', 'As leading to temporary dislocation then growth', 'As having no impact at all'], correctAnswer: 'As leading to temporary dislocation then growth' }
    ]
  },
  {
    id: 'r-h-2',
    skill: 'reading',
    level: 'hard',
    title: 'Plastic & Reefs',
    description: 'Read a scientific abstract on environmental science.',
    content: 'Microplastics, defined as plastic particles less than 5mm in diameter, have become an ubiquitous contaminant in the global marine environment. These fragments originate from the fragmentation of larger plastic debris or are intentionally manufactured for use in cosmetics and industrial processes. The persistence of microplastics allows them to accumulate in marine organisms across multiple trophic levels. Preliminary research indicates that these particles can act as vectors for persistent organic pollutants (POPs), which may undergo biomagnification as they progress up the food web. Consequently, the presence of microplastics in commercially significant seafood species poses a potential, albeit currently under-quantified, risk to human health through dietary ingestion.',
    questions: [
      { id: 'q1', text: 'What determines the classification of a particle as a "microplastic"?', options: ['Its color', 'Its weight', 'Its size (less than 5mm)', 'Its chemical origin'], correctAnswer: 'Its size (less than 5mm)' },
      { id: 'q2', text: 'What is a significant concern regarding Persistent Organic Pollutants (POPs) in this context?', options: ['They dissolve microplastics', 'They make fish grow larger', 'They may undergo biomagnification', 'They are only found in cosmetics'], correctAnswer: 'They may undergo biomagnification' }
    ]
  },
  {
    id: 'r-h-3',
    skill: 'reading',
    level: 'hard',
    title: 'Choice Paradox',
    description: 'Read a psychological exploration of decision-making.',
    content: 'In contemporary affluent societies, the proliferation of choice is often celebrated as the ultimate expression of individual liberty. However, as psychologist Barry Schwartz articulates in his seminal work, "The Paradox of Choice," an overabundance of options can paradoxically lead to increased anxiety, decision paralysis, and diminished satisfaction with the eventual selection. The cognitive burden of evaluating an exhaustive array of alternatives—from hundreds of salad dressing varieties to thousands of career paths—frequently results in "choice overload." Furthermore, the awareness of forgone opportunities (opportunity cost) often leads to "buyer\'s remorse," as consumers ruminate on whether a different choice would have yielded a marginally better outcome. Consequently, while some choice is undeniably empowering, the relentless expansion of consumer alternatives may be detrimental to psychological well-being.',
    questions: [
      { id: 'q1', text: 'What is the primary thesis of "The Paradox of Choice"?', options: ['Choice is always objectively good', 'More choices lead to better outcomes always', 'Excessive choices can lead to anxiety and paralysis', 'Consumers should never have any choices'], correctAnswer: 'Excessive choices can lead to anxiety and paralysis' },
      { id: 'q2', text: 'What does the term "opportunity cost" refer to in this context?', options: ['The price of the item', 'The time spent shopping', 'The awareness of alternatives that were not chosen', 'The taxes associated with a purchase'], correctAnswer: 'The awareness of alternatives that were not chosen' }
    ]
  },
  {
    id: 'r-h-4',
    skill: 'reading',
    level: 'hard',
    title: 'Quantum Physics',
    description: 'Read an advanced scientific summary of quantum physics.',
    content: 'Quantum entanglement represents one of the most counterintuitive phenomena in modern physics. When two particles become entangled, their quantum states are fundamentally linked, such that the measurement of one particle instantaneously influences the state of its partner, regardless of the distance separating them. This "spooky action at a distance," as Albert Einstein famously labeled it, appears to violate the principle of locality, which posits that physical processes are only affected by their immediate surroundings. Einstein, Podolsky, and Rosen (EPR) argued that this indicated the incompleteness of quantum mechanics, suggesting the existence of "hidden variables." However, subsequent experimental tests using Bell\'s Theorem have largely supported the standard quantum mechanical view, confirming that non-locality is an inherent feature of our universe, with significant implications for quantum computing and secure communication.',
    questions: [
      { id: 'q1', text: 'What happens to entangled particles when one is measured?', options: ['They both disappear', 'The other particle is instantaneously influenced', 'The measurement has no effect on the partner', 'They both gain mass'], correctAnswer: 'The other particle is instantaneously influenced' },
      { id: 'q2', text: 'What did the EPR argument suggest about quantum mechanics?', options: ['It was perfectly complete', 'It was incomplete and needed hidden variables', 'It was only useful for large objects', 'It was a total fabrication'], correctAnswer: 'It was incomplete and needed hidden variables' }
    ]
  },
  {
    id: 'r-h-5',
    skill: 'reading',
    level: 'hard',
    title: 'Free Will',
    description: 'Read a philosophical analysis of "Being and Nothingness".',
    content: 'Central to Jean-Paul Sartre\'s existentialist philosophy is the radical assertion that "existence precedes essence." For Sartre, human beings are not born with a pre-defined purpose or "essence" dictated by a creator or biological determinism. Instead, we find ourselves cast into the world (existence) and must define ourselves through our actions and choices. This absolute freedom, however, is a source of profound "angst" or "nausea," as we must accept total responsibility for our lives without the guidance of fixed moral laws. Sartre characterizes the attempt to deny this freedom and responsibility as "bad faith" (mauvaise foi). In his view, to live authentically is to embrace the inherent absurdity of existence and create one\'s own meaning in a universe that is fundamentally indifferent to human concerns.',
    questions: [
      { id: 'q1', text: 'What does Sartre mean by "existence precedes essence"?', options: ['Humans have a pre-destined soul', 'Our purpose is defined before we are born', 'We exist first and then define ourselves through choice', 'Essence is more important than existence'], correctAnswer: 'We exist first and then define ourselves through choice' },
      { id: 'q2', text: 'How does Sartre define "bad faith"?', options: ['Believing in a religion', 'Denying one\'s own freedom and responsibility', 'Acting with malicious intent', 'Failing to follow social laws'], correctAnswer: 'Denying one\'s own freedom and responsibility' }
    ]
  },
  {
    id: 'r-h-6',
    skill: 'reading',
    level: 'hard',
    title: 'Impacts of UBI',
    description: 'Read a complex policy analysis.',
    content: 'Universal Basic Income (UBI) is a socio-political financial transfer policy proposal which suggests that all citizens of a given population regularly receive a set amount of money from the government, regardless of their employment status. Proponents argue that UBI could eliminate absolute poverty, provide a safety net against the displacement caused by automation, and empower individuals to pursue creative or communal endeavors that are undervalued by the traditional market. Critics, however, raise substantial concerns regarding its fiscal sustainability and the potential for a "work disincentive" effect, where laborers might choose to withdraw from the workforce. Furthermore, debate persists over whether UBI should be funded through progressive income taxation, a value-added tax (VAT), or a redirection of existing welfare expenditures.',
    questions: [
      { id: 'q1', text: 'What is a primary argument in favor of UBI mentioned in the text?', options: ['It increases corporate profits', 'It provides a safety net against automation-led displacement', 'It encourages people to work longer hours', 'It simplifies the tax code for the wealthy'], correctAnswer: 'It provides a safety net against automation-led displacement' },
      { id: 'q2', text: 'What is a major concern raised by critics of UBI?', options: ['It will lead to over-employment', 'It might create a "work disincentive" effect', 'It is too complicated to explain', 'It only benefits those already working'], correctAnswer: 'It might create a "work disincentive" effect' }
    ]
  },
  {
    id: 'r-h-7',
    skill: 'reading',
    level: 'hard',
    title: 'Gene Triggers',
    description: 'Read an advanced biological text on gene expression.',
    content: 'The field of epigenetics has revolutionized our understanding of heredity by demonstrating that gene expression can be regulated by mechanisms other than changes in the DNA sequence itself. Epigenetic modifications, such as DNA methylation and histone acetylation, can be influenced by environmental factors such as diet, stress, and toxins. Crucially, research has indicated that some of these "epi-marks" can be transgenerational, being passed down from parents to offspring. This phenomenon has prompted a nuanced reassessment of Jean-Baptiste Lamarck\'s once-discredited theory of the inheritance of acquired characteristics. While Darwinian natural selection remains the primary driver of evolution, epigenetics reveals a sophisticated layer of biological plasticity that allows organisms to respond and adapt to their environment with unexpected speed and complexity.',
    questions: [
      { id: 'q1', text: 'What distinguishes epigenetics from traditional genetics?', options: ['It only studies plants', 'It focuses on modifications that don\'t change the DNA sequence', 'It ignores the role of the environment', 'It proves DNA is not inherited'], correctAnswer: 'It focuses on modifications that don\'t change the DNA sequence' },
      { id: 'q2', text: 'Whose discredited theory is being reassessed due to epigenetics?', options: ['Charles Darwin', 'Gregor Mendel', 'Jean-Baptiste Lamarck', 'Louis Pasteur'], correctAnswer: 'Jean-Baptiste Lamarck' }
    ]
  },
  {
    id: 'r-h-8',
    skill: 'reading',
    level: 'hard',
    title: 'Liberalism',
    description: 'Read a critique of political science and history.',
    content: 'In the post-Cold War era, the concept of "The End of History," as famously proposed by Francis Fukuyama, suggested that Western liberal democracy had become the final and universal form of human government. However, the subsequent decades have witnessed the rise of competing ideologies and the resurgence of authoritarianism, challenging the perceived hegemony of the liberal world order. Critics of neoliberalism argue that its focus on market deregulation and individualistic competition has exacerbated global inequality and eroded traditional social bonds. Furthermore, post-colonial scholars emphasize that the "universal" values of Western liberalism are often culturally specific and may be used to justify imperialistic interventions. The contemporary geopolitical landscape thus appears increasingly multipolar and contested, suggesting that the "triumph" of a single political model was perhaps premature.',
    questions: [
      { id: 'q1', text: 'What did Francis Fukuyama\'s "End of History" thesis propose?', options: ['War would never happen again', 'Liberal democracy is the final form of government', 'The world would return to monarchy', 'Communism would eventually win'], correctAnswer: 'Liberal democracy is the final form of government' },
      { id: 'q2', text: 'What is a common critique of neoliberalism mentioned in the text?', options: ['It is too focused on community', 'It has exacerbated global inequality', 'It is too expensive to maintain', 'It discourages individual competition'], correctAnswer: 'It has exacerbated global inequality' }
    ]
  },
  {
    id: 'r-h-9',
    skill: 'reading',
    level: 'hard',
    title: 'Linear B',
    description: 'Read an account of linguistic archeology.',
    content: 'The decipherment of Linear B, an ancient script found on clay tablets in Crete and mainland Greece, remains one of the greatest triumphs of modern linguistics. For decades, the script—used by the Mycenaean civilization—baffled scholars, appearing unrelated to any known language. The breakthrough came in 1952 when Michael Ventris, an English architect and self-taught cryptographer, successfully demonstrated that Linear B was an archaic form of Greek. Working alongside John Chadwick, Ventris utilized a grid system to identify patterns in the syllabic signs. This discovery fundamentally altered our understanding of Aegean prehistory, revealing that the Mycenaeans were Greek speakers and providing a direct linguistic bridge to the classical era of Homeric epics.',
    questions: [
      { id: 'q1', text: 'What was Michael Ventris\'s profession?', options: ['Linguist', 'Architect', 'History professor', 'Archaeologist'], correctAnswer: 'Architect' },
      { id: 'q2', text: 'What language was Linear B eventually revealed to be?', options: ['Minoan', 'Egyptian', 'Archaic Greek', 'Latin'], correctAnswer: 'Archaic Greek' }
    ]
  },
  {
    id: 'r-h-10',
    skill: 'reading',
    level: 'hard',
    title: 'The Mind',
    description: 'Read a scientific discussion on the "Hard Problem" of consciousness.',
    content: 'The study of consciousness, often described as the "final frontier" of neuroscience, centers on the distinction between the "easy problems" (understanding the neural mechanisms of sensory processing) and the "hard problem" (explaining the subjective experience of qualia). Integrated Information Theory (IIT), proposed by neuroscientist Giulio Tononi, posits that consciousness is a fundamental property arising from the degree of integrated information within a system. Conversely, Global Workspace Theory (GWT) suggests that consciousness emerges when information is broadcast to a network of specialized brain regions. Despite significant advancements in functional neuroimaging, the precise relationship between physical brain states and subjective awareness remains elusive, continuing to provoke intense debate among neuroscientists and philosophers alike.',
    questions: [
      { id: 'q1', text: 'What is the "hard problem" of consciousness referred to in the text?', options: ['Understanding sensory processing', 'Learning how to speak', 'Explaining subjective experience', 'Curing brain diseases'], correctAnswer: 'Explaining subjective experience' },
      { id: 'q2', text: 'What does Integrated Information Theory (IIT) propose?', options: ['Consciousness is an illusion', 'Consciousness arises from integrated information in a system', 'Only humans possess consciousness', 'Consciousness is stored in a single organ'], correctAnswer: 'Consciousness arises from integrated information in a system' }
    ]
  },
  {
    id: 'r-h-11',
    skill: 'reading',
    level: 'hard',
    title: 'Nudge Theory',
    description: 'Read about the application of psychology in public policy.',
    content: 'Behavioral economics challenges the traditional "homo economicus" model, which assumes that individuals are rational actors who always seek to maximize their utility. Instead, "Nudge Theory," developed by Richard Thaler and Cass Sunstein, suggests that human decision-making is frequently influenced by cognitive biases and heuristics. Policy "nudges" are subtle interventions that steer individuals toward better choices—such as opting into pension plans by default or placing healthy food at eye level in cafeterias—without restricting their freedom of choice. While proponents argue that nudging can effectively address social issues like public health and environmental conservation, critics express concern about the paternalistic nature of these interventions and the potential for manipulation by governments or corporations.',
    questions: [
      { id: 'q1', text: 'How does behavioral economics differ from traditional economic models?', options: ['It assumes everyone is perfectly rational', 'It incorporates the influence of cognitive biases', 'It only focuses on large corporations', 'It rejects all role for government'], correctAnswer: 'It incorporates the influence of cognitive biases' },
      { id: 'q2', text: 'What is a "nudge" according to the text?', options: ['A strict law', 'A tax increase', 'A subtle intervention that steers choices', 'A forced physical action'], correctAnswer: 'A subtle intervention that steers choices' }
    ]
  },
  {
    id: 'r-h-12',
    skill: 'reading',
    level: 'hard',
    title: 'The Great Game',
    description: 'Read a historical overview of geopolitical rivalry.',
    content: 'The "Great Game" refers to the intense strategic and diplomatic rivalry between the British Empire and the Russian Empire for supremacy in Central Asia during the 19th century. Britain, fearing that Russian expansion across the steppes would threaten its "Jewel in the Crown"—India—sought to establish buffer states and influence along the northwest frontier. Russia, in turn, sought to expand its influence southward toward warm-water ports. This geopolitical chess match was characterized by secret missions, espionage, and localized military conflicts, most notably in Afghanistan. The legacy of the Great Game continues to influence the contemporary geopolitical dynamics of the region, emphasizing the historical roots of boundary disputes and ethnic tensions that persist to this day.',
    questions: [
      { id: 'q1', text: 'Which two empires were the main participants in the "Great Game"?', options: ['British and French', 'Russian and Ottoman', 'British and Russian', 'Spanish and Portuguese'], correctAnswer: 'British and Russian' },
      { id: 'q2', text: 'What was Britain\'s primary fear regarding Russian expansion?', options: ['A threat to its control of India', 'Increased competition in the tea trade', 'A loss of influence in the Americas', 'An alliance between Russia and France'], correctAnswer: 'A threat to its control of India' }
    ]
  },
  {
    id: 'r-h-13',
    skill: 'reading',
    level: 'hard',
    title: 'Utility Ethics',
    description: 'Read an advanced ethical analysis of Jeremy Bentham and John Stuart Mill.',
    content: 'Utilitarianism is a consequentialist ethical theory which posits that the most moral action is the one that maximizes "utility," defined as the greatest happiness for the greatest number of people. Founded by Jeremy Bentham, who proposed a "felicific calculus" to quantify pleasure and pain, the theory was later refined by John Stuart Mill. Mill distinguished between "higher" and "lower" pleasures, arguing that intellectual and moral pleasures are qualitatively superior to physical ones. While utilitarianism provides a clear framework for public policy and legislative reform, it faces significant critiques, notably the "tyranny of the majority" problem, where the interests of individuals or minorities may be sacrificed for the perceived benefit of the larger collective. Furthermore, the practical difficulty of accurately predicting and quantifying the long-term consequences of complex actions remains a central challenge to utilitarian thought.',
    questions: [
      { id: 'q1', text: 'How did John Stuart Mill refine Bentham\'s version of utilitarianism?', options: ['By rejecting the idea of pleasure', 'By distinguishing between higher and lower pleasures', 'By focusing only on individual pain', 'By arguing that all pleasures are equal'], correctAnswer: 'By distinguishing between higher and lower pleasures' },
      { id: 'q2', text: 'What is a major critique of utilitarianism mentioned in the text?', options: ['It is too simple to apply', 'The "tyranny of the majority" problem', 'It focuses too much on the past', 'It is only useful for personal health'], correctAnswer: 'The "tyranny of the majority" problem' }
    ]
  },
  {
    id: 'r-h-14',
    skill: 'reading',
    level: 'hard',
    title: 'Dark Matter',
    description: 'Read an advanced cosmological overview.',
    content: 'Observational evidence from the rotation curves of galaxies and gravitational lensing suggest that the observable matter in the universe accounts for only a small fraction of its total mass-energy density. The remainder is attributed to "dark matter," an invisible substance that does not emit, absorb, or reflect electromagnetic radiation but exerts a significant gravitational influence. The prevailing Lambda-Cold Dark Matter (ΛCDM) model posits that dark matter played a structural role in the early universe, acting as a gravitational "scaffold" that enabled the formation of the first stars and galaxies. Despite its ubiquitous presence, the fundamental nature of dark matter particles—whether they are Weakly Interacting Massive Particles (WIMPs) or axions—remains one of the most profound unresolved questions in modern astrophysics and particle physics.',
    questions: [
      { id: 'q1', text: 'What is the primary evidence for the existence of dark matter?', options: ['Bright explosions in deep space', 'Galactic rotation curves and gravitational lensing', 'Radio signals from other planets', 'The color of the night sky'], correctAnswer: 'Galactic rotation curves and gravitational lensing' },
      { id: 'q2', text: 'What role did dark matter play in the early universe according to the ΛCDM model?', options: ['It prevented stars from forming', 'It acted as a gravitational scaffold for star and galaxy formation', 'It provided the energy for the Big Bang', 'It dissolved other matter'], correctAnswer: 'It acted as a gravitational scaffold for star and galaxy formation' }
    ]
  },
  {
    id: 'r-h-15',
    skill: 'reading',
    level: 'hard',
    title: 'Chomsky Grammar',
    description: 'Read a critique of Universal Grammar.',
    content: 'Noam Chomsky\'s theory of Universal Grammar (UG) fundamentally shifted the paradigm of linguistics in the 20th century. Chomsky argued that the capacity for language is an innate biological faculty unique to humans, rather than a skill acquired solely through environmental stimulus or imitation. Central to this theory is the "Poverty of the Stimulus" argument, which suggests that children acquire complex linguistic structures far more rapidly than would be possible if they were relying entirely on the data they hear. However, in recent decades, UG has faced robust challenges from cognitive linguists and connectionists who posit that language acquisition can be explained through general-purpose learning mechanisms and the statistical analysis of linguistic input. This debate highlights the tension between "nativist" and "empiricist" perspectives on the origins of human cognition.',
    questions: [
      { id: 'q1', text: 'What does the "Poverty of the Stimulus" argument suggest?', options: ['Children learn language very slowly', 'The linguistic data children hear is insufficient to explain their rapid acquisition of grammar', 'Only wealthy families can afford to teach children to speak', 'Language is learned entirely through imitation'], correctAnswer: 'The linguistic data children hear is insufficient to explain their rapid acquisition of grammar' },
      { id: 'q2', text: 'How do cognitive linguists challenge Chomsky\'s UG theory?', options: ['By arguing that language is not important', 'By suggesting language acquisition relies on general-purpose learning mechanisms', 'By proving children never learn grammar', 'By stating only animals have innate language capacity'], correctAnswer: 'By suggesting language acquisition relies on general-purpose learning mechanisms' }
    ]
  },
  {
    id: 'r-h-16',
    skill: 'reading',
    level: 'hard',
    title: 'Great Oxidation',
    description: 'Read an account of the Earth\'s early atmosphere.',
    content: 'The Great Oxidation Event, occurring approximately 2.4 billion years ago, represents a monumental shift in Earth\'s atmospheric chemistry. Before the GOE, the atmosphere was predominantly "reducing," containing very little free oxygen. The proliferation of cyanobacteria, the first organisms capable of oxygenic photosynthesis, led to the steady accumulation of oxygen as a byproduct. Initially, this oxygen was absorbed by "sinks" such as dissolved iron in the oceans, forming banded iron formations. Once these sinks were saturated, oxygen began to accumulate in the atmosphere. This transition proved catastrophic for contemporary anaerobic life forms (an "oxygen catastrophe") but ultimately enabled the development of complex, multicellular life and the formation of the protective ozone layer, fundamentally altering the trajectory of biological evolution on our planet.',
    questions: [
      { id: 'q1', text: 'Which organism was primarily responsible for the Great Oxidation Event?', options: ['Dinosaurs', 'Cyanobacteria', 'Ancient trees', 'Early mammals'], correctAnswer: 'Cyanobacteria' },
      { id: 'q2', text: 'What was the immediate effect of oxygen accumulation on then-existing life forms?', options: ['A sudden increase in population', 'It was catastrophic for anaerobic life forms', 'It had no effect', 'It turned all life into plants'], correctAnswer: 'It was catastrophic for anaerobic life forms' }
    ]
  },
  {
    id: 'r-h-17',
    skill: 'reading',
    level: 'hard',
    title: 'Text Theory',
    description: 'Read a literary critique centered on Roland Barthes.',
    content: 'Roland Barthes\'s 1967 essay, "The Death of the Author," marked a significant turn in literary theory by challenging the traditional focus on the author\'s biography and intentions as the definitive source of a text\'s meaning. In post-structuralist thought, the "author" is not a creative genius but a function of the text itself. Barthes argues that meaning is not "discovered" but "produced" by the reader in the act of reading. Consequently, a text is seen as a multidimensional space where various writings, none of them original, blend and clash. This shift empowers the reader and acknowledges the inherent plurality of interpretations, asserting that the birth of the reader must come at the cost of the death of the Author. This perspective has profound implications for how we engage with literature, art, and the construction of meaning in a world of infinite intertextuality.',
    questions: [
      { id: 'q1', text: 'What is the central argument of "The Death of the Author"?', options: ['Authors should be physically removed', 'Meaning should be found in the author\'s biography', 'Meaning is produced by the reader rather than the author\'s intention', 'Only authors can understand their own work'], correctAnswer: 'Meaning is produced by the reader rather than the author\'s intention' },
      { id: 'q2', text: 'How does Barthes view the text in this essay?', options: ['As a simple message from one person to another', 'As a multidimensional space of blending and clashing writings', 'As a fixed object with a single meaning', 'As an irrelevant byproduct of the author\'s life'], correctAnswer: 'As a multidimensional space of blending and clashing writings' }
    ]
  },
  {
    id: 'r-h-18',
    skill: 'reading',
    level: 'hard',
    title: 'Free Market',
    description: 'Read an economic and political analysis of global policy.',
    content: 'The "Washington Consensus" refers to a set of ten economic policy prescriptions that became the standard reform package promoted for crisis-wracked developing countries by Washington, D.C.-based institutions like the IMF and the World Bank. Central to this consensus were the tenets of neoliberalism: fiscal discipline, market liberalization, privatization of state enterprises, and the deregulation of commerce. Proponents argued that these measures would stabilize economies and catalyze growth by integrating them into the global market. However, critics contend that the "one-size-fits-all" approach often ignored local socio-political contexts, exacerbated social inequality, and stripped developing nations of their economic sovereignty. The mixed outcomes of these policies across Latin America and elsewhere have led to a critical reassessment of the consensus and a search for alternative development models.',
    questions: [
      { id: 'q1', text: 'What are the core tenets of the "Washington Consensus"?', options: ['Increased state control and nationalization', 'Market liberalization, privatization, and deregulation', 'Isolationism and high tariffs', 'A focus on agricultural subsidies'], correctAnswer: 'Market liberalization, privatization, and deregulation' },
      { id: 'q2', text: 'What is a major criticism of the Washington Consensus mentioned in the text?', options: ['It was too focused on social welfare', 'It ignored local contexts and exacerbated inequality', 'It was only applied in Europe', 'It discouraged international trade'], correctAnswer: 'It ignored local contexts and exacerbated inequality' }
    ]
  },
  {
    id: 'r-h-19',
    skill: 'reading',
    level: 'hard',
    title: 'Chaos Theory',
    description: 'Read an advanced scientific summary of non-linear systems.',
    content: 'Chaos theory is a branch of mathematics focusing on the behavior of dynamical systems that are highly sensitive to initial conditions. This sensitivity, colloquially known as the "butterfly effect," suggests that a minute change in one part of a complex system—a butterfly flapping its wings in Brazil—can culminate in a massive change elsewhere, such as a tornado in Texas. Contrary to popular misconception, "chaos" in this context does not mean a lack of order, but rather an underlying pattern that is exceedingly difficult to predict over the long term. These systems are "deterministic" (their future is determined by their start) but "non-linear," making them effectively unpredictable. Chaos theory has profound applications in fields as diverse as meteorology, economics, and ecology, where interconnected variables create a web of complex, feedback-driven interactions.',
    questions: [
      { id: 'q1', text: 'What does the "butterfly effect" illustrate in chaos theory?', options: ['How insects affect the weather', 'The high sensitivity of systems to initial conditions', 'The orderliness of simple systems', 'That all large events are caused by butterflies'], correctAnswer: 'The high sensitivity of systems to initial conditions' },
      { id: 'q2', text: 'Are "chaotic" systems in this mathematical sense completely random?', options: ['Yes, there is no order at all', 'No, they have an underlying deterministic pattern but are non-linear', 'Only if they are simple', 'Only in the field of meteorology'], correctAnswer: 'No, they have an underlying deterministic pattern but are non-linear' }
    ]
  },
  {
    id: 'r-h-20',
    skill: 'reading',
    level: 'hard',
    title: 'Tech Gap',
    description: 'Read a complex study of software design and human behavior.',
    content: 'The "socio-technical gap" refers to the fundamental mismatch between what is socially required by human groups and what is technically feasible through existing digital collaboration tools. While humans engage in nuanced social processes such as establishing trust, managing nuance, and negotiating status through subtle verbal and non-verbal cues, digital platforms often reduce these interactions to rigid, data-driven structures. This gap frequently leads to misunderstandings, decreased social cohesion, and "algorithmic fatigue" in professional and social environments. To bridge this divide, researchers in Human-Computer Interaction (HCI) advocate for a more "socially-aware" design philosophy that prioritizes flexibility, ambient awareness, and the support of informal communication channels. However, balancing the efficiency of technical systems with the complex, often messy reality of human social dynamics remains an enduring challenge for the architecture of the modern digital landscape.',
    questions: [
      { id: 'q1', text: 'What is the "socio-technical gap"?', options: ['A lack of internet access in remote areas', 'The mismatch between social requirements and technical feasibility in digital tools', 'The difference in computer skills between generations', 'A software bug that affects social media'], correctAnswer: 'The mismatch between social requirements and technical feasibility in digital tools' },
      { id: 'q2', text: 'How do HCI researchers suggest bridging the socio-technical gap?', options: ['By making software more rigid', 'By ignoring informal communication', 'By advocating for a "socially-aware" design philosophy', 'By replacing human managers with AI'], correctAnswer: 'By advocating for a "socially-aware" design philosophy' }
    ]
  },
  {
    id: 'r-h-21',
    skill: 'reading',
    level: 'hard',
    title: 'Indus Script',
    description: 'Read about an undeciphered ancient writing system.',
    content: 'The Indus Valley Civilization, which flourished approximately 4,500 years ago in present-day Pakistan and northwest India, remains one of the world\'s most enigmatic ancient societies, largely due to the fact that its script remains undeciphered. Thousands of symbols have been found on seals, pottery, and amulets, yet despite numerous attempts using computational linguistics and statistical analysis, the underlying language—whether Dravidian, Indo-Aryan, or an isolate—has not been identified. A primary obstacle is the extreme brevity of the inscriptions, most being only four or five symbols long, which lack the bilingual "Rosetta Stone" equivalents found in other decipherment triumphs. While the sophisticated urban planning and maritime trade of the Indus people are well-documented archaeologically, their intellectual and religious worlds remain frustratingly out of reach until the script can be made to speak.',
    questions: [
      { id: 'q1', text: 'What is a major obstacle to deciphering the Indus Valley script?', options: ['The symbols are too large', 'The inscriptions are very brief and lack a bilingual key', 'The seals are all broken', 'The civilization had no trade'], correctAnswer: 'The inscriptions are very brief and lack a bilingual key' },
      { id: 'q2', text: 'What has computational linguistics revealed about the Indus script so far?', options: ['The names of their kings', 'Their religious beliefs in detail', 'That it is definitely an Indo-Aryan language', 'The underlying language has not yet been identified'], correctAnswer: 'The underlying language has not yet been identified' }
    ]
  },
  {
    id: 'r-h-22',
    skill: 'reading',
    level: 'hard',
    title: 'Great Divergence',
    description: 'Read an economic and historical analysis of the 19th Century.',
    content: 'The "Great Divergence" refers to the historical process by which the Western world (Western Europe and parts of the New World) emerged as the most powerful and wealthy civilization in the world during the 19th century, leaving behind previous technical and economic leaders like China and India. Historians such as Kenneth Pomeranz argue that while both regions had similar levels of commercial development and productivity in the late 18th century, the West\'s divergence was catalyzed by two crucial factors: the proximity of coal deposits to manufacturing centers and the vast resources extracted from colonial "ghost acreages" in the Americas. Others emphasize the role of institutional developments, such as property rights and the scientific revolution, in fostering continuous innovation. This debate continues to shape our understanding of global inequality and the origins of the modern industrial world.',
    questions: [
      { id: 'q1', text: 'What does the term "Great Divergence" describe?', options: ['The separation of church and state', 'The process by which the West became wealthier than previous global leaders', 'The end of the Industrial Revolution', 'A specific war in the 19th century'], correctAnswer: 'The process by which the West became wealthier than previous global leaders' },
      { id: 'q2', text: 'Which two factors does Kenneth Pomeranz highlight as catalysts for this divergence?', options: ['Large populations and good weather', 'Access to coal and resources from the Americas', 'A focus on art and music', 'Isolationism and high taxes'], correctAnswer: 'Access to coal and resources from the Americas' }
    ]
  },
  {
    id: 'r-h-23',
    skill: 'reading',
    level: 'hard',
    title: 'Loop Systems',
    description: 'Read an advanced theoretical text on control and communication.',
    content: 'Cybernetics, a term coined by mathematician Norbert Wiener in 1948, is the interdisciplinary study of the structure of regulatory systems. At its core is the concept of "feedback loops"—where a system\'s output is routed back as input as part of a chain of cause-and-effect that forms a circuit or loop. Wiener recognized that the principles of control and communication, whether in machines, biological organisms, or social organizations, are fundamentally the same. In biological systems, this is known as homeostasis, the process by which a self-regulating system maintains stability while adjusting to conditions that are optimal for survival. Wiener\'s work laid the theoretical groundwork for modern automation, computer science, and our understanding of how complex systems, from the human brain to global telecommunications, maintain order and purpose.',
    questions: [
      { id: 'q1', text: 'What is the central concept of cybernetics according to the text?', options: ['Digital storage', 'Feedback loops', 'High-speed processing', 'Visual displays'], correctAnswer: 'Feedback loops' },
      { id: 'q2', text: 'What term describes self-regulation in biological systems?', options: ['Symmetry', 'Evolution', 'Homeostasis', 'Metabolism'], correctAnswer: 'Homeostasis' }
    ]
  },
  {
    id: 'r-h-24',
    skill: 'reading',
    level: 'hard',
    title: 'Copernican Shift',
    description: 'Read a historical and philosophical analysis of Thomas Kuhn.',
    content: 'Thomas Kuhn\'s "The Structure of Scientific Revolutions" introduced the concept of "paradigm shifts" to describe the progress of science. Kuhn argued that science does not advance through the steady accumulation of knowledge but through periodic revolutions. A classic example is the Copernican Revolution, which shifted the astronomical paradigm from a geocentric (Earth-centered) to a heliocentric (Sun-centered) model of the universe. During periods of "normal science," researchers work within a prevailing paradigm. However, as "anomalies" accumulate that cannot be explained by the current model, a "crisis" occurs, eventually leading to the adoption of a new paradigm that better accounts for the data. This view suggests that scientific "truth" is often contextual and subject to fundamental reimagining.',
    questions: [
      { id: 'q1', text: 'How does Thomas Kuhn describe the progress of science?', options: ['A steady, linear accumulation of facts', 'Periodic revolutions leading to paradigm shifts', 'A series of random discovery events', 'A process dictated solely by religious authorities'], correctAnswer: 'Periodic revolutions leading to paradigm shifts' },
      { id: 'q2', text: 'What triggers a "crisis" in a scientific paradigm according to Kuhn?', options: ['A lack of funding', 'The accumulation of anomalies that the current model cannot explain', 'A global war', 'The death of a prominent scientist'], correctAnswer: 'The accumulation of anomalies that the current model cannot explain' }
    ]
  },
  {
    id: 'r-h-25',
    skill: 'reading',
    level: 'hard',
    title: 'Wild Wolves',
    description: 'Read an advanced ecological study of apex predators.',
    content: 'The reintroduction of gray wolves to Yellowstone National Park in 1995 provided a landmark case study in "trophic cascades"—a process where changes at the top of a food web propagate downward to lower levels. Before the wolves returned, the elk population had surged, leading to overgrazing of riparian vegetation such as willow and aspen. The presence of wolves not only reduced the elk population through predation but also altered their behavior, a phenomenon known as the "ecology of fear." Elk began avoiding open valleys where they were vulnerable, allowing the vegetation to recover. This, in turn, led to the return of beavers, who utilized the new wood for dams, creating ponds that supported fish, amphibians, and birds. The return of a single apex predator thus fundamentally reshaped the entire physical and biological landscape of the park.',
    questions: [
      { id: 'q1', text: 'What is a "trophic cascade" as described in the text?', options: ['A sudden flood in a national park', 'Changes at the top of a food web that affect lower levels', 'The migration of birds during winter', 'The process of soil erosion'], correctAnswer: 'Changes at the top of a food web that affect lower levels' },
      { id: 'q2', text: 'What was the "ecology of fear" effect on the elk?', options: ['They became aggressive toward humans', 'They changed their behavior and avoided open areas to stay safe', 'They stopped eating entirely', 'They moved to higher altitudes to stay cold'], correctAnswer: 'They changed their behavior and avoided open areas to stay safe' }
    ]
  },
  {
    id: 'r-h-26',
    skill: 'reading',
    level: 'hard',
    title: 'The Panopticon',
    description: 'Read a sociological analysis by Jeremy Bentham and Michel Foucault.',
    content: 'The Panopticon is a type of institutional building and a system of control designed by Jeremy Bentham in the 18th century. The architecture consists of a circular structure with an inspection house at its center, allowing a single guard to observe all inmates without them knowing whether they are being watched. Philosopher Michel Foucault later utilized the Panopticon as a metaphor for the "disciplinary society" of the modern era. He argued that the principle of "visible but unverifiable" surveillance leads individuals to internalize the gaze of authority, eventually regulating their own behavior out of the fear of being observed. This concept remains highly relevant in contemporary debates regarding digital privacy, data collection, and the power dynamics of the information age.',
    questions: [
      { id: 'q1', text: 'What is the primary architectural feature of a Panopticon?', options: ['High walls and no windows', 'A circular structure with a central observation point', 'Secret underground tunnels', 'Separate buildings for every person'], correctAnswer: 'A circular structure with a central observation point' },
      { id: 'q2', text: 'What was Michel Foucault\'s main point regarding the Panopticon metaphor?', options: ['That guards are more important than inmates', 'Surveillance leads individuals to internalize authority and regulate themselves', 'That prisons should be demolished', 'That technology makes circular buildings obsolete'], correctAnswer: 'Surveillance leads individuals to internalize authority and regulate themselves' }
    ]
  },
  {
    id: 'r-h-27',
    skill: 'reading',
    level: 'hard',
    title: 'Fermi Paradox',
    description: 'Read an advanced exploration of the lack of extraterrestrial contact.',
    content: 'The Fermi Paradox centers on the apparent contradiction between the high probability of the existence of extraterrestrial civilizations and the lack of evidence for, or contact with, such civilizations. Given the billions of stars in our galaxy, many of which are older than the Sun and likely host Earth-like planets, it stands to reason that intelligent life should be relatively common. Proposed solutions to the paradox range from the "Great Filter"—the idea that some stage of evolution is extremely difficult to pass—to the "Zoo Hypothesis," which suggests that advanced civilizations are intentionally avoiding contact with us. Others posit that our current technological search methods are simply too primitive or that advanced life may exist in forms that are unrecognizable to our current scientific understanding.',
    questions: [
      { id: 'q1', text: 'What is the core of the Fermi Paradox?', options: ['The difficulty of space travel', 'The contradiction between the likelihood of alien life and the lack of evidence', 'The high cost of building telescopes', 'The biological similarity between humans and aliens'], correctAnswer: 'The contradiction between the likelihood of alien life and the lack of evidence' },
      { id: 'q2', text: 'What does the "Great Filter" theory suggest?', options: ['Space is too dusty to see through', 'Some stage of evolution is extremely difficult for life to overcome', 'Aliens are filtering our radio signals', 'The universe is too young for other life'], correctAnswer: 'Some stage of evolution is extremely difficult for life to overcome' }
    ]
  },
  {
    id: 'r-h-28',
    skill: 'reading',
    level: 'hard',
    title: 'Berlin Meet 1884',
    description: 'Read a historical analysis of colonial partition.',
    content: 'The Berlin Conference of 1884–85, organized by Otto von Bismarck, was a pivotal event in the "Scramble for Africa," during which European powers negotiated their claims to African territories. The goal of the conference was to formalize the rules of colonial competition to avoid direct conflict between the European nations. Remarkably, no African representatives were invited to the conference, and the resulting boundaries were drawn with little regard for the existing cultural, linguistic, or political boundaries on the continent. This arbitrary partition of Africa laid the groundwork for decades of colonial exploitation and created the roots of many contemporary national conflicts and ethnic tensions that continue to impact the continent\'s geopolitical stability and development.',
    questions: [
      { id: 'q1', text: 'Who organized the Berlin Conference?', options: ['Queen Victoria', 'Otto von Bismarck', 'Napoleon III', 'King Leopold II'], correctAnswer: 'Otto von Bismarck' },
      { id: 'q2', text: 'What was a major criticism of how the African boundaries were drawn at the conference?', options: ['They were too small', 'They were drawn without African representation or regard for local cultures', 'They were only made of water', 'They were too expensive to maintain'], correctAnswer: 'They were drawn without African representation or regard for local cultures' }
    ]
  },
  {
    id: 'r-h-29',
    skill: 'reading',
    level: 'hard',
    title: 'Scientific Realism',
    description: 'Read a philosophical debate on the nature of scientific theories.',
    content: 'Scientific realism is the view that the universe described by science is real regardless of how it may be interpreted, and that scientific theories provide approximately true descriptions of that reality. Realists argue that the predictive success of science would be a "miracle" if its theories were not fundamentally accurate. However, anti-realists, or instrumentalists, contend that scientific theories should be viewed merely as useful tools for making predictions, rather than as literal descriptions of unobservable entities like quarks or black holes. They point to the history of science, where once-successful theories (like the caloric theory of heat) were later abandoned, as evidence for "pessimistic meta-induction." This debate touches on the fundamental question of whether human knowledge can truly grasp the "noumenal" world (the world as it is) or is limited to the "phenomenal" world (the world as it appears to us).',
    questions: [
      { id: 'q1', text: 'What is the "no miracles" argument in favor of scientific realism?', options: ['Science is a religion', 'The predictive success of science suggests its theories are approximately true', 'Science cannot explain everything', 'Scientists never make mistakes'], correctAnswer: 'The predictive success of science suggests its theories are approximately true' },
      { id: 'q2', text: 'What is the "instrumentalist" view of scientific theories?', options: ['Theories are literal descriptions of everything', 'Theories are just useful tools for making predictions', 'Theories are always wrong', 'Theories can only be proven with instruments'], correctAnswer: 'Theories are just useful tools for making predictions' }
    ]
  },
  {
    id: 'r-h-30',
    skill: 'reading',
    level: 'hard',
    title: 'Leap Forward',
    description: 'Read a historical overview of China\'s economic mobilization (1958-1962).',
    content: 'The "Great Leap Forward" was an economic and social campaign led by Mao Zedong and the Communist Party of China aimed at rapidly transforming the country from an agrarian economy into an industrialized socialist society. The strategy involved massive labor mobilization for infrastructure projects, the formation of rural communes, and the promotion of "backyard furnaces" for steel production. However, the campaign was characterized by administrative mismanagement, the falsification of production quotas, and a devastating neglect of agricultural output. The result was a catastrophic famine that led to the deaths of millions of people. Historically, the Great Leap remains a stark example of the potential for large-scale social engineering projects to yield disastrous unintended consequences when pursued without sound economic planning and institutional transparency.',
    questions: [
      { id: 'q1', text: 'What was the primary goal of the "Great Leap Forward"?', options: ['To increase tourism', 'To transform China into an industrialized socialist society', 'To colonize neighboring countries', 'To end all technology use'], correctAnswer: 'To transform China into an industrialized socialist society' },
      { id: 'q2', text: 'What was a major negative consequence of the campaign?', options: ['A sudden drop in the population of cities', 'A catastrophic famine resulting in millions of deaths', 'The end of the Communist Party', 'A surplus of usable steel'], correctAnswer: 'A catastrophic famine resulting in millions of deaths' }
    ]
  },
  {
    id: 'r-h-31',
    skill: 'reading',
    level: 'hard',
    title: 'CRISPR',
    description: 'Read an advanced technical overview of molecular biology.',
    content: 'CRISPR-Cas9 is a revolutionary gene-editing technology derived from a naturally occurring defense mechanism in bacteria. The system utilizes "guide RNA" (gRNA) to recognize specific DNA sequences and an enzyme, Cas9, which acts as a "molecular pair of scissors" to cleave the DNA at the target location. Once the DNA is cut, the cell\'s natural repair mechanisms can be utilized to either deactivate a gene or insert a new genetic sequence. The precision, speed, and cost-effectiveness of CRISPR have opened unprecedented possibilities in medicine, agriculture, and biotechnology, ranging from curing genetic disorders like sickle cell anemia to developing drought-resistant crops. However, the potential for "off-target" effects and the ethical implications of "germline" editing—which creates heritable changes—remain topics of intense scientific and ethical scrutiny.',
    questions: [
      { id: 'q1', text: 'What role does the Cas9 enzyme play in the CRISPR system?', options: ['It identifies the DNA sequence', 'It acts as "molecular scissors" to cut the DNA', 'It provides energy for the cell', 'It repairs the DNA sequence'], correctAnswer: 'It acts as "molecular scissors" to cut the DNA' },
      { id: 'q2', text: 'What is a major ethical concern regarding CRISPR-Cas9?', options: ['It is too expensive', 'It only works on plants', 'The potential for heritable "germline" editing', 'It requires too much energy'], correctAnswer: 'The potential for heritable "germline" editing' }
    ]
  },
  {
    id: 'r-h-32',
    skill: 'reading',
    level: 'hard',
    title: 'Alexandria Library',
    description: 'Read an account of the loss of ancient knowledge.',
    content: 'The Great Library of Alexandria, founded in the 3rd century BC in Hellenistic Egypt, is often remembered as the ultimate repository of ancient world knowledge. Legend suggests that its destruction marked the definitive end of classical science and literature, plunging Western civilization into the "Dark Ages." However, historical consensus indicates that the library\'s decline was a gradual process spanning several centuries, caused by a combination of budget cuts, changing political priorities, and multiple fires during various sieges of the city. While the loss of its collection was undoubtedly a cultural tragedy, scholars emphasize that much of the ancient knowledge survived through the continuous copying of texts elsewhere in the Mediterranean and the later transmission of works by Islamic scholars. The library remains a potent symbol of both human intellectual ambition and the fragility of our shared cultural heritage.',
    questions: [
      { id: 'q1', text: 'How do modern historians view the destruction of the Library of Alexandria?', options: ['As a single, sudden event', 'As a gradual decline spanning several centuries', 'As a myth that never actually happened', 'As a deliberate act by its own librarians'], correctAnswer: 'As a gradual decline spanning several centuries' },
      { id: 'q2', text: 'What helped preserve ancient knowledge despite the library\'s loss?', options: ['Photographic records', 'The continuous copying of texts in other regions and transmission by Islamic scholars', 'The recovery of the library\'s secret vault', 'Oral tradition only'], correctAnswer: 'The continuous copying of texts in other regions and transmission by Islamic scholars' }
    ]
  },
  {
    id: 'r-h-33',
    skill: 'reading',
    level: 'hard',
    title: 'Spy Limits',
    description: 'Read an advanced analysis of Shoshana Zuboff\'s theories.',
    content: 'Surveillance capitalism, a term popularized by Shoshana Zuboff, refers to a new economic order that claims human experience as free raw material for hidden commercial practices of extraction, prediction, and sales. In this model, personal data is not only used to improve services but is aggregated and analyzed to create "behavioral futures markets." These predictions about what individuals will do now, soon, and later are then sold to business customers. Zuboff argues that this represents a fundamental challenge to individual autonomy and the democratic order, as it replaces traditional market dynamics with an "instrumentarian power" that seeks to automate human behavior rather than merely monitor it. This pervasive digital architecture creates a profound imbalance of power between the "watchers" (capitalist corporations) and the "watched" (the general public).',
    questions: [
      { id: 'q1', text: 'What does "surveillance capitalism" claim as its "free raw material"?', options: ['Natural resources', 'Human experience and personal data', 'State-owned infrastructure', 'Agricultural land'], correctAnswer: 'Human experience and personal data' },
      { id: 'q2', text: 'What is "instrumentarian power" according to Zuboff?', options: ['The power of musical instruments', 'A power that seeks to automate human behavior', 'The physical force of the state', 'An equal balance between buyers and sellers'], correctAnswer: 'A power that seeks to automate human behavior' }
    ]
  },
  {
    id: 'r-h-34',
    skill: 'reading',
    level: 'hard',
    title: 'Irish Famine',
    description: 'Read about the socio-political impact of the potato blight.',
    content: 'The Great Famine, or the Great Hunger, was a period of mass starvation and disease in Ireland caused by the repeated failure of the potato crop due to the water mold Phytophthora infestans. While the blight was the immediate biological cause, historians emphasize that the famine was exacerbated by the prevailing socio-political structures of the time, particularly the system of absentee landlordism and the British government\'s adherence to "laissez-faire" economic policies. These policies restricted direct relief efforts and allowed for the continued export of grain from Ireland while millions were starving. The famine resulted in approximately one million deaths and prompted the emigration of over a million people, fundamentally altering Ireland\'s demographic profile and fostering a lasting legacy of political and social tension.',
    questions: [
      { id: 'q1', text: 'What was the immediate biological cause of the Great Famine in Ireland?', options: ['A drought', 'The potato blight (Phytophthora infestans)', 'A locust plague', 'A sudden drop in temperature'], correctAnswer: 'The potato blight (Phytophthora infestans)' },
      { id: 'q2', text: 'Why did laissez-faire policies make the famine worse according to the text?', options: ['They forced everyone to farm potatoes', 'They restricted direct relief and allowed food exports during the starvation', 'They made food too cheap', 'They encouraged people to stay in Ireland'], correctAnswer: 'They restricted direct relief and allowed food exports during the starvation' }
    ]
  },
  {
    id: 'r-h-35',
    skill: 'reading',
    level: 'hard',
    title: 'Sarcasm Detection',
    description: 'Read a complex study on linguistic irony.',
    content: 'Sarcasm detection is a sophisticated cognitive and linguistic task that involves recognizing a discrepancy between the literal meaning of a sentiment and its intended illocutionary force. Unlike straightforward communication, sarcasm often relies on "paralinguistic cues"—such as an exaggerated tone or specific facial expressions—and the shared contextual knowledge between the speaker and the listener. Research suggests that the right hemisphere of the brain plays a crucial role in processing these non-literal meanings. Furthermore, the ability to detect sarcasm is closely linked to "theory of mind," which is the capability to attribute mental states and intentions to others. For individuals with certain neurological conditions, such as autism spectrum disorder or specific types of brain injury, sarcasm can be notoriously difficult to decipher, as they may rely more heavily on literal interpretation.',
    questions: [
      { id: 'q1', text: 'What is "theory of mind" according to the text?', options: ['The ability to memorize long lists', 'The capability to attribute mental states and intentions to others', 'The study of brain anatomy', 'A specific type of sarcasm'], correctAnswer: 'The capability to attribute mental states and intentions to others' },
      { id: 'q2', text: 'Which part of the brain is specifically mentioned as important for processing sarcasm?', options: ['The left hemisphere', 'The right hemisphere', 'The cerebellum', 'The brainstem'], correctAnswer: 'The right hemisphere' }
    ]
  },
  {
    id: 'r-h-36',
    skill: 'reading',
    level: 'hard',
    title: 'Gold Standard',
    description: 'Read an advanced economic analysis of monetary policy.',
    content: 'A central paradox of the Great Depression is why a localized economic shock in the United States transformed into a decade-long global collapse. Many economic historians, such as Barry Eichengreen, point to the rigidity of the international gold standard as a primary culprit. Under the gold standard, nations were required to maintain a fixed exchange rate, which severely restricted their ability to implement expansionary monetary policies (such as lowering interest rates or increasing the money supply) during a downturn. To prevent gold outflows, central banks often raised interest rates, which further throttled economic activity. Research suggests that countries that abandoned the gold standard earlier—such as the United Kingdom in 1931—experienced a faster recovery than those that remained committed to it until the mid-1930s, highlighting the profound impact of monetary frameworks on global economic resilience.',
    questions: [
      { id: 'q1', text: 'How did the gold standard restrict economic policy during the Great Depression?', options: ['It made it easy to print money', 'It required fixed exchange rates, limiting expansionary monetary tools', 'It forced all countries to use common coins', 'It only allowed trade with the United States'], correctAnswer: 'It required fixed exchange rates, limiting expansionary monetary tools' },
      { id: 'q2', text: 'What was the economic outcome for countries that abandoned the gold standard early?', options: ['They never recovered', 'They experienced a faster economic recovery', 'They became completely isolated', 'They lost all their gold forever'], correctAnswer: 'They experienced a faster economic recovery' }
    ]
  },
  {
    id: 'r-h-37',
    skill: 'reading',
    level: 'hard',
    title: 'Social Roles',
    description: 'Read about the division of labor in advanced societies.',
    content: 'In the modern era, the division of labor has reach a state of "hyper-specialization," where professional roles are narrowed down to highly specific, expert domains. While this trend has led to unprecedented levels of efficiency and technical innovation, it also poses significant risks to cognitive flexibility and organizational resilience. As individuals become more insulated within their specialized silos, the "shared language" of common understanding often diminishes, leading to "knowledge silos" where collaboration across disciplines becomes increasingly difficult. Furthermore, the over-reliance on specialized knowledge can leave organizations vulnerable to "black swan" events—unexpected disruptions that fall outside the predictive models of narrow experts. Cultivating "T-shaped" individuals—those with deep expertise in one field but a broad understanding of others—is thus becoming a strategic necessity in the complex, interconnected global economy.',
    questions: [
      { id: 'q1', text: 'What is a "knowledge silo" as described in the text?', options: ['A large building for storing books', 'A state where collaboration is difficult because experts are isolated', 'A new type of computer database', 'A university library'], correctAnswer: 'A state where collaboration is difficult because experts are isolated' },
      { id: 'q2', text: 'What is a "T-shaped" individual in this context?', options: ['Someone who only knows one thing', 'Someone with deep expertise in one field and broad understanding of others', 'An expert in manufacturing "T" shaped objects', 'A person who works in many different cities'], correctAnswer: 'Someone with deep expertise in one field and broad understanding of others' }
    ]
  },
  {
    id: 'r-h-38',
    skill: 'reading',
    level: 'hard',
    title: 'Quantum Race',
    description: 'Read an advanced tech-policy analysis.',
    content: 'Scientific and geopolitical tensions have coalesced around the race for "quantum supremacy"—the point at which a quantum computer can perform a calculation that is practically impossible for even the world\'s most powerful classical supercomputers. Unlike classical bits, which exist as 0 or 1, quantum bits (qubits) leverage superposition and entanglement to exist in multiple states simultaneously, potentially enabling exponential increases in processing power. The implications of achieving supremacy are profound, particularly for cryptography; an advanced quantum computer could theoretically render current encryption methods obsolete, threatening the security of global financial and defense systems. Consequently, major powers are heavily investing in quantum research, leading to what some analysts describe as a "new Cold War" focused on the control of information and the future of computational dominance.',
    questions: [
      { id: 'q1', text: 'What defines the point of "quantum supremacy"?', options: ['When a quantum computer is the same speed as a PC', 'When it can perform a calculation impossible for classical supercomputers', 'When everyone owns a quantum computer', 'When a quantum computer can think like a human'], correctAnswer: 'When it can perform a calculation impossible for classical supercomputers' },
      { id: 'q2', text: 'What is a major security concern related to quantum computing?', options: ['It uses too much electricity', 'Its potential to render current encryption obsolete', 'It is too heavy to transport', 'It might start a physical fire'], correctAnswer: 'Its potential to render current encryption obsolete' }
    ]
  },
  {
    id: 'r-h-39',
    skill: 'reading',
    level: 'hard',
    title: 'Post-Truth Era',
    description: 'Read an advanced sociological text on information consumption.',
    content: 'The emergence of the "post-truth" era is intrinsically linked to the architecture of digital platforms and the algorithms that govern information dissemination. Recommendation engines, designed to maximize user engagement, often prioritize sensationalist or polarising content, creating "filter bubbles" where users are predominantly exposed to information that reinforces their pre-existing beliefs. This algorithmic bias facilitates the rapid spread of misinformation and erodes the shared reality necessary for collective democratic decision-making. Furthermore, the erosion of traditional "gatekeepers" of information—such as peer-reviewed journalism and academic institutions—has shifted the burden of truth-verification onto the individual consumer. Navigating this landscape requires a sophisticated level of digital literacy, yet the psychological tendency toward "confirmation bias" remains a powerful barrier to objective analysis.',
    questions: [
      { id: 'q1', text: 'What is a "filter bubble" as defined in the text?', options: ['A protective layer for computer screens', 'A digital environment where users only see belief-reinforcing info', 'A physical space with clean air', 'A new type of social media account'], correctAnswer: 'A digital environment where users only see belief-reinforcing info' },
      { id: 'q2', text: 'Why is the individual consumer\'s burden larger in the post-truth era?', options: ['The internet is more expensive', 'Traditional gatekeepers of info have been eroded', 'There is less information available', 'Everyone must write their own news'], correctAnswer: 'Traditional gatekeepers of info have been eroded' }
    ]
  },
  {
    id: 'r-h-40',
    skill: 'reading',
    level: 'hard',
    title: 'Anthropic Principle',
    description: 'Read a deep philosophical and scientific exploration of the universe.',
    content: 'The Anthropic Principle is a philosophical consideration that observations of the physical universe must be compatible with the conscious life that observes it. In its "weak" form, it suggests that the fundamental constants of physics—such as the strength of gravity or the mass of an electron—appear "fine-tuned" for life precisely because, if they were different, we wouldn\'t be here to observe them. Critics argue that this is a tautology (a circular argument) and not a true scientific explanation. However, the principle has gained significant traction in the context of the "multiverse" theory, which posits that our universe is just one of an infinite number of universes, each with different physical laws. In this view, we naturally find ourselves in one of the rare universes that can support complex biological life. This intersection of physics and philosophy continues to challenge our understanding of necessity, chance, and the nature of existence.',
    questions: [
      { id: 'q1', text: 'What does the "weak" Anthropic Principle suggest?', options: ['Life is very weak and fragile', 'Observations of the universe must be compatible with the life observing it', 'Gravity is stronger than other forces', 'The universe is too small for aliens'], correctAnswer: 'Observations of the universe must be compatible with the life observing it' },
      { id: 'q2', text: 'How does the "multiverse" theory relate to the Anthropic Principle?', options: ['It proves the principle is wrong', 'It suggests we inhabit one of the rare universes capable of supporting life', 'It requires everyone to believe in the principle', 'It only works if the principle is ignored'], correctAnswer: 'It suggests we inhabit one of the rare universes capable of supporting life' }
    ]
  }
];

export const extraReadingPractices = [
  ...readingEasyPractices,
  ...readingMediumPractices,
  ...readingHardPractices
];
