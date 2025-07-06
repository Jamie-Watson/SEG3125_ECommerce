const furnitureData = [
  {
    id: 1,
    name: "Luxe Velvet Sectional Sofa",
    image: "/assets/images/velvetSofa.jpg",
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
    image: "/assets/images/oakTable.jpg",
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
    image: "/assets/images/platformBed.jpg",
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
    image: "/assets/images/leatherChair.jpg",
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
    image: "/assets/images/coffeeTable.jpg",
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
    image: "/assets/images/contemporaryBookshelf.jpg",
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
    image: "/assets/images/vintageArmchair.jpg",
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
    image: "/assets/images/minimalNightstand.jpg",
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
    image: "/assets/images/industrialStools.jpg",
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
    image: "/assets/images/vanityDresser.jpg",
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
    image: "/assets/images/storageOttoman.jpg",
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
    image: "/assets/images/kitchenIsland.jpg",
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
    image: "/assets/images/gamingChair.jpg",
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
    image: "/assets/images/decoTable.jpg",
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
    image: "/assets/images/sofaCouch.jpg",
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
    image: "/assets/images/woodWardrobe.jpg",
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
    image: "/assets/images/lightFixture.jpg",
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
    image: "/assets/images/patioSet.jpg",
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
    image: "/assets/images/barCart.jpg",
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
    image: "/assets/images/bunkBed.jpg",
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
    image: "/assets/images/chaiseLounge.jpg",
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
        image: "/assets/images/tvStand.jpg",
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
        image: "/assets/images/consoleTable.jpg",
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
        image: "/assets/images/beanBag.jpg",
        furnitureType: "Bean Bag Chair",
        material: "Cotton",
        brand: "West Elm",
        price: 79.99,
        sale: { isOnSale: false },
        roomType: ["Kids Room", "Game Room", "Living Room"]
      }
];


export default furnitureData;