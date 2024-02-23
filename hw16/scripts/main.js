const Student = function (options) {
    this._name = options.name;
    this._surname = options.surname;
    this._yearOfBirth = options.yearOfBirth;
    this._grades = [];
    this._visits = new Array(25);

    this.getName = function () {
        return this._name;
    }

    this.getSurname = function () {
        return this._surname;
    }

    this.getAge = function () {
        const currentYear = new Date().getFullYear();
        return currentYear - this._yearOfBirth;
    }

    this.getAvgGrade = function () {
        const numbersSum = this._grades.reduce((sum, current) => sum + current);
        return (numbersSum / this._grades.length).toFixed(2);
    }

    this.getStudentGrades = function () {
        return [...this._grades];
    }

    this._setRandomGrade = function () {
        const randomGrade = Math.round(Math.random() * 100);
        this._grades.push(randomGrade);
    }

    this.getAvgVisits = function () {
        let visitsNumber = 0;
        let classesNumber = 0;

        const arr = this._visits;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === undefined) {
                break;
            }

            visitsNumber = visitsNumber + (+arr[i]);
            classesNumber++;
        }

        console.log(`Visits: ${visitsNumber} \nClasses: ${classesNumber}`);
        return (visitsNumber / classesNumber).toFixed(1);
    }

    this.present = function () {
        this._setVisit(true);
        this._setRandomGrade();
    }

    this.absent = function () {
        this._setVisit(false);
    }

    this._setVisit = function (isVisited) {
        const arr = this._visits;

        if (arr[arr.length - 1] !== undefined) {
            console.log("Visits count achieved maximum (and can't be extended)");
            return;
        }

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === undefined) {
                arr[i] = isVisited;
                break;
            }
        }
    }

    this.getVisits = function () {
        return [...this._visits];
    }

    this.summary = function () {
        const avgGrade = this.getAvgGrade();
        const avgVisits = this.getAvgVisits();
        console.log(`AvgGrade: ${avgGrade} \nAvgVisits: ${avgVisits}`);

        if (avgGrade >= 90 && avgVisits >= 0.9) {
            return "Well done!";
        }
        if (avgGrade < 90 && avgVisits < 0.9) {
            return "Radish!";
        }
        return "Good, but it can be better.";
    }

    this.printGeneralStudentInfo = function () {
        const info = `${this.getName()} ${this.getSurname()} (age: ${this.getAge()})
        \nStudentGrades: ${this.getStudentGrades()}\nVisits: ${this.getVisits()}`;
        console.log(info);
    }
}

//tests
const stud1 = new Student({ name: 'Tom', surname: 'Tomson', yearOfBirth: 2000 });
stud1.present();
stud1.printGeneralStudentInfo();
console.log(`Summary: ${stud1.summary()}`);

const stud2 = new Student({ name: 'Nic', surname: 'Nicovsci', yearOfBirth: 1995 });
stud2.present();
stud2.present();
stud2.present();
stud2.absent();
stud2.printGeneralStudentInfo();
console.log(`Summary: ${stud2.summary()}`);

const stud3 = new Student({ name: 'Inga', surname: 'Nicovsci', yearOfBirth: 2000 });
for (let i = 0; i < 13; i++) {
    stud3.present();
    stud3.absent();
}
stud3.printGeneralStudentInfo();
console.log(`Summary: ${stud3.summary()}`);