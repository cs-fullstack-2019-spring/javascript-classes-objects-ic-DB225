//Create a class Product that represents a product sold online. A product has a price, quantity and name.
// The class should have a function that prints a product's information in the following format: Banana, price 1.1, amount 13

class Product {
    constructor(price, quantity, name){
        this.price = price;
        this.quantity = quantity;
        this.name = name;
    }
    printInThatName(){
        console.log(this.name, ",", "price", this.price, ",amount", this.quantity);
    }

}
var macNCheese = new Product(6,50, "macNcheese by Didi");
macNCheese.printInThatName();
console.log(macNCheese.price);
console.log(macNCheese.quantity);
console.log(macNCheese.name);
