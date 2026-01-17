// 1. Interfaces and complex object type  with option field

// interface User {
//     name : string,
//     age : number,
//     address ?: { //This whole address field is optional
//         city : string, 
//         country : string,
//         pincode : number
//     }
// }

// const user2: User = {
//     name : "Ramesh",
//     age : 23
// }

// let user : User = {
//     name : "Tanishq",
//     age : 20,
//     address : {
//         city : "Dantaramgarh",
//         country: "India",
//         pincode: 332703
//     }
// }


// function isLegal(user : User): boolean{
//     if(user.age >= 18){
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// console.log(isLegal(user));









// 2. Make a seperate interface when u use that block again and again

// interface Address{ //Now use this Address interface at different places, in the future when u need to update in the address, you only need to update in this interface only
//     city : string, 
//     country : string,
//     pincode: number
// }








// 3. Functions in the interface 

// interface People{
//     name : string,
//     age : number,
//     greet: () => string, 
// }



// let person : People = {
//     name : "Tanishq",
//     age : 20,
//     greet : () => { return "Hii"}
// }

// console.log(person.greet())







// 4. Making an Object from the class that implements an interface 

// interface People{
//     name : string,
//     age : Number,
//     isLegal() : boolean
// }


// class Manager implements People{
//     name :string
//     age : number
//     contact : number // We can add extra fields in the class, but the least condition is it should have name and age as in the people interface


//     constructor(name : string, age: number, contact : number){
//         this.name = name;
//         this.age = age;
//         this.contact = contact;
//     }
//     isLegal() {
//     return this.age>18 
//     }
// }


// let User = new Manager("John", 30, 9059830945)

// console.log(User.name);
// console.log(User.age);
// console.log(User.contact);







// 5. A class the extend another class

// class Shape{
//     a: number
//     constructor(a: number){
//         this.a = a
//     }

//     area() {
//         console.log("This is the area");
//         console.log(this.a)
//     }
// }


// class Rectangle extends Shape{
//     width: number;
//     length : number;

//     constructor(a: number, width: number, length: number){
//         super(a);
//         this.width = width;
//         this.length = length;
//     }
// }

// let newObj = new Rectangle(2, 44, 55)

// console.log(newObj.a)
// newObj.area();
// console.log(newObj.length)
// console.log(newObj.width)







// 6. Defining a constructor without initializing the attributes 2 times like in the interface and the class

// constructor(public a: number, public str: string){
//     this.a = a;
//     this.str = str;
// }







// 7. We can add extra fileds in the class , other than the inteface but the condition is that it should contain all the requeired interface elements

// interface People{
//     name : string,
//     age : Number,
//     isLegal() : boolean
// }


// class Manager implements People{
//     name :string
//     age : number
//     contact : number // We can add extra fields in the class, but the least condition is it should have name and age as in the people interface


//     constructor(name : string, age: number, contact : number){
//         this.name = name;
//         this.age = age;
//         this.contact = contact;
//     }
//     isLegal() {
//     return this.age>18
//     }
// }






// 8. Abstract classes can have a default function while the interface dosent

// abstract class User{
//     name :string;
//     constructor(name: string){
//         this.name = name;
//     }

//     abstract greet: () => string;
//     hello () {
//         console.log("Hi there");
//     }
// }



// class Employee extends User{
//     name: string;
//     constructor(name : string){
//         super(name);
//         this.name = name;
//     }

//     greet = () =>{
//         return "Hi" + this.name;
//     }
// }



// 9. Differene between the type and interface
// a. class can implement a interface while the type can't
// b. type can do unions and intersection while the interface can't






// 10. Intersection of Types 

// type Employee = {
//     name : string;
//     startDate : string;
// }


// type Manager = {
//     name : string;
//     department : string;
// }

// type TeamLead = Employee & Manager;

// let e:Employee = {
//     name : 'Tanishq',
//     startDate: "01-02-2004"
// }

// let m:Manager = {
//     name : 'Tanishq',
//     department: "IT"
// }

// let t: TeamLead = {
//     name : "Tanishq",
//     startDate: "22-01-2006",
//     department: "IT"
// }



// 11. Union of Types ( can have properties of eiter A, or B or of Both)

// type GoodUser = {
//     name : string;
//     gift : string;
// }

// type BadUser = {
//     name : string,
//     ip : string
// }

// type User = GoodUser | BadUser

// const user : User = {
//     name : 'Tanishq',
//     gift: "khana",
//     ip : "khana khaibe"
// }

// console.log(user)



//12.
// Lets understand the intersection and union
// first lets understand the intersection
// when we look the intersecton in the typescript it looks like it is union but 
// fist think the type as a set of values
// and the typescript's type are open (which can also include extra values but it should include the propertes of the type also)
// so like when do intersection, the type A contain some value (can have extra values, and can have the values of type b also) and the type B contains some values(can have extra values, and can have the values of b also)
// now when we do intersection, it will take the common of type A and type B, where typeA set of values can have the value of A and value or B, and the type B is a set of values containing values of type A and type B
// so when we perform it tooke the common values which will be the values of both type A and typeB
// thats why it explicitly looks like it is a union but due to typescripts type definition it is a intersection


// and the same logic is for the union also

 








//13. interface can extend types

// type A = {
//     name : string
// }

// type B = {
//     age : number
// }

// interface X extends A,B {

// }

// let user : X = {
//     name : "Tanishq",
//     age : 22
// }

// console.log(user)




