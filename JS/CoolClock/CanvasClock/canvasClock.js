var canvas = document.getElementById("canvas1");
var ctx = canvas.getContext("2d");
var rad = canvas.height / 2;
var pi2 = Math.PI * 2;

//array with roman numbers, cuz fancy
var romans = ["I", "II", "III", "IV", "V", "VI","VII", "VIII", "IX", "X", "XI", "XII"];

ctx.translate(rad, rad);
rad = rad * 0.9;



/// reqAnimFrame cuz smoothness is bliss
(function loop() {
    drawClock();
    requestAnimationFrame(loop);
})();



function drawClock () {

  //clear canvas for next frame
  ctx.clearRect(-200, -200, canvas.width, canvas.height);

  //drawFace(ctx, rad);
  /*draws the numbers and the pointers*/
  drawNumbers(ctx, rad);
  drawTime(ctx, rad);
}



function drawNumbers(ctx, rad){

  var ang;

  //center font (the roman numbers in this case) an chooses font for hour
  ctx.font = rad*0.15 + "px Times new roman";
  ctx.textBaseline="middle";
  ctx.textAlign="center";

  //loop positions the number at the correct spot (VI goes at 6'o'clock etc)
  //the two commented "rotate()" would position every letter straight
  for (i = 1; i < 13; i++){
      ang = i * Math.PI / 6;
      ctx.rotate(ang);
      ctx.translate(0, -rad*0.85);
      //ctx.rotate(-ang);
      /*i have to use (i-1) since number is used for positioning*/
      ctx.fillText(romans[i-1], 0, 0);
      //ctx.rotate(ang);
      ctx.translate(0, rad*0.85);
      ctx.rotate(-ang);
  }

  //center font (the minute numbers in this case) an chooses font for minute
  ctx.font = rad*0.06 + "px Arial";
  ctx.textBaseline="middle";
  ctx.textAlign="center";

  //loop that adds 60 "I" along the outside of the clock
  for (i = 1; i < 61; i++){
      ang = i * Math.PI / 30;
      ctx.rotate(ang);
      ctx.translate(0, -rad*0.95);

      ctx.fillText("I", 0, 0);

      ctx.translate(0, rad*0.95);
      ctx.rotate(-ang);
  }
}



function drawTime(ctx, rad){

  //makes sure the hands behave correctly
  var step = 1 / 60;

  //all vars for current time. MS is needed for steps in second
  var now = new Date();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();
  var millisecond = now.getMilliseconds();

  //all vars for angle calculation
  var secondAngle, minuteAngle, hourAngle;

  //console.log(millisecond);
  //drawHand() passes all necessary arguments such as size and color
  //second
  secondAngle = pi2 * ((second/60) + ((step) * millisecond * 0.001));
  drawHand(ctx, secondAngle, rad*0.75, "#CF000F");

  //minute
  minuteAngle = pi2 * ((minute / 60) + ((step) * second / 60));
  drawHand(ctx, minuteAngle, rad*0.75, "#333");

  //hour
  hourAngle = pi2 * (((hour % 12) / 12) + (( 1 / 12) * minute / 60));
  drawHand(ctx, hourAngle, rad*0.5, "#333");

}



function drawHand(ctx, pos, length, color) {

  //ALWAYS draw downward from PoO when making pointers!!!
  ctx.beginPath();
  ctx.moveTo(0,0);

  //rotate first to draw accordingly to the time
  ctx.rotate(pos);

  /*cricle has to be filled right away*/
  ctx.arc(0,0,7,0,2*Math.PI);
  ctx.fill();
  ctx.lineTo(0, -length);
  ctx.lineTo(-6.5,0);

  /*fill and stroke everything else*/
  ctx.fillStyle = color;
  ctx.fill();
  ctx.strokeStyle = color;
  ctx.stroke();

  //then rotate the canvas back
  ctx.rotate(-pos);
}
