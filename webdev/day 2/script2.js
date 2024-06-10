const person={
    firstName: 'john',
    lastname: 'DOe',
    age:30,
    isEmployed:true,
    greet: function()
    {
        console.log("hello man");
    }
};
//console.log(person.firstName)
//person.greet()
//create object in runtime 
// const hello=new Object()
// hello.name='sdfs'
// hello.age=10
// console.log(hello.name)

// const person =Object.create({});
// person.name="rahul"
// person.age=40
// console.log(person.name)

//constructor
// function fn(name,age,roll)
// {
//     this.name=name
//     this.age=age
//     this.roll=roll
// }
// let car=new fn('name',80,800)
// console.log(car.age)

//iterating use hello[x] instead of hello.x otherwise it will give  undefined
// for(let x in hello)
// {
//     console.log(hello[x])
// }

//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

// for(let key in person)
// {
//     if(person.hasOwnProperty(key))
//     console.log(key+':'+person[key])
// }
// key="firstName"
//  if(person.hasOwnProperty(key))
//     console.log(key+':'+person[key])
    
//     else
//     console.log("error")


//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;





