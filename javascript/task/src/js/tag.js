class CreateStructure{
    constructor(tag){
        this.tag = document.createElement('div');
    }
    crea(){
        this.tag.className = 'container-fluid';
        document.body.appendChild(this.tag);
    }
    anim(){
        gsap.to(this.tag,{duration:1.2,height:'200px',background:"#654876"})
    }
}

let div = new CreateStructure();
div.crea();
div.anim();