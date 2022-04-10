class Person {
    constructor(name) {
        this.name = name;
        this.identity = parseInt(name.length);
    }

    getInfo() {
        return `Name: ${this.name} - Personal Number: ${this.identity}`;
    }
}

function solve(arr) {
    let employees = [];
    for (let empl of arr) {
        let person = new Person(empl);
        employees.push(person);
    }
    employees.forEach(e=> {
        console.log(e.getInfo());
    })
}


solve(['Silas Butler','Adnaan Buckley','Juan Peterson','Brendan Villarreal']);