//case №1
class Human {
    #name;
    #age;

    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }

    printHumanInfo() {
        console.log(`Human info | Name: ${this.#name}, age: ${this.#age}`);
    }

    getAge() {
        return this.#age;
    }
}

const human = new Human("Tom", 20);
human.printHumanInfo();


//case №2
class Car {
    static #MIN_VALID_OWNER_AGE = 18;
    #brand;
    #model;
    #manufactured;
    #licenseNumber;
    #owner;

    constructor(brand, model, manufactured, licenseNumber) {
        this.#brand = brand;
        this.#model = model;
        this.#manufactured = manufactured;
        this.#licenseNumber = licenseNumber;
    }

    setOwner(human) {
        if (human.getAge() >= Car.#MIN_VALID_OWNER_AGE) {
            this.#owner = human;
            console.log(`Owner added to the car (age: ${human.getAge()})`);
        } else {
            console.log(`Owner was not added to the car (age: ${human.getAge()})`);
        }
    }

    printFullCarInfo() {
        console.log(`Car info | Brand: ${this.#brand}, model: ${this.#model}, manufactured: ${this.#manufactured}, licenseNumber: ${this.#licenseNumber}`);
        this.#printOwnerInfo();
    }

    #printOwnerInfo() {
        if (this.#owner) {
            this.#owner.printHumanInfo();
        } else {
            console.log(`Car info | Owner was not added yet`);
        }
    }
}

const car = new Car("BMV", "Gran Turismo", 2010, 123456789);
car.printFullCarInfo();


//cases
const human1 = new Human("Tom", 17);
human1.printHumanInfo();

car.setOwner(human1);
car.printFullCarInfo();


const human2 = new Human("Nic", 28);
car.setOwner(human2);
car.printFullCarInfo();


const human3 = new Human("Anna", 35);
const car2 = new Car("BMV", "cabriolet", 2017, 111222333);
car2.setOwner(human3);
car2.printFullCarInfo();