var navBar=document.getElementById("navBar");
var aboutPixFlip=document.getElementById("aboutPixFlip");
var proOne_back=document.getElementById("proOne_back");
var proTow_back=document.getElementById("proTow_back");
var proThree_back=document.getElementById("proThree_back");
var cardFace=document.getElementById("cardFace");
var cardBack=document.getElementById("cardBack");
var toggle=document.getElementById("toggle");
var lists=document.getElementById("lists");

window.onscroll= function scrollAni(){
    if(document.body.scrollTop > 50){
    navBar.className="black";
        }else{
           navBar.className= ""; 
        }
    
     if(document.body.scrollTop>1650){
         cardFace.style.transform="rotateY(-180deg)";
         cardBack.style.transform="rotateY(0deg)";
     }else{
          cardFace.style.transform=null;
          cardBack.style.transform=null;
     }
}

    
toggle.onclick= function(){
    if(lists.style.display === "none"){
        lists.style.display = "block";
    }else {
        lists.style.display ="none";
    }
}  

