const MySheepSizes=[5,7,300,90,24,50,75]

let NumberOfMonth=Number(prompt("How many month you want to pass:"))
let run=0
//8.4
while(run<=NumberOfMonth){
    if(run==0){
        console.log("Hello, my nam is Phuong Nam and here ís my sheep sizes:")//8.1
        console.log(...MySheepSizes)
        console.log("\r\n")
    }
    else{
        console.log("\r\n")
        console.log("===MONTH "+run+"===")
        for(let i=0;i<MySheepSizes.length;i++){
            MySheepSizes[i]=MySheepSizes[i]+50
        }
        console.log("One month has passed, my sheep have grown, here are their size")
        console.log(...MySheepSizes)
    }
    //8.2
    let Biggest_Size=MySheepSizes[0]
    let Where_is_Biggest
    for(let i=1;i<MySheepSizes.length;i++){
        if(Biggest_Size<MySheepSizes[i]){
        Biggest_Size=MySheepSizes[i]
        Where_is_Biggest=i
        }
    }
    console.log("Now my biggest sheep has size "+Biggest_Size+", let's shave it")

    //8.3
    MySheepSizes[Where_is_Biggest]=8
    console.log("\r\n")
    console.log("After shearing, here is my flock")
    console.log(...MySheepSizes)
    run++
}

//8.6
console.log("\r\n")
        console.log("===MONTH "+run+"===")
        for(let i=0;i<MySheepSizes.length;i++){
            MySheepSizes[i]=MySheepSizes[i]+50
        }
        console.log("One month has passed, my sheep have grown, here are their size")
        console.log(...MySheepSizes)
let TotalFlock=0
for(let i=0;i<MySheepSizes.length;i++){
    TotalFlock=TotalFlock+MySheepSizes[i]
}
console.log("\r\n")
console.log("My flock has size in total: ",TotalFlock)
console.log("I would get "+TotalFlock+" * 2$ = "+TotalFlock*2+"$")
