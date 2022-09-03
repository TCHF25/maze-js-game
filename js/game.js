//var boundaries = document.getElementsByClassName("boundary");



document.querySelectorAll('.boundary').forEach(item => {
    item.addEventListener("mouseover", () => {
        item.style.backgroundColor = "red";
        });
    })
  


   

 

     





//getElementsByClassName returns an array of elements,
// addEventListener exists on elements.
//The fix would be to iterate over the result set from getElementsByClassName
// and call addEventListener on each item:

//reset.addEventListener("click", () => {
      //   limit bterja3 nafs el  normal background color 
      //  and it restarts the score to 0