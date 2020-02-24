clear()
const draw_square=(lenght,pencolor) =>{
  color(pencolor)
  for(let i=0;i<4;i++)
  {
    fd(lenght)
  	rt(90)
  }
}
draw_square(100,"red")