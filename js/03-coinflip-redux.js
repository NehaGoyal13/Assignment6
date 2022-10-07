/*eslint-env browser*/

//The “Coin Flip” Game Redux 
var coinFlip;
var i;
for(i=1;i<=10;i++){
    coinFlip=Math.round(Math.random());
    if(coinFlip===0){
        window.document.write("Heads<br>");
    }
    else if(coinFlip===1){
        window.document.write("Tails<br>");
    }
}