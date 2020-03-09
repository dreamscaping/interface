  //variables
let brush = "red"
let pic = "background1"

function setup() {

  //background
    createCanvas(600, 600).parent('p5')
    print("ahhhhhhh")
      background(250, 235, 255)
}
  //draw function
function draw() {
    if (mouseIsPressed) {

    if (brush == "red") {
        fill(255,0,0)
        stroke(255,0,0)
        strokeWeight(6)
        line(mouseX,mouseY,pmouseX,pmouseY)

  }

    if (brush == "orange") {
      stroke(255, 179, 87)
      fill(255, 179, 87)
      strokeWeight(6)
      line(mouseX,mouseY,pmouseX,pmouseY)
  }

    if (brush == "yellow") {
      stroke (255, 252, 94)
      strokeWeight(6)
      fill(255, 252, 94)
      line(mouseX,mouseY,pmouseX,pmouseY)
  }

    if (brush == "green") {
      stroke(152, 245, 172)
      fill(152, 245, 172)
      strokeWeight(6)
      line(mouseX,mouseY,pmouseX,pmouseY)
  }

    if (brush == "lightblue") {
      stroke(136, 233, 247)
      fill(136, 233, 247)
      strokeWeight(6)
      line(mouseX,mouseY,pmouseX,pmouseY)
  }

    if (brush == "darkblue") {
      stroke(125, 138, 255)
      fill(125, 138, 255)
      strokeWeight(6)
      line(mouseX,mouseY,pmouseX,pmouseY)
  }

    if (brush == "purple") {
      stroke(195, 149, 237)
      fill(195, 149, 237)
      strokeWeight(6)
      line(mouseX,mouseY,pmouseX,pmouseY)
  }

    if (brush == "pink") {
      stroke(255, 176, 230)
      fill(255, 176, 230)
      strokeWeight(6)
      line(mouseX,mouseY,pmouseX,pmouseY)
  }

    if (brush == "white") {
      stroke(255)
      fill(255)
      strokeWeight(6)
      line(mouseX,mouseY,pmouseX,pmouseY)
  }

    if(brush == "black") {
      stroke(0)
      fill(0)
      strokeWeight(6)
      line(mouseX,mouseY,pmouseX,pmouseY)
    }

    //eraser
  // } else {
  //   noStroke()
  //   fill(200)
  //   circle(mouseX,mouseY,20)

  }
    //red button
  fill(255,0,0)
  noStroke()
  rect(10,10,30,30)

    //orange button
  fill(255, 179, 87)
  noStroke()
  rect(10,50,30,30)

    //yellow button
  fill(255, 252, 94)
  noStroke()
  rect(10,90,30,30)

    //green button
  fill(152, 245, 172)
  noStroke()
  rect(10,130,30,30)

    //light blue button
  fill(136, 233, 247)
  noStroke()
  rect(10,170,30,30)

    //dark blue button
  fill(125, 138, 255)
  noStroke()
  rect(50,10,30,30)

    //purple button
  fill(195, 149, 237)
  noStroke()
  rect(50,50,30,30)

    //pink button
  fill(255, 176, 230)
  noStroke()
  rect(50,90,30,30)

    //white button
  fill(255)
  noStroke()
  rect(50,130,30,30)

    //black button
  fill(0)
  noStroke()
  rect(50,170,30,30)

    //background 1
  fill(255)
  noStroke()
  rect(10,240,70,70)
  stroke(0)
  strokeWeight(2)
  rect(25,252,50,23)
  quad(25,275,75,275,65,295,15,295)
  fill(255)
  rect(40,272,15,5)
  noFill()
  rect(30,257.5,40,11)
  point(50,255)
  quad(28,280,68,280,65,285,25,285)
  quad(35,289,50,289,48,292,33,292)
  strokeWeight(1)
  line(28,282.5,65,282.5)
  line(30,280,30,284)
  line(33,280,33,284)
  line(36,280,36,284)
  line(39,280,39,284)
  line(42,280,42,284)
  line(45,280,45,284)
  line(48,280,48,284)
  line(51,280,51,284)
  line(54,280,54,284)
  line(57,280,57,284)
  line(60,280,60,284)
  line(63,280,63,284)

    //background 2
  fill(255)
  noStroke()
  rect(10,320,70,70)
  stroke(0)
  strokeWeight(2)
  circle(27,345,15,15)
  circle(63,345,15,15)
  circle(45,355,40,40)
  circle(34,371,15,15)
  circle(55,371,15,15)
  strokeWeight(1)
  ellipse(39,352,6,12)
  ellipse(51,352,6,12)
  fill(0)
  ellipse(39,351,5,8)
  ellipse(51,351,5,8)
  fill(255)
  ellipse(39,349,4,5)
  ellipse(51,349,4,5)
  fill(0)
  ellipse(33,360,4,2)
  ellipse(57,360,4,2)
  fill(255)
  circle(45,362,5,5)
  noStroke()
  rect(41,357,8,5)



    //background 3
  fill(255)
  noStroke()
  rect(10,400,70,70)
  stroke(0)
  strokeWeight(2)
  rect(35,415,33,40)
  quad(33,414,23,407,23,445,33,454)
  quad(35,413,25,406,55,406,66,413)
  rect(39,420,25,19)
  circle(46,425,2,2)
  circle(58,425,2,2)
  circle(52,430,4,4)
  noStroke()
  rect(48,426.5,7,3)
  stroke(0)
  strokeWeight(2)
  rect(43,456,3,10)
  rect(55,456,3,10)
  ellipse(45,467,5,4)
  ellipse(57,467,5,4)

    //background 4
  fill(255)
  noStroke()
  rect(10,480,70,70)
  stroke(0)
  strokeWeight(4)
  line(20,508,20,520)
  line(20,508,26,508)
  line(20,515,26,515)
  line(32,508,32,520)
  line(32,508,38,508)
  line(38,508,38,515)
  line(38,515,32,515)
  line(32,515,38,520)
  line(44,508,44,520)
  line(44,508,50,508)
  line(44,514,50,514)
  line(44,520,50,520)
  line(56,508,56,520)
  line(56,508,62,508)
  line(56,514,62,514)
  line(56,520,62,520)
  line(68,508,68,515)
  point(68,520)
}


function mouseClicked() {

    print(int(mouseX), int(mouseY))
    //red button
      if (mouseX > 10 && mouseX < 40 && mouseY > 10 && mouseY < 40) {
        print("red!")
        brush = "red"

      } else {
        print("not red!")
      }
    //orange button
      if (mouseX > 10 && mouseX <40 && mouseY > 50 && mouseY < 80) {
        print("orange!")
        brush = "orange"

      } else {
        print("not orange!")
      }
    //yellow button
      if (mouseX > 10 && mouseX < 40 && mouseY > 90 && mouseY < 120) {
        print("yellow!")
        brush = "yellow"

      } else {
        print("not yellow!")
      }

    //green button
      if (mouseX > 10 && mouseX < 40 && mouseY > 130 && mouseY < 160) {
        print("green!")
        brush = "green"
      } else {
          print("not green!")
      }

    //light blue button
      if (mouseX > 10 && mouseX < 40 && mouseY > 170 && mouseY < 200) {
        print("light blue!")
        brush = "lightblue"
      } else {
          print("not light blue!")
      }

    //dark blue button
      if (mouseX > 50 && mouseX < 80 && mouseY > 10 && mouseY < 40) {
        print("dark blue!")
        brush = "darkblue"
      } else {
          print("not dark blue!")
      }

    //purple button
      if (mouseX > 50 && mouseX < 80 && mouseY > 50 && mouseY < 80) {
        print("purple!")
        brush = "purple"
      } else {
        print("not purple!")
      }

    //pink button
      if (mouseX > 50 && mouseX < 80 && mouseY > 90 && mouseY < 120) {
        print("pink!")
        brush = "pink"
      } else {
          print("not pink!")
      }

    //white button
      if (mouseX > 50 && mouseX < 80 && mouseY > 130 && mouseY < 160) {
        print("white!")
        brush = "white"
      } else {
          print("not white!")
      }

    //black button
      if (mouseX > 50 && mouseX < 80 && mouseY > 170 && mouseY < 200) {
        print("black!")
        brush = "black"
      } else {
          print("not black!")
      }

    //background 1
      if (mouseX > 10 && mouseX < 80 && mouseY > 240 && mouseY < 310) {
        print("background 1")
        background(250, 235, 255)
        stroke(0)
        strokeWeight(4)
        rect(160,100,370,190)
        quad(160,290,530,290,480,460,90,460)
        fill(255)
        rect(270,282,115,15)
        noFill()
        rect(175,115,340,160)
        circle(345,108,4,4)
        quad(165,305,515,305,490,385,135,383)
        quad(250,392,360,393,345,445,235,445)
        strokeWeight(3)
        line(175,305,145,382)
        line(190,305,160,382)
        line(205,305,175,382)
        line(220,305,190,382)
        line(235,305,205,382)
        line(250,305,220,382)
        line(265,305,235,382)
        line(280,305,250,382)
        line(295,305,265,382)
        line(310,305,280,382)
        line(325,305,295,382)
        line(340,305,310,382)
        line(355,305,325,382)
        line(370,305,340,382)
        line(385,305,355,383)
        line(400,305,370,383)
        line(415,305,385,383)
        line(430,305,400,383)
        line(445,305,415,383)
        line(460,305,430,383)
        line(475,305,445,383)
        line(490,305,460,383)
        line(505,305,477,383)
        line(161,320,510,320)
        line(155,335,506,335)
        line(149,350,501,350)
        line(143,365,496,365)
        line(139,375,491,375)

      } else {
          print("not background 1")
      }

    // background 2
    if (mouseX > 10 && mouseX < 80 && mouseY > 320 && mouseY < 390) {
      print("background 2")
      background(250, 235, 255)
      fill(255)
      stroke(0)
      strokeWeight(4)
      circle(173,215,120,120)
      circle(440,215,120,120)
      circle(305,295,300,300)
      circle(197,415,120,120)
      circle(400,415,120,120)
      strokeWeight(3)
      ellipse(250,270,47,80)
      ellipse(350,270,47,80)
      fill(0)
      ellipse(250,262,46,65)
      ellipse(350,262,46,65)
      fill(255)
      ellipse(250,250,22,35)
      ellipse(350,250,22,35)
      fill(255)
      ellipse(205,325,30,15)
      ellipse(385,324,30,15)
      fill(255)
      circle(300,325,35,35)
      noStroke()
      rect(280,305,40,20)


    } else {
        print("not background 2")
    }

  if (mouseX > 10 && mouseX < 80 && mouseY > 400 && mouseY < 470) {
    print("background 2")
    background (250,235,255)
    fill(255)
    stroke(0)
    strokeWeight(4)
    rect(245,135,250,320)
    quad(245,131,207,97,445,97,491,131)
    quad(242,453,198,412,203,99,243,133)
    rect(265,155,210,150)
    circle(312,193,25,25)
    circle(427,193,25,25)
    noStroke()
    rect(290,175,160,20)
    stroke(0)
    circle(369.5,223,20,20)
    noStroke()
    rect(355,210,30,15)
    stroke(0)
    fill(0)
    rect(265,320,100,15)
    circle(455,327.5,15,15)
    fill(255)
    triangle(390,370,375,395,405,395)
    circle(405,425,38,38)
    circle(430,385,20,20)
    line(300,350,315,350)
    line(315,350,315,365)
    line(315,365,330,365)
    line(330,365,330,380)
    line(330,380,315,380)
    line(315,380,315,395)
    line(315,395,300,395)
    line(300,395,300,380)
    line(300,380,285,380)
    line(285,380,285,365)
    line(285,365,300,365)
    line(300,365,300,350)
    fill(0)
    rect(275,420,20,10)
    fill(255)
    rect(315,418,28,15)
    rect(310,455,20,100)
    ellipse(325,555,30,20)
    rect(405,455,20,100)
    ellipse(420,555,30,20)
    quad(220,255,220,230,150,155,140,160)
    circle(145,155,25,25)
    quad(495,255,495,230,565,345,555,350)
    circle(560,345,25,25)

  } else {
      print("not background 3")
  }

  if (mouseX > 10 && mouseX < 80 && mouseY > 480 && mouseY < 550) {
    print("background 3")
    background (250,235,255)
  } else {
      print("not background 4")
  }

}
