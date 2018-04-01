/**************************************************************
    Destructuring Objects
***************************************************************/
function desctructObj(place){
  /*
  ES5 SYNTAX
  var person = {
    name: 'JC Pradel',
    age: '32',
    place: place
  };
  var name = person.name,
    age = person.age,
    place = person.place;
  */
  //ES6 SYNTAX
  let person = {
    name: 'JC P Pradel',
    age: '32',
    place
  };
  var { name,age,place } = person;
  console.log(name);
  console.log(age);
  console.log(place);
}
//desctructObj("PH");
/**************************************************************
    Destructuring Arrays
***************************************************************/
function desctructArr(){
  const fruits = ["Apple","Banana","Orange"];
  /*
  ES5 SYNTAX
  var apple = fruits[0],
    banana = fruits[1],
    orange = fruits[2];
  */
  //ES6 SYNTAX
  let [ apple, banana, orange ] = fruits;
  console.log(`fruit[0]: ${apple}`);
  console.log(`fruit[0]: ${banana}`);
  console.log(`fruit[0]: ${orange}`);
}
//desctructArr();
/**************************************************************
    Destructuring Arguments
***************************************************************/
/*
ES5 SYNTAX
function calcBmi(weight, height, max, callback){
  var bmi = weight / Math.pow(height,2);
  if(bmi>max) console.log("You are overweight");
  if(callback) callback(bmi);
}
calcBmi(170,56,null,function(bmi){  });

function calcBmi(opts){
  if(opts.weight&&opts.height&&opts.max){
    var bmi = (opts.weight / Math.pow(height,2);
    if((opts.bmi>(opts.max) console.log("You are overweight");
    if((opts.callback) (opts.callback(bmi);
  }
}
calcBmi({
  weight: 170,
  height: 56,
  max: null,
  callback: function(bmi){  }
});
*/
//ES6 SYNTAX
function calcBmi({ weight: w = 10, height: h, max = 25, callback }){
  console.log(`w: ${w}`);
  var bmi = w / Math.pow(h,2);
  if(bmi>max) console.log("You are overweight");
  if(callback) callback(bmi);
}
//let weight = 170, height = 56;
// calcBmi({
//   height,
//   callback: function(bmi){ console.log(`BMI: ${bmi}`); }
// });
/**************************************************************
    Array and Object Concepts
***************************************************************/
function dynamicKeys(){
  //object keys can now be dynamically created
  let firstName = "JC",
    lastName = "Pradel";
  let obj = {
    [ firstName+lastName ]: "some value"
  };
  Object.keys(obj).forEach(function(key,index){
    console.log(index+" "+key);
  });
  console.log(obj.JCPradel);
  console.log(obj[firstName+lastName]);
}
// dynamicKeys();
/**************************************************************
    Classes and Methods
***************************************************************/
class Person{
  age = 0;
  firstName = "";
  lastName = "";
  weight = 0;
  height=0;
  constructor({firstName,lastName,weight=0,height=0,age=0}){
    this.firstName = firstName;
    this.lastName = lastName;
    this.weight = weight;
    this.height = height;
    this.age = age;
  }
  setFirstName(firstName){
    this.firstName = firstName;
  }

  setLastName(lastName){
    this.lastName = lastName;
  }

  setWeight(weight){
    this.weight = weight;
  }

  setHeight(height){
    this.height = height;
  }

  setAge(age){
    this.age = age;
  }
}
class Child extends Person{
  constructor(){
    super("","",0,0,0);
  }
}
function classMethods(){
  let firstName = "JC",
    lastName = "Pradel",
    weight = 170, age = 32, height=275,
    person = new Person({
      firstName,
      lastName,
      weight,
      age
    });
  console.log(`firstName: ${person.firstName}
    lastName: ${person.lastName}
    weight: ${person.weight}
    height: ${person.height}
    age: ${person.age}`);
  let child = new Child();
  child.setFirstName("Merlyn");
  child.setLastName("Pradel");
  child.setWeight(50);
  child.setHeight(150);
  child.setAge(25);
  console.log("After inheritance");
  console.log(`firstName: ${child.firstName}
  lastName: ${child.lastName}
  weight: ${child.weight}
  height: ${child.height}
  age: ${child.age}`);
}
//classMethods();
/**************************************************************
    Arrow Functions
***************************************************************/
function arrowFunc(){
  /*
  ES5 SYNTAX
  var add = function(a,b){
    return a+b;
  };
  */
  // ES6 SYNTAX
  var add = (a,b) => a+b;
  console.log(`add: ${add(2,5)}`);
}
//arrowFunc();
/**************************************************************
    Lexical Binding
***************************************************************/
function lexBind(){
  var module = {
    age: 30,
    out: function(){
      setTimeout(() => { //arrow functions can also be used to bind parent's context
        console.log(this.age);//although inside another entity, 'this' still refers to module
      }, 1000);
    }
  };
  module.out();
}
//lexBind();
/**************************************************************
    Importing modules
***************************************************************/
/*
  ES5 Syntax
  var module = import("./mod");
  var foo = module.foo;
  var bar = module.bar;

  ES6 Syntax
  import { foo as foolish, bar } from "./mod"
*/
