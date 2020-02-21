const Product = [
    {
        Name: "Xiaomi portable charger 20000mah",
        Brand: "Xiaomi",
        Price: "428",
        Color: "White",
        Category: "Charger",
        Providers: ["Phukienzero", "dientucc"]
    },
    {
        Name: "VSmart Active 1",
        Brand: "VSmart",
        Price: "5487",
        Color: "Black",
        Category: "Phone",
        Providers: ["Tgdd", "Ddghn", "VhStore"]
    },
    {
        Name: "IPhone X",
        Brand: "Apple",
        Price: "21490",
        Color: "Gray",
        Category: "Phone",
        Providers: ["Tgdd"]
    },
    {
        Name: "Samsung Galaxy A9",
        Brand: "Samsung",
        Price: "8490",
        Color: "Blue",
        Category: "Phone",
        Providers: ["Tgdd"]
    }
]
Product.forEach((value, index) => {
    console.log("#1.  " + value.Name)
    console.log("      Price: " + value.Price)
    console.log("      Providers: " + value.Providers)
})

let UserInput = prompt("Enter Provider")
console.clear()
Product.forEach((value, index) => {
    if (!(value.Providers.indexOf(UserInput) == -1)) {
        console.log("==================================")
        console.log("Name: " + value.Name)
        console.log("Brand: " + value.Brand)
        console.log("Price: " + value.Price)
        console.log("Color: " + value.Color)
        console.log("Category: " + value.Category)
        console.log("Providers: " + value.Providers)
    }
})