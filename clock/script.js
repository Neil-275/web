function displayTime(){
    var dateTime= new Date();
    var hrs= dateTime.getHours();
    var min= dateTime.getMinutes();
    var sec= dateTime.getSeconds();
    var ses
    if (hrs>12){
        hrs-=12;
        ses="PM";
    }
    else 
        ses="AM";
    document.getElementById("hours").innerHTML=hrs;
    document.getElementById("minutes").innerHTML=min;
    document.getElementById("second").innerHTML=sec;
    document.getElementById("session").innerHTML=ses;

}

setInterval(displayTime,100)