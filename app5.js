// Task 1

    let mentor = {
        course: "JS fundamental",
        duration: 3,
        direction: "web development"
};
function propsCount(myObject) {
    return Object.entries(myObject).length;
};

propsCount(mentor);

// Task 2

let student = {
    fullName: "Natalia Maksymiv",
    city: "Lviv",
    position: "QA",
    course: "JS for TA",
    experience: 4
};
function showProps (obj) {
    const myArrayObject = Object.keys(obj).map((k) => `${k}: ${obj[k]}`)
    const myArrayValues = Object.keys(obj).map((k) => obj[k])
  
    console.log(myArrayObject);
    console.log(myArrayValues);
  };
  
showProps (student);


// Task 3

class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;}
        
    showFullName () {
        return `${this.name} ${this.surname}`;
    }
};


class Student extends Person {
    constructor(name, surname, year){
        super(name, surname);
        this.year = year;
    }
        
    showFullName(middleName){
        return `${this.name} ${middleName} ${this.surname}`;
    };
        
    showCourse() {
        let currentDate = new Date()
        return Number(currentDate.getFullYear()) - Number(this.year)

    };
};


const student1 = new Student("Petro", " Petrenko ", 2015);
console.log(student1.showFullName(" Petrovych ")); // Petrenko Petro Petrovych
console.log("Current course: " + student1.showCourse()); //Current course: 6



// Task 4

class Worker {

    constructor(fullName, dayRate, workingDays){
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }
    showSalary(){
        return this.dayRate * this.workingDays;
    }

   #experience = 1.2;

    showSalaryWithExperience(){
        return this.showSalary() * this.#experience;
    }

    get experience(){
       return  this.#experience;
    }
    set experience(updatedExperience){
       this.#experience = updatedExperience;
    }
};

let worker1 = new Worker("John Johnson", 20, 26);
console.log(worker1.fullName);
console.log(worker1.fullName + " salary:" + worker1.showSalary());
console.log('New experience: ' + worker1.experience);
console.log(worker1.fullName + " salary:" + worker1.showSalaryWithExperience());
worker1.experience = 1.5;
console.log("New experience: " + worker1.experience);
console.log(worker1.fullName + " salary:" + worker1.showSalaryWithExperience());

let worker2 = new Worker("John Johnson", 48, 22);
console.log(worker2.fullName);
console.log(worker2.fullName + " salary:" + worker2.showSalary());
console.log('New experience: ' + worker2.experience);
console.log(worker2.fullName + " salary:" + worker2.showSalaryWithExperience());
worker2.experience = 2.5;
console.log("New experience: " + worker2.experience);
console.log(worker2.fullName + " salary:" + worker2.showSalaryWithExperience());

let worker3 = new Worker("John Johnson", 29, 23);
console.log(worker3.fullName);
console.log(worker3.fullName + " salary:" + worker3.showSalary());
console.log('New experience: ' + worker3.experience);
console.log(worker3.fullName + " salary:" + worker3.showSalaryWithExperience());
worker3.experience = 1.9;
console.log("New experience: " + worker3.experience);
console.log(worker3.fullName + " salary:" + worker3.showSalaryWithExperience());

Worker.sortSalaries = workers => {
    const sortedWorkersBySalary = workers.sort((a, b) => a.showSalaryWithExperience() - b.showSalaryWithExperience());
    sortedWorkersBySalary.map(worker => console.log(`${worker.fullName}: ${worker.showSalaryWithExperience()}`));
};

Worker.sortSalaries([worker1, worker2, worker3]);

// Task 5

class GeometricFigure {
    getArea() {}
    toString() { return Object.getPrototypeOf(this).constructor.name; }
}
class Circle extends GeometricFigure {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() { return Math.PI * this.radius * this.radius; }
}
class Square extends GeometricFigure {
    constructor(side) {
        super();
        this.side = side;
    }
    getArea() { return this.side * this.side; }
}
class Triangle extends GeometricFigure {
    constructor(sideA, sideB, sideC) {
        super();
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }
    getArea() {
        const s = (this.sideA + this.sideB + this.sideC) / 2;
        return Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC));
    }
}
function handleFigures(figures) {
    const totalArea = figures.reduce((total, figure) => total + figure.getArea(), 0);
    for (const figure of figures) {
        console.log('Geometric figure: ' + figure.toString() + ' - area: ' + figure.getArea());

    }
    console.log('Total area: '+ totalArea);
}
const figures = [new Circle(2.5), new Square(5), new Triangle(5, 5, 5)];
console.log(handleFigures(figures));

