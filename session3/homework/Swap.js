
let a=5
let b=6
console.log(a,b)
console.log("<Perform 1 swapping>") // Way 1
let v
v=a
a=b
b=v
console.log(a,b)

console.log("<Perform 2 swapping>") // Way 2
a=a+b
b=a-b
a=a-b
console.log(a,b)

console.log("<Perform 3 swapping>") // Way 3
a ^= b
b ^= a
a ^= b
console.log(a,b)

console.log("<Perform 4 swapping>") // Way 4
b = [a, a = b][0];
console.log(a,b)