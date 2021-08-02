const navClick = () => {
  var x = document.getElementById("links");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
};

console.log(`Let\'s go! This website\'s power level is over ${8999 + 1}!`);