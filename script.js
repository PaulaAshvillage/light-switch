let count = 0;
function buttonclick() {
  count++;

  btn.classList.toggle("btn-changed");
  main.classList.toggle("main-changed");
  if (count % 2 === 0) {
    document.title = "Good Morning";
  } else {
    document.title = "Good Evening";
  }
}

//1. Element auswählen (von dem die Aktion ausgeht)
//API die es erlaubt mit JS zu interagieren: querySelector /querySelectoAll
const btn = document.body.querySelector("#btn-1");

//Element=das erste das gefunden wird,also am besten mit IDs arbeiten!
//2.Event erstellen mittels addEventListener (API für jedes Element)
//Aufbau: addEventlistener(string, functionalsParameter(callbackFN), boolean)
btn.addEventListener("click", buttonclick); //Wenn auf diesem Element irgendwann ein Click passiert führe bitte diese Funktion aus (Callback Funktion)
//häufig mit anonymer Funktion direk mit rein:
//btn.addEventListener("click", function(){
// console.log("dies und das");
//})

//beliebig viele EventListener eines typs auf einen Element es sei denn onclick handler!

const main = document.body.querySelector("main");
