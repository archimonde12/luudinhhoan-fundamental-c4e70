    // // // function HelloGuy(){
// // //     console.log("Hello Hoang Viet")
// // // }

// // // HelloGuy()

// // function HelloGuy(name){
// //     console.log("Hello "+name)
// // }
// // HelloGuy("Ho Hung") 
// //Có thể khai báo ở vị trí nào cũng được có thể khai báo sau

// //Arrow Function cần được khai báo trước
// const HelloGuy=()=>{
//     console.log("Hello Hong Viet")
// }
// HelloGuy()


const calc = (arraynumber) => {

    let number = arraynumber.split(",")
    let sum = 0
    for (let i = 0; i < number.length; i++) {
        console.log(number[i])
        sum += Number(number[i])
    }
    return(sum)
}
let UserInput = prompt(" Enter your number and seperate by commas")
let sum = calc(UserInput)

let resultDisplay = document.getElementById("sum")
resultDisplay.innerText += sum