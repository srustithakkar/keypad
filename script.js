const keypad = document.querySelector("#keypad")
const clicks = [];
const dblClicks = [];
const trplClicks = [];
let screen = []
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

keypad.addEventListener("click", onClick)
function reset() {
  screen = [];
  document.getElementById("display").value = screen.join("")

}

function onClick(ev){
  let id = ev.target.id
  if( id.length){
    if(clicks.includes(id) && dblClicks.includes(id) && trplClicks.includes(id)){

    }
    else if(clicks.includes(id) && dblClicks.includes(id)){
      trplClicks.push(id)
      onTrplClick(id)
      console.log("trplClicks" + " " + trplClicks)
    }else if(clicks.includes(id) ){
      dblClicks.push(id)
      onDblClick(id);
      console.log("dblClicks" + " " + dblClicks)
    }else {
      clicks.push(ev.target.id);
      onFirstClick(id);
      console.log(id + "->" + clicks)
    }
  }
}

function onFirstClick(id) {
  screen.push(keys[id].charAt(0))
  changeValue();
}
function onDblClick(id) {
  screen.push(keys[id].charAt(1))
  changeValue();
}
function onTrplClick(id) {
  screen.push(keys[id].charAt(2))
  changeValue();
}

function changeValue(){
  document.getElementById("display").value = screen.join("")
}

// 3clicks for Each button
// each click behave diffrently
// 10buttons
