// // Write a function that removes the dollar sign (“$”) in a string, named remove_dollar_sign, takes 1 arguments: s, where s is the input string, returns the new string with no dollar sign in it
const remove_dollar_sign=(s) =>{
     for (let i=0;i<s.length;i++){
         s=s.replace("$","")
     }
    return(s)
}
let Chain_of_Text="$80% percent of $life is to show $up"
console.log(remove_dollar_sign(Chain_of_Text))
