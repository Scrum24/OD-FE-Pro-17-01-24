class Gender {
    static MALE = "MALE";
    static FEMALE = "FEMALE";
}

class Human {
    #name;
    #gender;

    constructor(name, gender) {
        this.#name = name;
        this.#gender = gender;
    }
}

class Apartment {
    #humanList = [];

    addHuman(human) {
        if (human instanceof Human) {
            this.#humanList.push(human);
        }
    }
}

class House {
    #apartmentList;
    #maxApartmentCount;

    constructor(maxApartmentCount) {
        this.#apartmentList = [];
        this.#maxApartmentCount = maxApartmentCount;
    }

    addApartment(apartment) {
        if (apartment instanceof Apartment && this.#apartmentList.length < this.#maxApartmentCount) {
            this.#apartmentList.push(apartment);
            console.log("Apartment added.");

        } else {
            console.log("Apartment can't be added to the House.");
        }
    }
}

const human1 = new Human('Tom', Gender.MALE);
const human2 = new Human('Inga', Gender.FEMALE);
console.log("Result (humans):", human1, human2);

const apartment1 = new Apartment();
const apartment2 = new Apartment();

apartment1.addHuman(human1);
apartment2.addHuman(human2);
console.log("Result (apartments):", apartment1, apartment2);

const house = new House(2);
house.addApartment(apartment1);
house.addApartment(apartment2);
console.log("Result (house):", house);

const apartment3 = new Apartment();
house.addApartment(apartment3);
console.log("Result (house):", house);