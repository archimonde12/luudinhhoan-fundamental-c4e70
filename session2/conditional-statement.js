// let Age=Number(prompt("Nhap tuoi cua nguoi dung"))
// if(Age<=5){
//     console.log("Baby")
// }else if(Age<10){
//     console.log("Nhi dong")
// }else if(Age<18){
//     console.log("Teen")
// }else if(Age<35){
//     console.log("Thanh nien")
// } else{
//     console.log("Trung nien")
// }
// Xây một chương trình đăng nhập nếu như người dùng đăng nhập đúng. In ra thông báo "Welcome to Wonderland" 
// Sai thì in ra "Dang nhap sai, welcome to the hell"
//Chỉ cho người dùng đăng nhập tối đa 3 lần nếu sau 3 lần thông báo hết quyền đăng nhập

let id="c4e70"
let pass="codethechange"
let InputTimes= 0
while(InputTimes<3){
let IdUserInput= prompt("Nhap vao ID:")
let PassUserInput= prompt("Nhap vao password:")
if(IdUserInput===id&&PassUserInput===pass){
    console.log("Welcome to the wonderland")
    InputTimes=3
    break
}else {
    console.log("Dang nhap sai,welcome to the hell")
    InputTimes++
}
}
