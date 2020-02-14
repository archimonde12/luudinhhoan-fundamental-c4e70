//Khai bao mot bien 
// let Item1="Sườn sào chua ngọt"
// let Item2="Thịt gà"
// let Item3="Thịt chó"
// let Item4="Thịt lợn"
// //Not scaleable : khong the mo rong
// //Hard to finding
// console.log(Item1,Item2,Item3)

//To sovle that problem, they use array type to describle
 
//CRUD
//Khoi tao

let menu=['Canh ngao','Thịt gà']
console.log(menu)

//1.Create
menu.push("hamburger")
console.log(menu)

//2.Read
//Doc mot phan tu duy nhat bang chi so index

console.log(menu[2])
//Neu chi so index lon hon hoac nho hơn giới hạn thì sẽ báo là không hiển thị
//Đọc tất cả phần tử trong array
for(let i=0;i<menu.length;i++){
    console.log(menu[i])
}
menu.forEach((value,index) => {
    console.log(value,index)
})
//3.Update
menu[2] = "Thịt chó"
console.log(menu)
let i=menu.indexOf('Canh ngao')
console.log(i)
menu[i]="Soup"
console.log(menu)
//4.Delete
menu.splice(1,2)
console.log(menu)