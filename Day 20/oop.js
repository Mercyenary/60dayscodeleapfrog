class animator{
    constructor(selector){
        this.selector = document.querySelector(selector);

    }
    fadeout(time, toggle=false){
        if (toggle && this.selector.classList.contains('fadeout-active')){
            this.selector.style.opacity = 1;
            this.selector.classList.remove("fadeout-active");

        }else{
        this.selector.style.transition = `all ${time}s ease`;
        this.selector.style.opacity = 0;
        this.selector.classList.add("fadeout-active");
     }
    }
    move(time, toggle=false, {x=0, y=0}={}){
        if (toggle && this.selector.classList.contains('move-active')){
            this.selector.style.transform = "translate(0px,0px)";
            this.selector.classList.remove("move-active");
        }else{
        this.selector.style.transition = `all ${time}s ease`;
        this.selector.style.transform  = `translate(${x}px,${y}px)`;
        this.selector.classList.add("move-active");
     }
    }
}
const intro = new animator("h1");
const btnanim = new animator("button");
const button = document.querySelector("button");
button.addEventListener("click",()=>{
   intro.move(1, true,{x: 100, y:200});
   intro.fadeout(2,true);
   btnanim.move(2,true,{x:500});
});

