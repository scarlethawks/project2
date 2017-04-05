var help = document.querySelector("#pass-reset");
var fields = document.querySelectorAll("input");
var reset = document.getElementById("#pass-reset");
var schedule = [{"course": "ITMD 362"}, 
                {"buiding":"Stuart"}, 
                {"days": "Mondays"},
                {"time": "3:15-4:30"},
                {"professor": "K. Stolley"}];

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

function logIn(){
  var user = document.getElementById('email').value.trim();
  var password = document.getElementById('password').value.trim();

  if (user !== '' || password !== ''){
    console.log("welcome to IIT " + user);
  }else{
    alert("fields cannot be empty");
    help.textContent = "fields cannot be empty";
  }
}//end of logIn function
document.getElementById('submit').addEventListener('click',logIn,false);
