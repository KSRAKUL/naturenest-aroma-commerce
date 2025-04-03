
import { Product } from './types';

export const products: Product[] = [
  {
    id: 1,
    name: "Organic Sambrani",
    shortDescription: "Natural air purifier and mosquito repellent",
    description: "Our flagship Organic Sambrani is handcrafted from premium natural ingredients following ancient traditions. This powerful natural incense purifies the air, creates a soothing aroma that reduces stress, and naturally repels mosquitoes without harmful chemicals.",
    price: 12.99,
    image: "/placeholder.svg",
    category: "Home",
    featured: true,
    bestseller: true,
    benefits: [
      "Purifies air and removes odors naturally",
      "Creates a calming atmosphere with aromatic herbs",
      "Repels mosquitoes and insects without chemicals",
      "Harvested sustainably from organic sources",
      "Supports traditional artisans and farming communities"
    ],
    ingredients: [
      "Organic Benzoin Resin",
      "Sustainably Harvested Sandalwood",
      "Himalayan Cedar",
      "Organic Neem Extract",
      "Essential Oils Blend"
    ],
    reviews: [
      {
        id: 101,
        name: "Sarah T.",
        rating: 5,
        comment: "The aroma is incredible and it really does keep mosquitoes away! I use it every evening on my patio.",
        date: "2023-10-12"
      },
      {
        id: 102,
        name: "Raj P.",
        rating: 5,
        comment: "This reminds me of the traditional sambrani my grandmother used. Pure, natural and effective.",
        date: "2023-09-28"
      },
      {
        id: 103,
        name: "Emma L.",
        rating: 4,
        comment: "Love the scent and mosquito-repelling properties. Would give 5 stars if it lasted a bit longer.",
        date: "2023-11-05"
      }
    ]
  },
  {
    id: 2,
    name: "Herbal Diffuser Blend",
    shortDescription: "Essential oil blend for aromatherapy",
    description: "Our specially formulated Herbal Diffuser Blend combines premium essential oils to create a serene atmosphere in your home. This unique blend promotes relaxation, supports respiratory health, and enhances mental clarity.",
    price: 18.99,
    image: "/placeholder.svg",
    category: "Aromatherapy",
    featured: true,
    benefits: [
      "Promotes relaxation and reduces stress",
      "Supports clear breathing and respiratory health",
      "Enhances mental focus and clarity",
      "100% pure essential oils, no synthetic fragrances",
      "Sustainably sourced ingredients"
    ],
    reviews: [
      {
        id: 201,
        name: "Michael R.",
        rating: 5,
        comment: "This blend has transformed my home office environment. I feel more focused and relaxed.",
        date: "2023-11-12"
      },
      {
        id: 202,
        name: "Priya S.",
        rating: 4,
        comment: "Beautiful aroma that isn't overwhelming. Great for evening relaxation.",
        date: "2023-10-19"
      }
    ]
  },
  {
    id: 3,
    name: "Bamboo Incense Holder",
    shortDescription: "Eco-friendly incense stick holder",
    description: "Our handcrafted Bamboo Incense Holder is the perfect companion for your incense rituals. Made from sustainable bamboo with a natural finish, this elegant holder catches ash while adding a touch of zen to your space.",
    price: 9.99,
    image: "/placeholder.svg",
    category: "Accessories",
    bestseller: true,
    benefits: [
      "Crafted from sustainable bamboo",
      "Elegant minimalist design",
      "Ash catching tray included",
      "Supports multiple incense sizes",
      "Durable and long-lasting construction"
    ],
    reviews: [
      {
        id: 301,
        name: "Jason K.",
        rating: 5,
        comment: "Simple, functional and beautiful. Exactly what I was looking for.",
        date: "2023-09-05"
      }
    ]
  },
  {
    id: 4,
    name: "Herbal Sleep Sachets",
    shortDescription: "Calming herbal mix for restful sleep",
    description: "Our Herbal Sleep Sachets combine lavender, chamomile, and other calming herbs in a convenient sachet that you can place under your pillow or beside your bed. The gentle natural aroma promotes deep, restful sleep without any artificial ingredients.",
    price: 14.99,
    image: "/placeholder.svg",
    category: "Wellness",
    featured: true,
    benefits: [
      "Promotes deeper, more restful sleep",
      "Calms the mind and reduces nighttime anxiety",
      "100% natural herbs with no synthetic fragrances",
      "Reusable cotton sachet material",
      "Each sachet lasts approximately 3 months"
    ],
    reviews: [
      {
        id: 401,
        name: "Leila M.",
        rating: 5,
        comment: "I've struggled with sleep for years. These sachets have made a noticeable difference in how quickly I fall asleep.",
        date: "2023-10-30"
      },
      {
        id: 402,
        name: "David W.",
        rating: 4,
        comment: "Pleasant aroma that's not too strong. Seems to help with relaxation before bed.",
        date: "2023-11-15"
      }
    ]
  },
  {
    id: 5,
    name: "Neem Wood Comb",
    shortDescription: "Antistatic wooden hair comb",
    description: "Our Neem Wood Comb is handcrafted from sustainably harvested neem wood, known for its antimicrobial properties. This natural comb prevents static, stimulates the scalp, and promotes healthier hair while reducing plastic waste.",
    price: 15.99,
    image: "/placeholder.svg",
    category: "Personal Care",
    benefits: [
      "Reduces static and prevents hair breakage",
      "Natural antimicrobial properties from neem wood",
      "Stimulates scalp and promotes hair health",
      "Durable design for long-term use",
      "Eco-friendly alternative to plastic combs"
    ],
    reviews: [
      {
        id: 501,
        name: "Anika P.",
        rating: 5,
        comment: "Beautiful comb that glides through my hair without pulling or creating static. Love it!",
        date: "2023-09-18"
      }
    ]
  },
  {
    id: 6,
    name: "Tulsi Tea Blend",
    shortDescription: "Immune-boosting herbal tea",
    description: "Our signature Tulsi Tea Blend combines three varieties of holy basil (tulsi) with complementary herbs to create a delicious, caffeine-free tea that supports immune function and helps manage stress. Each bag contains loose leaf tea for maximum flavor and benefits.",
    price: 11.99,
    image: "/placeholder.svg",
    category: "Wellness",
    bestseller: true,
    benefits: [
      "Supports healthy immune function",
      "Helps the body adapt to stress",
      "Rich in antioxidants and beneficial compounds",
      "Caffeine-free and suitable for evening consumption",
      "Grown using organic farming practices"
    ],
    reviews: [
      {
        id: 601,
        name: "Thomas R.",
        rating: 4,
        comment: "Great flavor and I definitely notice I feel more balanced when drinking it regularly.",
        date: "2023-10-08"
      },
      {
        id: 602,
        name: "Nina S.",
        rating: 5,
        comment: "This has become my daily ritual tea. Calming but also energizing somehow!",
        date: "2023-11-01"
      }
    ]
  }
];
