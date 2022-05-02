class Ninja {
    constructor(name, health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName = () => 
    console.log(this.name);

    showStats = () =>{
        const {...stats} = this;
        console.log(stats);
    }

    drinkSake = () =>
    this.health = this.health + 10;
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
