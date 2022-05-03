class Card {
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card{
    constructor(name, cost, power, res){
        super(name, cost);
        this.power = power;
        this.res = res;
    }

    attack = target => {
        target.res = target.res - this.power;
        return this;
    }
}

class Effect extends Card{
    constructor(name, cost, text, magnitude, stat){
        super(name, cost);
        this.text = text;
        this.magnitude = magnitude;
        this.stat = stat;
    }
    play( target ) {
        if( target instanceof Unit ) {
            if(this.stat == "resilience"){
                target.res = target.res + this.magnitude;
                console.log(this.text)
                return this;
            }
            else{
                target.power = target.power + this.magnitude;
                console.log(this.text)
                return this;
            }
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}

let redBelt = new Unit("Red Belt Ninja", 3, 3, 4);

let blackBelt = new Unit("Black Belt Ninja", 4, 5, 4);

let hardAlgo = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", +3, "resilience");

let rejection = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", -2, "resilience");

let pair = new Effect("Pair Programming", 3, "increase target's power by 2", +2, "power");

console.log(redBelt);
console.log(blackBelt);
hardAlgo.play(redBelt);
rejection.play(redBelt);
pair.play(redBelt);
redBelt.attack(blackBelt);
console.log(redBelt);
console.log(blackBelt);




