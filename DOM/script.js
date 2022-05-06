const student ={
    Name: "Manoj",
    place:"coimbatore",
    Age : "20",
    greetuser(){
        return `Hello my name is ${this.Name} , Im coming from ${this.place} and my age is ${this.Age}`;
    },
};

const personOne = student.greetuser();
console.log(personOne)


document.title = "Manoj";

