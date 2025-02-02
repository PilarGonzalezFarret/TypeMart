import products from "./products";

let productName: string;
productName = "tote bag";
productName = "fanny pack";

const product = products.filter((product) => product.name === productName)[0];

console.log(product);

if (product.preOrder === "true") {
  console.log("We will send you a message when your product is on its way.");
}

let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;
let shippingAddress: string = "Avenida Siempre Viva 742,  New York";

//const precioProducto = 30;

if (product.price > 25) {
  console.log("¡Despacho gratis! 🎉");
  shipping = 0;
} else {
  console.log("Despacho con costo adicional. 💸");
  shipping = 5;
}

if (shippingAddress.match(/New York/)) {
  taxPercent = 0.1; // 10% de impuesto para Nueva York
} else {
  taxPercent = 0.05; // 5% de impuesto para otras direcciones
}

// Calcular el impuesto y el total
taxTotal = product.price * taxPercent;
total = product.price + taxTotal + shipping;

// Mostrar los resultados
console.log("--- Recibo ---");
console.log(`Producto: ${product.name}`);
console.log(`Dirección de envío: ${shippingAddress}`);
console.log(`Precio: $${product.price.toFixed(2)}`);
console.log(`Impuesto: $${taxTotal.toFixed(2)} (${taxPercent * 100}%)`);
console.log(`Envío: $${shipping.toFixed(2)}`);
console.log(`Total: $${total.toFixed(2)}`);
console.log("--------------");