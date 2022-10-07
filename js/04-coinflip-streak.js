/*eslint-env browser*/

//The “Coin Flip Streak” Game 

var coinFlip;
do{
    coinFlip=Math.round(Math.random());
    if(coinFlip===0){
        window.document.write("Heads<br>");
    }
    else if(coinFlip===1){
        window.document.write("Tails<br>");
    }
    window.document.write("Coin Flip Number was: "+coinFlip+"<br>");
}while(coinFlip!==1);