window.onload = function () {
  document.getElementById("loader").style.display = "none";
};

function addHabit() {
  var box = document.getElementById("habit");
  var list = document.getElementById("list");

  if (box.value == "") {
    alert("Please type a habit first.");
  } else {
    list.innerHTML += box.value + "<button onclick='checkIn(this)'>Check in</button>";
    box.value = "";
  }
}

function checkIn(button) {
  button.innerHTML = "Done today ✔";
}


var tips = [
  "Study in short rounds: 25 minutes of focus, then a 5 minute break.",
  "Write tomorrow's top 3 tasks before you go to sleep.",
  "Link a new habit to one you already do, like reading after dinner.",
  "Keep your phone in another room while you study.",
  "Drink a glass of water as soon as you wake up.",
  "Make the habit so small you cannot say no: one page, one push-up.",
  "Never miss twice. If you skip a day, restart the next day.",
  "Put your habit where you can see it, like a note on your desk.",
  "Reward yourself after you finish, even with a small treat.",
  "Go to bed at the same time every night, even on weekends."
];
var tipNumber = 0;

function newTip() {
  document.getElementById("tip").innerHTML = tips[tipNumber];
  tipNumber = tipNumber + 1;
  if (tipNumber == tips.length) {
    tipNumber = 0;
  }
}
//POMODORO TIMER
let min=25;
let sec=0;
let outputmin=document.getElementById("min");
let outputsec=document.getElementById("sec");
let interval;

function starttimer(){
    if(min<=0 && sec<=0){
        clearInterval(interval);
        return; //to avoid going under zero when the time is done
    }
    sec--;
    if (sec<0){
        sec=59;
        min--;
    }
    if (min <= 9){
        outputmin.innerHTML="0"+min;
    }
    else{
        outputmin.innerHTML=min;
    }
    if (sec <= 9){
        outputsec.innerHTML="0"+sec;
    }
    else{
        outputsec.innerHTML=sec;
    }

    if(min<=0 && sec<=0){
        clearInterval(interval);
        alert("Time is up! Take a 5 minute break.");
    }
}

if (outputmin) {
    document.getElementById("start").addEventListener("click",function(){
        clearInterval(interval); //so pressing Start twice does not make it faster
        if(min<=0 && sec<=0){
            min=25;
            sec=0;
            outputmin.innerHTML="25";
            outputsec.innerHTML="00";
        }
        interval=setInterval(starttimer,1000);
    })
    document.getElementById("stop").addEventListener("click",function(){
        clearInterval(interval)
    })
    document.getElementById("reset").addEventListener("click",function(){
        clearInterval(interval);
        min=25;
        sec=0;
        outputmin.innerHTML="25";
        outputsec.innerHTML="00";
    })
}