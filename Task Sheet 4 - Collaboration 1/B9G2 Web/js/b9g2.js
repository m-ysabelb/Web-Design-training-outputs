
// Nav bar
function toggleMenu() {
    var navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("show");
}


const canvas = document.getElementById("paper");
const c = canvas.getContext("2d");

c.beginPath();

// frame 
c.rect(50, 10, 400, 250);
c.lineWidth = 1;
c.font = "10px Comic Sans MS";

// numbering 1
c.fillText("5 000", 10, 260);
c.fillText("10 000", 10, 203);
c.fillText("15 000", 10, 153);
c.fillText("20 000", 10, 103);
c.fillText("25 000", 10, 53);
c.fillText("Sales ($)", 455, 150);
c.fillText("Years", 230, 295);
c.stroke();
c.closePath();

c.beginPath();
// 1st horizontal line
c.moveTo(50, 200);

c.lineTo(450, 200);

// 2nd horizontal line
c.moveTo(50, 150); 
c.lineTo(450, 150);

// 3rd horizontal line
c.moveTo(50, 100); 
c.lineTo(450, 100);

// 4th horizontal line
c.moveTo(50, 50);
c.lineTo(450, 50);
c.strokeStyle = "#AAB7B8";
c.stroke();
c.closePath();

c.beginPath();
c.arc(100, 200, 2, 0, 2*Math.PI);
c.moveTo(100, 200);
c.lineTo(200, 150);
c.arc(200, 150, 2, 0, 2*Math.PI);
c.strokeStyle = "black";

// first line
c.stroke();	
c.moveTo(200, 150);
c.lineTo(300, 185);
c.arc(300, 185, 2, 0, 2*Math.PI);

// second line
c.stroke();		
c.moveTo(300, 185);
c.lineTo(400, 90);
c.arc(400, 90, 2, 0, 2*Math.PI);

// third line
c.stroke();
c.fillText("10 000", 90, 195);
c.fillText("15 000", 186, 145);
c.fillText("12 000", 285, 177);
c.fillText("22 000", 385, 85);
c.fillText("2019", 90, 275);
c.fillText("2020", 186, 275);
c.fillText("2021", 285, 275);
c.fillText("2022", 385, 275);
c.fillStyle = "black";


// Canva 2

const canvas1 = document.getElementById("paper1");
const d = canvas1.getContext("2d");

d.beginPath();
d.rect(50, 10, 410, 250);
d.strokeStyle = "blue";
d.stroke();
d.closePath();

d.beginPath();

// 1st horizontal line
d.moveTo(50, 200);
d.lineTo(459, 200);

// 2nd horizontal line
d.moveTo(50, 150); 
d.lineTo(459, 150);

// 3rd horizontal line
d.moveTo(50, 100);
d.lineTo(459, 100);

// 4th horizontal line
d.moveTo(50, 50);
d.lineTo(459, 50);
d.strokeStyle = "#AAB7B8";
d.stroke();
d.closePath();

d.beginPath();
d.fillStyle ="green";
d.fillRect(70, 80, 45, 180);
d.fill();
d.fillStyle = "orange";

// 1st-bar pair
d.fillRect(120, 130, 45, 129); 
d.closePath();

d.beginPath();
d.fillStyle ="green";
d.fillRect(205, 40, 45, 220);
d.fill();
d.fillStyle = "orange";

// 2nd-bar pair
d.fillRect(255, 100, 45, 159);
d.closePath();

d.beginPath();
d.fillStyle ="green";
d.fillRect(340, 25, 45, 235);
d.fill();
d.fillStyle = "orange";

// 3rd-bar pair
d.fillRect(390, 70, 45, 189);
d.closePath();
d.beginPath();
d.fillStyle = "black";

// nums sa 1st pair graph
d.fillText("86 000", 78, 73);
d.fillText("62 000", 128, 123);

// nums sa 2nd pair graph 
d.fillText("15 000", 212, 34);
d.fillText("15 000", 262, 94);

// nums sa 3rd pair graph 
d.fillText("12 000", 347, 21);
d.fillText("22 000", 397, 65);

// graph numbers
d.fillText("25 000", 10, 203);
d.fillText("50 000", 10, 153);
d.fillText("75 000", 10, 103);
d.fillText("100 000", 10, 53);
d.fillText("2015", 105, 275);
d.fillText("2016", 240, 275);
d.fillText("2017", 378, 275);
d.fill();

d.beginPath();
d.fillStyle = "orange";
d.fillRect(165, 285 ,12, 12);
d.fillStyle = "black";
d.fillText("Product A", 185, 295);
d.fillStyle = "green";
d.fillRect(285, 285 ,12, 12);
d.fillStyle = "black";
d.fillText("Product B", 305, 295);
d.fill();


const canvas2 = document.getElementById("paper2");
const e = canvas2.getContext("2d");

e.beginPath();
e.arc(250, 130, 120, 0, 2*Math.PI);
e.lineWidth = "2";
e.stroke();
e.closePath();

e.beginPath();
e.moveTo(250, 130);
e.arc(250, 130, 120, 0, 2*Math.PI/3);

// yellow
e.fillStyle = "#F4D03F";
e.lineWidth = "2";
e.strokeStyle = "#808B96";
e.fill();
e.stroke();
e.closePath();

e.beginPath();
e.moveTo(250, 130);
e.arc(250, 130, 120, 2*Math.PI/3, 13*Math.PI/9);

// green
e.fillStyle = "#58D68D";
e.lineWidth = "2";
e.strokeStyle = "#808B96";
e.fill();
e.stroke();
e.closePath();

e.beginPath();
e.moveTo(250, 130);
e.arc(250, 130, 120, 13*Math.PI/9, 0);

// pink
e.fillStyle = "#F945BF";
e.lineWidth = "2";
e.strokeStyle = "#808B96";
e.fill();
e.stroke();
e.closePath();

e.beginPath();
e.fillStyle = "black";
e.font = "12px Arial";
e.fillText("walking: 35%", 50, 120);
e.fillText("tricycle: 35%", 368, 210);
e.fillText("car: 30%", 365, 60);
e.fill();

e.beginPath();

// pink
e.fillStyle = "#F945BF";
e.fillRect(130, 285 ,12, 12);
e.fillStyle = "black";
e.fillText("car", 147, 295);

// yellow
e.fillStyle = "#F4D03F";
e.fillRect(212, 285 ,12, 12);
e.fillStyle = "black";
e.fillText("tricycle", 229, 295);

// green
e.fillStyle = "#58D68D";
e.fillRect(310, 285 ,12, 12);
e.fillStyle = "black";
e.fillText("walking", 327, 295);
e.fill();
