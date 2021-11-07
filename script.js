const keypad = document.querySelector("#keypad")
const clicks = [];
const dblClicks = [];
const trplClicks = [];
const screen = [];
let oldId = null;
let value =  null;
let click = 0;
let time = null;
const keys = {
  button1: "ABC",
  button2: "DEF",
  button3: "GHI",
  button4: "JKL",
  button5: "MNO",
  button6: "PQR",
  button7: "STU",
  button8: "VWX",
  button9: "YZ",
}

keypad.addEventListener("click", onClick);

function onClick(ev){
  let id = ev.target.id
  if( id.length > 0){
    if (oldId === id && click === 2){
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
  }
    oldId = id;
}

function reset() {
  screen = [];
  clicks.length = 0;
  dblClicks.length = 0;
  trplClicks.length = 0;
  document.getElementById("display").value = screen.join("");
}

function displayValue(id,index){
  if(oldId === id){
    screen[screen.length -1] = keys[id].charAt(index)  ;
  }else {
    screen.push(keys[id].charAt(index));
  }
  changeValue();
}

function changeValue(){
  document.getElementById("display").value = screen.join("");
}
