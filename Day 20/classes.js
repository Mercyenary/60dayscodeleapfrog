class enemy {
    constructor ( life,name,level){
        this.life = life;
        this.name= name;
        this.level = level;

    }
    getinfo(){
        console.log(this.life, this.name, this.level);
    }
}
// const ally = new enemy(25 , "mercenary", 10);
// const bug = new enemy(1 , "seriousone", 1);
// ally.getinfo();
// bug.getinfo();

class bug extends enemy{
    constructor(life,name, level, attack , damage){
        super(
            life, name , level, 
        );
        this.attack = attack;
        this.damage= damage;
    }
}

const mercenary = new bug(20 , "mercy", 100 , 1000, 999);
console.log(mercenary);
mercenary.getinfo();