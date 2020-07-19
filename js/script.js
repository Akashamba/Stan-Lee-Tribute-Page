var target = 992;

if (w &gt;=target) 
	window.onscroll = function() {scrollFunction()};


function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById	("header").style.fontSize = "40px";
    document.getElementById("header").style.height = "4vw";
  } else {
    document.getElementById("header").style.fontSize = "5rem";
    document.getElementById("header").style.height = "10vh"
  }
}