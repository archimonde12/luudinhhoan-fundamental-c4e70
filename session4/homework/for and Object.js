//1.1
const product = {
    name: "Xiaomi rice cooker",
    price: 1700,
    brand: "Xiaomi",
    color: "white"
};
for (let x in product) {
    console.log(x);
}
//the x receives the property
//1.2
for (let x in product) {
    console.log(x+": "+product[x]);
}