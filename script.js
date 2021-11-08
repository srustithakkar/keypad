const keypad = document.querySelector("#keypad")
const clicks = [];
const dblClicks = [];
const trplClicks = [];
const screen = [];
let oldId = null;
let value =  null;
let click = 0;
let time = 0;
let timer = null;


const keys = {
  button1: "ABC1",
  button2: "DEF2",
  button3: "GHI3",
  button4: "JKL4",
  button5: "MNO5",
  button6: "PQR6",
  button7: "STU7",
  button8: "VWX8",
  button9: "YZ 9",
  button10: "   0"
}

keypad.addEventListener("click", onClick);
keypad.addEventListener("mousedown", startMouseCount);
keypad.addEventListener("mouseup", stopMouseCount);

function startMouseCount() {
  timer = window.setTimeout(function () {
      time++;
      console.log(time);
      startMouseCount();
  }, 500);
}

function stopMouseCount() {
  clearTimeout(timer);
}

function onClick(ev){
  let id = ev.target.id
  if( id.length > 0 && time < 3){
    time = 0;
    if(id === "button10"){
      click = 3;
      displayValue(id, click);
    }else if (oldId === id && click === 2){
      displayValue(id, click);
      click = 0;
    }else if( oldId === id && click === 1  ){
      displayValue(id, click);
      click = 2;
    }else {
      click = 0;
      displayValue(id, click);
      click = 1;
    }
  }else {
    time = 0
    click = 3;
    displayValue(id, click);
  }
  oldId = id;
}

function reset() {
  screen.length = 0;
  clicks.length = 0;
  dblClicks.length = 0;
  trplClicks.length = 0;
  document.getElementById("display").value = screen.join("");
}

function displayValue(id,index){
  if (id.length){
    if(oldId === id){
      screen[screen.length -1] = keys[id].charAt(index)  ;
    }else {
      screen.push(keys[id].charAt(index));
    }
  }
  changeValue();
}

function changeValue(){
  document.getElementById("display").value = screen.join("");
}
