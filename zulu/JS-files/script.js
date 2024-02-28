let degree = 0;
let transper= 0;
let scrollPosition = 0;
var vinyl = document.getElementById("vinyl-record");
var stickt = 0;
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
}


console.log("HEJSAN");

function FixedVinyl(){
  if(window.scrollY >= sticky) {
    vinyl.classList.add("sticky")
  } else {
    vinyl.classList.remove("sticky");
  }

}