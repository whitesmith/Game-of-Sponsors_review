    var btn_bard= document.querySelector("#btn_bard");
    var bard_url="https://www.google.com";
      
      function Badge_Bard(){
        
         btn_bard.onclick = function() {
           
           window.location = bard_url; } } 
      
      
      
      var btn_bright= document.querySelector("#btn_bright");
    var bright_url="https://www.google.com";
      
         function Badge_Bright(){
        
         btn_bright.onclick = function() {
           
           window.location = bright_url; } } 
      
      
      
      var btn_minerva= document.querySelector("#btn_minerva");
    var minerva_url="https://www.google.com";
      
         function Badge_Minerva(){
        
         btn_minerva.onclick = function() {
           
           window.location = minerva_url; } } 
      
      
      
      var btn_noone= document.querySelector("#btn_noone");
    var noone_url="https://www.google.com";
      
         function Badge_Noone(){
        
         btn_noone.onclick = function() {
           
           window.location = noone_url; } } 
      
      
      
      var btn_waterfall= document.querySelector("#btn_waterfall");
    var waterfall_url="https://www.google.com";
      
         function Badge_Waterfall(){
        
         btn_waterfall.onclick = function() {
           
           window.location = waterfall_url; } } 
      
      
      
      var btn_feast= document.querySelector("#btn_feast");
    var feast_url="https://www.google.com";
      
         function Badge_Feast(){
        
         btn_feast.onclick = function() {
           
           window.location = feast_url; } } 
      
      
      
      var btn_labor= document.querySelector("#btn_labor");
    var labor_url="https://www.google.com";


  function Badge_Labor(){
        
         btn_labor.onclick = function() {
           
           window.location = labor_url; } } 
      
    window.setInterval(function(){
      
     Badge_Bard();
     Badge_Noone();
     Badge_Labor();
     Badge_Minerva();
     Badge_Feast();
     Badge_Waterfall();
     Badge_Bright();
    
                  }, 500);