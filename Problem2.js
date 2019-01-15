//Create a CodeSchoolInstructor class with attributes teacherName, previousEmployer, and knownLanguages.
// Create a function that will change the teacherName.
// Create an object of the class.

class CodeSchoolInstructor{
    constructor(teacherName, previousEmployer,knownLanguages){
        this.teacherName = teacherName;
        this.previousEmployer = previousEmployer;
        this.knownLanguages = knownLanguages;
    }
    changeName(nameToChange){
        this.teacherName = nameToChange;
    }
}
var teacher = new CodeSchoolInstructor("kenn, ", "kevin, ", "Couple");
teacher.changeName("Didier");
alert(guess.teacherName);
alert(guess.previousEmployer);
alert(guess.knownLanguages);