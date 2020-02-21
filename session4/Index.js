// let person=["Hoang Viet",20,"sinh vien","ha noi",true,false,3]
// console.log(person)
// Vấn đề là nhìn vào khó hiểu
// Cấu trúc Đối Tượng Object
// Một Object có nhiều thuộc tính
let person ={
    Name:"Hoang Viet",
    Age:20,
    Job:["sinh vien","gamer","coder"],
    Location:"Ha Noi",
    Status:"Single",
    Ex:3,
    }
console.log(person)
console.log(...person.Job)
//Create
person.hobby="Chơi game"
console.log(person)
//Read
console.log(person.Name)
//Update
person.Status="In A Relationship With Code"
console.log(person)
//Delete
