window.addEventListener('load', () => {

 var boundaries = document.querySelectorAll('.boundary')
 var statu = document.getElementById("status");
 var startLine = document.getElementById("start");
 var endLine = document.getElementById("end");
 var stuck = document.getElementById("game");
 //var score = document.getElementsByClassName(".boundary.exemple");
 var scoreText;


//if didnt hover over s game doesnt start.

   

    function gamestart () {
        startLine.addEventListener("mouseover");
    };





//entered game  and cant go out or you lose
    stuck.addEventListener("mouseleave", gameover);



 //game lost fucntion
 

    boundaries.forEach((item) => {
    (item).addEventListener("mouseover", gameover)
    });




    function gameover () {
        boundaries.forEach((item) => {
        (item).style.backgroundColor = "red";
        statu.textContent = "You Lost" 

     });
    };

    //gamewin function
    
    endLine.addEventListener("mouseleave", gamewon);
    

    function gamewon () {
        stuck.removeEventListener("mouseleave", gameover);  
        statu.textContent = "You Won" 
    };



   // endLine.addEventListener("mouseover", () => {
    //    (item).style.backgroundColor = "red";
    //    statu.textContent = "You Lost"  







 
    
    //endLine.addEventListener("mouseover", () => {
     //   statu.textContent = "You Won"   
   // });




    startLine.addEventListener("click", () => {
      
      boundaries.forEach((item) => {
        item.style.backgroundColor = "#eeeeee";
        statu.textContent = "Begin by moving your mouse over the 'S'";
   });
   });



   //var score
   function scoresystem() {
   scoreText = stuck.appendChild(5, 5, 'Points: 0', { font: '18px Arial', fill: '#0095DD' });
   }

   

  //function addfive() {
    //brick.kill();
    //score += 5;
    //scoreText.setText(`Points: ${score}`);
    //};

   






});







//getElementsByClassName returns an array of elements,
// addEventListener exists on elements.
//The fix would be to iterate over the result set from getElementsByClassName
// and call addEventListener on each item:

// keep score , win = +5 lose = -10