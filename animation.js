
function myMove() {
  let id = null;
  const elem = document.getElementById("animate");   
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + "px"; 
      elem.style.left = pos + "px"; 
    }
  }
}
let btn1=document.getElementById("one");
one.onclick=()=>{
    console.log(myMove1());
}

function myMove1() {
    let id =null;
    const elem = document.getElementById("animate1");   
    let pos =0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
      if (pos ==350) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.bottom = pos + "px"; 
        elem.style.right = pos + "px"; 
      }
    }
  }
  function myMove2() {
    let id =null;
    const elem = document.getElementById("animate2");   
    let pos =0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
      if (pos ==350) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.bottom = pos + "px"; 
        elem.style.left = pos + "px"; 
      }
    }
  }
  let btn2=document.getElementById("tw0");
two.onclick=()=>{
    console.log(myMove2());
}

