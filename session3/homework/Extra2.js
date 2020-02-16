//========================WAY 1============================
//Get a chain of number
let ChainNumber=String(prompt("Enter a sequence of names"))

//Split them
let a=(ChainNumber.split(","))
console.log(...a)
let b= new Array

//Filter odd number
for(let i=0;i<a.length;i++)
    if(a[i]%2==1) b.push(a[i])
    
// print new chain
    alert("Way 1 : "+a+" => "+b)

//========================WAY 2============================
let c=a.filter(a=>a%2==1)
console.log("Way 2 : "+a+" => "+c)