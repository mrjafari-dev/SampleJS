console.log("Adding new Element");
let arr = [3,4];
arr.push(5,6);
arr.unshift(1,2);
arr.splice(2,0,'ali','mammad');
console.log(arr);

// finding element  in Array (Primitive)
let numbers = [1,2,3,6,1,5,7,1,5]
console.log(numbers.indexOf(6)); //return index of element
console.log(numbers.indexOf(1, 5));//find element from 5 indext 
console.log(numbers.indexOf(10) !== -1); //return true or false
console.log(numbers.includes(5)); // return element is exicts or no (True and false)

// finding element  in Array (Refrence Type)
var corses = [
    {id :1 ,name :'Ali'},
    {id : 2 , name : 'Mammad'}
]

    console.log(corses.includes({id :1 ,name :'Ali'}));//=return true or falsse for find value\

const value = corses.find(function(element){  // return object of find value
        return element.id === 1;
})
console.log(value);

const cours = corses.findIndex(function(element){  // return index of find value
    return element.id === 2;
})
console.log(cours);

// Arrow Function 
 corses.findIndex(element => console.log(element.id === 2))

 //remove Element from Array 
 numbers.pop()//remove element end of Array 
 numbers.shift() //remove element begining of Array 
 numbers.splice(2,1)


 // remove all of the array elements
 //Solution 1
 numbers =[]
 //solution 2
numbers.length = 0
//solution 3
while(numbers.length>0)
numbers.pop()

//solution 4
numbers.splice(2,numbers.length)






