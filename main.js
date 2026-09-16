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

// Beginner

console.log("\n=== SOAL 1 ===");
const Namaproduct = products.map(product => product.name);
console.log(Namaproduct);

console.log("\n=== SOAL 2 ===");
const jumlahStokProduct = products.filter(product => product.stock < 10);
console.log(jumlahStokProduct);

console.log("\n=== SOAL 3 ===");
const mencariProduct = products.find(product => product.id === 3);
console.log(mencariProduct);

console.log("\n=== SOAL 4 ===");
const jumlahStockTersisa = products.filter(product => product.stock === 1).length;
console.log("Jumlah produk habis:", jumlahStockTersisa);

console.log("\n=== SOAL 5 ===");
const Kategori = [...new Set(products.map(product => product.category))];
console.log(Kategori);

console.log("\n=== SOAL 6 ===");
const ProductMahal = products.some(product => product.price > 1000000);
console.log("Apakah ada produck diatas harga 1000000?", ProductMahal);

console.log("\n=== SOAL 7 ===");
const menghitungElektronik = products.filter(product => product.category === "Elektronik").length;
console.log("Jumlah produk kategori Elektronik:", menghitungElektronik);

console.log("\n=== SOAL 8 ===");
const sortedByName = [...products].sort((a, b) => a.name.localeCompare(b.name));
console.log(sortedByName);

// Intermediate

console.log("\n=== SOAL 9 ===");
const totalNilaiInventory = products.reduce((total, product) => total + (product.price * product.stock), 0);
console.log("Total nilai inventory:", totalNilaiInventory);

console.log("\n=== SOAL 10 ===");
const sortedByPrice = [...products].sort((a, b) => a.price - b.price);
console.log(sortedByPrice);