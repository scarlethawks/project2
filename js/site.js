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
  var text2 = "fields cannot be empty";

  if (user !== '' || password !== ''){
    console.log("welcome to IIT " + user);
  }else{
    help.text2Content = text2;
  }
}//end of logIn function

function makeSchedule() {
  var select = document.querySelector("select");
  var output = document.querySelector("#output");

    if (select.value == "fall"){
      console.log("You selected Fall");
    }else if (select.value == "spring"){
      console.log("You selected Spring");
    }else if (select.value == "summer"){
      console.log("You selected Summer");
    }                                  
}//end of schedule function
document.querySelector("select").addEventListener('change',makeSchedule, false);
//document.getElementById("submit").addEventListener('click',logIn, false);

