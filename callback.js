function Person (name){
    this.name = name
}

const chandy = new Person("Chandy")
console.log(this)
console.log(Person)