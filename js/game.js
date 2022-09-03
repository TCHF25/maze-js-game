window.addEventListener('load', () => {

 var boundaries = document.querySelectorAll('.boundary')
 var statu = document.getElementById("status");
 var startLine = document.getElementById("start");
 var endLine = document.getElementById("end");


    boundaries.forEach((item) => {
    (item).addEventListener("mouseover", () => {
        (item).style.backgroundColor = "red";
        statu.textContent = "You Lost"   

        });
    });

    
    endLine.addEventListener("mouseover", () => {
        statu.textContent = "You Won"   
    });


    startLine.addEventListener("click", () => {
      
      boundaries.forEach((item) => {
        item.style.backgroundColor = "#eeeeee";
        statu.textContent = "Begin by moving your mouse over the 'S'";
    });
   });


    //let counts=setInterval(updated);
       // let upto=1000;
        //function updated(){
           // var count= document.getElementById("counter");
            //count.innerHTML=--upto;
           // if(upto === 0) {
           //     clearInterval(counts);
           // }
       // }



});

//getElementsByClassName returns an array of elements,
// addEventListener exists on elements.
//The fix would be to iterate over the result set from getElementsByClassName
// and call addEventListener on each item:

// keep score , win = +5 lose = -10