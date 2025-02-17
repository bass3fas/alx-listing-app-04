import { PropertyProps } from "@/interfaces";

export const API_BASE_URL = 'https://api.example.com';
export const DEFAULT_PLACEHOLDER_IMAGE = '/assets/placeholder.png';

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    id: 1,
    name: "Villa Ocean Breeze",
    address: {
      state: "Seminyak",
      city: "Bali",
      country: "Indonesia"
    },
    rating: 4.89,
    category: ["Luxury Villa", "Pool", "Free Parking"],
    price: 3200,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6"
    },
    image: "/assets/images/listing/List1.png",
    discount: "",
    description: "This luxurious villa offers breathtaking ocean views, a private pool, and modern amenities. Perfect for a relaxing getaway.",
    reviews: [
      {
        id: 1,
        name: "John Doe",
        avatar: "/assets/images/avatars/avatar.png",
        rating: 5,
        comment: "Amazing place! The view was stunning and the villa was very clean."
      },
      {
        id: 2,
        name: "Jane Smith",
        avatar: "/assets/images/avatars/avatar.png",
        rating: 4,
        comment: "Great experience, but the check-in process could be smoother."
      }
    ]
  },
  {
    id: 2,
    name: "Mountain Escape Chalet",
    address: {
      state: "Aspen",
      city: "Colorado",
      country: "USA"
    },
    rating: 4.70,
    category: ["Mountain View", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: {
      bed: "4",
      shower: "2",
      occupants: "5-7"
    },
    image: "/assets/images/listing/List2.png",
    discount: "30",
    description: "A cozy chalet nestled in the mountains, perfect for skiing and winter getaways.",
    reviews: [
      {
        id: 3,
        name: "Alice Johnson",
        avatar: "/assets/images/avatars/avatar.png",
        rating: 4.5,
        comment: "Beautiful location and very comfortable stay."
      }
    ]
  },
  {
    id: 3,
    name: "Cozy Desert Retreat",
    address: {
      state: "Palm Springs",
      city: "California",
      country: "USA"
    },
    rating: 4.92,
    category: ["Desert View", "Pet Friendly", "Self Checkin"],
    price: 1500,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-3"
    },
    image: "/assets/images/listing/List3.png",
    discount: "",
    description: "A peaceful retreat in the desert with stunning views and modern amenities.",
    reviews: [
      {
        id: 4,
        name: "Bob Brown",
        avatar: "/assets/images/avatars/avatar.png",
        rating: 5,
        comment: "Perfect for a quiet getaway. Loved the desert vibe!"
      }
    ]
  },
  {
    id: 4,
    name: "City Lights Penthouse",
    address: {
      state: "New York",
      city: "New York",
      country: "USA"
    },
    rating: 4.85,
    category: ["City View", "Free WiFi", "24h Checkin"],
    price: 4500,
    offers: {
      bed: "2",
      shower: "2",
      occupants: "2-4"
    },
    image: "/assets/images/listing/List4.png",
    discount: "15",
    description: "A luxurious penthouse in the heart of the city with stunning skyline views.",
    reviews: [
      {
        id: 5,
        name: "Charlie Davis",
        avatar: "/assets/images/avatars/avatar.png",
        rating: 4.7,
        comment: "Amazing views and a very central location."
      }
    ]
  },
  {
    id: 5,
    name: "Riverside Cabin",
    address: {
      state: "Queenstown",
      city: "Otago",
      country: "New Zealand"
    },
    rating: 4.77,
    category: ["Riverside", "Private Dock", "Free Kayaks"],
    price: 2800,
    offers: {
      bed: "3",
      shower: "2",
      occupants: "4-6"
    },
    image: "/assets/images/listing/List5.png",
    discount: "20",
    description: "A charming cabin by the river, perfect for nature lovers and outdoor enthusiasts.",
    reviews: [
      {
        id: 6,
        name: "Eva Green",
        avatar: "/assets/images/avatars/avatar.png",
        rating: 4.8,
        comment: "Loved the peaceful atmosphere and the kayaking experience."
      }
    ]
  },
  {
    id: 6,
    name: "Modern Beachfront Villa",
    address: {
      state: "Sidemen",
      city: "Bali",
      country: "Indonesia"
    },
    rating: 4.95,
    category: ["Beachfront", "Private Pool", "Chef Service"],
    price: 5000,
    offers: {
      bed: "5",
      shower: "4",
      occupants: "8-10"
    },
    image: "/assets/images/listing/List6.png",
    discount: "",
    description: "A stunning beachfront villa with a private pool and chef service. Ideal for large groups or families.",
    reviews: [
      {
        id: 7,
        name: "Frank White",
        avatar: "/assets/images/avatars/avatar.png",
        rating: 5,
        comment: "Absolutely luxurious! The chef service was a highlight."
      }
    ]
  },
  {
    id: 7,
    name: "Lakeside Chalet",
    address: {
      state: "Banff",
      city: "Alberta",
      country: "Canada"
    },
    rating: 4.65,
    category: ["Lakeside", "Mountain View", "Hiking Trails"],
    price: 2300,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5"
    },
    image: "/assets/images/listing/List7.png",
    discount: "10",
    description: "A serene lakeside chalet with breathtaking mountain views and access to hiking trails.",
    reviews: [
      {
        id: 8,
        name: "Grace Lee",
        avatar: "/assets/images/avatars/avatar.png",
        rating: 4.6,
        comment: "Perfect for nature lovers. The views were incredible."
      }
    ]
  },
  {
    id: 8,
    name: "Tropical Garden Villa",
    address: {
      state: "Koh Samui",
      city: "Surat Thani",
      country: "Thailand"
    },
    rating: 4.80,
    category: ["Garden", "Free Parking", "Self Checkin"],
    price: 2750,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "5-6"
    },
    image: "/assets/images/listing/List8.png",
    discount: "25",
    description: "A tropical villa surrounded by lush gardens, offering privacy and tranquility.",
    reviews: [
      {
        id: 9,
        name: "Henry Brown",
        avatar: "/assets/images/avatars/avatar.png",
        rating: 4.9,
        comment: "The garden was beautiful, and the villa was very spacious."
      }
    ]
  },
  {
    id: 9,
    name: "Urban Loft",
    address: {
      state: "Berlin",
      city: "Berlin",
      country: "Germany"
    },
    rating: 4.60,
    category: ["City Center", "Free WiFi", "24h Checkin"],
    price: 2000,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-3"
    },
    image: "/assets/images/listing/List9.png",
    discount: "",
    description: "A modern loft in the heart of Berlin, perfect for urban explorers.",
    reviews: [
      {
        id: 10,
        name: "Isabella Clark",
        avatar: "/assets/images/avatars/avatar.png",
        rating: 4.5,
        comment: "Great location and stylish decor. Highly recommend!"
      }
    ]
  },
  {
    id: 10,
    name: "Secluded Forest Cabin",
    address: {
      state: "Whistler",
      city: "British Columbia",
      country: "Canada"
    },
    rating: 4.72,
    category: ["Secluded", "Hot Tub", "Self Checkin"],
    price: 2600,
    offers: {
      bed: "4",
      shower: "2",
      occupants: "5-7"
    },
    image: "/assets/images/listing/List10.png",
    discount: "40",
    description: "A secluded cabin in the forest with a hot tub, perfect for a peaceful retreat.",
    reviews: [
      {
        id: 11,
        name: "Jack Wilson",
        avatar: "/assets/images/avatars/avatar.png",
        rating: 4.7,
        comment: "The hot tub was amazing, and the cabin felt very private."
      }
    ]
  },
  {
    id: 11,
    name: "Cliffside Villa",
    address: {
      state: "Amalfi",
      city: "Salerno",
      country: "Italy"
    },
    rating: 4.93,
    category: ["Cliffside", "Infinity Pool", "Sea View"],
    price: 6000,
    offers: {
      bed: "4",
      shower: "4",
      occupants: "6-8"
    },
    image: "/assets/images/listing/List11.png",
    discount: "50",
    description: "A luxurious cliffside villa with an infinity pool and panoramic sea views.",
    reviews: [
      {
        id: 12,
        name: "Karen Taylor",
        avatar: "/assets/images/avatars/avatar.png",
        rating: 5,
        comment: "The views were breathtaking, and the villa was top-notch."
      }
    ]
  },
  {
    id: 12,
    name: "Coastal Escape Villa",
    address: {
      state: "Noosa",
      city: "Queensland",
      country: "Australia"
    },
    rating: 4.83,
    category: ["Beachfront", "Pet Friendly", "Free Parking"],
    price: 3400,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6"
    },
    image: "/assets/images/listing/List12.png",
    discount: "",
    description: "A coastal villa with direct beach access, perfect for a relaxing seaside vacation.",
    reviews: [
      {
        id: 13,
        name: "Liam Harris",
        avatar: "/assets/images/avatars/avatar.png",
        rating: 4.8,
        comment: "Loved the beach access and the pet-friendly policy."
      }
    ]
  },
  {
    id: 13,
    name: "Historical Villa",
    address: {
      state: "Florence",
      city: "Tuscany",
      country: "Italy"
    },
    rating: 4.67,
    category: ["Historical", "Free Breakfast", "Self Checkin"],
    price: 2700,
    offers: {
      bed: "2",
      shower: "2",
      occupants: "2-4"
    },
    image: "/assets/images/listing/List13.png",
    discount: "35",
    description: "A historical villa in Tuscany with classic architecture and modern comforts.",
    reviews: [
      {
        id: 14,
        name: "Mia Martinez",
        avatar: "/assets/images/avatars/avatar.png",
        rating: 4.6,
        comment: "The villa was full of charm, and the breakfast was delicious."
      }
    ]
  },
  {
    id: 14,
    name: "Downtown Apartment",
    address: {
      state: "Tokyo",
      city: "Tokyo",
      country: "Japan"
    },
    rating: 4.81,
    category: ["City Center", "Free WiFi", "Public Transport"],
    price: 2200,
    offers: {
      bed: "1",
      shower: "1",
      occupants: "2"
    },
    image: "/assets/images/listing/List14.png",
    discount: "",
    description: "A modern apartment in downtown Tokyo, close to public transport and attractions.",
    reviews: [
      {
        id: 15,
        name: "Noah Anderson",
        avatar: "/assets/images/avatars/avatar.png",
        rating: 4.8,
        comment: "Great location and very convenient for exploring the city."
      }
    ]
  },
  {
    id: 15,
    name: "Luxury Safari Lodge",
    address: {
      state: "Serengeti",
      city: "Mara",
      country: "Tanzania"
    },
    rating: 4.97,
    category: ["Safari", "Guided Tours", "Free Breakfast"],
    price: 4500,
    offers: {
      bed: "4",
      shower: "4",
      occupants: "6-8"
    },
    image: "/assets/images/listing/List15.png",
    discount: "20",
    description: "A luxury safari lodge offering guided tours and stunning views of the Serengeti.",
    reviews: [
      {
        id: 16,
        name: "Olivia Brown",
        avatar: "/assets/images/avatars/avatar.png",
        rating: 5,
        comment: "An unforgettable experience! The guided tours were incredible."
      }
    ]
  },
  {
    id: 16,
    name: "Countryside Cottage",
    address: {
      state: "Cotswolds",
      city: "Gloucestershire",
      country: "UK"
    },
    rating: 4.58,
    category: ["Countryside", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-4"
    },
    image: "/assets/images/listing/List16.png",
    discount: "25",
    description: "A charming countryside cottage with a cozy fireplace and scenic views.",
    reviews: [
      {
        id: 17,
        name: "Peter Wilson",
        avatar: "/assets/images/avatars/avatar.png",
        rating: 4.5,
        comment: "The cottage was very cozy, and the countryside was beautiful."
      }
    ]
  },
  {
    id: 17,
    name: "Riverfront Mansion",
    address: {
      state: "Paris",
      city: "Île-de-France",
      country: "France"
    },
    rating: 4.86,
    category: ["Riverfront", "Private Garden", "Self Checkin"],
    price: 5000,
    offers: {
      bed: "4",
      shower: "3",
      occupants: "6-8"
    },
    image: "/assets/images/listing/List17.png",
    discount: "30",
    description: "A grand riverfront mansion with a private garden, perfect for a luxurious stay.",
    reviews: [
      {
        id: 18,
        name: "Quinn Harris",
        avatar: "/assets/images/avatars/avatar.png",
        rating: 4.9,
        comment: "The mansion was stunning, and the garden was so peaceful."
      }
    ]
  },
  {
    id: 18,
    name: "Ski Chalet",
    address: {
      state: "Zermatt",
      city: "Valais",
      country: "Switzerland"
    },
    rating: 4.75,
    category: ["Mountain View", "Ski Access", "Fireplace"],
    price: 3900,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5"
    },
    image: "/assets/images/listing/List18.png",
    discount: "",
    description: "A cozy ski chalet with direct access to the slopes and a warm fireplace.",
    reviews: [
      {
        id: 19,
        name: "Rachel Green",
        avatar: "/assets/images/avatars/avatar.png",
        rating: 4.7,
        comment: "Perfect for a ski vacation. The fireplace was a nice touch."
      }
    ]
  },
  {
    id: 19,
    name: "Island Paradise Villa",
    address: {
      state: "Mahe",
      city: "Victoria",
      country: "Seychelles"
    },
    rating: 4.98,
    category: ["Beachfront", "Private Pool", "Chef Service"],
    price: 6500,
    offers: {
      bed: "5",
      shower: "5",
      occupants: "8-10"
    },
    image: "/assets/images/listing/List19.png",
    discount: "60",
    description: "An island paradise villa with a private pool and chef service, offering the ultimate luxury experience.",
    reviews: [
      {
        id: 20,
        name: "Sam Carter",
        avatar: "/assets/images/avatars/avatar.png",
        rating: 5,
        comment: "Pure luxury! The chef service was exceptional."
      }
    ]
  },
  {
    id: 20,
    name: "Clifftop Retreat",
    address: {
      state: "Cape Town",
      city: "Western Cape",
      country: "South Africa"
    },
    rating: 4.78,
    category: ["Ocean View", "Private Pool", "Self Checkin"],
    price: 4100,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5"
    },
    image: "/assets/images/listing/List20.png",
    discount: "40",
    description: "A clifftop retreat with stunning ocean views, a private pool, and modern amenities.",
    reviews: [
      {
        id: 21,
        name: "Sophie King",
        avatar: "/assets/images/avatars/avatar.png",
        rating: 4.8,
        comment: "The views were incredible, and the retreat was very relaxing."
      }
    ]
  }
];