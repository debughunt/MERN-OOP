class Ninja {
    constructor(name, health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName = () => {
    console.log(this.name);
    }

    showStats = () =>{
        const {sayName, showStats, drinkSake, speakWisdom, ...stats} = this;
        console.log(stats);
    }

    drinkSake = () =>
    this.health = this.health + 10;
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();

class Sensei extends Ninja{
    constructor(name){
        super(name, 200)
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom = () => {
        this.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months")
    }
}
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();

superSensei.showStats();



