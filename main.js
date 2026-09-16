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

console.log("\n=== SOAL 11 ===");
const Elektronik = products.filter(product => product.category === "Elektronik");
const semuaHalDiatas = Elektronik.every(product => product.price > 300000);
console.log("Apakah semua Elektronik di atas Rp300.000?", semuaHalDiatas);

console.log("\n=== SOAL 12 ===");
const grupKategori = products.reduce((result, product) => {
  if (!result[product.category]) {
    result[product.category] = [];
  }
  result[product.category].push(product);
  return result;
}, {});
console.log(grupKategori);

console.log("\n=== SOAL 13 ===");
const productDenganStatus = products.map(product => {
  let status = "Tersedia";
  if (product.stock === 0) {
    status = "Habis";
  } else if (product.stock < 10) {
    status = " Stok Menipis";
  }
    return { ...product, status };
});
console.log(productDenganStatus);

console.log("\n=== SOAL 14 ===");
const kategori = [...new Set(products.map(p => p.category))];
const hargaBerdasarkanKategori = kategori.reduce((result, category) => {
  const filtered = products.filter(p => p.category === category);
  const total = filtered.reduce((sum, p) => + p.price, 0);
  result[category] = total / filtered.length;
  return result;
}, {});
console.log(hargaBerdasarkanKategori);

console.log("\n=== SOAL 15 ===");
const minMaxProduct = products.reduce((result, product) => {
  if (product.price > result.max.price) result.max = product;
  if (product.price < result.min.price) result.min = product;
  return result;
}, { max: products[0], min: products[0] });
console.log("Termahal & Termurah:", minMaxProduct);

console.log("\n=== SOAL 16 ===");
function mencariProduk(keyword) {
  return products.filter(product => product.name.toLowerCase().includes(keyword.toLowerCase())
);
}
console.log(mencariProduk("key"));

console.log("\n=== SOAL 17 ===");
const produkGabungan = products.map(product => {
  const supplier = suppliers.find(s => s.id === product.id);
  return {
    ...product,
    supplierName: supplier ? supplier.supplierName : "Tidak ada supplier"
  };
});
console.log(produkGabungan);

console.log("\n=== SOAL 18 ===");
function hapusProduct(id) {
  return products.filter(product => product.id !== id);
}
console.log(hapusProduct(2));


// BONUS

console.log("\n=== SOAL 19 ===");
function getProductByPage(array, page, perPage) {
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  return array.slice(startIndex, endIndex);
}
console.log(getProductByPage(products, 1, 3));

console.log("\n=== SOAL 20 ===");
function urutkanProduk(array, key, order = "asc") {
  return [...array].sort((a, b) => {
  if (typeof a[key] === "string") {
    return order === "asc"
    ? a[key].localeCompare(b[key])
    : b[key].localeCompare(a[key]);
  } else {
    return order === "asc"
    ? a[key] - b[key]
    : b[key] - a[key];
  }
});
}
console.log(urutkanProduk(products, "price"< "desc"));