var sponsors = [
  //"ws",
  "aws"
]
var sponsors_urls = {
//  "ws": "",
  "aws": ""
}
var index_url = "https://gos.glitch.me/";


function show_questions(sponsor, value){
  document.querySelector("#pergunta_" + sponsor).setAttribute('visible', value);
  document.querySelector("#texto_" + sponsor).setAttribute('visible', value);
}

function show_answers(sponsor, value){
  document.querySelector("#answer_" + sponsor).setAttribute('visible', value);
  document.querySelector("#answer2_" + sponsor).setAttribute('visible', value);
  document.querySelector("#answerr_" + sponsor).setAttribute('visible', value);
}


function show_sponsor(sponsor){
  document.querySelector("#btn_" + sponsor).setAttribute('visible', 'false');
  document.querySelector("#intro_" + sponsor).setAttribute('visible', 'false');

  show_questions(sponsor, 'true')
  show_answers(sponsor, 'true')
}

function on_right_answer(sponsor){
  show_answers(sponsor, 'false')
  show_questions(sponsor, 'false')

  document.querySelector("#pergunta_" + sponsor + "R").setAttribute('visible', 'true');
  document.querySelector("#texto_" + sponsor + "R").setAttribute('visible', 'true');
  document.querySelector("#btn_" + sponsor + "R").setAttribute('visible', 'true');
}

function on_wrong_answer(sponsor){
  show_answers(sponsor, 'false')
  show_questions(sponsor, 'false')

  document.querySelector("#pergunta_" + sponsor + "W").setAttribute('visible', 'true');
  document.querySelector("#texto_" + sponsor + "W").setAttribute('visible', 'true');
  document.querySelector(".btn_leave").setAttribute('visible', 'true');
}

function set_events_for_sponsor(sponsor){
  document.querySelector("#btn_" + sponsor).addEventListener('click', function(){
    show_sponsor(sponsor);
  });
  document.querySelector("#answer_" + sponsor).addEventListener('click', function(){
    on_wrong_answer(sponsor);
  });
  document.querySelector("#answer2_" + sponsor).addEventListener('click', function(){
    on_wrong_answer(sponsor);
  });
  document.querySelector("#answerr_" + sponsor).addEventListener('click', function(){
    on_right_answer(sponsor);
  });
  document.querySelector("#btn_" + sponsor + "R").addEventListener('click', function(){
    window.location = sponsors_urls[sponsor];
  });
}

function set_events(){
  for(var i = 0; i < sponsors.length; i++){
    set_events_for_sponsor(sponsors[i])
  }
  document.querySelector(".btn_leave").addEventListener('click', function(){
    window.location = index_url;
  });
}

document.addEventListener("DOMContentLoaded", function() {
    set_events()
}, false);
