"use strict"



let link = document.getElementsByClassName("linkNav");



 for(let i = 0; i < link.length; i++){  
    
    
    link[i].addEventListener("click", function(){

        for(let e = 0; e < link.length; e++){
            link[e].classList.remove("active");
        }
        this.classList.add("active");
    });

}
   
   