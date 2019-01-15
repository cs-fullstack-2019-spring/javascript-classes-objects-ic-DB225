//Create a class Dog.
// Make sure it has the attributes name, breed, color, gender.
// Create a function that will print all of the attributes and another function that will ask a user to change the color of the dog.
// Create an object of the class.

class Dog
{
    constructor(name, breed, color, gender)
    {
        this.name = name;
        this.breed = breed;
        this.color = color;
        this.gender = gender;
    }

    printEverythingInHere()
    {
        console.log(this.name, this.breed, this.color, this.gender);
    }

    changeColor(colorToChange)
    {
        this.color = colorToChange;
    }
}

var dog1 = new Dog("Spot", "Poodle", "White", "male");
dog1.printEverythingInHere();
dog1.changeColor("red");
dog1.printEverythingInHere();