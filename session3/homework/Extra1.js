//========================WAY 1============================
//Get a string
let ChainName=String(prompt("Enter a sequence of names"))

//Split them
let a=ChainName.split(",")
let Way1=new Array

//Add more symbol
for(let i=0;i<a.length;i++)
     Way1.push("<"+a[i]+">")

    
// print chain of name
    console.log(...Way1)
    console.log("Way 1 : "+a+" => "+Way2)

//========================WAY 2============================
let Way2=a.map(a=>"<"+a+">")
alert("Way 2 : "+a+" => "+Way2)  