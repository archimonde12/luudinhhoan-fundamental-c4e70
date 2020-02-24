//Write a function named is_inside that checks if a point is inside a rectangle, takes 2 parameters
const is_inside=(coor,rec)=>{
    if((coor[0]>rec[0])&&(coor[0]<rec[0]+rec[2])&&(coor[1]>rec[1])&&(coor[1]<rec[1]+rec[3])){
        return(true)
    }
    else return(false)
}
//Check

console.log(is_inside([100, 120], [140, 60, 100, 200]))//false
console.log(is_inside([200, 120], [140, 60, 100, 200]))//true