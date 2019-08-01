
//! Hamburger menu

(function() {

	var hamburger = {
		navToggle: document.querySelector('.nav-toggle'),
		nav: document.querySelector('nav'),

		doToggle: function(e) {
			e.preventDefault();
			this.navToggle.classList.toggle('expanded');
			this.nav.classList.toggle('expanded');
		}
	};

	hamburger.navToggle.addEventListener('click', function(e) { hamburger.doToggle(e); });

}());



//! Light & Dark Mode 

var checkbox = document.querySelector('input[name=mode]');
 
checkbox.addEventListener('change', function() {
            if(this.checked) {
                trans();
                document.documentElement.setAttribute('data-theme', 'dartheme');
                document.getElementById("body-logo").style.fill = "#fff";
                document.getElementById("foot-left").style.fill = "#fff";
                document.getElementById("foot-right").style.fill = "#fff";
                document.getElementById("header").style.backgroundImage = "url(../img/stars.jpg)";
            } else {
                trans();
                document.documentElement.setAttribute('data-theme', 'lighttheme');
                document.getElementById("body-logo").style.fill = "#000";
                document.getElementById("foot-left").style.fill = "#000";
                document.getElementById("foot-right").style.fill = "#000";
                document.getElementById("header").style.backgroundImage = "url(../img/winter.jpg)";
            }
        })
 
        let trans = () => {
            document.documentElement.classList.add('transition');
            window.setTimeout(() => {
                document.documentElement.classList.remove('transition');
            }, 1000)
        }

// Set the theme for the actual time, day or night
var date = new Date();
var hours = date.getHours();
// var hours = 16;
// console.log(hours);

function themeTime() {
  if ((hours >= 0 && hours <7) || (hours >= 21)) {
    document.documentElement.setAttribute('data-theme', 'dartheme');
    document.getElementById("switch").setAttribute("checked", true);
    document.getElementById("body-logo").style.fill = "#fff";
    document.getElementById("foot-left").style.fill = "#fff";
    document.getElementById("foot-right").style.fill = "#fff";
    document.getElementById("header").style.backgroundImage = "url(../img/stars.jpg)";
  } 
  }

  themeTime();




//! Eyes movement

var balls = document.getElementsByClassName("ball");
document.onmousemove = function(){
  var x = event.clientX * 100 / window.innerWidth + "%";
  var y = event.clientY * 100 / window.innerHeight + "%";

  for(var i=0;i<2;i++){
	balls[i].style.left = x;
	balls[i].style.top = y;
	balls[i].style.transform = "translate(-"+x+",-"+y+")";
  }
}



//! Text typing effect

var i=0;
var text = "Hi! I'm here to build your website."

function borrar() {
document.getElementById("h2-animated").innerHTML = "";
}

function typing() {
  if(i<text.length){
    document.getElementById("h2-animated").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing,100);
    
  } 
  
  if (i==text.length) {
    function borrar() {
      document.getElementById("h2-animated").innerHTML = "";
      }
  setTimeout(borrar,2000)
  }

}
var myVar;

function myFunction() {
  myVar = setInterval(typing, 10000);
}
// setInterval(typing,5000);







//! Menu on

function menuOn() {
    if (window.innerWidth > 992) {
        document.getElementById("logo-nav-bar").style.display = "inline-block";
        document.getElementById("nav-desktop").style.display = "flex";
        document.getElementById("link-logo").style.display = "inline";
    } else {
        document.getElementById("hamburger").style.display = "block";
    }
}


//! Back top button

document.addEventListener('DOMContentLoaded', function () {
  let gototop = document.querySelector('.gototop');
  let body = document.documentElement;

  window.addEventListener('scroll', check);

  function check() {
      pageYOffset >= 500 && gototop.classList.add('visible');
      pageYOffset < 500 && gototop.classList.remove('visible');
  }


  let circ = timeFraction =>
      1 - Math.sin(Math.acos(timeFraction > 1 ? timeFraction = 1 : timeFraction));

  let makeEaseOut = timing => timeFraction => 1 - timing(1 - timeFraction);
  let gogototopEaseOut = makeEaseOut(circ);
});

function animate(options) {
  let start = performance.now();

  requestAnimationFrame(function animate(time) {
      let timeFraction = (time - start) / options.duration;
      timeFraction > 1 && (timeFraction = 1);

      let progress = options.timing(timeFraction)

      options.draw(progress);
      timeFraction < 1 && requestAnimationFrame(animate);
  });
}


//! Cookies

$(document).ready(function(){   
  setTimeout(function () {
      $("#cookieConsent").fadeIn(200);
   }, 4000);
  $("#closeCookieConsent, .cookieConsentOK").click(function() {
      $("#cookieConsent").fadeOut(200);
  }); 
}); 




//! Active links


if (window.location.href == "https://onejo.eu/about/") {
    document.getElementById("about-menu").setAttribute("class","active");
    document.getElementById("about-menu-desktop").setAttribute("class","active");
} else if (window.location.href == "https://onejo.eu/") {
    document.getElementById("home-menu").setAttribute("class","active");
    document.getElementById("home-menu-desktop").setAttribute("class","active");
} else if (window.location.href == "https://onejo.eu/projects/") {
    document.getElementById("projects-menu").setAttribute("class","active");
    document.getElementById("projects-menu-desktop").setAttribute("class","active");
} else if (window.location.href == "https://onejo.eu/contact/") {
    document.getElementById("contact-menu").setAttribute("class","active");
    document.getElementById("contact-menu-desktop").setAttribute("class","active");
}


//! Parallax

var image = document.getElementsByClassName('image');
new simpleParallax(image, {
    scale: 1.5,
});


//? Possible fix for media queries on index page
//!IMPORTANT: Not finished

var width = window.matchMedia("(min-width: 992px)")
function mediaQ(width) {
  if (width.matches) { 
    document.getElementById("link-logo").style.display = "inline-block";
    document.getElementById("nav-desktop").style.display = "flex";
    document.getElementById("hamburger").style.display = "none";
  } else {
    document.getElementById("link-logo").style.display = "none";
    document.getElementById("nav-desktop").style.display = "none";
    document.getElementById("hamburger").style.display = "block";
  }
}

window.addEventListener('resize', mediaQ);
