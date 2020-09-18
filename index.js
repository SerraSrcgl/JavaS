console.log('HelloWorld');

//cannnot be areserved keyboard




let interestRate=0.3;
interestRate=2;
console.log(interestRate);
let name='Mosh';
let age=30;
let isApproved=false;
let firstName=undefined;
let lastName=null;
let selectedColor='red';

//objects

let person={
	name: 'Mosh',
	age:30

};

person.name='John';
let selection='name';
person[selection]='Mary';
console.log(person.name);

console.log(person);




let selectedColors=['red','blue'];
selectedColors[2]=[1];
console.log(selectedColors);
//performing a task
function greet(name,lastName){
	console.log("Hello World");
console.log('Hello'+name+''+lastName);
}
//name is only meaningful insside tis function
greet('John'+'Smith');
greet('Mary')


//calculating av alue

function square(number){
	return number*number;
}
console.log(square(2));

