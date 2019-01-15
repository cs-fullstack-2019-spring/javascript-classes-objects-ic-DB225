//Create a ToDo class.
// It should have the attributes: name, dueDate, list (this should be an array).
// Create a method that will append a string to the list variable.
// Create an object of that class.

class ToDo {
    constructor(name, dueDate, list){
        this.name = name;
        this.dueDate = dueDate;
        this.list = list;
    }
    attachThestring(stringToAttach){
        this.list.push(stringToAttach);
    }
}
var TomorrowList = new ToDo("Didier's list, ","tomorrow, ",["clean","work","Gym"]);
alert(TomorrowList.name);
alert(TomorrowList.dueDate);
alert(TomorrowList.list);
