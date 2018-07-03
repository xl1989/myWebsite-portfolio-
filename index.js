var navBar=document.getElementById("navBar");
var aboutPixFlip=document.getElementById("aboutPixFlip");
var proOne_back=document.getElementById("proOne_back");
var proTow_back=document.getElementById("proTow_back");
var proThree_back=document.getElementById("proThree_back");
var cardFace=document.getElementById("cardFace");
var cardBack=document.getElementById("cardBack");
var toggle=document.getElementById("toggle");
var lists=document.getElementById("lists");
var conTitle=document.getElementById("conTitle");
var conInfo=document.getElementById("conInfo");
var proOne=document.getElementById("proOne");
var ProThree=document.getElementById("ProThree");
var proFive=document.getElementById("proFive");

window.onscroll= function scrollAni(){
    if(document.body.scrollTop > 50){
    navBar.className="black";
        }else{
           navBar.className= ""; 
        }
    
    if(document.body.scrollTop > 350){
        proOne.className="projects";
        ProThree.className="projects";
        proFive.className="projects";
    }else{
        proOne.className +=" ProUpHide";
      ProThree.className +=" ProUpHide";
        proFive.className +=" ProBottomHide";
    }
    
     if(document.body.scrollTop>1650){
         cardFace.style.transform="rotateY(-180deg)";
         cardBack.style.transform="rotateY(0deg)";
     }else{
          cardFace.style.transform=null;
          cardBack.style.transform=null;
     }
    
     if(document.body.scrollTop>2000){
         conTitle.className="contactShow";
         conInfo.className="contactShow";
     }else{
         conTitle.className="conTitleHide";
          conInfo.className="conInfoHide";
     }
    
}

    
toggle.onclick= function(){
    if(lists.style.display === "none"){
        lists.style.display = "block";
    }else {
        lists.style.display ="none";
    }
}  

