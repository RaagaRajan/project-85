canavas = document.getElementNyId('myCanvas');
ctx = canvas.getContext ("2d");
greycar_width = 75;
greycar_height = 100;
greycar_x = 5;
greycar_y = 225; 

background_image = "parkingLot.jpg"
greycar_image = "greyCar.png"

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = parkingLot.png;

    greencar_imgTag = new Image();
    greencar_imgTag.onload = uploadgreycar;
    greencar_imgTag.src = greyCar.jpg;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height)
}

function uploadgreycar(){
    ctx.drawImage(greycar_imgTag, greycar_x, greycar_y, greycar_x, greycar_y);

}

function up(){
    if(greycar_y >= 0)
     {
         greencar_y = greycar_y - 10;
         console.log("When up arrow is pressed, x =" + greycar_x + "| y = " + greycar_y);
         uploadBackground;
         uploadgreycar;
     }
}

function down(){
    if(greycar_y <= 600)
     {
         greycar_y = greycar_y + 10;
         console.log("When down arrow is pressed, x =" + greycar_x + "| y = " + greycar_y);
         uploadBackground;
         uploadgreycar;
     }
}

function left(){
    if(greycar_x >= 0)
     {
         greycar_x = greycar_x - 10;
         console.log("When left arrow is pressed, x =" + greycar_x + "| y = " + greycar_y);
         uploadBackground;
         uploadgreycar;
     }
}

function right(){
    if(greycar_x <= 800)
     {
         greycar_x = greycar_x + 10;
         console.log("When up arrow is pressed, x =" + greycar_x + "| y = " + greycar_y);
         uploadBackground;
         uploadgreycar;
     }
}
window.addEventListener("keydown", my_keydown)