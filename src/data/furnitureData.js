const furnitureData = [
  {
    id: 1,
    name: "Luxe Velvet Sectional Sofa",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=400&fit=crop",
    furnitureType: "Sectional Sofa",
    material: "Velvet",
    brand: "West Elm",
    price: 2299.99,
    sale: { isOnSale: true, salePrice: 1799.99, discount: 22 },
    roomType: ["Living Room", "Family Room"]
  },
  {
    id: 2,
    name: "Rustic Oak Dining Table",
    image: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=500&h=400&fit=crop",
    furnitureType: "Dining Table",
    material: "Oak Wood",
    brand: "Pottery Barn",
    price: 1299.99,
    sale: { isOnSale: false },
    roomType: ["Dining Room", "Kitchen"]
  },
  {
    id: 3,
    name: "Scandinavian Platform Bed",
    image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=500&h=400&fit=crop",
    furnitureType: "Bed Frame",
    material: "Oak Wood",
    brand: "IKEA",
    price: 899.99,
    sale: { isOnSale: false },
    roomType: ["Bedroom", "Guest Room"]
  },
  {
    id: 4,
    name: "Executive Leather Office Chair",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=400&fit=crop",
    furnitureType: "Office Chair",
    material: "Leather",
    brand: "Herman Miller",
    price: 649.99,
    sale: { isOnSale: false },
    roomType: ["Office", "Study"]
  },
  {
    id: 5,
    name: "Mid-Century Modern Coffee Table",
    image: "https://images.unsplash.com/photo-1549497538-303791108f95?w=500&h=400&fit=crop",
    furnitureType: "Coffee Table",
    material: "Walnut Wood",
    brand: "West Elm",
    price: 499.99,
    sale: { isOnSale: true, salePrice: 379.99, discount: 24 },
    roomType: ["Living Room", "Lounge"]
  },
  {
    id: 6,
    name: "Contemporary Bookshelf Unit",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=400&fit=crop",
    furnitureType: "Bookshelf",
    material: "Oak Wood",
    brand: "IKEA",
    price: 399.99,
    sale: { isOnSale: false },
    roomType: ["Study", "Living Room", "Office"]
  },
  {
    id: 7,
    name: "Vintage Leather Armchair",
    image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500&h=400&fit=crop",
    furnitureType: "Armchair",
    material: "Leather",
    brand: "Pottery Barn",
    price: 1199.99,
    sale: { isOnSale: false },
    roomType: ["Living Room", "Study", "Den"]
  },
  {
    id: 8,
    name: "Minimalist Nightstand",
    image: "https://images.unsplash.com/photo-1586627346474-004f5b417d14?w=500&h=400&fit=crop",
    furnitureType: "Nightstand",
    material: "Walnut Wood",
    brand: "CB2",
    price: 199.99,
    sale: { isOnSale: false },
    roomType: ["Bedroom", "Guest Room"]
  },
  {
    id: 9,
    name: "Industrial Bar Stool Set",
    image: "https://images.unsplash.com/photo-1549497538-303791108f95?w=500&h=400&fit=crop",
    furnitureType: "Bar Stool",
    material: "Steel",
    brand: "CB2",
    price: 349.99,
    sale: { isOnSale: true, salePrice: 279.99, discount: 20 },
    roomType: ["Kitchen", "Bar Area", "Dining Room"]
  },
  {
    id: 10,
    name: "Elegant Vanity Dresser",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500&h=400&fit=crop",
    furnitureType: "Dresser",
    material: "Mahogany",
    brand: "Pottery Barn",
    price: 799.99,
    sale: { isOnSale: false },
    roomType: ["Bedroom", "Dressing Room"]
  },
  {
    id: 11,
    name: "Modular Storage Ottoman",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=400&fit=crop",
    furnitureType: "Ottoman",
    material: "Linen",
    brand: "West Elm",
    price: 149.99,
    sale: { isOnSale: false },
    roomType: ["Living Room", "Bedroom", "Family Room"]
  },
  {
    id: 12,
    name: "Farmhouse Kitchen Island",
    image: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=500&h=400&fit=crop",
    furnitureType: "Kitchen Island",
    material: "Pine Wood",
    brand: "Pottery Barn",
    price: 1599.99,
    sale: { isOnSale: false },
    roomType: ["Kitchen", "Dining Room"]
  },
  {
    id: 13,
    name: "Ergonomic Gaming Chair",
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=500&h=400&fit=crop",
    furnitureType: "Gaming Chair",
    material: "Mesh",
    brand: "Herman Miller",
    price: 299.99,
    sale: { isOnSale: true, salePrice: 229.99, discount: 23 },
    roomType: ["Office", "Gaming Room", "Study"]
  },
  {
    id: 14,
    name: "Art Deco Side Table",
    image: "https://images.unsplash.com/photo-1549497538-303791108f95?w=500&h=400&fit=crop",
    furnitureType: "Side Table",
    material: "Marble",
    brand: "CB2",
    price: 399.99,
    sale: { isOnSale: false },
    roomType: ["Living Room", "Bedroom", "Hallway"]
  },
  {
    id: 15,
    name: "Convertible Sofa Bed",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=400&fit=crop",
    furnitureType: "Sofa Bed",
    material: "Linen",
    brand: "IKEA",
    price: 799.99,
    sale: { isOnSale: false },
    roomType: ["Living Room", "Guest Room", "Studio"]
  },
  {
    id: 16,
    name: "Traditional Wooden Wardrobe",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500&h=400&fit=crop",
    furnitureType: "Wardrobe",
    material: "Oak Wood",
    brand: "Pottery Barn",
    price: 1299.99,
    sale: { isOnSale: false },
    roomType: ["Bedroom", "Dressing Room"]
  },
  {
    id: 17,
    name: "Modern Pendant Light Fixture",
    image: "https://images.unsplash.com/photo-1524634126442-357e0eac3c14?w=500&h=400&fit=crop",
    furnitureType: "Lighting",
    material: "Glass",
    brand: "West Elm",
    price: 249.99,
    sale: { isOnSale: false },
    roomType: ["Kitchen", "Dining Room", "Living Room"]
  },
  {
    id: 18,
    name: "Outdoor Patio Set",
    image: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=500&h=400&fit=crop",
    furnitureType: "Patio Set",
    material: "Teak Wood",
    brand: "Pottery Barn",
    price: 1199.99,
    sale: { isOnSale: false },
    roomType: ["Patio", "Garden", "Outdoor"]
  },
  {
    id: 19,
    name: "Swivel Bar Cart",
    image: "https://images.unsplash.com/photo-1549497538-303791108f95?w=500&h=400&fit=crop",
    furnitureType: "Bar Cart",
    material: "Steel",
    brand: "CB2",
    price: 399.99,
    sale: { isOnSale: true, salePrice: 319.99, discount: 20 },
    roomType: ["Living Room", "Dining Room", "Bar Area"]
  },
  {
    id: 20,
    name: "Kids Bunk Bed",
    image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=500&h=400&fit=crop",
    furnitureType: "Bunk Bed",
    material: "Pine Wood",
    brand: "IKEA",
    price: 699.99,
    sale: { isOnSale: false },
    roomType: ["Kids Room", "Guest Room"]
  },
  {
    id: 21,
    name: "Luxury Chaise Lounge",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=400&fit=crop",
    furnitureType: "Chaise Lounge",
    material: "Velvet",
    brand: "West Elm",
    price: 999.99,
    sale: { isOnSale: true, salePrice: 799.99, discount: 20 },
    roomType: ["Living Room", "Bedroom", "Reading Nook"]
  },
    {
        id: 22,
        name: "Contemporary TV Stand",
        image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500&h=400&fit=crop",
        furnitureType: "TV Stand",
        material: "Oak Wood",
        brand: "IKEA",
        price: 499.99,
        sale: { isOnSale: false },
        roomType: ["Living Room", "Entertainment Room"]
    },
    {
        id: 23,
        name: "Elegant Console Table",
        image: "https://images.unsplash.com/photo-1549497538-303791108f95?w=500&h=400&fit=crop",
        furnitureType: "Console Table",
        material: "Marble",
        brand: "CB2",
        price: 349.99,
        sale: { isOnSale: false },
        roomType: ["Hallway", "Living Room", "Entryway"]
    },
    {
        id: 24,
        name: "Stylish Bean Bag Chair",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=400&fit=crop",
        furnitureType: "Bean Bag Chair",
        material: "Cotton",
        brand: "West Elm",
        price: 79.99,
        sale: { isOnSale: false },
        roomType: ["Kids Room", "Game Room", "Living Room"]
      }
];


export default furnitureData;