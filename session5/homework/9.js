// Let’s take your function to the test. The tester will write his/her test code as follows:
const get_even_list=(l)=>{
    let res=[]
    for(let i=0;i<l.length;i++){
        if(l[i]%2==0){
            res.push(l[i])           
        }
    }
    return(res)
}
even_list = get_even_list([1, 2, 5, 9, -10, 6])

if (JSON.stringify(even_list) == JSON.stringify([2, -10, 6])){
    console.log("Your function is correct")}
else{
   console.log("Ooops, bugs detected")}