function Person(name){
    console.log(this)
    this.name = name
}
// console.log(Person)
const chandy = new Person("hello")
console.log(chandy)