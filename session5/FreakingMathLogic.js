let point = 0
let ResultDisplay=document.getElementById("Result")
console.log(ResultDisplay)
//+==================+
//|=====Function=====|
//+==================+
const calc = (a, b, o, r) => {
    let res
    let resdisplay
    if (o == "+") {
        res = a + b
    }
    else if (o == "-") {
        res = a - b
    }
    else if (o == "*") {
        res = a * b
    }

    if (r == 0) {
        let Error = (Math.floor(Math.random() * 6) - 3)
        while (Error == 0) {
            Error = (Math.floor(Math.random() * 6) - 3)
        }
        if (Error != 0) {
            resdisplay = String(a + " " + o + " " + b + " = " + (res + Error) + "\n True or False?")
            let UserInput = prompt(resdisplay).toLocaleUpperCase()
            if (UserInput == "FALSE") {
                alert("GET 1 POINT!!!")
                return (1)
            }
            else {
                alert("GET NO POINT!! ")
                return (0)
            }
        }
    }

    else if (r == 1) {
        resdisplay = String(a + " " + o + " " + b + " = " + (res) + "\n True or False?")
        let UserInput = prompt(resdisplay).toLocaleUpperCase()
        if (UserInput == "TRUE") {
            alert("GET 1 POINT!!!")
            return (1)
        }
        else {
            alert("GET NO POINT!!")
            return (0)
        }
    }
}
//+==================+
//|===Main Program===|
//+==================+
while (true) {
    let numberA = Math.floor(Math.random() * 10)
    let numberB = Math.floor(Math.random() * 10)
    let operation = ["+", "-", "*"]
    let result = Math.floor(Math.random() * 2)
    console.clear()
    console.log(point)
    point += calc(numberA, numberB, operation[Math.floor(Math.random() * operation.length)], result)
    //In ket qua ra man hinh HTML
    ResultDisplay.innerText=point
    console.log(ResultDisplay)
}
