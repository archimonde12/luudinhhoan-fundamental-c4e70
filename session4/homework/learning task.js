console.clear()
let LearningTask = [
    {
        Name: "HTML",
        Complete: false
    },
    {
        Name: "CSS",
        Complete: false
    },
    {
        Name: "Bacis of JavaScripts",
        Complete: false
    },
    {
        Name: "Node Package Manager (npm)",
        Complete: false
    },
    {
        Name: "Git",
        Complete: false
    }
]
console.log("Hi there, this is your learning taks to front-end developer career:")
LearningTask.forEach((value, index) => {
    console.log((index + 1) + ". " + value.Name)
    console.log("   Complete: " + value.Complete)
})
while (true) {
    let UserInput = (prompt("Enter your command(New/Delete/Update/Complete/Print):")).toUpperCase()
    if (UserInput === "NEW") {
        LearningTask.push({ Name: prompt("Enter new task"), Complete: false })
    }
    console.clear()

    LearningTask.forEach((value, index) => {
        console.log((index + 1) + ". " + value.Name)
        console.log("   Complete: " + value.Complete)
    })
    if (UserInput === "UPDATE") {
        let Userinput2 = Number(prompt("Enter Position"))
        LearningTask[Userinput2 - 1].Name = prompt("Enter new title")
    }
    console.clear()
    LearningTask.forEach((value, index) => {
        console.log((index + 1) + ". " + value.Name)
        console.log("   Complete: " + value.Complete)
    })
    if (UserInput === "COMPLETE") {
        let Userinput2 = Number(prompt("Enter Position"))
        LearningTask[Userinput2 - 1].Complete = true
    }
    console.clear()
    LearningTask.forEach((value, index) => {
        console.log((index + 1) + ". " + value.Name)
        console.log("   Complete: " + value.Complete)
    })
    if (UserInput === "DELETE") {
        let Userinput2 = Number(prompt("Enter Position"))
        LearningTask.splice(Userinput2 - 1, 1)
    }
    console.clear()
    LearningTask.forEach((value, index) => {
        console.log((index + 1) + ". " + value.Name)
        console.log("   Complete: " + value.Complete)
    })
    if (UserInput === "PRINT") {
        console.clear()
        LearningTask.forEach((value, index) => {
            if (!value.Complete)
                console.log((index + 1) + ".[ ] " + value.Name)
            else
                console.log((index + 1) + ".[x] " + value.Name)
        })
    }

}