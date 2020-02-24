// (Optional) Write test cases (as we did in exercices 8 and 10) to check if your is_inside function is correct
const is_inside=(coor,rec)=>{
    if((coor[0]>rec[0])&&(coor[0]<rec[0]+rec[2])&&(coor[1]>rec[1])&&(coor[1]<rec[1]+rec[3])){
        return(true)
    }
    else return(false)
}
if(!is_inside([100, 120], [140, 60, 100, 200])&&is_inside([200, 120], [140, 60, 100, 200])){
    console.log("your fuction is correct!")
} else console.log("OOPS, some Bug here")