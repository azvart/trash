class Footer{
    constructor(footer){
        this.footer = document.createElement("div");
    }

    podal(){
        this.footer.className = 'container-fluid';
        document.body.appendChild(this.footer);
    }
    fanim(){
        gsap.to(this.footer,{duration:1,height:"100px",background:'#456098'});
    }
}

let footer = new Footer();
footer.podal();
footer.fanim();