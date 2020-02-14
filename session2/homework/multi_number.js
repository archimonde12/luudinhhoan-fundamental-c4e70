//Write a program that asks users enter a number and then calculates factorial of n: (1 * 2 * 3 *... *n)

let n= Number(prompt("Enter any number: "))
if (n>0) {
    let result=1
    for (let index = 1; index < n+1; index++) {
     result=result*index;
    }
    console.log("The number after caculate: ",result)
} else {
    console.log("Can not caculate with this number")
}
    

