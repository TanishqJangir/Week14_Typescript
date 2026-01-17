// interface User {
//     name : string;
//     age : number;
// }

// function sumOfAge(user1: User, user2: User){
//     return user1.age+ user2.age
// }

// const age = sumOfAge({name : "Tanishq", age : 20},{name :"Pranav", age : 25});
// console.log(age)







// 2. Pick allows you to create a new type by selecting a set of properties (keys) from an existing type(Type) or interface

// interface User {
//     id: string;
//     name : string;
//     age : number;
//     email : string;
//     password : string;

// }


// type UpdateProps = Pick< User , 'name' | 'age' | 'email' >

// function updateUser(updatedProps : UpdateProps){}








//3. Partial makes all properties of a type optional, creating a type with the same properties , but each marked as optional
// in the steps, first you have to Pick the value that you want to be optional

// interface User {
//     id: string;
//     name : string;
//     age : number;
//     email : string;
//     password : string;

// }


// type UpdateProps = Pick< User , 'name' | 'age' | 'email' >

// type UpdatePropsOptional = Partial<UpdateProps>

// function updateUser(updatedProps : UpdatePropsOptional){
//     //Hit the database tp update the user
// }







// 4. Readonly -> To make the inner value constant of an object
// type User = {
//     readonly name : string;      //Here only the name property is constant, and cannot be chanberd
//     age : number;                // Here the age and country can be canged by writing obj.age = someting value . It will change the value
//     country : string;
// }



// const obj: User = {
//     name : 'John',
//     age : 25,
//     country : "USA"
// }

// console.log(obj)


//________________________________________

// TO make the whole object as readonly

// const user : Readonly<User>= {
//     name : "John",
//     age : 44
// }









//5. Record -> It is the cleaner way to write the type of object

// type Users = Record<string, {name : string, age : number}>

// const person : Users = {
//     "dfjlsdf" : {name : "Tanishq", age: 20},
//     "sdkfesi" : {name : "Jhatu Pranav", age : 25}
// }

// console.log(person);






//6. Map() => another way to write key value pair {it is a javascript concept , not a typescript concept}
// it lets u do get, set and delete and so on

// const users = new Map();

// users.set("ras@qd1" , {name :"Harkirat", age : 30, email : "jab babba ki"})
// users.set("ras@qd2" , {name :"Stiver", age : 40, email : "jab babba ki2"})

// const user = users.get("ras@qd1");
// console.log(user)


//___________________________________________________________________________________________________________________
// You can also specify that the key should be a string and the value should be a User type

// type Person = {
//     name : string;
//     age: number;
//     email : string;
// }

// const users = new Map<string, Person>();

// now u can do users.set/get/delete and so on










//7. Exclude -> in a function that can accept several types of inputs but you want to exclude specific types from being passed to it.

// type EventType = 'click' | 'scroll' | 'mousemove';

// type ExcludeEvent = Exclude<EventType, 'scroll'>;

// const handleEvent = (event : ExcludeEvent) => {
//     console.log("Handling event: ", event);
// }

// handleEvent("click")






//8. 