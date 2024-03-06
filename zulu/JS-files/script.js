let degree = 0;
let transper= 0;
let scrollPosition = 0;
var vinyl = document.getElementById("vinyl-record");
var sticky = 0;
let opNum = 0;


function ScrollVinyl() 
{
  FixedVinyl();
  if (scrollPosition > window.scrollY)
  {
    degree += 8;
  }
  else if (scrollPosition < window.scrollY)
  {
    degree -= 8;
  }
  scrollPosition = window.scrollY;

  const vinyl = document.getElementById("vinyl-record");
  vinyl.style.transform = "rotate(" + degree + "deg)";
  
  vinylOpacity();
  setTimeout(()=> {
    fadeOut();
  }, 700)
}





function FixedVinyl(){
  if(window.scrollY >= sticky) {
    vinyl.classList.add("sticky")
  } else {
    vinyl.classList.remove("sticky")
}
}

const element = document.querySelector("div#libbsticka");
const output = document.querySelector("p#output");

/*element.onscroll=(event)=> {
  vinylOpacity();
  setTimeout(()=> {
    fadeOut();
  }, 1000)
  
}*/

function vinylOpacity()
{
  opNum = 1;
  vinyl.style.opacity = opNum ;
 
}
const delay = ms => new Promise(res => setTimeout(res, ms));
async function fadeOut()
{
  
  while( opNum > 0)
  {
    await delay(50);
    opNum -= 0.01;
    vinyl.style.opacity = opNum ;
  }
  
}