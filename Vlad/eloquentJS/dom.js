let smile = document.querySelector("#progress");

window.addEventListener("keydown", event => {
    if(event.key == "ArrowUp"){
        gsap.to('#progress',{duration: 2.5,fontSize:"200%",onComplete: another()});
        function another(){
            smile.innerHTML = "&#128519;"
        }
       
    }else if(event.key == "ArrowDown"){
        gsap.to('#progress',{duration:2.5,fontSize:"5%",onComplete: back()});
       function back(){
           smile.innerHtml = '&#128520;';
       }
    }
});
