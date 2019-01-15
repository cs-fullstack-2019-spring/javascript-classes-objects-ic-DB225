//Create a Dinner class with attributes dishName, protein, veggie, and price.
// Create a function that prints all of the attributes.
// Create an object of the class.

class Dinner {
    constructor(dishName, protein, veggie, price) {
        this.dishName = dishName;
        this.protein = protein;
        this.veggie = veggie;
        this.price = price;
    }

    printAll() {
        console.log(this.dishName + this.protein + this.veggie + "$" + this.price);
    }
}
var guess = new Dinner("chicken, ", "Cheese, ", "brocoli, ", 50);
guess.printAll();

