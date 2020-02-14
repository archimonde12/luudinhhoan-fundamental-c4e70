// Neu nhu nhiet do 
// T<10:Lanh VCL
// 10<T<20:Hoi Lanh
// 20<T<25:Cool
// 25<T<30:Good
// T>30:Hot
// let Temperature=Math.random()*41
// console.log("Nhiet do ngoai troi luc nay la:",Temperature.toFixed(1),"oC")
// if(Temperature<10)
// { 
//     console.log("Nhan xet: Lanh VCL")
// }
// else if(Temperature<20){
//     console.log("Nhat xet:  Hoi Lanh")
// }
// else if(Temperature<25){
//     console.log("Nhan xet: Cool")
// }
// else if(Temperature<30){
//     console.log("Nhan xet: Warm")
// }
// else console.log("Nhat xet: Hot")

//Random tu 0-100
// let NumberRandom=Math.floor(Math.random()*100)
// let check=true
// let Guess=Number(prompt("Moi nhap so ban doan:"))
// while (check==true)
// {
//     if(Guess<NumberRandom)
//     {
//         Guess=Number(prompt("To Small.Moi nhap lai so ban doan:"))
//     } 
//     else if(Guess>NumberRandom)
//     {
//         Guess=Number(prompt("To Big.Moi nhap lai so ban doan:"))
//     }
//     else 
//     {
//         prompt("Bingo! So can tim la",NumberRandom)
//         check=false
//     }
// }
let n=Number(prompt("Nhập một số bất kỳ:"))
if (n<2) prompt("Đây KHÔNG PHẢI là số nguyên tố",n)
else {
    let check=true
    for(let i=2;i<=n/2;i++)
    {
        if (n%i==0) {
            check=false
            break
        }
    }
    if(check) prompt(`${n} là SỐ NGUYÊN TỐ`)
    else prompt(`${n} KHÔNG PHẢI số nguyên tố`)
}