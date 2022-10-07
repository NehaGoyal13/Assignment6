/*eslint-env browser*/

//Countdown
var count,i;
count= parseInt(window.prompt("Enter a number for Countdown"));
for (i=count;i>=0;i-=1){
    window.document.write(i+"<br>");
}