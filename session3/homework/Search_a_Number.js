//Get array
const arr = [3, 2, 4, 6, 1, -9, 10, -88, 2, 2];
console.log(...arr)// Check array

//Some conditions and using varaiables
let check=false
let found=[] //Using if have more than 1 index equal Input Number
let Num=Number(prompt("Enter a number"))
for(i=0;i<arr.length;i++){
    if(Num==arr[i]){
        found.push(i+1)
        check=true
    }
}
console.log(found) // Check found

if(check==false){
    alert(Num+" is NOT found in my array")
}
else alert(Num+" is Found in my array at index "+found)