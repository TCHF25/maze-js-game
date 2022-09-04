window.addEventListener('load', () => {

 var boundaries = document.querySelectorAll('.boundary')
 var statu = document.getElementById("status");
 var startLine = document.getElementById("start");
 var endLine = document.getElementById("end");
 var stuck = document.getElementById("game");
 var scoreText;


    stuck.addEventListener("mouseleave", gameover);


    boundaries.forEach((item) => {
    (item).addEventListener("mouseover", gameover)
    });


    function gameover () {
        boundaries.forEach((item) => {
        (item).style.backgroundColor = "red";
        statu.textContent = "You Lost" 

     });
    };

    
    endLine.addEventListener("mouseleave", gamewon);
    

    function gamewon () {
        stuck.removeEventListener("mouseleave", gameover);  
        statu.textContent = "You Won" 
    };


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
