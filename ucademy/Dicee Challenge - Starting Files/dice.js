function randomize(){
    return Math.ceil(Math.random()*6);
}
let a=randomize(),b=randomize()
document.querySelector(".img1").setAttribute("src","images/dice"+a+".png")
document.querySelector(".img2").setAttribute("src","images/dice"+b+".png")
res=document.querySelector("h1");
if (a>b){
    res.innerHTML="<strong>Player 1 wins</strong>";
}
else if (a==b){
    res.innerHTML="<strong>Draw</strong>";
}
else {
    res.innerHTML="<strong>Player 2 wins</strong>";
}