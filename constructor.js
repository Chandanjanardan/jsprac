// blue pront of the objects

const Person = function (name,dob,occupation){
    this.name = name 
    this.dob=dob
    this.occupation=occupation
    this.calculateAge= function(){
        const currentAg= new Date().getFullYear()
        const age = currentAg-this.dob
        console.log(age)
    }
}


const chandy = new Person("chandy",1996,"SDE")
console.log(chandy)
chandy.calculateAge()