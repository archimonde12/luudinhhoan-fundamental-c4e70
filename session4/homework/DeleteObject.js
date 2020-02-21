const oldData = {
    firedRice: {
        Price: 30,
        vnName: "Com rang dua bo",
    },
    noddle: {
        price: 20,
        vnName: "My tom chanh",
    },
    pho: {
        price: 35,
        vnName: "Pho bo tai chin",
    },
}
console.log(oldData)
let firedRice,noddle,pho
({firedRice,noddle,pho}=oldData)
let newData = {firedRice,pho}

console.log(newData)
