//Now, another programmer named Hiep will use your code in exercise 3. He writes as follows:
const remove_dollar_sign=(s) =>{
    for (let i=0;i<s.length;i++){
        s=s.replace("$","")
    }
   return(s)
}
string_with_no_dollars = remove_dollar_sign("$80% percent of $life is to show $up")
if (string_with_no_dollars == "80% percent of life is to show up"){
   console.log("Your function is correct")}
else{
   console.log("Oops, there's a bug")}