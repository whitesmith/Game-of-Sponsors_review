 
var castle = [
  
 "bard",
  "bright",
  "minerva",
  "waterfall",
  "feast",
  "labor",
  "noone"
]

var castle_urls = {

  "bard": "",
  "bright": "",
  "minerva": "",
  "waterfall": "",
  "feast": "",
  "labor": "",
  "noone": ""
}


function set_events_for_castle(castle){
  document.querySelector("#btn_" + castle).addEventListener('click', function(){
  
    window.location = castle_urls[castle];
  });
}


function set_events(){
  for(var i = 0; i < castle.length; i++){
    set_events_for_castle(castle[i])
  }
  
}

document.addEventListener("DOMContentLoaded", function() {
    set_events()
}, false);
