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