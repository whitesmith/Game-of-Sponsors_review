//———————————————————————WS

/*   var btn_ws= document.querySelector("#btn_ws");
    var intro_ws= document.querySelector("#intro_ws");
    var question_ws= document.querySelector("#pergunta_ws");
    var txt_ws= document.querySelector("#texto_ws");


var answer_ws=document.querySelector("#answer_ws");
var answer2_ws=document.querySelector("#answer2_ws");
var answerr_ws=document.querySelector("#answerr_ws");
      
       function Show_ws(){
        
       btn_ws.onclick = function() {
           
          btn_ws.setAttribute('visible','false');
          intro_ws.setAttribute('visible','false');
      
          question_ws.setAttribute('visible','true');
          txt_ws.setAttribute('visible','true');
         
          answer_ws.setAttribute('visible','true');
          answer2_ws.setAttribute('visible','true');
          answerr_ws.setAttribute('visible','true');
        
                                                         } }




 var question_wsW= document.querySelector("#pergunta_wsW");
 var txt_wsW= document.querySelector("#texto_wsW");
 var btn_leave= document.querySelector(".btn_leave");

 answer_ws.onclick = function() {
           
          answer_ws.setAttribute('visible','false');
          answer2_ws.setAttribute('visible','false');
          answerr_ws.setAttribute('visible','false');
   
          question_ws.setAttribute('visible','false');
          txt_ws.setAttribute('visible','false');
   
          question_wsW.setAttribute('visible','true');
          txt_wsW.setAttribute('visible','true');
          btn_leave.setAttribute('visible','true');

 }
 
 
 answer2_ws.onclick = function() {
           
          answer_ws.setAttribute('visible','false');
          answer2_ws.setAttribute('visible','false');
          answerr_ws.setAttribute('visible','false');
   
          question_ws.setAttribute('visible','false');
          txt_ws.setAttribute('visible','false');
   
          question_wsW.setAttribute('visible','true');
          txt_wsW.setAttribute('visible','true');
          btn_leave.setAttribute('visible','true');

 }
 
 var question_wsR= document.querySelector("#pergunta_wsR");
 var txt_wsR= document.querySelector("#texto_wsR");
 var btn_wsR= document.querySelector("#btn_wsR");
 
 answerr_ws.onclick = function() {
           
          answer_ws.setAttribute('visible','false');
          answer2_ws.setAttribute('visible','false');
          answerr_ws.setAttribute('visible','false');
   
          question_ws.setAttribute('visible','false');
          txt_ws.setAttribute('visible','false');
   
   
   
          question_wsR.setAttribute('visible','true');
          txt_wsR.setAttribute('visible','true');
          btn_wsR.setAttribute('visible','true');

 }
 
 
 var ws_url= "";
 var index_url= "https://gos.glitch.me/";

function Badge_ws(){
        
btn_wsR.onclick = function() {
           
 window.location = ws_url; } }*/

var btn_leave = document.querySelector(".btn_leave");

function Leave_() {

    btn_leave.onclick = function () {

        window.location = index_url;
    }
}





//———————————————————————AWS

var btn_aws = document.querySelector("#btn_aws");
var intro_aws = document.querySelector("#intro_aws");
var question_aws = document.querySelector("#pergunta_aws");
var txt_aws = document.querySelector("#texto_aws");

function Show_aws() {

    btn_aws.onclick = function () {

        btn_aws.setAttribute('visible', 'false');
        intro_aws.setAttribute('visible', 'false');

        question_aws.setAttribute('visible', 'true');
        txt_aws.setAttribute('visible', 'true');

        answer_aws.setAttribute('visible', 'true');
        answer2_aws.setAttribute('visible', 'true');
        answerr_aws.setAttribute('visible', 'true');
    }
}

var answer_aws = document.querySelector("#answer_aws");
var answer2_aws = document.querySelector("#answer2_aws");
var answerr_aws = document.querySelector("#answerr_aws");

var question_awsW = document.querySelector("#pergunta_awsW");
var txt_awsW = document.querySelector("#texto_awsW");
var btn_awsW = document.querySelector("#btn_awsW");

answer_aws.onclick = function () {

    answer_aws.setAttribute('visible', 'false');
    answer2_aws.setAttribute('visible', 'false');
    answerr_aws.setAttribute('visible', 'false');

    question_aws.setAttribute('visible', 'false');
    txt_aws.setAttribute('visible', 'false');

    question_awsW.setAttribute('visible', 'true');
    txt_awsW.setAttribute('visible', 'true');
    btn_awsW.setAttribute('visible', 'true');

}


answer2_aws.onclick = function () {

    answer_aws.setAttribute('visible', 'false');
    answer2_aws.setAttribute('visible', 'false');
    answerr_aws.setAttribute('visible', 'false');

    question_aws.setAttribute('visible', 'false');
    txt_aws.setAttribute('visible', 'false');

    question_awsW.setAttribute('visible', 'true');
    txt_awsW.setAttribute('visible', 'true');
    btn_awsW.setAttribute('visible', 'true');

}

var question_awsR = document.querySelector("#pergunta_awsR");
var txt_awsR = document.querySelector("#texto_awsR");
var btn_awsR = document.querySelector("#btn_awsR");

answerr_aws.onclick = function () {

    answer_aws.setAttribute('visible', 'false');
    answer2_aws.setAttribute('visible', 'false');
    answerr_aws.setAttribute('visible', 'false');

    question_aws.setAttribute('visible', 'false');
    txt_aws.setAttribute('visible', 'false');



    question_awsR.setAttribute('visible', 'true');
    txt_awsR.setAttribute('visible', 'true');
    btn_awsR.setAttribute('visible', 'true');

}


var aws_url = "";
var index_url = "https://gos.glitch.me/";

function Badge_aws() {

    btn_awsR.onclick = function () {

        window.location = aws_url;
    }
}



window.setInterval(function () {

    // Show_ws();
    Leave_();
    // Badge_ws();


    Show_aws();
    Badge_aws();




}, 100);