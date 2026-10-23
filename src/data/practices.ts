/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Practice } from '../types';
import { extraListeningPractices } from './listening_extra';
import { extraReadingPractices } from './reading_extra';
import { extraSpeakingPractices } from './speaking_extra';
import { extraWritingPractices } from './writing_extra';

export const practices: Practice[] = [
  // --- READING ---
  ...extraReadingPractices,

  // --- WRITING ---
  {
    id: 'w-e-1',
    skill: 'writing',
    level: 'easy',
    title: 'Intro Letter',
    description: 'Write a short letter introducing yourself to a new colleague.',
    content: 'Task: Write a short paragraph (50-80 words) introducing yourself. Include your name, your hobbies, and why you are excited to start this new job.'
  },
  {
    id: 'w-m-1',
    skill: 'writing',
    level: 'medium',
    title: 'Course Inquiry',
    description: 'Write an email to a university inquiring about a course.',
    content: 'Task: You are interested in a short course at an international university. Write an email to the admissions office (150-200 words) explaining your background, why you want to take the course, and asking about the application deadlines.'
  },
  {
    id: 'w-h-1',
    skill: 'writing',
    level: 'hard',
    title: 'City Growth',
    description: 'Write an argumentative essay about urbanization.',
    content: 'Prompt: Some people believe that rapid urbanization is the key to economic development, while others argue that it leads to social and environmental crises. Discuss both views and give your opinion. (Minimum 250 words)'
  },

  // --- LISTENING ---
  {
    id: 'l-e-1',
    skill: 'listening',
    level: 'easy',
    title: 'Gate Change',
    description: 'Listen to a short airport announcement about a gate change.',
    content: 'Transcript: "Attention all passengers for Flight AA402 to Madrid. There has been a gate change. Flight AA402 will now be boarding at Gate 22, not Gate 14. We apologize for the inconvenience. Boarding will begin in approximately 10 minutes. Please make your way to Gate 22 immediately."',
    questions: [
      {
        id: 'q1',
        text: 'Where is Flight AA402 going?',
        options: ['London', 'Madrid', 'Paris', 'Rome'],
        correctAnswer: 'Madrid'
      },
      {
        id: 'q2',
        text: 'What is the new boarding gate?',
        options: ['Gate 10', 'Gate 14', 'Gate 22', 'Gate 42'],
        correctAnswer: 'Gate 22'
      }
    ]
  },
  {
    id: 'l-e-2',
    skill: 'listening',
    level: 'easy',
    title: 'Cafe Order',
    description: 'A customer ordering breakfast in a cafe.',
    content: 'Transcript: "Hi, I\'d like a large latte and a blueberry muffin, please." "Sure, would you like that latte with regular or oat milk?" "Oat milk, please. And could you warm up the muffin?" "Of course. That will be seven dollars and fifty cents."',
    questions: [
      {
        id: 'q1',
        text: 'What type of milk did the customer choose?',
        options: ['Regular', 'Soy', 'Almond', 'Oat'],
        correctAnswer: 'Oat'
      },
      {
        id: 'q2',
        text: 'How much does the order cost?',
        options: ['$6.50', '$7.00', '$7.50', '$8.50'],
        correctAnswer: '$7.50'
      }
    ]
  },
  {
    id: 'l-e-3',
    skill: 'listening',
    level: 'easy',
    title: 'Lost Property',
    description: 'A person reporting a lost item at a train station.',
    content: 'Transcript: "Excuse me, I think I left my umbrella on the 9:15 train from Brighton." "Okay, let me check. What color was it?" "It was bright yellow with a black handle." "I see. Let me look in our lost property box... yes, here it is!"',
    questions: [
      {
        id: 'q1',
        text: 'What item was lost?',
        options: ['A bag', 'An umbrella', 'A hat', 'A wallet'],
        correctAnswer: 'An umbrella'
      },
      {
        id: 'q2',
        text: 'What time did the train leave?',
        options: ['8:15', '9:15', '9:45', '10:15'],
        correctAnswer: '9:15'
      }
    ]
  },
  {
    id: 'l-m-1',
    skill: 'listening',
    level: 'medium',
    title: 'Library Tour',
    description: 'A librarian explaining the library rules to new students.',
    content: 'Transcript: "Welcome to the central library. As first-year students, you are entitled to borrow up to ten books at a time for a period of two weeks. If you need a book for longer, you can renew it online, provided no one else has reserved it. Please remember that the top floor is a silent study area, and mobile phones must be switched off or put on silent throughout the building. Printing and scanning services are available on the ground floor next to the help desk."',
    questions: [
      {
        id: 'q1',
        text: 'How many books can students borrow at once?',
        options: ['5', '10', '15', '20'],
        correctAnswer: '10'
      },
      {
        id: 'q2',
        text: 'Where can students find printing services?',
        options: ['Top floor', 'Basement', 'Ground floor', 'Online only'],
        correctAnswer: 'Ground floor'
      }
    ]
  },
  {
    id: 'l-m-2',
    skill: 'listening',
    level: 'medium',
    title: 'Weather & Roads',
    description: 'A morning radio update on weather and travel conditions.',
    content: 'Transcript: "Good morning! It\'s a cold start to the day with temperatures around 4 degrees Celsius. Expect heavy rain by mid-afternoon, so don\'t forget your umbrellas. On the roads, there is a major delay on the M25 northbound due to a breakdown near junction 14. Traffic is currently backed up for three miles. Drivers are advised to find an alternative route if possible. The suburban trains are running on a normal schedule today."',
    questions: [
      {
        id: 'q1',
        text: 'What is the weather forecast for the afternoon?',
        options: ['Snow', 'Strong winds', 'Heavy rain', 'Sunny spells'],
        correctAnswer: 'Heavy rain'
      },
      {
        id: 'q2',
        text: 'Why is there traffic on the M25?',
        options: ['Road repairs', 'A breakdown', 'An accident', 'Flooding'],
        correctAnswer: 'A breakdown'
      }
    ]
  },
  {
    id: 'l-h-1',
    skill: 'listening',
    level: 'hard',
    title: 'Coral Reefs',
    description: 'An academic lecture discussing the impact of climate change on marine ecosystems.',
    content: 'Transcript: "Coral reefs, often referred to as the \'rainforests of the sea,\' are some of the most biodiverse ecosystems on our planet. However, they are currently under unprecedented stress from rising ocean temperatures. When water becomes too warm, corals expel the symbiotic algae living in their tissues, causing them to turn completely white—a process known as bleaching. While corals can survive a bleaching event, they are under more stress and are subject to mortality. In the last decade, we have witnessed three global bleaching events, which scientists attribute directly to anthropogenic climate change and the resultant acidification of the oceans."',
    questions: [
      {
        id: 'q1',
        text: 'Why do corals turn white during a bleaching event?',
        options: ['They die instantly', 'They lose their pigment', 'They expel symbiotic algae', 'They are covered in sand'],
        correctAnswer: 'They expel symbiotic algae'
      },
      {
        id: 'q2',
        text: 'What do scientists attribute these bleaching events to?',
        options: ['Natural cycles', 'Overfishing', 'Anthropogenic climate change', 'Pollution from ships'],
        correctAnswer: 'Anthropogenic climate change'
      }
    ]
  },
  {
    id: 'l-e-4',
    skill: 'listening',
    level: 'easy',
    title: 'Hotel Booking',
    description: 'A phone call to book a hotel room.',
    content: 'Transcript: "Grand Plaza Hotel, how can I help you?" "Hi, I\'d like to book a double room for two nights, starting this Friday." "Let me check... yes, we have availability. The price is $120 per night, including breakfast." "That sounds good. Does the room have a sea view?" "Unfortunately, only our suites have a sea view, but this room overlooks our beautiful courtyard."',
    questions: [
      {
        id: 'q1',
        text: 'How many nights does the customer want to stay?',
        options: ['One night', 'Two nights', 'Three nights', 'Four nights'],
        correctAnswer: 'Two nights'
      },
      {
        id: 'q2',
        text: 'What is included in the price?',
        options: ['Dinner', 'Spa access', 'Breakfast', 'Airport shuttle'],
        correctAnswer: 'Breakfast'
      }
    ]
  },
  {
    id: 'l-e-5',
    skill: 'listening',
    level: 'easy',
    title: 'Visit Museum',
    description: 'Asking for directions in a city centre.',
    content: 'Transcript: "Excuse me, could you tell me the way to the Science Museum?" "Yes, of course. Go straight ahead until you reach the traffic lights, then turn left. Walk past the post office and you\'ll see the museum on your right, just opposite the library." "Is it far to walk?" "No, it shouldn\'t take more than five minutes from here."',
    questions: [
      {
        id: 'q1',
        text: 'What should the person do at the traffic lights?',
        options: ['Turn right', 'Turn left', 'Go straight', 'Stop'],
        correctAnswer: 'Turn left'
      },
      {
        id: 'q2',
        text: 'What is the museum opposite to?',
        options: ['The post office', 'The library', 'The park', 'The station'],
        correctAnswer: 'The library'
      }
    ]
  },
  {
    id: 'l-m-3',
    skill: 'listening',
    level: 'medium',
    title: 'New Job Intro',
    description: 'A manager explaining office procedures to a new employee.',
    content: 'Transcript: "Welcome to the team, Sarah. Let me go over a few basics. Our official working hours are from 9:00 AM to 5:30 PM, but we offer flexible start times between 8:00 and 10:00 AM. As for lunch, most people take an hour between 12:30 and 1:30. You\'ll find the kitchen on the second floor, which has a microwave and a fridge. Please make sure to label any food you put in there. Also, we have a weekly team meeting every Wednesday at 11:00 AM in the main conference room."',
    questions: [
      {
        id: 'q1',
        text: 'What is the latest time an employee can start work?',
        options: ['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM'],
        correctAnswer: '10:00 AM'
      },
      {
        id: 'q2',
        text: 'When is the weekly team meeting?',
        options: ['Monday morning', 'Wednesday at 11:00', 'Friday afternoon', 'Every day'],
        correctAnswer: 'Wednesday at 11:00'
      }
    ]
  },
  {
    id: 'l-m-4',
    skill: 'listening',
    level: 'medium',
    title: 'Wildlife Talk',
    description: 'A talk about a project to protect local red squirrels.',
    content: 'Transcript: "Our local red squirrel population has declined by nearly 40% in the last five years, primarily due to habitat loss and competition from the larger grey squirrel. To combat this, our conservation project is focusing on two main areas: creating wildlife corridors between isolated patches of woodland and installing specialized feeding stations that only red squirrels can access. We are also asking local residents to report any sightings through our website to help us track their movements. We hope these measures will allow the population to stabilize within the next decade."',
    questions: [
      {
        id: 'q1',
        text: 'By how much has the red squirrel population declined?',
        options: ['10%', '25%', '40%', '60%'],
        correctAnswer: '40%'
      },
      {
        id: 'q2',
        text: 'What is one way residents can help?',
        options: ['Feeding the squirrels', 'Reporting sightings', 'Building nests', 'Removing grey squirrels'],
        correctAnswer: 'Reporting sightings'
      }
    ]
  },
  {
    id: 'l-h-2',
    skill: 'listening',
    level: 'hard',
    title: 'The Silk Road',
    description: 'An academic discussion on the economic and cultural impact of ancient trade routes.',
    content: 'Transcript: "The Silk Road was not merely a single path but a vast network of terrestrial and maritime routes that facilitated the exchange of goods, ideas, and technologies between the East and the West for over a millennium. While silk was indeed a primary commodity, the trade of spices, precious metals, and even paper had profound impacts on the developing civilizations of Eurasia. Perhaps more significant than the material exchange was the transmission of religious philosophies and scientific knowledge. For instance, the spread of Buddhism from India to China was largely facilitated by travelers and monks along these routes. However, the Silk Road also acted as a conduit for pathogens, most notably the Bubonic Plague, which devastated populations across two continents in the 14th century."',
    questions: [
      {
        id: 'q1',
        text: 'Besides silk, what other commodity is mentioned as having a profound impact?',
        options: ['Tea', 'Paper', 'Wine', 'Cotton'],
        correctAnswer: 'Paper'
      },
      {
        id: 'q2',
        text: 'What negative consequence of the Silk Road is mentioned?',
        options: ['High taxes', 'War between empires', 'Transmission of pathogens', 'Environmental damage'],
        correctAnswer: 'Transmission of pathogens'
      }
    ]
  },
  {
    id: 'l-e-6',
    skill: 'listening',
    level: 'easy',
    title: 'Library Card',
    description: 'A student registering for a library card.',
    content: 'Transcript: "Good morning, I\'d like to join the library." "Certainly. I just need a few details. What\'s your full name?" "It\'s Mark Thompson." "And your address, Mark?" "I live at 42 Green Street, Flat 3." "Great. You\'ll need to show me proof of address, like a utility bill or a bank statement." "Is a digital copy on my phone okay?" "Yes, that\'s fine."',
    questions: [
      {
        id: 'q1',
        text: 'What is Mark\'s last name?',
        options: ['Thomas', 'Thompson', 'Thorne', 'Thornton'],
        correctAnswer: 'Thompson'
      },
      {
        id: 'q2',
        text: 'What proof of address is mentioned as acceptable?',
        options: ['Passport', 'Digital utility bill', 'Student ID', 'Driver\'s license'],
        correctAnswer: 'Digital utility bill'
      }
    ]
  },
  {
    id: 'l-e-7',
    skill: 'listening',
    level: 'easy',
    title: 'Pizza Order',
    description: 'A phone call to a pizza delivery service.',
    content: 'Transcript: "Pizza Express, how can I help you?" "Hi, I\'d like to order a large Pepperoni Feast and a side of garlic bread." "Sure thing. Anything else? Drinks?" "A bottle of sparkling water too, please." "Okay, that will be $24.50. What\'s the delivery address?" "It\'s 15 Oak Avenue. I\'ll leave the porch light on."',
    questions: [
      {
        id: 'q1',
        text: 'What drink did the customer order?',
        options: ['Cola', 'Orange juice', 'Sparkling water', 'Still water'],
        correctAnswer: 'Sparkling water'
      },
      {
        id: 'q2',
        text: 'What is the street name for delivery?',
        options: ['Oak Avenue', 'Maple Road', 'Pine Street', 'Cedar Lane'],
        correctAnswer: 'Oak Avenue'
      }
    ]
  },
  {
    id: 'l-e-8',
    skill: 'listening',
    level: 'easy',
    title: 'Doctor\'s Visit',
    description: 'Making an appointment over the phone.',
    content: 'Transcript: "Health Centre, good afternoon." "Hello, I\'d like to see Dr. Miller as soon as possible." "Let\'s see... Dr. Miller is fully booked today, but has an opening tomorrow morning at 9:15." "That works for me. My name is James Wilson." "Perfect, James. We\'ll see you tomorrow at 9:15. Please arrive ten minutes early if it\'s your first visit."',
    questions: [
      {
        id: 'q1',
        text: 'When is the appointment scheduled for?',
        options: ['Today', 'Tomorrow morning', 'Later this week', 'Next Monday'],
        correctAnswer: 'Tomorrow morning'
      },
      {
        id: 'q2',
        text: 'What time is the appointment?',
        options: ['8:45', '9:15', '9:45', '10:15'],
        correctAnswer: '9:15'
      }
    ]
  },
  {
    id: 'l-m-5',
    skill: 'listening',
    level: 'medium',
    title: 'Solar Charger',
    description: 'A tech reviewer talking about a new solar charger.',
    content: 'Transcript: "Today I\'m testing the SunCharge 5000. It\'s a rugged solar power bank designed for hikers. The build quality is excellent; it\'s both waterproof and shockproof. It takes about 12 hours of direct sunlight to fully charge via the built-in panel, which is a bit slow, but you can also charge it via USB-C in just two hours. It has enough capacity to charge a standard smartphone twice. At $45, it\'s a great value for those who spend a lot of time off the grid."',
    questions: [
      {
        id: 'q1',
        text: 'How long does it take to charge the device using solar power?',
        options: ['2 hours', '6 hours', '12 hours', '24 hours'],
        correctAnswer: '12 hours'
      },
      {
        id: 'q2',
        text: 'What is one weakness mentioned by the reviewer?',
        options: ['Poor build quality', 'High price', 'Slow solar charging', 'Not waterproof'],
        correctAnswer: 'Slow solar charging'
      }
    ]
  },
  {
    id: 'l-m-6',
    skill: 'listening',
    level: 'medium',
    title: 'Town Fest',
    description: 'An organizer describing an upcoming community event.',
    content: 'Transcript: "This year\'s Riverdale Cultural Festival will be our biggest yet. We have groups representing fifteen different countries performing traditional dances on the main stage. The food market will feature over thirty stalls, including local favorites and international cuisine. For the kids, we have a craft tent where they can learn traditional pottery and weaving. The event kicks off at 10 AM on Saturday and runs until 8 PM, concluding with a spectacular fireworks display over the river."',
    questions: [
      {
        id: 'q1',
        text: 'How many countries are represented by the performing groups?',
        options: ['5', '10', '15', '20'],
        correctAnswer: '15'
      },
      {
        id: 'q2',
        text: 'What happens at the end of the festival?',
        options: ['A parade', 'A concert', 'A craft contest', 'Fireworks display'],
        correctAnswer: 'Fireworks display'
      }
    ]
  },
  {
    id: 'l-h-3',
    skill: 'listening',
    level: 'hard',
    title: 'Egypt Finds',
    description: 'A podcast discussing a newly discovered tomb.',
    content: 'Transcript: "The recent discovery of a previously unknown tomb in the Saqqara necropolis is rewriting our understanding of the Fifth Dynasty. Archaeologists found the tomb of a high-ranking official named Khuwy, which dates back over 4,000 years. What makes this find particularly remarkable is the state of preservation of the wall paintings. The colors are incredibly vibrant, showing scenes of daily life, agricultural practices, and religious rituals. The L-shaped tomb also featured a tunnel entrance, which is usually reserved for royal burials, suggesting that Khuwy had a very close relationship with the pharaoh of that time. This discovery provides a unique window into the social hierarchy and courtly life of the Old Kingdom."',
    questions: [
      {
        id: 'q1',
        text: 'What dynasty does the newly discovered tomb belong to?',
        options: ['Third Dynasty', 'Fifth Dynasty', 'Twelfth Dynasty', 'Eighteenth Dynasty'],
        correctAnswer: 'Fifth Dynasty'
      },
      {
        id: 'q2',
        text: 'What feature of the tomb is described as "usually reserved for royal burials"?',
        options: ['Gold statues', 'A tunnel entrance', 'Vibrant wall paintings', 'Mummification tools'],
        correctAnswer: 'A tunnel entrance'
      }
    ]
  },
  {
    id: 'l-e-9',
    skill: 'listening',
    level: 'easy',
    title: 'Weekend Plans',
    description: 'Two friends discussing their plans for the weekend.',
    content: 'Transcript: "Hey, what are you doing this weekend?" "I\'m going to the beach on Saturday. The weather forecast says it will be sunny and warm." "That sounds lovely. Are you going alone?" "No, I\'m going with my brother and his kids. We\'re going to have a barbecue." "Great! I\'m just staying home and doing some gardening."',
    questions: [
      {
        id: 'q1',
        text: 'What is the person doing on Saturday?',
        options: ['Going to the park', 'Going to the beach', 'Staying home', 'Visiting a museum'],
        correctAnswer: 'Going to the beach'
      },
      {
        id: 'q2',
        text: 'Who is the person going with?',
        options: ['Friends', 'Brother and his kids', 'Parents', 'Colleagues'],
        correctAnswer: 'Brother and his kids'
      }
    ]
  },
  {
    id: 'l-e-10',
    skill: 'listening',
    level: 'easy',
    title: 'Bus Times',
    description: 'Asking about bus times at a station.',
    content: 'Transcript: "Excuse me, when is the next bus to the airport?" "The next one is the number 22, it leaves in fifteen minutes from Stand C." "How long does the journey take?" "It usually takes about forty minutes, but it might be longer with the morning traffic." "Thank you very much."',
    questions: [
      {
        id: 'q1',
        text: 'Which bus goes to the airport?',
        options: ['Number 10', 'Number 15', 'Number 22', 'Number 40'],
        correctAnswer: 'Number 22'
      },
      {
        id: 'q2',
        text: 'How long does the journey normally take?',
        options: ['15 minutes', '22 minutes', '40 minutes', '60 minutes'],
        correctAnswer: '40 minutes'
      }
    ]
  },
  {
    id: 'l-e-11',
    skill: 'listening',
    level: 'easy',
    title: 'Cinema Tickets',
    description: 'Buying tickets for a movie.',
    content: 'Transcript: "Hi, I\'d like two tickets for the 7:30 screening of \'The Lost Kingdom\'." "Sure, where would you like to sit? We have seats in the front row or the back row." "Middle row, if possible." "Yes, we have two seats in the middle. That will be eighteen dollars, please." "Here you go. And can I get a large popcorn too?"',
    questions: [
      {
        id: 'q1',
        text: 'What time is the movie screening?',
        options: ['6:30', '7:00', '7:30', '8:00'],
        correctAnswer: '7:30'
      },
      {
        id: 'q2',
        text: 'Where did the customer choose to sit?',
        options: ['Front row', 'Middle row', 'Back row', 'VIP section'],
        correctAnswer: 'Middle row'
      }
    ]
  },
  {
    id: 'l-m-7',
    skill: 'listening',
    level: 'medium',
    title: 'Speech Tips',
    description: 'A professional speaker giving advice on how to improve presentations.',
    content: 'Transcript: "The key to a successful presentation is preparation. Start by defining your core message and organizing your points logically. Use visual aids like slides, but don\'t overcrowd them with text; a few key bullet points or a single powerful image is much more effective. Practice your delivery several times to ensure you stay within the time limit. On the day, try to make eye contact with different sections of the audience to build a connection. Finally, always leave five to ten minutes at the end for a Q&A session."',
    questions: [
      {
        id: 'q1',
        text: 'What advice is given regarding slides?',
        options: ['Use as much text as possible', 'Avoid using images', 'Don\'t overcrowd them with text', 'Change slides every 10 seconds'],
        correctAnswer: 'Don\'t overcrowd them with text'
      },
      {
        id: 'q2',
        text: 'How much time should be left for questions at the end?',
        options: ['1-2 minutes', '5-10 minutes', '15 minutes', 'None'],
        correctAnswer: '5-10 minutes'
      }
    ]
  },
  {
    id: 'l-m-8',
    skill: 'listening',
    level: 'medium',
    title: 'Save Energy',
    description: 'An expert talking about simple ways to reduce electricity bills.',
    content: 'Transcript: "Reducing your energy consumption doesn\'t have to be difficult or expensive. One of the simplest steps is to switch to LED light bulbs, which use up to 80% less energy than traditional ones. Another effective method is to lower your thermostat by just one degree during the winter, which can save you about 10% on your heating bill. Also, remember to unplug electronics when they aren\'t in use, as they can still draw power in standby mode. Lastly, only run your dishwasher and washing machine when they are completely full to maximize efficiency."',
    questions: [
      {
        id: 'q1',
        text: 'How much energy can LED bulbs save compared to traditional ones?',
        options: ['20%', '50%', '80%', '100%'],
        correctAnswer: '80%'
      },
      {
        id: 'q2',
        text: 'What is mentioned about electronic devices?',
        options: ['Leave them on all day', 'Unplug them when not in use', 'Buy expensive brands', 'Keep them in standby mode'],
        correctAnswer: 'Unplug them when not in use'
      }
    ]
  },
  {
    id: 'l-h-4',
    skill: 'listening',
    level: 'hard',
    title: 'Choice Economics',
    description: 'An introduction to how psychological factors influence economic decisions.',
    content: 'Transcript: "Traditional economic models often assume that individuals act as rational agents, consistently making choices that maximize their personal utility. However, the field of behavioral economics challenges this assumption by integrating insights from psychology. We see that humans are often prone to cognitive biases, such as loss aversion—the tendency to prefer avoiding losses over acquiring equivalent gains. For example, the pain of losing $10 is often felt more intensely than the joy of finding $10. Another key concept is the \'anchoring effect,\' where individuals rely too heavily on the first piece of information offered when making decisions. Understanding these patterns is crucial for policymakers and businesses alike as they attempt to predict and influence consumer behavior in the real world."',
    questions: [
      {
        id: 'q1',
        text: 'What does traditional economic theory assume about individuals?',
        options: ['They are emotional', 'They are rational agents', 'They are unpredictable', 'They avoid making choices'],
        correctAnswer: 'They are rational agents'
      },
      {
        id: 'q2',
        text: 'What is "loss aversion"?',
        options: ['Preferring gains over losses', 'Preferring avoiding losses over equivalent gains', 'Finding $10 is better than losing it', 'Ignoring the value of money'],
        correctAnswer: 'Preferring avoiding losses over equivalent gains'
      }
    ]
  },
  ...extraListeningPractices,

  // --- SPEAKING ---
  {
    id: 's-e-1',
    skill: 'speaking',
    level: 'easy',
    title: 'My Hobby',
    description: 'Speak about your favourite food or drink.',
    content: 'Prompt: Tell me about your favourite type of food. Do you prefer eating at home or at a restaurant? Why? What was the last special meal you had?'
  },
  {
    id: 's-m-1',
    skill: 'speaking',
    level: 'medium',
    title: 'My City',
    description: 'Speak about a place you enjoyed visiting.',
    content: 'Prompt: Describe a city or town you have visited and liked. You should say: where it is, when you went there, what you did there, and explain why you liked it so much.'
  },
  {
    id: 's-h-1',
    skill: 'speaking',
    level: 'hard',
    title: 'Schools',
    description: 'Discuss the role of technology in modern education.',
    content: 'Prompt: How has technology changed the way students learn in your country? Do you think computers will ever replace teachers in the classroom? What are some potential drawbacks of relying too heavily on digital tools for education?'
  },
  ...extraSpeakingPractices,
  ...extraWritingPractices
];
