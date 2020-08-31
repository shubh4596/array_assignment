//for each method
//sum of numbers of array
var numbers = [1,2,3,4,5];

var sum = 0;
numbers.forEach(value => {
    sum = sum + value;
});
console.log(sum);

//states of my country
const myStates = ["jharkhand" , "delhi" , "rajasthan" , "assam"];
myStates.forEach(s => console.log(s));

// ------------------------------------------------------------------------------
//map method

//To find the square of array elements

var num = [6,7,4,5];
var squareOfNumbers = num.map(n => {
    return n*n} );
console.log(squareOfNumbers);






//---------------------------------------------------------------------------

//filter method

//To find numbers even or odd

let numb = [1,2,3,4,5,6,7,8,9];

let evenNumbers = numb.filter(value => 
    {
        return value%2 === 0;
    });
let oddNumbers = numb.filter(v => 
    {
        return v%2 !== 0;
    });
console.log(evenNumbers);
console.log(oddNumbers);

//To filter the pass students who got pass marks

let student = [
    {
        name : "shubham",
        marks : 85
    },
    {
        name : "Kundan",
        marks : 80
    },
    {
        name : "Priya",
        marks : 77
    },
    {
        name : "Ishani",
        marks : 32
    },
    {
        name : "suraj",
        marks : 55
    },
    {
        name : "Rahul",
        marks : 18
    }

]

let passingStudents = student.filter(stud => stud.marks >= 33);
console.log("Passing students are" , passingStudents);

let failedStudents = student.filter(stud => stud.marks<33);
console.log("Students who got failed are " , failedStudents);

//------------------------------------------------------------------------------

//reduce method
// To concatenate array values

let name = ["s" , "h" , "u" , "b" , "h" , "a" , "m", " ", "sharma"];
var fullName = name.reduce((a,b) =>
{
    return a+b;
});
console.log(fullName);



//--------------------------------------------------------------------------------

//find method

var trees = [ 
    "birch", 
    "maple", 
    "oak", 
    "poplar" 
  ];
  
  let result = trees.find(tree => tree.startsWith("m"));
  console.log(result);

//to find trees whose count is greater than 2
  var trees = [
    { name: "birch", count: 4 },
    { name: "maple", count: 5 },
    { name: "oak", count: 2 }
  ];

  let result1 = trees.find(tree => tree.count > 2);
  console.log(result1);

//-----------------------------------------------------------------------------

//findIndex method

//To find index of element from an array and print the element
const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];

const index = fruits.findIndex(fruit => fruit === "blueberries");

console.log(index); 
console.log(fruits[index]);

//To find the index of greatest element

let numArray = [1,2,9,12,130,59,64,33];

let i = numArray.findIndex(value =>  value > 13
);
console.log(i);

//---------------------------------------------------------------------------

//flat method

let array = [1 , [2] , [4,5] , [6 , [8,9 ,[10]]]];
let totalValue = array.flat(Infinity).reduce((a,b) => {
    return a+b;
});

console.log(totalValue);

console.log(array.flat(2));

//---------------------------------------------------------------------------

//fill method

let array = [0 , 1 , 2 , 3 , 4 , 5 , 6];
console.log(array.fill("s"));
console.log(array.fill("shubham" , 3));
console.log(array.fill("sumit" , 2,6));

//----------------------------------------------------------------------------

//sort method

//to sort the array  element using sort

let arr = [6,2,7,8,1,3,4,9,12,5];

function compareFunction(a,b){
    return a-b;
}
let sortedArray = arr.sort(compareFunction);
console.log(sortedArray);

//To sort team members alphbetically

const teams = ['Real Madrid', 'Manchester Utd', 'Bayern Munich', 'Juventus'];
console.log(teams.sort);


//----------------------------------------------------------------------------------

//every method

//To check whether all array elements are even or not

let elements = [2 , 4 , 8 , 17 , 6 , 12];
let result = elements.every(value => value%2===0);
console.log(result);

// Test users for who can drive

const ages = [17, 18, 22, 25];

const drivingAge = 16;


let canDrive = ages.every(function(age){return age >= drivingAge;});

console.log(canDrive)

//-------------------------------------------------------------------------

//some method

//To check whether ur pet allowed in hotel or not

const animals = ['dogs', 'cats', 'snakes', 'birds', 'pandas'];

const snakesAllowed = animals.some((type) => type === 'snakes');

console.log(snakesAllowed); 


//To check whether any comic book price is more than 10rs

const prices = [5, 8, 7, 10, 9];
const aboveTen = prices.some((price) => price > 10);

console.log(aboveTen);


//----------------------------------------------------------------------------

//includes method

//To seperate vowels and consonants in a string
var vowels=["a","e","i","o","u"]
var consonants=''
function vowelsAndConsonants(s) {
    for(var i=0;i<s.length;i++){
       if(vowels.includes(s[i])){
           console.log(s[i])
       }else{
consonants+= s[i]+'\n';
       }
    }
 console.log("consonants are : ");
 console.log(consonants);
}

vowelsAndConsonants('shubham');

//-----------------------------------------------------------------------------

//reduce method

//To flatten an array

const numArray = [1, 2, [3, 10, [11, 12]], [1, 2, [3, 4]], 5, 6];
function flattenArray(data) {

    const initialValue = [];
  
    return data.reduce((total, value) => {

      return total.concat(Array.isArray(value) ? flattenArray(value) : value);
    }, initialValue);
  }

  console.log(flattenArray(numArray));


//to reduce an array of numbers

const initialValue = 0;

const numbers = [5, 10, 15];

const reducer = (accumulator, item) => {
  return accumulator + item;
};

const total = numbers.reduce(reducer, initialValue);
console.log(total);


//-----------------------------------------------------------------------------

//reduceRight method

let lang = ["n","o","h","t","y","p"];
let total = lang.reduceRight((a,b) =>{
    return a+b;
});
console.log(total);


//----------------------------------------------------------------------------

















