const products = [
  { id: 1, name: "Keyboard Mekanikal", category: "Aksesoris", price: 450000, stock: 12 },
  { id: 2, name: "Mouse Wireless", category: "Aksesoris", price: 150000, stock: 0 },
  { id: 3, name: "Monitor 24 inch", category: "Elektronik", price: 1800000, stock: 5 },
  { id: 4, name: "Laptop Stand", category: "Aksesoris", price: 200000, stock: 25 },
  { id: 5, name: "Webcam HD", category: "Elektronik", price: 350000, stock: 8 },
  { id: 6, name: "SSD 1TB", category: "Elektronik", price: 900000, stock: 3 },
  { id: 7, name: "Headset Gaming", category: "Aksesoris", price: 500000, stock: 0 }
];

const suppliers = [
  { id: 1, supplierName: "PT Sumber Elektronik" },
  { id: 3, supplierName: "CV Layar Jaya" },
  { id: 5, supplierName: "Toko Kamera Sejahtera" }
];

console.log("\n=== SOAL 1 ===");
const productNames = products.map(product => product.name);
console.log(productNames);

console.log("\n=== SOAL 2 ===");
const lowStockProducts = products.filter(product => product.stock < 10);
console.log(lowStockProducts);

console.log("\n=== SOAL 3 ===");
const foundProduct = products.find(product => product.id === 3);
console.log(foundProduct);

console.log("\n=== SOAL 4 ===");
const outOfStockCount = products.filter(product => product.stock === 0).length;
console.log("Jumlah produk habis:", outOfStockCount);

console.log("\n=== SOAL 5 ===");
const uniqueCategories = [...new Set(products.map(product => product.category))];
console.log(uniqueCategories);