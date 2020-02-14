// This is program to calculate the BMI of people base on their weight
// and their height

let theheight= Number(prompt("Nhập chiều cao của bạn [cm]: "))
let theweight= Number(prompt("Nhập cân nặng của bạn [kg]: "))
let BMI=theweight/(theheight*theheight)*10000
if (BMI<16) {
    console.log("You are Severely underweight")
} else {
    if (BMI<18.5) {
          console.log("You are Underweight")
    } else {
        if (BMI<25) {
              console.log("You are Normal")
        } else {
            if (BMI<30) {
                console.log("You are Overweight")
            } else {
                console.log("Obese")
            }
        }
    }
}
