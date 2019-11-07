class Round {
    constructor(diameter) {
        this.diameter = diameter;
    }

    get area() {
        this.radius = this.diameter / 2;
        this.area_round = 3.14 * (this.radius * this.radius);
        return this.area_round;
    }
}

let round = new Round(+prompt("Предоставте диаметр круга в целых сантиметрах."));
alert(round.area);
