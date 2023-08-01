function randomize(){
    return Math.floor(Math.random()*6);
}
let a=randomize(),b=randomize()
document.getElementById("first").innerHTML=a
document.getElementById("second").innerHTML=b
res=document.getElementById("result");
if (a>b){
    res.innerHTML="<strong>Player 1 wins</strong>";
}
else if (a==b){
    res.innerHTML="<strong>Draw</strong>";
}
else {
    res.innerHTML="<strong>Player 2 wins</strong>";
}