var help = document.querySelector("#pass-reset");
var fields = document.querySelectorAll("input");
var reset = document.getElementById("pass-reset");

for (var i=0; i < fields.length; i++) {
  fields[i].addEventListener("focus", function(event){
    var text = event.target.getAttribute("data-help");
    help.style.color = "red";
    help.style.fontStyle = "italic";
    help.style.fontSize = ".75em";
    help.textContent = text;
  });
  fields[i].addEventListener("blur", function(event) {
    help.textContent = "";
  });
}//end of for statement
