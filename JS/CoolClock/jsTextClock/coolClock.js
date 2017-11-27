function clock() {

  /*(time) vars that run the clock*/
  var time = new Date();
  var hour = time.getHours();
  var minute = time.getMinutes();
  var second = time.getSeconds();

  /*strings that become the spelled out numbers*/
  var minute2 = "";
  var second2 = "";
  var timeArg = " Past ";

  /*var used for testing*/
  var timevar = minute;



  /*if to check if time is before or after ("to" or "past") 30 minutes
  and also makes the clock tick in the right "direction"*/
  if (minute > 30){
    minute = 59 - minute;
    timeArg = " To ";
    hour = hour + 1;
    second = 59 - second;
  }

  /*these if's sets minute2 (second number in minute) to the correct value*/
  if (minute > 20 && minute < 30){
    minute2 = minute - 20;
    minute = minute - minute2;
  }

  if (minute == 30){
    minute = "Thirty";
  }



  /*switch for the hours*/
  switch (hour){
    case 0:
    case 24:
      hour = "Midnight";
      break;
    case 1:
    case 13:
      hour = "One";
      break;
    case 2:
    case 14:
      hour = "Two";
      break;
    case 3:
    case 15:
      hour = "Three";
      break;
    case 4:
    case 16:
      hour = "Four";
      break;
    case 5:
    case 17:
      hour = "Five";
      break;
    case 6:
    case 18:
      hour = "Six";
      break;
    case 7:
    case 19:
      hour = "Seven";
      break;
    case 8:
    case 20:
      hour = "Eight";
      break;
    case 9:
    case 21:
      hour = "Nine";
      break;
    case 10:
    case 22:
      hour = "Ten";
      break;
    case 11:
    case 23:
      hour = "Eleven";
      break;
    case 12:
      hour = "Twelve";
      break;
  }

  /*switch for second number in minutes*/
  switch (minute2){
    case 1:
      minute2 = "-One";
      break;
    case 2:
      minute2 = "-Two";
      break;
    case 3:
      minute2 = "-Three";
      break;
    case 4:
      minute2 = "-Four";
      break;
    case 5:
      minute2 = "-Five";
      break;
    case 6:
      minute2 = "-Six";
      break;
    case 7:
      minute2 = "-Seven";
      break;
    case 8:
      minute2 = "-Eight";
      break;
    case 9:
      minute2 = "-Nine";
      break;
  }

  /*switch for the first number in minutes*/
  switch (minute){
    case 0:
      minute = "Zero";
      break;
    case 1:
      minute = "One";
      break;
    case 2:
      minute = "Two";
      break;
    case 3:
      minute = "Three";
      break;
    case 4:
      minute = "Four";
      break;
    case 5:
      minute = "Five";
      break;
    case 6:
      minute = "Six";
      break;
    case 7:
      minute = "Seven";
      break;
    case 8:
      minute = "Eight";
      break;
    case 9:
      minute = "Nine";
      break;
    case 10:
      minute = "Ten";
      break;
    case 11:
      minute = "Eleven";
      break;
    case 12:
      minute = "Twelve";
      break;
    case 13:
      minute = "Thirteen";
      break;
    case 14:
      minute = "Fourteen";
      break;
    case 15:
      minute = "Fifteen";
      break;
    case 16:
      minute = "Sixteen";
      break;
    case 17:
      minute = "Seventeen";
      break;
    case 18:
      minute = "Eighteen";
      break;
    case 19:
      minute = "Nineteen";
      break;
    case 20:
      minute = "Twenty";
      break;
  }



  /*append minute and minute2 and fade it in*/
  $("#minAm span").fadeIn();
  $("#minAm span").text(minute + minute2);

  /*append second (and second2) and fade it in*/
  $("#secAm span").fadeIn();
  $("#secAm span").text(second);

  /*append "to" or "past" an hour and fade it in*/
  $("#arg span").fadeIn();
  $("#arg span").text(timeArg);

  /*append an hour and fade it in*/
  $("#hourAm span").fadeIn();
  $("#hourAm span").text(hour);



  /*fades out second if its about to change (happens a lot)*/
  $("#secAm").bind("DOMSubtreeModified",function(){
    $("#secAm span").fadeOut();
  });

  /*fades out minute if its about to change*/
  //if (second + second2 == "Fifty-Nine" && timevar < 30){
  if (second + second2 == 59 && timevar < 30){
    $("#minAm span").fadeOut();
  }

  //if (second + second2 == "One" && timevar > 30){
  if (second + second2 == 0 && timevar > 30){
    $("#minAm span").fadeOut();
  }

  /*fades out the timeargument ("past" or "to") if its about to change*/
  if (minute + minute2 == "Zero" && second == 0){
    $("#arg span").fadeOut();
  }

  /*fades out hour if its about to change*/
  //if (minute + minute2 == "Fifty-Nine" && second + second2 == "Fifty-Nine"){
  if (minute + minute2 == "Zero" && second == 0 && arg == "To"){
    $("#hourAm span").fadeOut();
  }

}

/*makes the function update every 500ms (twice a second)*/
var t = setInterval(clock, 1000);
