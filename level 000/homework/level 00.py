from turtle import*

#we wont to draw house

#step1: draw a square




shape("turtle")
width(7)
color("green")
forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

#drawing a dor

forward(70)
color("blue")
begin_fill()
left(90)
forward(120)
right(90)
forward(60)
right(90)
forward(120)
end_fill()

penup()
goto(200, 200)
pendown()

color("red")
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
end_fill()

# task: draw a windows

penup()
goto(70, 120 )
pendown()

color("black")
begin_fill()
right(150)
forward(70)

left(90)
forward(70)

left(90)
forward(70)

left(90)
forward(70)
#second windows
penup()
goto(130, 120 )
pendown()

left(90)
forward(70)

right(90)
forward(70)

right(90)
forward(70)

right(90)
forward(70)
end_fill()




exitonclick()