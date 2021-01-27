//destructure
let alpha=['A','B','C'];
[a1,a2]=alpha;
console.log(a1,a2);
[a1,,a3]=alpha;
console.log(a1,a3);

let person1={
    name:'ALi',
    age:12
}
const {name}=person1;
console.log(name)



//Spread operator
let number=[1,2,3,4];
let newNumbers=[...number,5,6];
//console.log(newNumbers);


let person={
    name:'Ali'
}

let updatedPerson={
    ...person,
    age:12
}
//console.log(updatedPerson)

//Rest operator
const filter=(...args)=>{
    return args.filter(x=>x===1)
}
//console.log(filter(1,2,3,4))



//classes
class Human{
    constructor(){
        this.gender='Male'
    }
    printGender(){
        console.log(this.gender)
    }
}


class Person extends Human{
    constructor(){
        super();
        this.name='Zulfiqar'
    }

    printMyName(){
        console.log(this.name)
    }
}


const p=new Person();
// p.printMyName();
// p.printGender();