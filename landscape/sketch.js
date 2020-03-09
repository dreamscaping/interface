// put in setup whatever needs to be done to get things started
function setup() {

    // this line creates a virtual canvas and attaches it to your HTML
    createCanvas(500, 600).parent('p5')

}

// put in draw everything you want to draw to the canvas
function draw() {

    // start off with a background
    background(197, 218, 237)
    strokeWeight(1)

  //trees
stroke(121, 166, 145);
strokeWeight(2);
fill(138, 181, 161);
circle(75,262,32)
circle(40,300,50);
circle(100,275,30);
circle(120,290,40);
circle(60,290,35);
circle(85,290,45);
circle(45,300,20);
circle(385,275,20);
circle(355,290,40);
circle(395,290,30);
circle(375,290,35);
circle(415,297,23);




    //green
fill(196, 224, 119);
stroke(196, 224, 119);
rect(0,300,500,300);

  //white
stroke(255,80);
fill(255,80);
rect(0,70,500,170);


  //structure
stroke(103, 104, 107);
strokeWeight(3);
circle(218,70,35);
strokeWeight(4);
line(181,192,162,127);
line(162,127,203,81);
line(256,192,270,127);
line(270,127,234,81);

stroke(118, 130, 173);
fill(118, 130, 173);
ellipse(218,110,20,40);

stroke(245, 193, 222);
fill(245, 193, 222);
triangle(200,285,240,115,270,285);
triangle(245,285,195,115,170,285);

stroke(247, 225, 238);
fill(247, 225, 238);
circle(218,137,27);

stroke(237, 215, 116);
fill(227, 213, 127);
ellipse(180,265,55,140)
ellipse(255,265,55,140)

fill(136, 165, 219);
stroke(136, 165, 219);
triangle(130,400,130,150,285,400);
triangle(330,400,320,150,130,400);

fill(177, 200, 242);
stroke(177, 200, 242);
triangle(400,150,170,400,300,400);
triangle(90,160,280,400,170,400);

stroke(145, 78, 77);
fill(145, 78, 77);
circle(218,78,15);

stroke(0);
fill(0);
triangle(225,17,225,20,235,18)
stroke(255);
fill(255);
ellipse(218,28,15,40)
stroke(0);
fill(0);
point(219,13)

  //river
fill(183, 214, 247);
stroke(183, 214, 247);
quad(220,400,255,400,300,460,245,460);
quad(300,460,245,460,150,550,500,500);
quad(0,550,500,500,500,600,0,600);

//door
fill(0);
stroke(0);
triangle(237,350,220,400,255,400)

  //foreground trees
strokeWeight(2)
stroke(138, 153, 99);
fill(96, 110, 59);
ellipse(140,405,30,40);
fill(113, 128, 73);
ellipse(125,415,30,40);
fill(128, 143, 87);
ellipse(110,425,30,40);
fill(141, 156, 100);
ellipse(95,435,30,40);
fill(153, 168, 111);
ellipse(80,445,30,40);
fill(174, 191, 126);
ellipse(65,455,30,40);

fill(96, 110, 59);
ellipse(170,400,30,40);
fill(113, 128, 73);
ellipse(155,410,30,40);
fill(128, 143, 87);
ellipse(140,420,30,40);
fill(141, 156, 100);
ellipse(125,430,30,40);
fill(153, 168, 111);
ellipse(110,440,30,40);
fill(174, 191, 126);
ellipse(95,450,30,40);
fill(96, 110, 59);
ellipse(325,390,30,40);
fill(113, 128, 73);
ellipse(340,400,30,40);
fill(128, 143, 87);
ellipse(355,410,30,40);
fill(141, 156, 100);
ellipse(370,420,30,40);
fill(153, 168, 111);
ellipse(385,430,30,40);
fill(174, 191, 126);
ellipse(400,440,30,40);
fill(193, 212, 174);
ellipse(80,465,30,40);


  //top
stroke(250, 167, 150);
fill(250, 167, 150);
triangle(404,242,492,380,469,404);
stroke(138, 157, 209);
fill(255)
circle(438,297,40)
stroke(161, 166, 181);
fill(161, 166, 181);
arc(436.5, 263, 25, 25, 0, PI + TWO_PI, CHORD);
stroke(137, 142, 156)
fill(137, 142, 156)
ellipse(436.5,237,20,50)
stroke(240, 94, 74)
fill(240, 94, 74)
triangle(444,224,428.5,224,437,238)
triangle(445,223,428,224,437,162)
strokeWeight(4)
stroke(137, 184, 84);
line(143,474,141,464);
stroke(38, 51, 82);
fill(38, 51, 82);
circle(515,480,200);
stroke(240, 225, 218);
fill(240, 225, 218);
ellipse(139,507,75,40)
stroke(201, 81, 54);
fill(201, 81, 54);
circle(140,495,35);
stroke(137, 184, 84);
fill(137, 184, 84);
triangle(134,477,141,486,145,478);
triangle(132,476,127,469,143,477);
triangle(130,475,136,482,124,484);
triangle(130,480,137,482,132,486);
triangle(145,477,151,484,150,474);
stroke(255);
fill(255);
ellipse(215,480,60,40);
fill(168, 51, 49);
stroke(168, 51, 49);
circle(295,535,20);
stroke(183, 214, 247);
fill(183, 214, 247);
rect(275,537,40,20);
stroke(0);
fill(0);
triangle(239,469,238,489,220,469)
stroke(240, 225, 218);
fill(240, 225, 218);
ellipse(248,480,45,30)
stroke(183, 214, 247);
fill(183, 214, 247);
triangle(237,498,275,481,275,497);
stroke(74, 59, 52);
fill(74, 59, 52);
quad(415,480,500,495,500,502,415,484)

  //sky
stroke(172, 173, 191);
strokeWeight(12)
noFill()
circle(80,70,60);
stroke(206, 213, 217);
strokeWeight(2)
fill(227, 230, 232);
ellipse(80,100,120,30);
triangle(140,100,165,110,165,85)
triangle(70,115,107,150,95,115)
stroke(0)
circle(36,100,2)


}


// this function will print coordinates to the console whenever you click
function mouseClicked() {
    print(int(mouseX), int(mouseY))
}
