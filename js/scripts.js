const navClick = () => {
  const x = document.getElementById("links");
  const y = document.getElementById("hamIcon");
  if (x.style.display === "flex") {
    x.style.display = "none";
    y.setAttribute("class", "fa fa-bars fa-lg navClosed");
  } else {
    x.style.display = "flex";
    y.setAttribute("class", "fa fa-close fa-lg navOpened");
  }
};

console.log(`Let's go! This website's power level is over ${8999 + 1}!`);

/* Logo Animation */
gsap.from(".a-part", { y: -100, duration: 0.8, ease: "power3.out" });
gsap.from(".v-part", { y: 100, duration: 0.8, ease: "power3.out" });

/* Home Hero Text */
let adjFrom = $("#work").width();

const tl = gsap.timeline();
tl.from("#workHero>h1", {
  opacity: 0.01,
  y: 5,
  duration: 1,
  delay: 1.5,
});
tl.from("#heroText1", {
  x: -5,
  opacity: 0.01,
  duration: 0.2,
  ease: "power3.out",
  delay: 0.5,
});
tl.from("#adjSpacer1", {
  x: -5,
  opacity: 0.01,
  duration: 0.05,
  ease: "power3.out",
  delay: 0.5,
});
tl.from("#heroText2", {
  x: -5,
  opacity: 0.01,
  duration: 0.2,
  ease: "power3.out",
});
tl.from("#adjSpacer2", {
  x: -5,
  opacity: 0.01,
  duration: 0.05,
  ease: "power3.out",
  delay: 0.5,
});
tl.from("#heroText3", {
  x: -5,
  opacity: 0.01,
  duration: 0.2,
  ease: "power3.out",
});

/* Home Project Reveal */
gsap.from("#soulUnits", {
  y: 25,
  opacity: 0,
  duration: 1.5,
  delay: 0.5,
  ease: "power3.out",
});
gsap.from("#sapInc", {
  y: 25,
  opacity: 0,
  duration: 1.5,
  delay: 1,
  ease: "power3.out",
});
gsap.from("#mySite", {
  y: 25,
  opacity: 0,
  duration: 1.5,
  delay: 2,
  ease: "power3.out",
});

/* Project Hero Image Reveal */
gsap.from(".heroImg", {
  x: 100,
  opacity: 0,
  duration: 1.5,
  delay: 0.25,
  ease: "power3.out",
});

/* Project Hero Image Reveal */
gsap.from("#headshot", {
  x: -100,
  opacity: 0,
  duration: 1.5,
  delay: 0.25,
  ease: "power3.out",
});

/* Button Hover Effect */
$(".button").mouseenter(function () {
  gsap.to(this, { y: -5 });
});
$(".button").mouseleave(function () {
  gsap.to(this, { y: 0 });
});

$("#logo").mouseenter(function () {
  gsap.to(this, { y: -3, opacity: 0.8 });
});
$("#logo").mouseleave(function () {
  gsap.to(this, { y: 0, opacity: 1 });
});
