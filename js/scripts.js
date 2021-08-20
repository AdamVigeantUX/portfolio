const navClick = () => {
  var x = document.getElementById("links");
  var y = document.getElementById("hamIcon");
  if (x.style.display === "flex") {
    x.style.display = "none";
    y.setAttribute("class", "fa fa-bars fa-lg navClosed");
  } else {
    x.style.display = "flex";
    y.setAttribute("class", "fa fa-close fa-lg navOpened");
  }
};

console.log(`Let\'s go! This website\'s power level is over ${8999 + 1}!`);

/* Home Hero Text */
var tl = gsap.timeline();
tl.to("#heroText", {text:"Design Thinker", duration: 1, delay:2});
tl.to("#heroText", {text:"Creative Problem Solver", duration: 1, delay:3});
tl.to("#heroText", {text:"U", duration: .1, delay:3});
tl.to("#heroText", {text:"UX Designer", duration: 3, ease:"power3.out"});

/* Home Project Reveal */
gsap.from("#soulUnits", {y:25, opacity:0, duration:1.5, delay: .5, ease:"power3.out"});
gsap.from("#sapInc", {y:25, opacity:0, duration:1.5, delay: 1, ease:"power3.out"});

/* Project Hero Image Reveal */
gsap.from(".heroImg", {x:100, opacity:0, duration:1.5, delay:.25, ease:"power3.out"});

/* Project Hero Image Reveal */
gsap.from("#headshot", {x:-100, opacity:0, duration:1.5, delay:.25, ease:"power3.out"});

/* Button Hover Effect */
$(".button").mouseenter(function(){gsap.to(this, {y:-5});});
$(".button").mouseleave(function(){gsap.to(this, {y:0});});

$("#logo").mouseenter(function(){gsap.to(this, {y:-3, opacity:.8});});
$("#logo").mouseleave(function(){gsap.to(this, {y:0, opacity:1});});