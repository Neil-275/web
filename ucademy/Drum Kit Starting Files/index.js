var crash= new Audio("sounds/crash.mp3")
var kick= new Audio("sounds/kick-bass.mp3")
var snare= new Audio("sounds/snare.mp3")
var tom1= new Audio("sounds/tom-1.mp3")
var tom2= new Audio("sounds/tom-2.mp3")
var tom3= new Audio("sounds/tom-3.mp3")
var tom4= new Audio("sounds/tom-4.mp3")
document.querySelectorAll(".drum").forEach(x=>x.addEventListener("click",function(e){
    var k=e.target.innerHTML;
    playSound(k) 
    playAnimation("."+k);
    
    // k.classList.toggle(".pressed");
})  )
document.addEventListener("keydown",(e)=>{
    var name= "."+e.key;
    playSound(e.key);
    playAnimation("."+e.key);
})

playSound=(key)=>{
    switch(key){
        case "w": 
            crash.play();
            break;
        case "a":
            kick.play();
            break;
        case "s":
            snare.play();
            break;
        case "d":
            tom1.play();
            break;
        default: NaN
        
    }
}
playAnimation=(name)=>{
    var k= document.querySelector(name);
    k.classList.toggle("pressed");
    
    setTimeout(()=>{
        k.classList.toggle("pressed");
    },300);
    
}