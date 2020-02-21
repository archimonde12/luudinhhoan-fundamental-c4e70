const task = {
    subject: "Implement login feature",
    createdBy: "Hoang Ngoc Duc",
    assignTo: "Nguyen Phuong Nam",
    dueDate: "2019-10-08T18:00:24+0000",
    expectedHours: 0.5,
}
console.log(task)
// Way 1
const {subject,assignTo,dueDate}=task
console.log(subject)
console.log(assignTo)
console.log(dueDate)
//Way 2
// let subject,assignTo,dueDate
// ({subject,assignTo,dueDate}=task)
// console.log(subject)
// console.log(assignTo)
// console.log(dueDate)
//Way 3
// const {subject: a,assignTo: b,dueDate: c} = task
// console.log(a)
// console.log(b)
// console.log(c)