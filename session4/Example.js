// let dictionary = {
//     ImFine: "I am not good",
//     Anyway: ["Choose what i like or you dead", "Anway"],
//     JustGo: " Don't go!!",
//     WaitMe5min: "Well 2 hour more",
// }

// let check = true;
// while (check) {
//     console.log("Menu:")
//     let menu = Object.keys(dictionary)
//     for (i = 0; i < menu.length; i++) console.log((i + 1) + ". ", menu[i])
//     word = prompt("Your girlfriend tell you that:") //Show menu of key
//     if (menu.indexOf(word) != -1)// hoặc (word in dictionary) 
//     { console.log("Meaning is: " + dictionary[word]) }
//     else {
//         update = prompt("That word dont exist in dictionary. Do you want to create the new one [Y/N]").toUpperCase()
//         if (update == "Y") {
//             dictionary[word] = prompt("Insert the meaning of new key -" + word + "- :")
//         }
//         else if (update == "N") {
//             console.log("Thank you")
//             let quit = prompt("Do you want to quit [Y/N]").toUpperCase()
//             if (quit == "Y") {
//                 check = false;
//             }
//         }
//     }
// }

let employee = [
    {
        name: "Viet",
        days: 27,
        hours: 6,
        price: 90000,
    },
    {
        name: "Hung",
        days: 28,
        hours: 7,
        price: 10000,
    },
    {
        name: "Thinh",
        days: 29,
        hours: 8,
        price: 11000,
    },
    {
        name: "Binh",
        days: 30,
        hours: 9,
        price: 12000,
    },
]
console.log(...employee)
let salary = []
for (i = 0; i < employee.length; i++)
    salary.push(employee[i].days * employee[i].hours * employee[i].price)
console.log(...salary)
let sum = 0
// salary.forEach((value, index) => { sum += value })
// console.log(sum)

let key = Object.keys(employee[0])
console.log(...key)
employee.forEach((value, index) => {
    console.log(value.name + "   " + value.days + "   " + value.hours + "   " + value.price)
})
employee.forEach((value, index) => {
    sum += value.days * value.hours * value.price
})

console.log(sum)