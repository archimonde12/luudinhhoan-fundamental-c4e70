//Get start items on shop
let item = ["Jeans","T_Shirts","Socks"]

//Action
let action 
while(action!=="Q"){
    action=String(prompt("Hi there, welcome to shop admin panel, what do you want [C=Create,R=Read,U=Update,D=Delete,Q=Quit]"))
    //Create Function
    if(action=="C"){
        item.push(prompt("Enter the name of new item:"))
        alert("Create new item successful")

    //Read Function
    }else if(action=="R"){
        console.log("The current items are:")
        for(let i=1;i<=item.length;i++){
            console.log(i+"."+item[i-1])
        }
        alert("...")
    
    //Update Function
    }else if(action=="U"){
        let i=Number(prompt("Enter the position you want to update:"))
        if(i<item.length&&i>0){
            item[i-1]=String(prompt("Enter the name"))
            alert("Update item successful")   
        }
        else alert("Update Fail because this position not exist") //Update warning if the position not exist
    
    //Delete Function
    }else if(action=="D"){
        let i=Number(prompt("Enter the position you want to delete:"))
        if(i<item.length&&i>0){
            item.splice(i-1,1)
            alert("Delete successful")      
        }
        else alert("Delete Fail because this position not exist") //Update warning if the position not exist
     
    //Quit Function    
    }else if(action=="Q"){  //Update Q action to quit the loop
        alert("Good bye")
    }else alert("This command is not supported")
}