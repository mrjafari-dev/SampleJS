var person = {
    name: "alireza",
    family: "jafari",
    age: 38,
    fullName: function () {
        return this.name + "  " + this.family;
    }
}

console.log(person.name);
console.log(person.fullName());
