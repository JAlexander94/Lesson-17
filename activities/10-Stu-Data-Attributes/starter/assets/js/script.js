var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
  var element = event.target;
  var state = element.getAttribute("data-state");
  var number = element.getAttribute("data-number")
  if(state ==="hidden"){
    element.setAttribute("id",number)
    document.getElementById(number).innerHTML = number;
    element.setAttribute("data-state", "visible");
  } else {
    element.setAttribute("id",number)
    document.getElementById(number).innerHTML = "";
    element.setAttribute("data-state", "hidden");
  }
  // TODO: Complete function
});
