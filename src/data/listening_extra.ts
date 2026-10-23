import { Practice } from '../types';

export const extraListeningPractices: Practice[] = [
  // --- EASY ---
  {
    id: 'l-e-12',
    skill: 'listening',
    level: 'easy',
    title: 'Grocery List',
    description: 'A person checking their shopping list over the phone.',
    content: 'Transcript: "Hi, I\'m at the supermarket. Do we need anything else?" "Let me see... We need a carton of orange juice, a loaf of wholemeal bread, and some red grapes." "Okay, anything for dinner?" "Yes, could you pick up two large steaks and a bag of spinach?" "Got it. See you in a bit."',
    questions: [
      { id: 'q1', text: 'Which fruit is on the list?', options: ['Apples', 'Bananas', 'Red grapes', 'Strawberries'], correctAnswer: 'Red grapes' },
      { id: 'q2', text: 'How many steaks are needed?', options: ['One', 'Two', 'Three', 'Four'], correctAnswer: 'Two' }
    ]
  },
  {
    id: 'l-e-13',
    skill: 'listening',
    level: 'easy',
    title: 'Apartment Rules',
    description: 'A landlord explaining some basic rules to a new tenant.',
    content: 'Transcript: "Here are your keys. Just a few things to remember: trash collection is every Tuesday morning, so put your bins out on Monday night. Also, please keep noise to a minimum after 10 PM. If you have any maintenance issues, just send me a text." "Where do I park my car?" "You have one reserved space, number 4, in the back lot."',
    questions: [
      { id: 'q1', text: 'When is trash collected?', options: ['Monday', 'Tuesday', 'Wednesday', 'Saturday'], correctAnswer: 'Tuesday' },
      { id: 'q2', text: 'Which parking space does the tenant have?', options: ['Space 1', 'Space 4', 'Space 10', 'Space 14'], correctAnswer: 'Space 4' }
    ]
  },
  // Adding more in placeholders to reach 40 later...
  {
    id: 'l-e-14',
    skill: 'listening',
    level: 'easy',
    title: 'Weekend Weather',
    description: 'A short radio weather forecast.',
    content: 'Transcript: "Saturday will be a beautiful day with clear skies and a high of 25 degrees. Perfect for a picnic! However, expect a change on Sunday morning as a cold front moves in, bringing scattered showers and much cooler air." "The rain will likely stop by Sunday evening."',
    questions: [
      { id: 'q1', text: 'What is the high temperature for Saturday?', options: ['15 degrees', '20 degrees', '25 degrees', '30 degrees'], correctAnswer: '25 degrees' },
      { id: 'q2', text: 'When is the rain expected?', options: ['Saturday morning', 'Saturday night', 'Sunday morning', 'Sunday night'], correctAnswer: 'Sunday morning' }
    ]
  },
  // --- MEDIUM ---
  {
    id: 'l-m-9',
    skill: 'listening',
    level: 'medium',
    title: 'Job Interview Advice',
    description: 'A careers advisor giving tips for a successful interview.',
    content: 'Transcript: "When preparing for an interview, research the company thoroughly so you can ask intelligent questions. Dress professionally, even if the office has a casual dress code. During the interview, focus on your achievements and how they can benefit the company. Use specific examples from your past work to demonstrate your skills. Finally, send a brief thank-you email within 24 hours of the interview to show your continued interest."',
    questions: [
      { id: 'q1', text: 'What should you do before the interview?', options: ['Research the company', 'Buy new clothes', 'Memorize a script', 'Call the manager'], correctAnswer: 'Research the company' },
      { id: 'q2', text: 'When should you send a thank-you email?', options: ['Immediately after', 'Within 24 hours', 'After 3 days', 'Next week'], correctAnswer: 'Within 24 hours' }
    ]
  },
  {
    id: 'l-m-10',
    skill: 'listening',
    level: 'medium',
    title: 'The History of the Clock Tower',
    description: 'A tour guide talking about a local landmark.',
    content: 'Transcript: "The clock tower you see in front of you was completed in 1892 to celebrate the city\'s 50th anniversary. It stands 45 meters tall and was once the tallest structure in the region. The clock mechanism was imported from Switzerland and still keeps perfect time today. Interestingly, the bell inside, which weighs over two tons, was cast from recycled bronze cannons. The tower was restored in 1985 after a fire damaged the wooden staircase inside."',
    questions: [
      { id: 'q1', text: 'In what year was the clock tower completed?', options: ['1842', '1892', '1950', '1985'], correctAnswer: '1892' },
      { id: 'q2', text: 'What was the bell made from?', options: ['New silver', 'Recycled bronze cannons', 'Iron ore', 'Gold plating'], correctAnswer: 'Recycled bronze cannons' }
    ]
  },
  // --- HARD ---
  {
    id: 'l-h-5',
    skill: 'listening',
    level: 'hard',
    title: 'Classic Art',
    description: 'An art history lecture focused on light and perspective in the 15th century.',
    content: 'Transcript: "One of the most significant developments of the High Renaissance was the mastery of \'chiaroscuro,\' which involves the dramatic use of light and shadow to create a sense of three-dimensionality. Artists like Leonardo da Vinci utilized this technique to give their figures more depth and realism. Furthermore, the implementation of linear perspective allowed painters to create the illusion of space on a flat surface, drawing the viewer\'s eye towards a central vanishing point. These advancements were not merely aesthetic but reflected a broader humanistic shift in society, prioritizing the observation of the natural world and the human experience."',
    questions: [
      { id: 'q1', text: 'What does "chiaroscuro" refer to?', options: ['A type of brush', 'Use of light and shadow', 'Painting on wet plaster', 'The choice of models'], correctAnswer: 'Use of light and shadow' },
      { id: 'q2', text: 'What was the societal shift reflected in these art advancements?', options: ['Rise of religious dogmatism', 'Economic depression', 'Humanistic shift', 'Focus on abstract art'], correctAnswer: 'Humanistic shift' }
    ]
  },
  {
    id: 'l-h-6',
    skill: 'listening',
    level: 'hard',
    title: 'How We Decide',
    description: 'A discussion on the role of emotion versus logic in human choices.',
    content: 'Transcript: "While we like to think of ourselves as logical beings, research in cognitive psychology reveals that our decisions are deeply influenced by our emotional state. The \'affect heuristic\' suggests that we often rely on our immediate feelings—whether a choice \'feels\' good or bad—rather than conducting a complex cost-benefit analysis. This is particularly evident in high-stakes situations where time is limited. For instance, a person might choose a less effective investment simply because they have a positive association with the company name. This emotional shortcut allows for rapid decision-making but often leads to significant cognitive errors in the long run."',
    questions: [
      { id: 'q1', text: 'What is the "affect heuristic"?', options: ['A way to count numbers', 'Relying on immediate feelings', 'A logical math formula', 'Studying others\' choices'], correctAnswer: 'Relying on immediate feelings' },
      { id: 'q2', text: 'What is a benefit of emotional shortcuts mentioned?', options: ['Better accuracy', 'Faster decision-making', 'Lower stress', 'Expert knowledge'], correctAnswer: 'Faster decision-making' }
    ]
  },
  // --- BATCH 5: MORE PRACTICES ---
  {
    id: 'l-e-15',
    skill: 'listening',
    level: 'easy',
    title: 'Weekend Barbecue',
    description: 'Inviting a friend to a barbecue.',
    content: 'Transcript: "Hey, are you free this Sunday? I\'m hosting a barbecue at my place." "That sounds great! What time should I come over?" "Around 2:00 PM. I\'ll be grilling some burgers and corn on the cob." "Do you want me to bring anything?" "Could you bring some ice? I always run out." "Sure, no problem. See you Sunday!"',
    questions: [
      { id: 'q1', text: 'What day is the barbecue?', options: ['Friday', 'Saturday', 'Sunday', 'Monday'], correctAnswer: 'Sunday' },
      { id: 'q2', text: 'What is the guest asked to bring?', options: ['Burgers', 'Corn', 'Ice', 'Drinks'], correctAnswer: 'Ice' }
    ]
  },
  {
    id: 'l-e-16',
    skill: 'listening',
    level: 'easy',
    title: 'New Pet Advice',
    description: 'A conversation about getting a new puppy.',
    content: 'Transcript: "I\'m thinking of getting a puppy, but I\'m not sure which breed is best for an apartment." "Well, you should look for a smaller dog with moderate energy levels. A French Bulldog or a Pug would be a good choice." "Are they easy to train?" "They are generally friendly but can be a bit stubborn. You\'ll need to be patient and use lots of treats for positive reinforcement."',
    questions: [
      { id: 'q1', text: 'Where does the person live?', options: ['A farm', 'A large house', 'An apartment', 'A dormitory'], correctAnswer: 'An apartment' },
      { id: 'q2', text: 'What is recommended for training?', options: ['Strict rules', 'Positive reinforcement with treats', 'Long walks', 'Professional trainer'], correctAnswer: 'Positive reinforcement with treats' }
    ]
  },
  {
    id: 'l-m-11',
    skill: 'listening',
    level: 'medium',
    title: 'Remote Work',
    description: 'A podcast discussing the shifts in workplace culture.',
    content: 'Transcript: "The pandemic accelerated a trend that was already in motion: the shift towards remote and hybrid work models. While some companies are insisting on a full return to the office, many others are finding that their employees are more productive when given the flexibility to work from home. However, this shift presents challenges for team cohesion and spontaneous collaboration. To address this, some firms are redesigning their physical offices to be collaboration hubs—places where people come specifically for meetings and social interaction, while doing their focused work at home."',
    questions: [
      { id: 'q1', text: 'What is a challenge of remote work according to the text?', options: ['Lower productivity', 'Team cohesion', 'Higher costs', 'Lack of technology'], correctAnswer: 'Team cohesion' },
      { id: 'q2', text: 'How are some companies redesigning their offices?', options: ['Adding more desks', 'Creating collaboration hubs', 'Closing them completely', 'Making them soundproof'], correctAnswer: 'Creating collaboration hubs' }
    ]
  },
  {
    id: 'l-h-7',
    skill: 'listening',
    level: 'hard',
    title: 'Lecture: Gene Ethics',
    description: 'A rigorous academic look at the implications of CRISPR technology.',
    content: 'Transcript: "The advent of CRISPR-Cas9 technology has revolutionized our ability to edit genomes with unprecedented precision. While the potential for curing hereditary diseases like sickle cell anemia is immense, the ability to make germline edits—changes that are passed down to future generations—raises profound ethical dilemmas. Critics argue that this could lead to \'designer babies,\' exacerbating social inequalities and creating a new form of genetic hierarchy. Furthermore, the long-term ecological consequences of gene drives, which can alter entire populations of species in the wild, remain largely unknown. As a society, we must establish robust international frameworks to govern the application of these powerful tools."',
    questions: [
      { id: 'q1', text: 'What are germline edits?', options: ['Edits to skin cells', 'Changes passed to future generations', 'Temporary medical fixes', 'Plants made for food'], correctAnswer: 'Changes passed to future generations' },
      { id: 'q2', text: 'What is a concern regarding the use of gene drives?', options: ['High cost', 'Slow adoption', 'Unknown ecological consequences', 'Lack of precision'], correctAnswer: 'Unknown ecological consequences' }
    ]
  },
  {
    id: 'l-e-17',
    skill: 'listening',
    level: 'easy',
    title: 'Bike Rental',
    description: 'Renting a bike for a day.',
    content: 'Transcript: "Hi, I\'d like to rent a mountain bike for eight hours." "Sure, that will be $35. Does that include a helmet?" "Yes, the helmet and a lock are included in the price. We just need a copy of your ID." "Okay, here is my driver\'s license. Do I need to return it to this location?" "Yes, we close at 6 PM."',
    questions: [
      { id: 'q1', text: 'How long does the person want to rent the bike?', options: ['4 hours', '8 hours', 'One day', 'Two days'], correctAnswer: '8 hours' },
      { id: 'q2', text: 'What is included in the rental price?', options: ['Gloves', 'A map', 'A helmet and lock', 'Insurance'], correctAnswer: 'A helmet and lock' }
    ]
  },
  {
    id: 'l-e-18',
    skill: 'listening',
    level: 'easy',
    title: 'Gym Membership',
    description: 'Inquiring about gym fees.',
    content: 'Transcript: "I\'m interested in joining the gym. What are your monthly rates?" "We have a basic plan for $40 a month, which includes access to all equipment. Or our premium plan for $65, which also includes all fitness classes and the sauna." "Is there a joining fee?" "Yes, there is a one-time registration fee of $25."',
    questions: [
      { id: 'q1', text: 'How much is the premium monthly plan?', options: ['$25', '$40', '$65', '$100'], correctAnswer: '$65' },
      { id: 'q2', text: 'What is the registration fee?', options: ['$10', '$25', '$40', '$65'], correctAnswer: '$25' }
    ]
  },
  {
    id: 'l-m-12',
    skill: 'listening',
    level: 'medium',
    title: 'Urban Gardening Trends',
    description: 'A short talk on the growth of city-based agriculture.',
    content: 'Transcript: "Urban gardening is more than just a hobby; it\'s a response to the growing need for sustainable food sources in densely populated areas. From rooftop farms in New York to community allotments in London, city dwellers are transforming grey spaces into productive green ones. While the primary benefit is fresh Produce, these gardens also help reduce city temperatures and improve air quality. However, urban gardeners often face challenges such as soil contamination and limited access to water. Community-led initiatives are working with local governments to provide better resources for these aspiring urban farmers."',
    questions: [
      { id: 'q1', text: 'What is one environmental benefit of urban gardens?', options: ['Reducing noise', 'Reducing city temperatures', 'Increasing rainfall', 'Attracting predators'], correctAnswer: 'Reducing city temperatures' },
      { id: 'q2', text: 'What challenge do urban gardeners often face?', options: ['Too much space', 'Limited access to water', 'High taxes', 'Public complaints'], correctAnswer: 'Limited access to water' }
    ]
  },
  {
    id: 'l-m-13',
    skill: 'listening',
    level: 'medium',
    title: 'Micro Loans Impact',
    description: 'A discussion on how small loans can change lives in developing nations.',
    content: 'Transcript: "Microfinance has been hailed as a powerful tool for poverty alleviation. By providing small, low-interest loans to individuals who lack access to traditional banking services, microfinance institutions empower entrepreneurs to start or expand small businesses. This is particularly impactful for women, who often reinvest their earnings into their families\' education and health. However, critics point out that high interest rates in some regions and the risk of over-indebtedness can sometimes trap borrowers in a cycle of debt. To be effective, microfinance must be combined with financial literacy training and social support systems."',
    questions: [
      { id: 'q1', text: 'Who is mentioned as being particularly impacted by microfinance?', options: ['Large corporations', 'Wealthy investors', 'Women entrepreneurs', 'Government officials'], correctAnswer: 'Women entrepreneurs' },
      { id: 'q2', text: 'What is one criticism of microfinance discussed?', options: ['Lack of interest', 'Risk of over-indebtedness', 'Too much government control', 'Only for urban areas'], correctAnswer: 'Risk of over-indebtedness' }
    ]
  },
  {
    id: 'l-h-8',
    skill: 'listening',
    level: 'hard',
    title: 'Neural Networks',
    description: 'A high-level overview of how AI mimicking the human brain functions.',
    content: 'Transcript: "At the heart of modern artificial intelligence are artificial neural networks, which are loosely inspired by the biological structures of the human brain. These networks consist of layers of interconnected nodes, or \'neurons,\' that process information through weighted connections. During the training phase, the network adjusts these weights based on the input data to minimize the error in its predictions. For example, a deep neural network for image recognition might learn to identify simple shapes in the first layers and complex objects in the later ones. While highly effective, these systems are often described as \'black boxes\' because it can be extremely difficult for humans to understand exactly how the network arrives at a particular decision."',
    questions: [
      { id: 'q1', text: 'What inspired the structure of artificial neural networks?', options: ['Computer chips', 'The human brain', 'Ant colonies', 'Galactic patterns'], correctAnswer: 'The human brain' },
      { id: 'q2', text: 'Why are these systems called "black boxes"?', options: ['They are physically black', 'The code is hidden', 'It\'s hard to understand their decision process', 'They only work in the dark'], correctAnswer: 'It\'s hard to understand their decision process' }
    ]
  },
  {
    id: 'l-e-19',
    skill: 'listening',
    level: 'easy',
    title: 'At the Post Office',
    description: 'Sending a parcel abroad.',
    content: 'Transcript: "Help with this parcel, please. I\'d like to send it to Australia." "No problem. Would you like to send it by standard or express mail?" "Express, please. How long will it take?" "It should arrive in about five working days. That will be $42." "Okay. Do I need to fill out a customs form?" "Yes, just list the contents and their value here."',
    questions: [
      { id: 'q1', text: 'Where is the parcel going?', options: ['USA', 'Australia', 'Canada', 'South Africa'], correctAnswer: 'Australia' },
      { id: 'q2', text: 'How long will the express mail take?', options: ['2 days', '5 working days', '10 days', '2 weeks'], correctAnswer: '5 working days' }
    ]
  },
  {
    id: 'l-e-20',
    skill: 'listening',
    level: 'easy',
    title: 'Buying a Gift',
    description: 'A customer looking for a birthday present.',
    content: 'Transcript: "I\'m looking for a gift for my daughter. She\'s turning eight next week." "What does she like? We have a great selection of board games, building blocks, and art kits." "She loves drawing and painting." "Then I\'d recommend this deluxe art set. It has forty-eight colored pencils, watercolors, and a sketchpad for $25." "That looks perfect, I\'ll take it."',
    questions: [
      { id: 'q1', text: 'How old is the daughter turning?', options: ['Five', 'Six', 'Eight', 'Ten'], correctAnswer: 'Eight' },
      { id: 'q2', text: 'What gift did the customer choose?', options: ['Board game', 'Building blocks', 'Art set', 'Storybook'], correctAnswer: 'Art set' }
    ]
  },
  {
    id: 'l-m-14',
    skill: 'listening',
    level: 'medium',
    title: 'Office Setup',
    description: 'A health and safety officer giving a talk on office posture.',
    content: 'Transcript: "Proper ergonomics at your desk is essential to prevent long-term back and neck pain. Start by adjusting your chair height so that your feet are flat on the floor and your knees are at a 90-degree angle. Your computer monitor should be at eye level, roughly an arm\'s length away. Furthermore, try to take a short break every forty-five minutes to stretch and rest your eyes. These small changes can significantly reduce fatigue and increase your comfort throughout the workday."',
    questions: [
      { id: 'q1', text: 'Where should your computer monitor be positioned?', options: ['Above eye level', 'Below eye level', 'At eye level', 'As close as possible'], correctAnswer: 'At eye level' },
      { id: 'q2', text: 'How often should you take a break?', options: ['Every 15 minutes', 'Every 45 minutes', 'Every 2 hours', 'Only at lunch'], correctAnswer: 'Every 45 minutes' }
    ]
  },
  {
    id: 'l-m-15',
    skill: 'listening',
    level: 'medium',
    title: 'Green Fashion',
    description: 'A blogger discussing the environmental impact of the clothing industry.',
    content: 'Transcript: "The fashion industry is responsible for about 10% of global carbon emissions and is a major consumer of water. Fast fashion, in particular, encourages a cycle of consumption that is simply not sustainable. To make a difference, consider buying fewer high-quality items that last longer, or shopping at second-hand stores. Look for clothing made from organic materials like cotton or linen, which have a lower environmental footprint. Many brands are also now offering repair services to extend the life of their garments."',
    questions: [
      { id: 'q1', text: 'What percentage of global carbon emissions is the fashion industry responsible for?', options: ['2%', '5%', '10%', '25%'], correctAnswer: '10%' },
      { id: 'q2', text: 'What is one suggestion for being more sustainable?', options: ['Buy more cheap clothes', 'Buy high-quality items', 'Only wear synthetic fabrics', 'Wash clothes every day'], correctAnswer: 'Buy high-quality items' }
    ]
  },
  {
    id: 'l-h-9',
    skill: 'listening',
    level: 'hard',
    title: 'Black Holes',
    description: 'An advanced lecture on the nature of celestial singularities.',
    content: 'Transcript: "Black holes are some of the most mysterious objects in the universe, regions of spacetime where gravity is so intense that nothing—not even light—can escape. According to Einstein\'s general theory of relativity, a sufficiently compact mass can deform spacetime to form a black hole. Surrounding the black hole is a boundary called the \'event horizon,\' beyond which there is no return. While we cannot observe black holes directly, their presence is inferred through their interaction with surrounding matter and the gravitational waves produced during their formation or merger. Recent advancements in radio interferometry have even allowed us to capture the first images of the shadow of a supermassive black hole at the center of a distant galaxy."',
    questions: [
      { id: 'q1', text: 'What is the "event horizon"?', options: ['The center of a galaxy', 'A type of telescope', 'The boundary beyond which nothing can escape', 'The light produced by a star'], correctAnswer: 'The boundary beyond which nothing can escape' },
      { id: 'q2', text: 'How do scientists primarily infer the presence of black holes?', options: ['Through direct observation', 'Through their interaction with surrounding matter', 'By counting stars', 'Using radio signals from aliens'], correctAnswer: 'Through their interaction with surrounding matter' }
    ]
  },
  {
    id: 'l-e-21',
    skill: 'listening',
    level: 'easy',
    title: 'Booking a Taxi',
    description: 'A person calling to book a ride to the station.',
    content: 'Transcript: "City Cabs, how can I help?" "Hi, I need a taxi to the central station for 6:30 tomorrow morning." "Okay, what\'s the pickup address?" "It\'s 102 Park View, near the hospital." "Got it. That will be a fixed price of $15. We\'ll send you a text when the driver is outside." "Thank you."',
    questions: [
      { id: 'q1', text: 'Where does the person want to go?', options: ['The hospital', 'The central station', 'The airport', 'A hotel'], correctAnswer: 'The central station' },
      { id: 'q2', text: 'What is the pickup time?', options: ['6:00 AM', '6:30 AM', '7:00 AM', '7:30 AM'], correctAnswer: '6:30 AM' }
    ]
  },
  {
    id: 'l-e-22',
    skill: 'listening',
    level: 'easy',
    title: 'Weekend Camping Trip',
    description: 'Planning what to pack for a camping trip.',
    content: 'Transcript: "Are we almost ready for the camping trip?" "I think so. I\'ve packed the tent and the sleeping bags." "Don\'t forget the portable stove and some extra fuel." "Oh, right. And we should definitely bring some powerful flashlights and spare batteries." "I\'ve already got those in the backpack. Let\'s not forget the first-aid kit either."',
    questions: [
      { id: 'q1', text: 'What has the person already packed?', options: ['Portable stove', 'Sleeping bags', 'Flashlights', 'First-aid kit'], correctAnswer: 'Sleeping bags' },
      { id: 'q2', text: 'Which item was nearly forgotten?', options: ['Tent', 'Backpack', 'Portable stove', 'Fuel'], correctAnswer: 'Portable stove' }
    ]
  },
  {
    id: 'l-m-16',
    skill: 'listening',
    level: 'medium',
    title: 'Modern Art',
    description: 'A gallery curator talking about an abstract expressionist exhibit.',
    content: 'Transcript: "The exhibition you are about to see focuses on the Abstract Expressionist movement of the mid-20th century. This style is characterized by its emphasis on spontaneous, subconscious creation, often using large-scale canvases and bold, gestural brushstrokes. Rather than depicting the physical world, these artists sought to convey raw emotion and human experience. You notice that many of the works lack a clear focal point, inviting the viewer to engage with the canvas in a more immersive and personal way. Take your time to move around each piece and observe how the different layers of paint interact with one another."',
    questions: [
      { id: 'q1', text: 'What was a key feature of Abstract Expressionism?', options: ['Realistic portraits', 'Spontaneous creation', 'Small delicate paintings', 'Strict geometric patterns'], correctAnswer: 'Spontaneous creation' },
      { id: 'q2', text: 'What should viewers do while looking at the art?', options: ['Take photos', 'Move around each piece', 'Find a clear focal point', 'Copy the brushstrokes'], correctAnswer: 'Move around each piece' }
    ]
  },
  {
    id: 'l-h-10',
    skill: 'listening',
    level: 'hard',
    title: 'Quantum Physics',
    description: 'An advanced physics lecture on one of the weirdest phenomena in the universe.',
    content: 'Transcript: "Quantum entanglement is a phenomenon that Einstein famously described as \'spooky action at a distance.\' It occurs when two or more particles become linked in such a way that the quantum state of each particle cannot be described independently of the others, even when the particles are separated by vast distances. When a measurement is performed on one particle, the state of its entangled partner changes instantaneously, regardless of the distance between them. This seemingly violates the principle of locality and the idea that nothing can travel faster than the speed of light. Modern experiments have consistently confirmed this phenomenon, which forms the basis for emerging technologies in quantum computing and secure communication-known as quantum cryptography."',
    questions: [
      { id: 'q1', text: 'What did Einstein call quantum entanglement?', options: ['Magic at a distance', 'Spooky action at a distance', 'Invisible strings', 'Particle links'], correctAnswer: 'Spooky action at a distance' },
      { id: 'q2', text: 'In what technological field is entanglement particularly important?', options: ['Classical mechanics', 'Traditional radio', 'Quantum cryptography', 'Steam power'], correctAnswer: 'Quantum cryptography' }
    ]
  },
  {
    id: 'l-e-23',
    skill: 'listening',
    level: 'easy',
    title: 'Movie Review: Space Adventure',
    description: 'A short review of a new science fiction film.',
    content: 'Transcript: "I saw \'Space Adventure\' last night and it was actually quite good. The special effects were amazing, especially the scenes on the alien planet. However, the story was a bit predictable and some of the acting was a little wooden. Overall, it\'s a fun movie for the whole family, and children will definitely love the robot character named Sparky."',
    questions: [
      { id: 'q1', text: 'What did the reviewer like most about the movie?', options: ['The acting', 'The special effects', 'The unpredictable story', 'The soundtrack'], correctAnswer: 'The special effects' },
      { id: 'q2', text: 'Who is Sparky?', options: ['The main hero', 'A robot character', 'The alien king', 'The ship\'s captain'], correctAnswer: 'A robot character' }
    ]
  },
  {
    id: 'l-e-24',
    skill: 'listening',
    level: 'easy',
    title: 'Baking a Chocolate Cake',
    description: 'A person following a simple recipe over the phone.',
    content: 'Transcript: "Okay, I\'ve got the flour and the sugar. What\'s next?" "Add three large eggs and half a cup of cocoa powder." "Got it. Do I add the milk now?" "Not yet. First, stir in the melted butter, then add the milk gradually until the batter is smooth." "How long do I bake it for?" "For about thirty-five minutes at 180 degrees."',
    questions: [
      { id: 'q1', text: 'How many eggs are needed?', options: ['One', 'Two', 'Three', 'Four'], correctAnswer: 'Three' },
      { id: 'q2', text: 'How long should the cake be baked?', options: ['20 minutes', '35 minutes', '45 minutes', '60 minutes'], correctAnswer: '35 minutes' }
    ]
  },
  {
    id: 'l-m-17',
    skill: 'listening',
    level: 'medium',
    title: 'Office Manners',
    description: 'An HR manager discussing professional behavior in the office.',
    content: 'Transcript: "Maintaining professional etiquette in the workplace is vital for a positive team environment. This includes simple things like being on time for meetings and respecting the communal spaces, such as the kitchen. Please ensure you clean up after yourself. Also, be mindful of noise levels in open-plan areas; if you need to have a long conversation, try to book a small meeting room or huddle space. These habits help everyone stay focused and feel respected during the workday."',
    questions: [
      { id: 'q1', text: 'What should employees do if they need to have a long conversation?', options: ['Talk at their desks', 'Use a small meeting room', 'Go outside', 'Wait until after work'], correctAnswer: 'Use a small meeting room' },
      { id: 'q2', text: 'Which area is specifically mentioned regarding cleanliness?', options: ['The lobby', 'The kitchen', 'The parking lot', 'The printer room'], correctAnswer: 'The kitchen' }
    ]
  },
  {
    id: 'l-m-18',
    skill: 'listening',
    level: 'medium',
    title: 'Healthy Sleep Habits',
    description: 'A health expert explaining the importance of a sleep routine.',
    content: 'Transcript: "Most adults require between seven and nine hours of quality sleep per night to function at their best. Establishing a consistent sleep routine is one of the most effective ways to achieve this. Try to go to bed and wake up at the same time every day, even on weekends. Avoid using screens—such as phones or laptops—at least an hour before bed, as the blue light can interfere with your sleep hormone, melatonin. Instead, try reading a physical book or listening to calming music to help your body wind down."',
    questions: [
      { id: 'q1', text: 'How many hours of sleep are recommended for adults?', options: ['5-6 hours', '7-9 hours', '10-12 hours', 'It varies daily'], correctAnswer: '7-9 hours' },
      { id: 'q2', text: 'What should be avoided an hour before bed?', options: ['Drinking water', 'Using screens', 'Reading a book', 'Stretching'], correctAnswer: 'Using screens' }
    ]
  },
  {
    id: 'l-h-11',
    skill: 'listening',
    level: 'hard',
    title: 'The Great Crash',
    description: 'A detailed look at the causes and consequences of the 1929 market crash.',
    content: 'Transcript: "The Great Depression, which spanned the 1930s, was the deepest and most widespread economic downturn in modern history. While the stock market crash of October 1929 is often cited as the starting point, the root causes were far more complex and included systemic issues like overproduction in industry, a struggling agricultural sector, and a fragile international banking system. The impact was devastating, with unemployment in the United States reaching nearly 25% at its peak. The crisis prompted a fundamental shift in economic policy, leading to the introduction of the New Deal, which significantly expanded the role of the federal government in the economy through social welfare programs and financial regulations."',
    questions: [
      { id: 'q1', text: 'What was the peak unemployment rate in the US during the Great Depression?', options: ['10%', '15%', '25%', '40%'], correctAnswer: '25%' },
      { id: 'q2', text: 'What was the "New Deal"?', options: ['A new trade agreement', 'A social welfare and regulation program', 'A peace treaty', 'A technological revolution'], correctAnswer: 'A social welfare and regulation program' }
    ]
  },
  {
    id: 'l-e-25',
    skill: 'listening',
    level: 'easy',
    title: 'Moving House',
    description: 'A person discussing their move to a new apartment.',
    content: 'Transcript: "Finally moved in today! It\'s a lot smaller than the old place, but it\'s right in the city centre." "Did you have much help?" "My brother and a couple of friends came over with a van. It only took us four hours to move everything." "Are there many shops nearby?" "Yes, there\'s a big supermarket and several nice cafes just around the corner."',
    questions: [
      { id: 'q1', text: 'Where is the new apartment located?', options: ['In the suburbs', 'In the city centre', 'Near the beach', 'In a quiet village'], correctAnswer: 'In the city centre' },
      { id: 'q2', text: 'How long did the move take?', options: ['2 hours', '4 hours', '6 hours', 'All day'], correctAnswer: '4 hours' }
    ]
  },
  {
    id: 'l-e-26',
    skill: 'listening',
    level: 'easy',
    title: 'Summer Weather Report',
    description: 'A short weather update for the weekend.',
    content: 'Transcript: "It looks like we are in for a scorching weekend. On Saturday, we expect plenty of sunshine with temperatures hitting 32 degrees Celsius. Sunday will be slightly cooler, around 28 degrees, with a light breeze from the south. It\'s the perfect time to head to the coastal areas, but don\'t forget to wear sunscreen and stay hydrated."',
    questions: [
      { id: 'q1', text: 'What is the expected temperature for Saturday?', options: ['25 degrees', '28 degrees', '30 degrees', '32 degrees'], correctAnswer: '32 degrees' },
      { id: 'q2', text: 'What advice is given for the weekend?', options: ['Stay indoors', 'Wear sunscreen', 'Go to the mountains', 'Buy an umbrella'], correctAnswer: 'Wear sunscreen' }
    ]
  },
  {
    id: 'l-m-19',
    skill: 'listening',
    level: 'medium',
    title: 'City Transport',
    description: 'A council member discussing improvements to public transportation.',
    content: 'Transcript: "To reduce traffic congestion and improve air quality, we are planning a major overhaul of our city\'s transport network. This includes the introduction of twenty new electric buses and the creation of dedicated bike lanes along the main thoroughfares. We are also planning to extend the tram line by four kilometers to better serve the northern suburbs. These changes will be implemented in three phases over the next eighteen months. We believe these measures will encourage more citizens to leave their cars at home and use more sustainable modes of travel."',
    questions: [
      { id: 'q1', text: 'How many new electric buses are being introduced?', options: ['5', '10', '15', '20'], correctAnswer: '20' },
      { id: 'q2', text: 'How long will it take to implement all the changes?', options: ['6 months', '12 months', '18 months', '2 years'], correctAnswer: '18 months' }
    ]
  },
  {
    id: 'l-m-20',
    skill: 'listening',
    level: 'medium',
    title: 'Digital Business',
    description: 'A consultant explaining how companies are adapting to new technologies.',
    content: 'Transcript: "Digital transformation is no longer just an option; it\'s a necessity for survival in the modern business landscape. This involves integrating digital technology into all areas of a business, fundamentally changing how companies operate and deliver value to their customers. A key aspect is the adoption of cloud computing, which allows for greater scalability and remote collaboration. Furthermore, many firms are leveraging data analytics to gain deeper insights into consumer behavior, allowing them to personalize their marketing strategies and improve operational efficiency. However, this shift also requires a significant investment in cybersecurity to protect sensitive data and maintain customer trust."',
    questions: [
      { id: 'q1', text: 'What is a key benefit of cloud computing mentioned?', options: ['Lower electricity use', 'Better scalability', 'Faster computer hardware', 'Less need for data'], correctAnswer: 'Better scalability' },
      { id: 'q2', text: 'What must firms invest in alongside digital changes?', options: ['Physical office space', 'Cybersecurity', 'Radio advertising', 'Paper storage'], correctAnswer: 'Cybersecurity' }
    ]
  },
  {
    id: 'l-h-12',
    skill: 'listening',
    level: 'hard',
    title: 'Language Roots',
    description: 'An advanced look at how human communication systems have developed over time.',
    content: 'Transcript: "The origin of human language remains one of the most intriguing mysteries in cognitive science. While many animal species have complex communication systems, human language is unique in its recursive structure and its ability to convey abstract concepts across time and space. Some linguists, such as Noam Chomsky, argue for a \'universal grammar\'—an innate biological faculty for language. Others contend that language evolved through cultural transmission and social cooperation, spurred by the need for collective action in complex societies. Furthermore, the study of historical linguistics reveals how languages continuously evolve through processes of divergence and convergence, often influenced by migration patterns, trade, and even technological advancements that introduce new vocabulary to the lexicon."',
    questions: [
      { id: 'q1', text: 'What makes human language unique compared to animal communication?', options: ['It uses sounds', 'It has a recursive structure', 'It only works in groups', 'It is never abstract'], correctAnswer: 'It has a recursive structure' },
      { id: 'q2', text: 'Who is mentioned as arguing for an innate biological faculty for language?', options: ['Charles Darwin', 'Albert Einstein', 'Noam Chomsky', 'Isaac Newton'], correctAnswer: 'Noam Chomsky' }
    ]
  },
  {
    id: 'l-e-27',
    skill: 'listening',
    level: 'easy',
    title: 'Booking a Flight',
    description: 'A customer booking a return flight over the phone.',
    content: 'Transcript: "Hi, I\'d like to book a return flight from London to New York for early June." "Certainly. We have a flight leaving on June 3rd and returning on June 10th." "How much is that in total?" "The current price for an economy seat is $680, which includes one carry-on bag and one checked suitcase." "That sounds good. Can I choose a window seat?" "Yes, we can arrange that for you for an extra $15."',
    questions: [
      { id: 'q1', text: 'When is the flight returning?', options: ['June 1st', 'June 3rd', 'June 10th', 'June 15th'], correctAnswer: 'June 10th' },
      { id: 'q2', text: 'What is the cost for choosing a specific seat?', options: ['$5', '$10', '$15', '$20'], correctAnswer: '$15' }
    ]
  },
  {
    id: 'l-e-28',
    skill: 'listening',
    level: 'easy',
    title: 'Simple Cooking Class',
    description: 'A chef explaining how to make a basic vegetable soup.',
    content: 'Transcript: "Today we are making a simple but delicious vegetable soup. Start by chopping two large carrots, one onion, and two stalks of celery. Sauté them in a large pot with a little olive oil until they are soft. Then, add one liter of vegetable stock and bring it to a boil. Simmer for about twenty minutes, and then use a blender to make it smooth. Serve with a sprinkle of fresh parsley on top."',
    questions: [
      { id: 'q1', text: 'Which vegetable is NOT mentioned in the initial chopping step?', options: ['Carrots', 'Onion', 'Potato', 'Celery'], correctAnswer: 'Potato' },
      { id: 'q2', text: 'How long should the soup simmer?', options: ['10 minutes', '20 minutes', '30 minutes', '45 minutes'], correctAnswer: '20 minutes' }
    ]
  },
  {
    id: 'l-m-21',
    skill: 'listening',
    level: 'medium',
    title: 'Benefits of a Plant-Based Diet',
    description: 'A nutritionist discussing the health and environmental advantages of eating less meat.',
    content: 'Transcript: "Transitioning towards a plant-based diet can have significant benefits for both your personal health and the planet. Studies have shown that diets rich in fruits, vegetables, and legumes can reduce the risk of heart disease and type 2 diabetes. Furthermore, the production of plant-based foods typically requires much less water and land than animal-based products, leading to a smaller environmental footprint. However, it\'s important to ensure you are getting enough Vitamin B12 and iron, so consider incorporating fortified cereals or supplements if needed. Even making small changes, like having a few meat-free days a week, can make a difference."',
    questions: [
      { id: 'q1', text: 'What is one health benefit mentioned for a plant-based diet?', options: ['Improved eyesight', 'Reduced risk of heart disease', 'Faster hair growth', 'Better memory'], correctAnswer: 'Reduced risk of heart disease' },
      { id: 'q2', text: 'Which nutrient should people on a plant-based diet pay attention to?', options: ['Vitamin C', 'Vitamin B12', 'Calcium', 'Potassium'], correctAnswer: 'Vitamin B12' }
    ]
  },
  {
    id: 'l-m-22',
    skill: 'listening',
    level: 'medium',
    title: 'Smart Cities',
    description: 'An urban planner explaining how technology is being integrated into cities.',
    content: 'Transcript: "The concept of the \'smart city\' is about using digital technology to enhance the quality of life for all citizens. This includes everything from smart traffic lights that adjust based on real-time flow to reduce congestion, to sensors in trash cans that alert collection teams when they are full. We are also implementing smart street lighting that dims when no one is around, saving a significant amount of electricity. A key challenge, however, is ensuring that the data we collect is handled securely and that we protect the privacy of our residents. Transparency and community engagement are crucial as we move towards a more connected urban future."',
    questions: [
      { id: 'q1', text: 'What is a benefit of smart street lighting?', options: ['Brighter illumination', 'Saving electricity', 'Providing free Wi-Fi', 'Changing colors for events'], correctAnswer: 'Saving electricity' },
      { id: 'q2', text: 'What is a major challenge for smart cities?', options: ['High taxes', 'Lack of technology', 'Data security and privacy', 'Public transport costs'], correctAnswer: 'Data security and privacy' }
    ]
  },
  {
    id: 'l-h-13',
    skill: 'listening',
    level: 'hard',
    title: 'Stoic Philosophy',
    description: 'A philosophical discussion on applying ancient wisdom to contemporary life.',
    content: 'Transcript: "Stoicism, an ancient Greek philosophy, has seen a remarkable resurgence in the 21st century. At its core, Stoicism teaches that while we cannot control external events, we have absolute control over our internal response to them. This distinction between what is within our control and what is not is fundamental to achieving a state of \'ataraxia,\' or untroubledness. Modern practitioners often use techniques such as \'negative visualization\'—contemplating potential losses to increase gratitude for the present—to build emotional resilience. By focusing on virtue and acting in accordance with reason, Stoicism provides a practical framework for navigating the anxieties and distractions of the digital age, emphasizing that true happiness is found within the self rather than in external validation."',
    questions: [
      { id: 'q1', text: 'What is the fundamental teaching of Stoicism mentioned?', options: ['We can control everything', 'We only control our internal response', 'We should avoid all emotions', 'Fortune favors the bold'], correctAnswer: 'We only control our internal response' },
      { id: 'q2', text: 'What is "negative visualization" used for?', options: ['Predicting the future', 'Building emotional resilience', 'Increasing fear', 'Making better investments'], correctAnswer: 'Building emotional resilience' }
    ]
  },
  {
    id: 'l-e-29',
    skill: 'listening',
    level: 'easy',
    title: 'Buying a New Car',
    description: 'A customer talking to a car salesperson.',
    content: 'Transcript: "I\'m looking for something reliable and fuel-efficient for my daily commute." "I\'d recommend this hybrid model. It gets excellent gas mileage and has a very high safety rating." "What about the warranty?" "It comes with a five-year bumper-to-bumper warranty and free maintenance for the first two years." "Can I take it for a test drive?" "Of course, just let me grab the keys."',
    questions: [
      { id: 'q1', text: 'What is the customer looking for in a car?', options: ['Speed', 'Reliability and fuel efficiency', 'Luxury features', 'A specific color'], correctAnswer: 'Reliability and fuel efficiency' },
      { id: 'q2', text: 'How long is the bumper-to-bumper warranty?', options: ['2 years', '3 years', '5 years', '10 years'], correctAnswer: '5 years' }
    ]
  },
  {
    id: 'l-e-30',
    skill: 'listening',
    level: 'easy',
    title: 'Weekend Trip to the Museum',
    description: 'Planning a visit to the local history museum.',
    content: 'Transcript: "Let\'s go to the museum this Saturday. They have a new exhibition on ancient jewelry." "That sounds interesting! What are the opening hours?" "On Saturdays, they are open from 10 AM to 6 PM. If we go early, we can avoid the crowds." "How much is the admission fee?" "It\'s $12 for adults, but students get in for half price."',
    questions: [
      { id: 'q1', text: 'What is the new exhibition about?', options: ['Modern art', 'Ancient jewelry', 'Dinosaurs', 'Space travel'], correctAnswer: 'Ancient jewelry' },
      { id: 'q2', text: 'How much does a student pay for admission?', options: ['$6', '$10', '$12', 'It\'s free'], correctAnswer: '$6' }
    ]
  },
  {
    id: 'l-e-31',
    skill: 'listening',
    level: 'easy',
    title: 'Cinema Tickets for a Group',
    description: 'Booking multiple tickets for a group of friends.',
    content: 'Transcript: "I\'d like six tickets for the 8 PM showing of \'Summer Rain.\'" "We have six seats together in Row J. Does that work for you?" "Yes, that\'s fine. Is there a group discount?" "Yes, since you are buying more than five tickets, you get 10% off the total price." "Great, thank you. We\'ll also get three large popcorns."',
    questions: [
      { id: 'q1', text: 'How many tickets did the person buy?', options: ['2', '4', '6', '8'], correctAnswer: '6' },
      { id: 'q2', text: 'What discount did the group receive?', options: ['5%', '10%', '15%', 'None'], correctAnswer: '10%' }
    ]
  },
  {
    id: 'l-e-32',
    skill: 'listening',
    level: 'easy',
    title: 'Lost Bag',
    description: 'Reporting a lost bag at a shopping mall.',
    content: 'Transcript: "Excuse me, I think I left my bag in the food court." "Okay, what does it look like?" "It\'s a small black backpack with a silver zipper. It has my name tag on the side." "Let me check... we had a black bag handed in ten minutes ago. Is this it?" "Yes, that\'s mine! Thank you so much."',
    questions: [
      { id: 'q1', text: 'Where did the person leave their bag?', options: ['In a shop', 'In the food court', 'In the car park', 'In the cinema'], correctAnswer: 'In the food court' },
      { id: 'q2', text: 'What color is the backpack?', options: ['Blue', 'Red', 'Black', 'Silver'], correctAnswer: 'Black' }
    ]
  },
  {
    id: 'l-e-33',
    skill: 'listening',
    level: 'easy',
    title: 'Daily Commute',
    description: 'Two colleagues talking about how they get to work.',
    content: 'Transcript: "How do you usually get to the office?" "I usually take the train, it\'s much faster than driving in the morning traffic." "How long is your journey?" "It takes about twenty-five minutes from my station to the city centre. What about you?" "I live close enough to cycle, so I bike in most days. It takes me about fifteen minutes."',
    questions: [
      { id: 'q1', text: 'How does the first person get to work?', options: ['By bus', 'By car', 'By train', 'By bike'], correctAnswer: 'By train' },
      { id: 'q2', text: 'How long does the second person\'s bike ride take?', options: ['10 minutes', '15 minutes', '25 minutes', '30 minutes'], correctAnswer: '15 minutes' }
    ]
  },
  {
    id: 'l-m-23',
    skill: 'listening',
    level: 'medium',
    title: 'Work Safety',
    description: 'A manager briefing staff on health and safety procedures.',
    content: 'Transcript: "First, let\'s talk about fire safety. In the event of an alarm, everyone must exit the building using the nearest emergency stairs—do not use the elevators. Our assembly point is the car park across the street. Secondly, regarding equipment, please ensure you use the proper lifting techniques to avoid back injuries. If you notice any damaged electrical cables or tripping hazards, report them to the facilities team immediately. We\'ll be having a full fire drill next Tuesday at 10 AM to practice these procedures."',
    questions: [
      { id: 'q1', text: 'What should employees NOT use during a fire alarm?', options: ['Emergency stairs', 'The front door', 'Elevators', 'The car park'], correctAnswer: 'Elevators' },
      { id: 'q2', text: 'When is the fire drill scheduled?', options: ['Today', 'Next Tuesday', 'Friday afternoon', 'Monday morning'], correctAnswer: 'Next Tuesday' }
    ]
  },
  {
    id: 'l-h-14',
    skill: 'listening',
    level: 'hard',
    title: 'Lecture: Dark Matter and Dark Energy',
    description: 'An advanced look at the unseen forces that shape our universe.',
    content: 'Transcript: "One of the most profound challenges in modern cosmology is understanding the nature of dark matter and dark energy, which together make up about 95% of the total mass-energy content of the universe. Dark matter, which does not emit, absorb, or reflect light, is primarily detected through its gravitational effects on visible matter, such as the rotation speeds of galaxies. Without dark matter, galaxies would simply fly apart. On the other hand, dark energy is a mysterious force that appears to be accelerating the expansion of the universe itself. Unlike gravity, which pulls things together, dark energy acts as a form of cosmic repulsion. While we have robust mathematical models for their effects, their fundamental particle nature remains one of the greatest unsolved mysteries in physics."',
    questions: [
      { id: 'q1', text: 'What percentage of the universe is made of dark matter and dark energy?', options: ['5%', '25%', '68%', '95%'], correctAnswer: '95%' },
      { id: 'q2', text: 'What is the primary effect of dark energy?', options: ['Pulling galaxies together', 'Creating black holes', 'Accelerating the expansion of the universe', 'Generating light'], correctAnswer: 'Accelerating the expansion of the universe' }
    ]
  },
  {
    id: 'l-e-34',
    skill: 'listening',
    level: 'easy',
    title: 'Post Office: Priority Shipping',
    description: 'A customer sending an urgent package.',
    content: 'Transcript: "I need to get this to Tokyo by Thursday. Is that possible?" "If you use our global priority service, it will arrive in two to three days. It\'s our most expensive option at $55." "What about standard airmail?" "That would take about ten days and costs $18." "I\'ll take the priority service. I can\'t risk it being late."',
    questions: [
      { id: 'q1', text: 'Where is the package being sent?', options: ['London', 'New York', 'Tokyo', 'Sydney'], correctAnswer: 'Tokyo' },
      { id: 'q2', text: 'How much does the priority shipping cost?', options: ['$18', '$35', '$55', '$75'], correctAnswer: '$55' }
    ]
  },
  {
    id: 'l-e-35',
    skill: 'listening',
    level: 'easy',
    title: 'Buying a Birthday Gift',
    description: 'A person searching for a gift for a friend who likes gardening.',
    content: 'Transcript: "I\'m looking for a gift for a friend. She loves gardening." "Does she have a large garden or just a small balcony?" "A small balcony, actually." "Then she might like this indoor herb garden kit. It comes with pots, soil, and seeds for basil, mint, and parsley. It\'s currently on sale for $20." "That\'s perfect, she\'ll love that."',
    questions: [
      { id: 'q1', text: 'Where does the friend do her gardening?', options: ['A large farm', 'A backyard', 'A small balcony', 'A community garden'], correctAnswer: 'A small balcony' },
      { id: 'q2', text: 'Which herb is NOT mentioned in the kit?', options: ['Basil', 'Mint', 'Parsley', 'Rosemary'], correctAnswer: 'Rosemary' }
    ]
  },
  {
    id: 'l-e-36',
    skill: 'listening',
    level: 'easy',
    title: 'New School Intro',
    description: 'A teacher explaining the first day of school to new students.',
    content: 'Transcript: "Welcome everyone! Tomorrow morning, please gather in the main hall at 8:30. We\'ll assign you to your homeroom groups and give you your class schedules. Lunch is at 12:30 in the cafeteria. Don\'t forget to bring your enrollment forms and a notebook. We\'re looking forward to a great year!"',
    questions: [
      { id: 'q1', text: 'What time should students arrive at the hall?', options: ['8:00 AM', '8:30 AM', '9:00 AM', '12:30 PM'], correctAnswer: '8:30 AM' },
      { id: 'q2', text: 'Where will lunch be served?', options: ['The library', 'The classroom', 'The cafeteria', 'The gym'], correctAnswer: 'The cafeteria' }
    ]
  },
  {
    id: 'l-e-37',
    skill: 'listening',
    level: 'easy',
    title: 'Weekend Hiking Trip',
    description: 'A group of friends planning a hike in the mountains.',
    content: 'Transcript: "Let\'s hike the Blue Ridge trail this Saturday. It\'s about ten kilometers long and is rated as an easy to moderate walk." "How long does it typically take to complete?" "Between three and four hours, depending on how many stops we make for photos. We should aim to start around 9 AM to finish before the midday heat." "Should we pack a lunch?" "Yes, let\'s bring some sandwiches and a couple of liters of water each."',
    questions: [
      { id: 'q1', text: 'How long is the Blue Ridge trail?', options: ['5 km', '10 km', '15 km', '20 km'], correctAnswer: '10 km' },
      { id: 'q2', text: 'What time does the group plan to start hiking?', options: ['8 AM', '9 AM', '10 AM', '12 PM'], correctAnswer: '9 AM' }
    ]
  },
  {
    id: 'l-e-38',
    skill: 'listening',
    level: 'easy',
    title: 'Pet Groomer',
    description: 'Booking a grooming session for a dog.',
    content: 'Transcript: "Hi, I\'d like to book a full groom for my golden retriever. Her name is Bella." "I can fit Bella in at 2 PM this Wednesday. A full groom for a large dog includes a bath, hair trim, and nail clipping. The total cost is $60." "That works for me. How long will it take?" "It usually takes about two hours. We\'ll call you as soon as she\'s ready to be picked up."',
    questions: [
      { id: 'q1', text: 'What breed of dog is Bella?', options: ['Poodle', 'Golden Retriever', 'Beagle', 'Labrador'], correctAnswer: 'Golden Retriever' },
      { id: 'q2', text: 'How much does the full groom cost?', options: ['$30', '$45', '$60', '$80'], correctAnswer: '$60' }
    ]
  },
  {
    id: 'l-m-24',
    skill: 'listening',
    level: 'medium',
    title: 'Smart Homes',
    description: 'A tech expert talking about the advantages and security of smart devices.',
    content: 'Transcript: "Smart home technology is becoming increasingly affordable and integrated into our daily lives. From smart thermostats that learn your temperature preferences to save energy, to voice-activated assistants that can control your lighting and appliances. These devices offer a high level of convenience and can even improve home security through smart cameras and locks that can be monitored remotely. However, as more devices connect to the internet, it\'s crucial to ensure they have strong, unique passwords and are kept up to date with the latest security software to prevent unauthorized access. A secure home network is the foundation of a safe smart home ecosystem."',
    questions: [
      { id: 'q1', text: 'What is one benefit of a smart thermostat?', options: ['Making coffee', 'Learning temperature preferences', 'Washing clothes', 'Providing security footage'], correctAnswer: 'Learning temperature preferences' },
      { id: 'q2', text: 'What is recommended for keeping smart devices secure?', options: ['Using the same password for all', 'Turning them off at night', 'Strong, unique passwords', 'Never connecting to the internet'], correctAnswer: 'Strong, unique passwords' }
    ]
  },
  {
    id: 'l-h-15',
    skill: 'listening',
    level: 'hard',
    title: 'French Revolution',
    description: 'A historical analysis of how the revolution reshaped European politics.',
    content: 'Transcript: "The French Revolution, which began in 1789, was a watershed event in modern history that fundamentally altered the political and social landscape of Europe. It marked the end of absolute monarchy in France and paved the way for the rise of a new social order based on the principles of liberty, equality, and fraternity. The revolution\'s impact was not confined to France; it inspired revolutionary movements across the continent and fueled the rise of nationalism. However, the period was also marked by extreme violence, most notably during the Reign of Terror, and ultimately culminated in the rise of Napoleon Bonaparte. The legacy of the revolution remains a topic of intense debate among historians, with some focusing on its democratic ideals and others on its destructive consequences."',
    questions: [
      { id: 'q1', text: 'In what year did the French Revolution begin?', options: ['1776', '1789', '1804', '1815'], correctAnswer: '1789' },
      { id: 'q2', text: 'What period of the revolution was marked by extreme violence?', options: ['The Great Fear', 'The Reign of Terror', 'The Napoleonic Wars', 'The Enlightenment'], correctAnswer: 'The Reign of Terror' }
    ]
  },
  {
    id: 'l-e-39',
    skill: 'listening',
    level: 'easy',
    title: 'Weekend Cooking Class',
    description: 'Booking a spot in a weekend cooking workshop.',
    content: 'Transcript: "Hi, I\'d like to sign up for the Italian cooking class this Saturday." "We have two spots left for the 10 AM session. The class covers making fresh pasta and tiramisu." "That sounds wonderful. How much is the fee?" "It\'s $45 per person, which includes all ingredients and a recipe booklet to take home." "Sign me up, please!"',
    questions: [
      { id: 'q1', text: 'What is the person learning to make?', options: ['Pizza and ice cream', 'Fresh pasta and tiramisu', 'Steak and salad', 'Bread and soup'], correctAnswer: 'Fresh pasta and tiramisu' },
      { id: 'q2', text: 'What is included in the $45 fee?', options: ['A chef\'s hat', 'All ingredients and a booklet', 'A free meal', 'A bottle of wine'], correctAnswer: 'All ingredients and a booklet' }
    ]
  },
  {
    id: 'l-e-40',
    skill: 'listening',
    level: 'easy',
    title: 'Buying a New Laptop',
    description: 'A customer inquiring about laptop specifications and price.',
    content: 'Transcript: "I\'m looking for a laptop for my university studies. Something lightweight with a long battery life." "I\'d recommend the SlimBook 13. It only weighs 1.2 kilograms and the battery can last up to twelve hours on a single charge." "What\'s the storage capacity?" "It has a 512 GB solid-state drive and 16 GB of RAM. It\'s currently on sale for $899." "That fits my budget. I\'ll take it."',
    questions: [
      { id: 'q1', text: 'How much does the SlimBook 13 weigh?', options: ['1.2 kg', '1.5 kg', '2.0 kg', '2.5 kg'], correctAnswer: '1.2 kg' },
      { id: 'q2', text: 'How much RAM does the laptop have?', options: ['4 GB', '8 GB', '16 GB', '32 GB'], correctAnswer: '16 GB' }
    ]
  },
  {
    id: 'l-m-25',
    skill: 'listening',
    level: 'medium',
    title: 'Mindful Benefits',
    description: 'A psychologist discussing the mental health advantages of daily mindfulness practice.',
    content: 'Transcript: "Mindfulness is the practice of purposely bringing your attention to the present moment without judgment. Research has shown that practicing mindfulness for just ten to twenty minutes a day can significantly reduce stress, improve focus, and enhance emotional regulation. One simple technique is mindful breathing, where you focus entirely on the sensation of your breath entering and leaving your body. When your mind inevitably wanders, you simply acknowledge the thought and gently bring your attention back to your breath. Over time, this practice can help you become more resilient to the challenges of daily life and improve your overall well-being."',
    questions: [
      { id: 'q1', text: 'How many minutes of daily mindfulness are recommended?', options: ['5 minutes', '10-20 minutes', '1 hour', 'All day'], correctAnswer: '10-20 minutes' },
      { id: 'q2', text: 'What is a core goal of mindfulness mentioned?', options: ['Thinking about the future', 'Being in the present moment without judgment', 'Solving complex problems', 'Ignoring all emotions'], correctAnswer: 'Being in the present moment without judgment' }
    ]
  },
  {
    id: 'l-h-16',
    skill: 'listening',
    level: 'hard',
    title: 'Memory Systems',
    description: 'A deep dive into how the brain encodes and retrieves information.',
    content: 'Transcript: "Memory is not a single, unified system but rather a complex set of processes that occur across various regions of the brain. The hippocampus, located in the medial temporal lobe, plays a crucial role in the consolidation of short-term memories into long-term ones. However, once consolidated, these memories are stored throughout the cerebral cortex. We distinguish between declarative memory—facts and events that can be consciously recalled—and non-declarative memory, such as motor skills and habits, which are often mediated by the cerebellum and basal ganglia. Furthermore, the process of retrieval is reconstructive, meaning that our memories are not perfect recordings of the past but are influenced by our current knowledge and emotional state during the moment of recall."',
    questions: [
      { id: 'q1', text: 'What is the primary role of the hippocampus in memory?', options: ['Storing long-term memories', 'Consolidating short-term into long-term memories', 'Mediating motor skills', 'Creating emotions'], correctAnswer: 'Consolidating short-term into long-term memories' },
      { id: 'q2', text: 'What does it mean that memory retrieval is "reconstructive"?', options: ['It is a perfect recording', 'It is influenced by current knowledge and emotions', 'It only works for facts', 'It is localized in one spot'], correctAnswer: 'It is influenced by current knowledge and emotions' }
    ]
  },
  {
    id: 'l-m-26',
    skill: 'listening',
    level: 'medium',
    title: 'Green Park Visits',
    description: 'A talk by a park ranger on how visitors can minimize their impact.',
    content: 'Transcript: "As more people visit our national parks, the concept of sustainable tourism has become paramount to preserving these natural treasures for future generations. We ask that all visitors follow the \'Leave No Trace\' principles. This means staying on marked trails to prevent soil erosion and avoiding any interaction with the local wildlife. Please carry out all your rubbish, as even organic waste can disrupt the delicate balance of the ecosystem. Furthermore, if you are camping, only use designated sites and be extremely cautious with fire. By working together, we can ensure that these beautiful landscapes remain untouched by our presence."',
    questions: [
      { id: 'q1', text: 'What is a core goal mentioned for visitors?', options: ['Creating new trails', 'Preserving natural treasures', 'Feeding the animals', 'Improving the facilities'], correctAnswer: 'Preserving natural treasures' },
      { id: 'q2', text: 'What is a specific recommendation for rubbish?', options: ['Burn it', 'Bury it', 'Carry it out', 'Leave it near a bin'], correctAnswer: 'Carry it out' }
    ]
  },
  {
    id: 'l-m-27',
    skill: 'listening',
    level: 'medium',
    title: 'The Rise of E-commerce',
    description: 'A business analyst discussing the growth and future of online shopping.',
    content: 'Transcript: "The landscape of retail has been fundamentally transformed by the rapid rise of e-commerce. Over the last decade, online sales have grown exponentially, driven by the convenience of shopping from home and the ability to easily compare prices across multiple platforms. This shift has forced traditional physical stores to adapt, with many now offering \'click and collect\' services or focusing on creating immersive in-person experiences that cannot be replicated online. Looking ahead, we expect to see further integration of augmented reality, allowing customers to virtually \'try on\' clothes or see how furniture would look in their homes before making a purchase. However, the growth of e-commerce also presents significant logistical challenges and environmental concerns regarding packaging and delivery emissions."',
    questions: [
      { id: 'q1', text: 'What is cited as a main driver of e-commerce growth?', options: ['Lower quality', 'Convenience and price comparison', 'Lack of physical shops', 'TV advertising'], correctAnswer: 'Convenience and price comparison' },
      { id: 'q2', text: 'What future technology is mentioned for online shopping?', options: ['Robotic delivery', 'Augmented reality', 'Voice-only ordering', 'Floating warehouses'], correctAnswer: 'Augmented reality' }
    ]
  },
  {
    id: 'l-h-17',
    skill: 'listening',
    level: 'hard',
    title: 'Lecture: Social Nudges',
    description: 'A look at how choice architecture can influence public behavior.',
    content: 'Transcript: "Behavioral economics has introduced the concept of \'nudging\'—small, subtle changes in the way choices are presented that can significantly influence the decisions people make. Choice architecture, as it\'s called, leverages our inherent cognitive biases to encourage positive behaviors without restricting individual freedom. For example, placing healthy snacks at eye level in a cafeteria, while keeping less healthy options out of direct sight, is a classic nudge. Similarly, making organ donation an \'opt-out\' rather than an \'opt-in\' system has been shown to dramatically increase registration rates. While powerful, the use of nudges also raises ethical questions regarding manipulation and the transparency of those designing the choice environments."',
    questions: [
      { id: 'q1', text: 'What is a "nudge" in the context of behavioral economics?', options: ['A strict rule', 'A subtle change in choice presentation', 'A financial penalty', 'A direct order'], correctAnswer: 'A subtle change in choice presentation' },
      { id: 'q2', text: 'What example is given for increasing organ donation rates?', options: ['Government mandates', 'Offering money', 'An opt-out system', 'Giving free healthcare'], correctAnswer: 'An opt-out system' }
    ]
  },
  {
    id: 'l-h-18',
    skill: 'listening',
    level: 'hard',
    title: 'Ethics of AI',
    description: 'A panel discussion on the moral implications of autonomous systems.',
    content: 'Transcript: "As artificial intelligence becomes increasingly integrated into critical infrastructure, from autonomous vehicles to judicial decision-making, the ethical implications become more pressing. One fundamental concern is the issue of algorithmic bias, where AI systems inherit and even amplify the prejudices present in their training data. This can lead to unfair outcomes for marginalized groups. Furthermore, the question of accountability remains unresolved: if an autonomous system causes harm, who is legally and morally responsible? The developer, the user, or the system itself? Ensuring that AI development aligns with human values requires a multidisciplinary approach, involving not only computer scientists but also ethicists, lawyers, and sociologists to create robust and transparent guidelines."',
    questions: [
      { id: 'q1', text: 'What is "algorithmic bias"?', options: ['AI breaking the law', 'AI systems amplifying prejudices from training data', 'AI being too slow', 'AI needing too much power'], correctAnswer: 'AI systems amplifying prejudices from training data' },
      { id: 'q2', text: 'Who should be involved in creating AI guidelines according to the text?', options: ['Only computer scientists', 'Only politicians', 'A multidisciplinary team', 'Just the users'], correctAnswer: 'A multidisciplinary team' }
    ]
  },
  {
    id: 'l-m-28',
    skill: 'listening',
    level: 'medium',
    title: 'The Importance of Bees',
    description: 'A biologist explaining the critical role bees play in our food system.',
    content: 'Transcript: "Bees are far more than just producers of honey; they are essential pollinators responsible for about one-third of the food we consume. Many of our favorite fruits, vegetables, and nuts rely heavily on bee pollination to produce healthy crops. However, bee populations worldwide are currently facing a combination of threats, including habitat loss, pesticide use, and climate change. To help, homeowners can plant bee-friendly flowers in their gardens and avoid using harmful chemicals on their lawns. Supporting local beekeepers and buying organic Produce also contributes to the preservation of these vital insects."',
    questions: [
      { id: 'q1', text: 'How much of our food is estimated to be dependent on bee pollination?', options: ['10%', '25%', '33% (one-third)', '50%'], correctAnswer: '33% (one-third)' },
      { id: 'q2', text: 'What is one way homeowners can help bees?', options: ['Build a beehive', 'Plant bee-friendly flowers', 'Mow the lawn more often', 'Use more pesticides'], correctAnswer: 'Plant bee-friendly flowers' }
    ]
  },
  {
    id: 'l-m-29',
    skill: 'listening',
    level: 'medium',
    title: 'Photo Tips',
    description: 'A photographer sharing some basic advice for capturing better images.',
    content: 'Transcript: "One of the most effective ways to improve your photography is to master the \'rule of thirds.\' Rather than placing your subject right in the center of the frame, try to position them along one of the vertical or horizontal lines that divide the image into nine equal parts. This creates a more balanced and visually interesting composition. Furthermore, always be aware of your lighting; shooting during the \'golden hour\'—the hour just after sunrise or before sunset—provides the softest and most flattering light. Lastly, don\'t be afraid to experiment with different angles to find a unique perspective on your subject."',
    questions: [
      { id: 'q1', text: 'What is the "rule of thirds"?', options: ['Taking three photos of every subject', 'Dividing the image into nine parts for composition', 'Only using three colors', 'Taking photos for three hours'], correctAnswer: 'Dividing the image into nine parts for composition' },
      { id: 'q2', text: 'When is the "golden hour"?', options: ['At midday', 'Midnight', 'Just after sunrise or before sunset', 'During a storm'], correctAnswer: 'Just after sunrise or before sunset' }
    ]
  },
  {
    id: 'l-h-19',
    skill: 'listening',
    level: 'hard',
    title: 'Industrial Age',
    description: 'An economic history lecture on the shift from agrarian to industrial societies.',
    content: 'Transcript: "The Industrial Revolution, which began in Britain in the late 18th century, was a period of frantic technological and social change that fundamentally reshaped the course of human history. The transition from manual labor to machine-based manufacturing was driven by innovations such as the steam engine and the mechanization of the textile industry. This shift led to unprecedented levels of urbanization, as people migrated from the countryside to rapidly growing cities in search of work in factories. However, these changes also brought about significant social challenges, including poor working conditions, long hours, and child labor. The Industrial Revolution also marked the beginning of a massive increase in carbon emissions, the consequences of which we are still dealing with today."',
    questions: [
      { id: 'q1', text: 'Where did the Industrial Revolution begin?', options: ['France', 'Germany', 'USA', 'Britain'], correctAnswer: 'Britain' },
      { id: 'q2', text: 'What was a primary driver of the transition to machine manufacturing?', options: ['The internet', 'The steam engine', 'Nuclear power', 'Plastic production'], correctAnswer: 'The steam engine' }
    ]
  },
  {
    id: 'l-h-20',
    skill: 'listening',
    level: 'hard',
    title: 'Quantum Gravity',
    description: 'A theoretical physics discussion on merging quantum mechanics with general relativity.',
    content: 'Transcript: "The search for a theory of quantum gravity remains one of the most significant unsolved problems in theoretical physics. While general relativity brilliantly describes the universe on a large scale—stars, galaxies, and the curvature of spacetime—quantum mechanics provides an equally successful description of the subatomic world. However, these two frameworks are mathematically incompatible. Theories such as string theory and loop quantum gravity attempt to reconcile this by suggesting that at the most fundamental level, the universe is composed of vibrating strings or discrete loops of space and time. These theories often require higher dimensions and challenge our basic understanding of causality and the nature of reality itself."',
    questions: [
      { id: 'q1', text: 'What is the main problem with general relativity and quantum mechanics?', options: ['They are too simple', 'They are mathematically incompatible', 'They use the same formulas', 'They only work on Tuesdays'], correctAnswer: 'Mathematically incompatible' },
      { id: 'q2', text: 'What does string theory suggest about the fundamental nature of the universe?', options: ['It is made of tiny points', 'It is made of vibrating strings', 'It is a holographic projection', 'It is infinite and unchanging'], correctAnswer: 'It is made of vibrating strings' }
    ]
  },
  {
    id: 'l-m-30',
    skill: 'listening',
    level: 'medium',
    title: 'Public Parks',
    description: 'An urban planner discussing the role of green spaces in modern cities.',
    content: 'Transcript: "Public parks are the lungs of our cities, providing essential spaces for recreation, social interaction, and connection with nature. As urban density increases, the challenge is to design parks that are multifunctional and accessible to everyone. We are seeing a trend towards \'pocket parks\'—small, green interventions in dense areas—and the incorporation of sustainable drainage systems to manage stormwater. Furthermore, parks are increasingly being used as hubs for community education, with community gardens and nature programs becoming standard features. We must prioritize the maintenance and expansion of these vital public assets to ensure our cities remain livable and resilient in the face of climate change."',
    questions: [
      { id: 'q1', text: 'What are "pocket parks"?', options: ['Parks with lots of pockets', 'Small green interventions in dense areas', 'Parks that cost money to enter', 'Parks located inside buildings'], correctAnswer: 'Small green interventions in dense areas' },
      { id: 'q2', text: 'What is one role of parks mentioned besides recreation?', options: ['Providing free parking', 'Hubs for community education', 'Building new apartments', 'Selling groceries'], correctAnswer: 'Hubs for community education' }
    ]
  },
  {
    id: 'l-h-21',
    skill: 'listening',
    level: 'hard',
    title: 'Animal Foraging',
    description: 'A look at how animals maximize energy gain while minimizing risk.',
    content: 'Transcript: "Behavioral ecology examines the evolutionary basis for animal behavior due to ecological pressures. A central concept is \'optimal foraging theory,\' which predicts that animals will behave in a way that maximizes their net energy intake per unit of time. For example, a bird might choose to hunt in a patch with lower prey density if it is closer to its nest, thereby reducing transit costs. However, these decisions are not made in a vacuum; animals must also balance energy gain against the risk of predation. This \'trade-off\' between feeding and safety led to complex behaviors, such as vigilance and group living, which improve the chances of survival despite potentially lower individual feeding rates."',
    questions: [
      { id: 'q1', text: 'What does "optimal foraging theory" predict?', options: ['Animals always eat the largest prey', 'Animals maximize energy intake per unit of time', 'Animals ignore transit costs', 'Animals only eat at night'], correctAnswer: 'Animals maximize energy intake per unit of time' },
      { id: 'q2', text: 'What is one trade-off mentioned that animals must balance?', options: ['Speed vs. size', 'Color vs. camouflage', 'Energy gain vs. risk of predation', 'Water vs. food'], correctAnswer: 'Energy gain vs. risk of predation' }
    ]
  },
  {
    id: 'l-m-31',
    skill: 'listening',
    level: 'medium',
    title: 'Music Streaming',
    description: 'A music industry expert discussing how streaming changed the way we consume music.',
    content: 'Transcript: "The music industry has undergone a seismic shift with the advent of digital streaming services. Gone are the days when listeners had to purchase individual albums or singles; now, millions of tracks are available instantly for a monthly subscription fee. This has led to a major change in listener behavior, with people discovering more new music through curated playlists and algorithms. However, this shift has also sparked intense debate regarding artist compensation, as pay-per-stream rates can be extremely low, making it difficult for emerging artists to sustain their careers without significant touring revenue. Despite these challenges, streaming has undeniably made music more accessible than ever before."',
    questions: [
      { id: 'q1', text: 'How do many people now discover new music according to the text?', options: ['Radio', 'Curated playlists and algorithms', 'CD shops', 'Word of mouth only'], correctAnswer: 'Curated playlists and algorithms' },
      { id: 'q2', text: 'What is a major concern mentioned regarding music streaming?', options: ['Lack of music choice', 'Low artist compensation per stream', 'Slow internet speeds', 'Poor audio quality'], correctAnswer: 'Low artist compensation per stream' }
    ]
  },
  {
    id: 'l-m-32',
    skill: 'listening',
    level: 'medium',
    title: 'Green Buildings',
    description: 'An architect explaining the concept of integrating trees into skyscraper design.',
    content: 'Transcript: "As our cities become more crowded and polluted, architects are looking for ways to bring nature back into the urban environment. One innovative solution is the \'vertical forest\'—skyscrapers covered in thousands of trees and shrubs. These buildings act as urban lungs, absorbing carbon dioxide and producing oxygen, while also providing natural insulation and reducing the heat island effect. Furthermore, vertical forests create habitats for birds and insects, promoting biodiversity in the heart of the city. The primary challenge, of course, is the logistical complexity of maintaining such a large amount of vegetation at great heights, including sophisticated irrigation systems and structural support to handle the additional weight."',
    questions: [
      { id: 'q1', text: 'What is a "vertical forest"?', options: ['A park in a forest', 'A skyscraper covered in trees and shrubs', 'A school for foresters', 'A vertical gardening kit'], correctAnswer: 'A skyscraper covered in trees and shrubs' },
      { id: 'q2', text: 'What is one benefit of these buildings mentioned in the text?', options: ['Cheaper construction', 'Reducing the heat island effect', 'Generating electricity from wind', 'providing free fruit'], correctAnswer: 'Reducing the heat island effect' }
    ]
  },
  {
    id: 'l-h-22',
    skill: 'listening',
    level: 'hard',
    title: 'Urban Sociology',
    description: 'An advanced look at how the physical environment shapes social interactions.',
    content: 'Transcript: "Urban design is not merely a question of aesthetics or engineering; it is a profound sociological exercise that shapes the very fabric of human interaction. The way we design our streets, parks, and housing developments can either foster social cohesion or inadvertently create barriers between communities. For instance, the presence of \'third places\'—semi-public spaces like libraries, cafes, and community centers—is vital for building social capital and a sense of belonging. Conversely, poor urban planning, such as the creation of isolated gated communities or the lack of accessible public transit, can exacerbate social inequality and lead to increased feelings of alienation. By prioritizing human-centric design, we can create cities that are not just efficient, but also equitable and inclusive."',
    questions: [
      { id: 'q1', text: 'What are "third places" in sociology?', options: ['The third room in a house', 'The workplace', 'Semi-public spaces like libraries and cafes', 'Secret clubs'], correctAnswer: 'Semi-public spaces like libraries and cafes' },
      { id: 'q2', text: 'What can poor urban planning lead to according to the text?', options: ['Lower taxes', 'Social inequality and alienation', 'Faster traffic', 'Better weather'], correctAnswer: 'Social inequality and alienation' }
    ]
  },
  {
    id: 'l-m-33',
    skill: 'listening',
    level: 'medium',
    title: 'Clean Energy',
    description: 'An energy analyst discussing the transition to sustainable power sources.',
    content: 'Transcript: "As we grapple with the urgent need to mitigate climate change, the rapid adoption of renewable energy sources has become a global priority. Solar and wind power have seen massive growth over the last decade, driven by significant technological improvements and falling costs. However, a major challenge remains: intermittency—the fact that the sun doesn\'t always shine and the wind doesn\'t always blow. To address this, we are seeing increasing investment in advanced battery storage technologies and the development of \'smart grids\' that can dynamically manage energy supply and demand. Furthermore, green hydrogen is emerging as a promising solution for decarbonizing heavy industries and long-distance transport, which are difficult to power with electricity alone."',
    questions: [
      { id: 'q1', text: 'What is "intermittency" in the context of renewable energy?', options: ['High cost', 'Unreliable supply (sun/wind variability)', 'Lack of technology', 'High pollution'], correctAnswer: 'Unreliable supply (sun/wind variability)' },
      { id: 'q2', text: 'What technology is being used to manage energy supply and demand dynamically?', options: ['Smart grids', 'Coal power plants', 'Diesel generators', 'Old battery types'], correctAnswer: 'Smart grids' }
    ]
  },
  {
    id: 'l-m-34',
    skill: 'listening',
    level: 'medium',
    title: 'Consumer Psych',
    description: 'A marketing professor explaining the subconscious factors behind shopping decisions.',
    content: 'Transcript: "Understanding why people buy what they buy is a central challenge in the field of marketing. High-level decisions are often influenced by subconscious psychological factors, such as social proof and scarcity. Social proof is the tendency of individuals to follow the actions of others—for example, a customer is more likely to choose a restaurant that is already busy. Scarcity, on the other hand, creates a sense of urgency; when a product is perceived as being in limited supply, its value increases in the mind of the consumer. Marketers also leverage emotional branding, attempting to create a deep, personal connection between the customer and the brand, leading to increased loyalty and long-term engagement."',
    questions: [
      { id: 'q1', text: 'What is "social proof"?', options: ['A legal document', 'Following the actions of others', 'Having a high credit score', 'A product warranty'], correctAnswer: 'Following the actions of others' },
      { id: 'q2', text: 'How does scarcity influence consumers?', options: ['It makes them wait longer', 'It creates a sense of urgency and increases perceived value', 'It makes products cheaper', 'It reduces demand'], correctAnswer: 'It creates a sense of urgency and increases perceived value' }
    ]
  },
  {
    id: 'l-h-23',
    skill: 'listening',
    level: 'hard',
    title: 'Game Theory',
    description: 'An advanced introduction to strategic decision-making in competitive environments.',
    content: 'Transcript: "Game theory is the mathematical study of strategic interaction among rational decision-makers. It provides a formal framework for analyzing situations where the outcome for one player depends not only on their own choices but also on the choices of others. A key concept is the \'Nash Equilibrium,\' a state in which no player can benefit by changing their strategy while the other players keep theirs unchanged. Game theory is extensively used in economics to analyze everything from oligopolistic competition and auction design to international trade negotiations and public policy. It highlights how individual rationality can sometimes lead to collectively suboptimal outcomes, as famously illustrated by the \'Prisoner\'s Dilemma.\'"',
    questions: [
      { id: 'q1', text: 'What is a "Nash Equilibrium"?', options: ['A point where everyone wins', 'A state where no player benefits by unilaterally changing strategy', 'A state of total randomness', 'A winner-takes-all scenario'], correctAnswer: 'A state where no player benefits by unilaterally changing strategy' },
      { id: 'q2', text: 'What does the "Prisoner\'s Dilemma" illustrate?', options: ['Fair play', 'The benefit of cheating', 'Individual rationality leading to collectively suboptimal outcomes', 'The importance of laws'], correctAnswer: 'Individual rationality leading to collectively suboptimal outcomes' }
    ]
  },
  {
    id: 'l-h-24',
    skill: 'listening',
    level: 'hard',
    title: 'Free Will',
    description: 'A deep exploration of individuality, freedom, and the search for meaning.',
    content: 'Transcript: "Existentialism, a philosophical movement that gained prominence in the 20th century, emphasizes the individual\'s freedom, choice, and responsibility in a universe perceived as indifferent or even absurd. At the heart of existentialist thought is the idea that \'existence precedes essence\'—that human beings do not have a pre-defined purpose or nature. Instead, we define ourselves through our actions and choices. This radical freedom can lead to \'existential angst\'—the profound anxiety that arises from the weight of our own responsibility. Thinkers like Jean-Paul Sartre and Albert Camus argued that we must confront this absurdity and create our own meaning through authentic living and engagement with the world."',
    questions: [
      { id: 'q1', text: 'What does "existence precedes essence" mean?', options: ['We are born with a purpose', 'We have no pre-defined nature and define ourselves through choices', 'Life has no beginning', 'Everything is determined by fate'], correctAnswer: 'We have no pre-defined nature and define ourselves through choices' },
      { id: 'q2', text: 'What is "existential angst"?', options: ['Anger at the world', 'Anxiety from the weight of personal responsibility', 'Physical pain', 'Fear of death only'], correctAnswer: 'Anxiety from the weight of personal responsibility' }
    ]
  },
  {
    id: 'l-m-35',
    skill: 'listening',
    level: 'medium',
    title: 'Social Media',
    description: 'A social media analyst discussing the transition from simple networking to complex ecosystems.',
    content: 'Transcript: "Social media has evolved far beyond its origins as simple platforms for connecting with friends. Today, these platforms are complex ecosystems that encompass everything from news and entertainment to e-commerce and professional networking. The rise of short-form video content has transformed how we consume information, with algorithms playing a critical role in personalizing our feeds. Furthermore, the integration of \'social commerce\' allows users to purchase products directly within the app, blurring the lines between social interaction and shopping. However, this increased integration also raises concerns regarding data privacy, algorithmic transparency, and the impact of prolonged social media use on mental health."',
    questions: [
      { id: 'q1', text: 'What technology plays a critical role in personalizing social media feeds?', options: ['Radio waves', 'Deep-sea cables', 'Algorithms', 'Manual editing'], correctAnswer: 'Algorithms' },
      { id: 'q2', text: 'What is "social commerce" as mentioned in the text?', options: ['Gifts between friends', 'Buying products directly within social apps', 'Paying for social media', 'Trading stocks on social media'], correctAnswer: 'Buying products directly within social apps' }
    ]
  },
  {
    id: 'l-m-36',
    skill: 'listening',
    level: 'medium',
    title: 'Eco Houses',
    description: 'An architect explaining the principles of energy-efficient buildings.',
    content: 'Transcript: "Passive House design is a rigorous, voluntary standard for energy efficiency in buildings, aimed at reducing the building\'s ecological footprint. The core principles include high levels of insulation, airtight construction, and high-performance windows. This approach leverages passive solar gain and internal heat sources to maintain a comfortable temperature year-round without the need for traditional heating or cooling systems. A key component is a heat recovery ventilation system, which provides a constant supply of fresh filtered air while retaining most of the thermal energy. While the initial construction costs can be slightly higher, the long-term energy savings and improved indoor air quality make it a compelling solution for sustainable urban development."',
    questions: [
      { id: 'q1', text: 'What is a core goal of Passive House design?', options: ['Making houses larger', 'Reducing the ecological footprint', 'Using more glass', 'Lowering construction speed'], correctAnswer: 'Reducing the ecological footprint' },
      { id: 'q2', text: 'How is internal air temperature maintained in these houses?', options: ['Large air conditioners', 'High-performance insulation and passive solar gain', 'Gas heaters', 'Open windows only'], correctAnswer: 'High-performance insulation and passive solar gain' }
    ]
  },
  {
    id: 'l-m-37',
    skill: 'listening',
    level: 'medium',
    title: 'Remote Tools',
    description: 'A tech consultant discussing the software that enables global collaboration.',
    content: 'Transcript: "The shift towards remote and hybrid work models has been enabled by a suite of powerful collaboration tools. Video conferencing platforms have replaced the traditional board room, while instant messaging apps allow for real-time communication across time zones. Project management software provides a centralized hub for tracking tasks and deadlines, ensuring that teams stay aligned even when working asynchronously. Furthermore, cloud-based document sharing allows for simultaneous editing and version control, eliminating the need for cumbersome email chains. As these tools continue to evolve, they are incorporating more AI features to automate routine tasks, such as meeting transcription and schedule optimization, further enhancing productivity in the modern workplace."',
    questions: [
      { id: 'q1', text: 'What has replaced the traditional board room in remote work?', options: ['Coffee shops', 'Video conferencing platforms', 'Telephone calls', 'Letters'], correctAnswer: 'Video conferencing platforms' },
      { id: 'q2', text: 'What benefit of cloud-based document sharing is mentioned?', options: ['It is cheaper', 'It allows for simultaneous editing', 'It is only for experts', 'It never saves changes'], correctAnswer: 'It allows for simultaneous editing' }
    ]
  },
  {
    id: 'l-m-38',
    skill: 'listening',
    level: 'medium',
    title: 'Fashion Ethics',
    description: 'An environmental activist discussing the impact of the apparel industry.',
    content: 'Transcript: "Fast fashion is defined by the rapid production of high-volume, low-cost clothing, allowing consumers to stay up-to-date with the latest trends at affordable prices. However, this model comes at a staggering environmental and social cost. The industry is one of the world\'s largest polluters, consuming vast amounts of water and contributing significantly to global carbon emissions. Furthermore, the pressure to produce clothes quickly and cheaply often leads to poor working conditions and low wages for garment workers in developing countries. As consumers, we can make a difference by choosing more sustainable and ethical brands, prioritizing quality over quantity, and extending the life of our clothes through repair and recycling."',
    questions: [
      { id: 'q1', text: 'What is a characteristic of "fast fashion"?', options: ['Slow production', 'High-volume, low-cost clothing', 'Expensive luxury items', 'Local handcrafts only'], correctAnswer: 'High-volume, low-cost clothing' },
      { id: 'q2', text: 'What is one way consumers can take action according to the text?', options: ['Buying more clothes', 'Prioritizing quality over quantity', 'Ignoring trends', 'Using more water'], correctAnswer: 'Prioritizing quality over quantity' }
    ]
  },
  {
    id: 'l-m-39',
    skill: 'listening',
    level: 'medium',
    title: 'Hyperloop',
    description: 'An engineer discussing the potential of high-speed vacuum tube travel.',
    content: 'Transcript: "The Hyperloop is a proposed mode of ultra-high-speed passenger and freight transport that involves pods traveling through low-pressure tubes. By significantly reducing air resistance and friction, pods could potentially reach speeds of over 1,000 kilometers per hour, making it faster than many commercial aircraft. This technology could revolutionize regional travel, connecting major cities in minutes rather than hours. However, significant engineering and regulatory hurdles remain, including the high cost of infrastructure, maintaining vacuum seals over long distances, and ensuring passenger safety during rapid acceleration and deceleration. While still in the experimental phase, Hyperloop represents a bold vision for the future of sustainable, high-speed mobility."',
    questions: [
      { id: 'q1', text: 'What is the "Hyperloop"?', options: ['A new type of airplane', 'Pods traveling through low-pressure tubes', 'An underground car park', 'A fast boat'], correctAnswer: 'Pods traveling through low-pressure tubes' },
      { id: 'q2', text: 'What is a major engineering challenge for Hyperloop?', options: ['Finding enough drivers', 'Maintaining vacuum seals over long distances', 'Making pods more colorful', 'Reducing the number of passengers'], correctAnswer: 'Maintaining vacuum seals over long distances' }
    ]
  },
  {
    id: 'l-m-40',
    skill: 'listening',
    level: 'medium',
    title: 'City Gardens',
    description: 'A community organizer explaining how city gardens improve lives.',
    content: 'Transcript: "Urban gardening is about more than just growing food; it\'s about building stronger, more resilient communities. These green spaces provide an oasis in the heart of the city, reducing the urban heat island effect and improving local biodiversity. For many residents, community gardens offer a rare opportunity to connect with nature and learn about the origins of their food. Furthermore, these projects foster a sense of shared responsibility and can provide a vital source of fresh produce for underserved neighborhoods. By reclaiming vacant lots and rooftops, urban gardening transforms the city into a more inclusive and sustainable environment, one garden at a time."',
    questions: [
      { id: 'q1', text: 'What is one environmental benefit of urban gardening mentioned?', options: ['Providing more parking', 'Reducing the heat island effect', 'Building new roads', 'Selling more cars'], correctAnswer: 'Reducing the heat island effect' },
      { id: 'q2', text: 'What does urban gardening transform according to the text?', options: ['The suburbs', 'Vacant lots and rooftops', 'The countryside', 'The ocean'], correctAnswer: 'Vacant lots and rooftops' }
    ]
  },
  {
    id: 'l-h-25',
    skill: 'listening',
    level: 'hard',
    title: 'Gene Editing',
    description: 'A specialist explaining CRISPR-Cas9 and the potential for precision medicine.',
    content: 'Transcript: "The advent of CRISPR-Cas9 technology has revolutionized the field of genomic engineering, providing scientists with a powerful and precise tool for editing DNA. Unlike previous methods, which were cumbersome and often inaccurate, CRISPR allows for the targeted modification of specific genes with unprecedented ease. This has opened up new possibilities for precision medicine, including the development of gene therapies for previously untreatable genetic disorders and the engineering of more resilient and nutritious crops. However, the ability to fundamentally alter the human genome also raises profound ethical questions regarding \'designer babies\' and the long-term consequences of germline editing, emphasizing the need for robust international dialogue and regulation."',
    questions: [
      { id: 'q1', text: 'What makes CRISPR-Cas9 revolutionary compared to old methods?', options: ['It is cheaper', 'It is powerful and precise for editing DNA', 'It only works in plants', 'It is very slow'], correctAnswer: 'It is powerful and precise for editing DNA' },
      { id: 'q2', text: 'What ethical concern is specifically mentioned in the text?', options: ['Data privacy', 'Designer babies', 'Animal welfare', 'Cybersecurity'], correctAnswer: 'Designer babies' }
    ]
  },
  {
    id: 'l-h-26',
    skill: 'listening',
    level: 'hard',
    title: 'Social Media 2',
    description: 'An advanced analysis of echo chambers and digital polarization.',
    content: 'Transcript: "The architecture of social media platforms, driven by engagement-maximizing algorithms, has contributed significantly to the rise of digital polarization and the formation of echo chambers. These algorithms prioritize content that aligns with a user\'s existing beliefs and biases, effectively insulating them from diverse perspectives and alternative viewpoints. This phenomenon can lead to increased social fragmentation and the erosion of common ground, making it difficult to engage in constructive public discourse. Furthermore, the rapid spread of misinformation within these closed networks can undermine trust in institutions and even influence democratic processes. Addressing these challenges requires not only technological solutions but also a focus on digital literacy and the promotion of critical thinking skills in the digital age."',
    questions: [
      { id: 'q1', text: 'How do engagement-maximizing algorithms contribute to polarization?', options: ['By showing all viewpoints', 'By insulating users from diverse perspectives', 'By turning the internet off', 'By making accounts free'], correctAnswer: 'By insulating users from diverse perspectives' },
      { id: 'q2', text: 'What is a potential consequence of the spread of misinformation in echo chambers?', options: ['Better communication', 'Undermining trust in institutions', 'Lower taxes', 'More news channels'], correctAnswer: 'Undermining trust in institutions' }
    ]
  },
  {
    id: 'l-h-27',
    skill: 'listening',
    level: 'hard',
    title: 'Black Hole Physics Lecture',
    description: 'A high-level exploration of Hawking radiation and the information paradox.',
    content: 'Transcript: "Black hole thermodynamics represents a fascinating intersection of general relativity, quantum mechanics, and statistical mechanics. A central discovery was Stephen Hawking\'s prediction that black holes are not truly black but emit thermal radiation, now known as Hawking radiation. This suggests that black holes have a temperature and entropy, challenging our classical understanding of these objects as eternal sinks of matter. However, this finding led to the \'black hole information paradox\': if a black hole eventually evaporates completely, what happens to the information about the matter that fell into it? According to the laws of quantum mechanics, information cannot be destroyed. Resolving this paradox remains a major goal of modern physics, potentially leading us towards a more complete theory of quantum gravity."',
    questions: [
      { id: 'q1', text: 'What is Hawking radiation?', options: ['Light from nearby stars', 'Thermal radiation emitted by black holes', 'The pull of gravity', 'A sound in space'], correctAnswer: 'Thermal radiation emitted by black holes' },
      { id: 'q2', text: 'What is the "black hole information paradox"?', options: ['Black holes are too big', 'Information might be destroyed when a black hole evaporates', 'We can\'t see inside black holes', 'Gravity is too strong'], correctAnswer: 'Information might be destroyed when a black hole evaporates' }
    ]
  },
  {
    id: 'l-h-28',
    skill: 'listening',
    level: 'hard',
    title: 'Lecture: Social Nature',
    description: 'An advanced look at the evolution of cooperation and altruism in nature.',
    content: 'Transcript: "The existence of cooperation and altruism in the animal kingdom has long fascinated biologists, as it seems to contradict the principle of individual survival. However, behavioral ecology provides several frameworks for understanding how these behaviors evolved. One key concept is \'kin selection,\' which suggests that individuals may help relatives because they share common genes, thereby increasing their own inclusive fitness. Another important mechanism is \'reciprocal altruism,\' where individuals cooperate with non-relatives with the expectation of future repayment. These systems often require sophisticated social recognition and memory to track who has cooperated in the past and to punish \'cheaters.\' The study of these social systems highlights the complex interplay between individual competition and collective benefit in the natural world."',
    questions: [
      { id: 'q1', text: 'What is "kin selection"?', options: ['Killing off weak relatives', 'Helping relatives to increase inclusive fitness', 'Choosing a mate', 'Fighting for territory'], correctAnswer: 'Helping relatives to increase inclusive fitness' },
      { id: 'q2', text: 'What is "reciprocal altruism"?', options: ['Helping relatives only', 'Cooperation with expectation of future repayment', 'Random acts of kindness', 'Competing for food'], correctAnswer: 'Cooperation with expectation of future repayment' }
    ]
  },
  {
    id: 'l-h-29',
    skill: 'listening',
    level: 'hard',
    title: 'Robotics Ethics',
    description: 'A deep dive into the moral status of autonomous agents and the "trolley problem" for AI.',
    content: 'Transcript: "As autonomous robots transition from controlled industrial environments to the complex unpredictability of the human world, the ethical considerations surrounding their behavior become increasingly intricate. A central challenge is the \'trolley problem\' as applied to autonomous vehicles: if an accident is unavoidable, how should the AI decide who to protect? These life-and-death decisions require us to embed moral frameworks directly into robotic systems. Furthermore, as robots become more socially intelligent, we must consider the potential for emotional manipulation and the impact of human-robot integration on our social fabric. Should robots have rights or moral status? These questions are no longer limited to science fiction but require urgent attention from developers, ethicists, and policymakers to ensure that the rise of autonomous systems aligns with our fundamental values."',
    questions: [
      { id: 'q1', text: 'What is the "trolley problem" for autonomous vehicles?', options: ['A problem with train tracks', 'Deciding who to protect in an unavoidable accident', 'Charging the battery', 'Finding a parking spot'], correctAnswer: 'Deciding who to protect in an unavoidable accident' },
      { id: 'q2', text: 'What is a potentially new concern as robots become more socially intelligent?', options: ['Battery life', 'Emotional manipulation', 'Speed of movement', 'Color of the robot'], correctAnswer: 'Emotional manipulation' }
    ]
  },
  {
    id: 'l-h-30',
    skill: 'listening',
    level: 'hard',
    title: 'Lecture: Classic Design',
    description: 'An advanced aesthetic analysis of symmetry, proportion, and the revival of classical antiquity.',
    content: 'Transcript: "Renaissance architecture, which emerged in 15th-century Italy, was characterized by a profound revival of the principles and aesthetics of classical antiquity. Architects such as Brunelleschi and Palladio sought to move away from the perceived complexity of the Gothic style towards a design philosophy rooted in symmetry, proportion, and geometry. This included the use of classical elements like columns, pediments, and domes, which were arranged according to precise mathematical rules to create a sense of harmony and order. The influence of humanism was also central, with buildings designed to reflect human scale and dignity. The resulting structures, from grand cathedrals to elegant villas, represented a fundamental shift in the architectural vocabulary of Europe, one that continues to influence design to this day."',
    questions: [
      { id: 'q1', text: 'What was a key characteristic of Renaissance architecture?', options: ['Random asymmetry', 'Symmetry, proportion, and geometry', 'Excessive decoration', 'Lack of columns'], correctAnswer: 'Symmetry, proportion, and geometry' },
      { id: 'q2', text: 'Which architect is mentioned in the text?', options: ['Picasso', 'Brunelleschi', 'Dali', 'Monet'], correctAnswer: 'Brunelleschi' }
    ]
  },
  {
    id: 'l-h-31',
    skill: 'listening',
    level: 'hard',
    title: 'Motivation',
    description: 'An advanced look at intrinsic vs. extrinsic drivers and self-determination theory.',
    content: 'Transcript: "Understanding the drivers of human motivation is a central goal of psychological research. We distinguish between extrinsic motivation—behavior driven by external rewards like money or status—and intrinsic motivation, which is the internal desire to perform a task for its own sake. Self-determination theory suggests that for people to be truly intrinsically motivated, they need to feel a sense of autonomy, competence, and relatedness. Autonomy is the feeling of being in control of one\'s own actions, while competence is the sense of mastery and effectiveness. Relatedness refers to the need for social connection and belonging. When these three needs are met, people are more likely to experience sustained engagement and well-being in both their personal and professional lives."',
    questions: [
      { id: 'q1', text: 'What is "intrinsic motivation"?', options: ['Working for a bonus', 'Desire to perform a task for its own sake', 'Following orders', 'Fear of punishment'], correctAnswer: 'Desire to perform a task for its own sake' },
      { id: 'q2', text: 'What are the three needs in self-determination theory?', options: ['Food, water, shelter', 'Autonomy, competence, and relatedness', 'Money, power, fame', 'Speed, size, strength'], correctAnswer: 'Autonomy, competence, and relatedness' }
    ]
  },
  {
    id: 'l-h-32',
    skill: 'listening',
    level: 'hard',
    title: 'Arctic Melting',
    description: 'A scientific analysis of feedback loops and the impact on global sea levels.',
    content: 'Transcript: "The Arctic is warming at more than twice the global average, a phenomenon known as Arctic amplification. This rapid warming has led to a significant reduction in sea ice and the melting of the Greenland ice sheet. This is particularly concerning because of \'positive feedback loops.\' For example, as dark ocean water replaces reflective white ice, it absorbs more solar radiation, further accelerating the heating. This melting has profound global consequences, contributing significantly to rising sea levels, which threaten coastal communities worldwide. Furthermore, the loss of Arctic ice can disrupt major ocean currents, such as the Atlantic Meridional Overturning Circulation, with potentially unpredictable impacts on global weather patterns and ecosystems across the planet."',
    questions: [
      { id: 'q1', text: 'What is "Arctic amplification"?', options: ['Louder ice crashing', 'Rapid warming in the Arctic compared to the global average', 'More sound in the water', 'Increased snow'], correctAnswer: 'Rapid warming in the Arctic compared to the global average' },
      { id: 'q2', text: 'What is an example of a feedback loop mentioned?', options: ['More ice reflecting light', 'Dark water absorbing more solar radiation as ice melts', 'Rivers flowing faster', 'Animals migrating south'], correctAnswer: 'Dark water absorbing more solar radiation as ice melts' }
    ]
  },
  {
    id: 'l-h-33',
    skill: 'listening',
    level: 'hard',
    title: 'Lecture: Fall of Rome',
    description: 'An advanced look at the internal and external factors that led to the collapse.',
    content: 'Transcript: "The fall of the Western Roman Empire in 476 AD was not a single event but the culmination of centuries of decline, driven by a complex interplay of internal and external factors. Internally, the empire struggled with political instability, economic stagnation, and a reliance on slave labor that stifled innovation. Furthermore, the costs of maintaining a massive military to defend vast borders led to crushing taxes and inflation. Externally, the empire faced increasing pressure from various Germanic tribes seeking land and refuge. While the Eastern Roman Empire, or Byzantium, would survive for another millennium, the collapse of the West marked the beginning of a new era in European history, often referred to as the Early Middle Ages. The legacy of Rome, however, remained a foundational element of Western civilization for centuries to come."',
    questions: [
      { id: 'q1', text: 'When did the Western Roman Empire officially fall?', options: ['476 AD', '1066 AD', '1453 AD', '1789 AD'], correctAnswer: '476 AD' },
      { id: 'q2', text: 'What was one internal factor mentioned in the decline?', options: ['Too much gold', 'Political instability and economic stagnation', 'Lack of roads', 'Too many poets'], correctAnswer: 'Political instability and economic stagnation' }
    ]
  },
  {
    id: 'l-h-34',
    skill: 'listening',
    level: 'hard',
    title: 'Philosophy 3',
    description: 'A focused look at the concept of "authenticity" and social responsibility.',
    content: 'Transcript: "For existentialist thinkers, the highest virtue is \'authenticity\'—the absolute commitment to living in accordance with one\'s own chosen values and taking full responsibility for the consequences of those choices. This is opposed to \'bad faith,\' where individuals deny their own freedom and hide behind social roles or external expectations. However, this focus on individual freedom does not mean a rejection of social responsibility. In fact, many existentialists argued that precisely because we are free, we are also responsible for the world in which we live. Our choices and actions contribute to the collective human project, making it our duty to act in ways that promote freedom and justice for all, rather than retreating into a narrow or self-centered existence."',
    questions: [
      { id: 'q1', text: 'What is "authenticity" in existentialism?', options: ['Following all the rules', 'Living in accordance with one\'s chosen values', 'Buying expensive items', 'Denying freedom'], correctAnswer: 'Living in accordance with one\'s chosen values' },
      { id: 'q2', text: 'What is "bad faith"?', options: ['Having no religion', 'Denying one\'s own freedom and hiding behind social roles', 'Doing a bad job', 'Being rude'], correctAnswer: 'Denying one\'s own freedom and hiding behind social roles' }
    ]
  },
  {
    id: 'l-h-35',
    skill: 'listening',
    level: 'hard',
    title: 'Deep Learning',
    description: 'An advanced look at hidden layers and the architecture of modern AI.',
    content: 'Transcript: "Deep learning, a subset of machine learning, is inspired by the structure and function of the human brain. It involves the use of artificial neural networks with multiple \'hidden layers\'—hence the term \'deep.\' These layers allowed the network to learn increasingly abstract representations of data. In a typical feedforward network, information flows from the input layer, through several hidden layers, and finally to the output layer. The weights of the connections between neurons are adjusted through a process called backpropagation, which minimizes the error between the network\'s prediction and the actual target. This architecture has enabled breakthroughs in computer vision, natural language processing, and even autonomous driving, fundamentally changing the capabilities of artificial intelligence systems."',
    questions: [
      { id: 'q1', text: 'What makes a neural network "deep"?', options: ['It has many users', 'It has multiple hidden layers', 'It is very smart', 'It uses lots of electricity'], correctAnswer: 'It has multiple hidden layers' },
      { id: 'q2', text: 'What process is used to adjust the weights of connections in the network?', options: ['Forward thinking', 'Random choice', 'Backpropagation', 'Manual editing'], correctAnswer: 'Backpropagation' }
    ]
  },
  {
    id: 'l-h-36',
    skill: 'listening',
    level: 'hard',
    title: 'Prospect Theory Seminar',
    description: 'A study of loss aversion and the "endowment effect" in human decision-making.',
    content: 'Transcript: "Prospect Theory, developed by Daniel Kahneman and Amos Tversky, provides a more psychologically realistic alternative to the traditional model of rational choice. One of its most robust findings is \'loss aversion\'—the idea that the pain of losing something is twice as powerful as the joy of gaining something of equal objective value. This leads to the \'endowment effect,\' where individuals value an item more simply because they own it. Furthermore, prospect theory highlights how the way a choice is framed can dramatically influence our decisions. For example, people are more likely to support a policy if it\'s described as having a 90% success rate rather than a 10% failure rate. These insights have profound implications for understanding financial markets, insurance, and even public health campaigns."',
    questions: [
      { id: 'q1', text: 'What is "loss aversion"?', options: ['Avoiding any risk', 'The pain of loss being twice as powerful as the joy of gain', 'Losing money in the stock market', 'Fear of the future'], correctAnswer: 'The pain of loss being twice as powerful as the joy of gain' },
      { id: 'q2', text: 'What is the "endowment effect"?', options: ['Giving money to charity', 'Valuing an item more simply because you own it', 'Investing in new companies', 'Inheriting wealth'], correctAnswer: 'Valuing an item more simply because you own it' }
    ]
  },
  {
    id: 'l-h-37',
    skill: 'listening',
    level: 'hard',
    title: 'Lecture: Complexity Science - Emergence',
    description: 'An advanced look at how simple rules lead to complex global behaviors.',
    content: 'Transcript: "Complexity science is the study of systems composed of many interacting components that exhibit properties not found in the individual parts—a phenomenon known as emergence. A classic example is the flocking behavior of birds; there is no central controller or master plan, yet the flock as a whole behaves as a single coordinated entity. This global behavior arises from each bird following simple local rules, such as maintaining a minimum distance from its neighbors and aligning its speed with theirs. Emergence is found across a wide range of systems, from the self-organization of cities and markets to the complex patterns of brain activity that give rise to consciousness. Understanding these systems requires shifting our focus from individual components to the dynamic relationships and feedback loops that shape the system over time."',
    questions: [
      { id: 'q1', text: 'What is "emergence" in complexity science?', options: ['Things getting bigger', 'Properties not found in individual parts arising from interactions', 'Coming out of the water', 'Fast growth'], correctAnswer: 'Properties not found in individual parts arising from interactions' },
      { id: 'q2', text: 'How does flocking behavior in birds arise?', options: ['There is a leader bird', 'Each bird follows local rules from its neighbors', 'It is a random event', 'It is taught by older birds'], correctAnswer: 'Each bird follows local rules from its neighbors' }
    ]
  },
  {
    id: 'l-h-38',
    skill: 'listening',
    level: 'hard',
    title: 'Trust Sociology',
    description: 'A study of social capital, institutional trust, and the breakdown of community.',
    content: 'Transcript: "Trust is the invisible glue that holds societies together, enabling cooperation, trade, and social stability. Sociologists distinguish between interpersonal trust—trust in people we know—and generalized or institutional trust, which is trust in strangers and the systems that govern our lives. High levels of trust are a key component of \'social capital,\' leading to increased civic engagement and lower crime rates. However, in many modern societies, we are seeing a significant decline in trust in major institutions, such as the media, government, and the scientific community. This erosion of trust can lead to social polarization, the widespread belief in conspiracy theories, and a breakdown of collective action. Rebuilding trust requires greater transparency, accountability, and a focus on creating inclusive institutions that reflect the diverse values of the population."',
    questions: [
      { id: 'q1', text: 'What is "generalized trust"?', options: ['Trust in family', 'Trust in people you know only', 'Trust in strangers and institutions', 'Trusting no one'], correctAnswer: 'Trust in strangers and institutions' },
      { id: 'q2', text: 'What is one result of declining trust according to the text?', options: ['Better laws', 'Increased social polarization', 'Lower taxes', 'More social connection'], correctAnswer: 'Increased social polarization' }
    ]
  },
  {
    id: 'l-h-39',
    skill: 'listening',
    level: 'hard',
    title: 'Lecture: Game Evolution',
    description: 'A look at how strategies evolve over long periods in biological systems.',
    content: 'Transcript: "Evolutionary game theory applies the mathematical framework of game theory to biological populations, where strategies are not chosen rationally but are inherited traits. In this context, the \'payoff\' is measured in terms of reproductive success, or fitness. A key concept is the \'evolutionary stable strategy\' (ESS)—a strategy which, if adopted by most members of a population, cannot be invaded by a mutant strategy. This approach helps explain the evolution of stable ratios of different behaviors within a species, such as aggressive and cooperative tactics. Furthermore, it reveals how environmental changes can shift the balance between strategies, leading to rapid evolutionary transitions. This field highlights the deep connection between the principles of competition and the long-term patterns of life on earth."',
    questions: [
      { id: 'q1', text: 'What is the "payoff" in evolutionary game theory?', options: ['Money', 'Reproductive success or fitness', 'Time', 'Food only'], correctAnswer: 'Reproductive success or fitness' },
      { id: 'q2', text: 'What is an "evolutionary stable strategy" (ESS)?', options: ['A strategy that always wins', 'A strategy that cannot be invaded by a mutant strategy', 'A strategy that never changes', 'A strategy only used by birds'], correctAnswer: 'A strategy that cannot be invaded by a mutant strategy' }
    ]
  },
  {
    id: 'l-h-40',
    skill: 'listening',
    level: 'hard',
    title: 'Lecture: Modern Ethics - The Philosophy of Care',
    description: 'An advanced look at relational ethics and the rejection of universal moral rules.',
    content: 'Transcript: "The ethics of care is a moral theory that emerged in the late 20th century as a challenge to traditional ethical frameworks, such as Kantianism or utilitarianism, which prioritize universal rules and impartial justice. Instead, the ethics of care emphasizes the importance of relationships, empathy, and the specific needs of individuals in their particular social contexts. It suggests that our moral responsibilities arise from our connections with others—as parents, friends, or citizens—and that caring for those to whom we are related is a fundamental moral duty. This approach rejects the idea of a detached, autonomous moral agent, instead viewing humans as inherently relational and interdependent, highlighting the moral value of the work involved in sustaining human life and well-being."',
    questions: [
      { id: 'q1', text: 'What does the "ethics of care" emphasize?', options: ['Universal rules', 'Relationships and empathy', 'Impartial justice only', 'Punishment'], correctAnswer: 'Relationships and empathy' },
      { id: 'q2', text: 'How does it view human beings?', options: ['As individual machines', 'As inherently relational and interdependent', 'As purely selfish agents', 'As having no real feelings'], correctAnswer: 'As inherently relational and interdependent' }
    ]
  }
];
