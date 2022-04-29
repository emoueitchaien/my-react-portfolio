var toggled = false;

var switchHolder = document.getElementById("outer-div");
var switchButton = document.getElementById("outer-div");

switchButton.style.transition = ".4s all ease-in-out";

switchButton.addEventListener("click", function () {
  if (!toggled) {
    switchHolder.style.border = "2px solid yellow";
    document.body.style.color = "white";
    document.body.style.backgroundColor = "black";
    console.log(document.getElementById("h1"));
    document.getElementById("mohan").style.color = "#7562d5";
    document.getElementById("inner-div").classList.replace("moon", "sun");
    // document.getElementById("greet").innerHTML = "Good Night!";
    toggled = true;
  } else {
    switchHolder.style.border = "2px solid black";
    // document.getElementById("msg").style.color = "black";
    document.body.style.color = "black";
    document.body.style.backgroundColor = "white";
    document.getElementById("mohan").style.color = "rgba(22, 13, 71, 1)";

    document.getElementById("inner-div").classList.add("moon");
    document.getElementById("inner-div").classList.remove("sun");
    // document.getElementById("greet").innerHTML = "Good Day!";
    toggled = false;
  }
});
