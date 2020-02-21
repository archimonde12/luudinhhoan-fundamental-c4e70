//Create
let myObject = {
    "ircEvent": "PRIVMSG",
    "method": "newURI",
    "regex": "^http://.*"
}

let human ={
    NumberFingerOfHand:[5,6,7,8],
    eyes:2,
    Ears:2,
    Lip:1,
    Face:1,
}
console.log(myObject)
console.log(human)
//Read
console.log(human.Ears)
//Update
human.Ears=3
console.log(human.Ears)
//Delete
delete human.Ears
console.log(human)