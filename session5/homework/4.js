//Now, another programmer named ‘T.Anh’ will use your code in exercise 1. He writes as follows:
clear()
const draw_square=(lenght,pencolor) =>{
  color(pencolor)
  for(let i=0;i<4;i++)
  {
    fd(lenght)
  	rt(90)
  }
}
for (let i = 0; i  < 30; i ++){
  draw_square(i * 5, 'red')
  lt(17)
  penup()
  fd(i * 2)
  pendown()
}