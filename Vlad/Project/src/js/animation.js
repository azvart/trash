gsap.from('.ani',{duration:1,opacity:0,onComplete:anis});
function anis(){
gsap.from('.anim',{duration:1,opacity:0,onComplete:anim});
function anim(){
    gsap.from('.anima',{duration:1,opacity:0,onComplete:card});
    function card(){
        gsap.to('.card-anima-right',{duration:1,opacity:1});
        gsap.to('.card-anima-left',{duration:1,opacity:1});
    }
}
}

