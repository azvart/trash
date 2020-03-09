class Main{
    constructor(main){
        this.main = document.createElement('div');
    }
    place(){
        this.main.className = 'container-fluid';
        document.body.appendChild(this.main);
    }
    placeanim(){
        gsap.to(this.main,{duration:2,background:'#098123',height:'400px'});
    }

    

}
let mnin = new Main();
mnin.place();
mnin.placeanim();
