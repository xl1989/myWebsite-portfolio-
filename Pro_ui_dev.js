var navBar=document.getElementById("navBar");
var toggle=document.getElementById("toggle");
var lists=document.getElementById("lists");

window.onscroll= function scrollAni(){
    if(document.body.scrollTop > 50){
    navBar.className="black";
        }else{
           navBar.className= ""; 
        }

}

 toggle.onclick= function(){
    if(lists.style.display === "none"){
        lists.style.display = "block";
    }else {
        lists.style.display ="none";
    }
}   
    