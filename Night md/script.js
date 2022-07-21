// Normal---> Dark mood 
let mode = 0;

//mode=0--> normal mode
//mode=1--> ight mode

document.getElementById('lightBulb').style.display = "none"

function changeMode() {
  switch(mode){
    case 0:
        mode = 1;
        document.body.style.backgroundColor = "#010126";
        document.getElementById('main-cont').style.borderColor="white";
        document.getElementById('single-post1').style.borderColor="white";
        document.getElementById('single-post2').style.borderColor="white";
        document.getElementById('single-post3').style.borderColor="white";
        document.body.style.color="white";
        document.getElementById('home-icon').style.color="white";
        document.getElementById('bulb-icon').style.color="white";

        break;
    case 1:
        //code
         break;    
   }
}
