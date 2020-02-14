//Insert the squence of Number
let text=String(prompt("Enter a squence of Number, separated by commas(.)"))

//Take each number into array
let array=(text.split("."))
//check array
console.log(array)

//Get sum
let sum=0
for(let i=0;i<array.length;i++)
{
    array[i]=Number(array[i])
    sum=sum+array[i]
}
alert("The sum of them is "+sum)

//Find smallest number
let min=array[0]
for(let i=1;i<array.length;i++)
{
    if(min>array[i]){
        min=array[i]
    }
}
alert("The smallest number is "+min)