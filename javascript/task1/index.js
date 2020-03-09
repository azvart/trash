class Structure
{
    constructor(header,main,footer,nav){
        this.header = document.createElement('div');
        this.main = document.createElement('div');
        this.footer = document.createElement('div');
        this.n = documen.createElement('nav');
    }
    foot(){
        this.footer.className ='container-fluid text-center';
        this.footer.innerHTML = "Hello Footer!";
        document.body.appendChild(this.footer);
    }
    bod(){
        this.main.className = 'container-fluid text-center';
        this.main.innerHTML = "Hello Main!";
        document.body.appendChild(this.main);
    }
    head(){
        this.header.className = 'container-fluid text-center';
        this.header.innerHTML = 'Hello Header!';
        document.body.appendChild(this.header);
    }
    animate(){
        gsap.to(this.header,{duration:1,background:'yellow',height:"100px"});
        gsap.to(this.main,{duration:1,background:'black',color:'white',height:"410px"});
        gsap.to(this.footer,{duration:1,background:'blue',color:'white',height:"100px"});
    }
    navigate(){
        this.n.className = 'nav';
        this.n
    }
}

let div1,div2,div3;
div1 = new Structure();
div1.head();
div1.animate();
div2 = new Structure();
div2.bod();
div2.animate();
div3 = new Structure();
div3.foot();
div3.animate();

