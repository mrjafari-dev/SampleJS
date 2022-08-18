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

const cours = corses.findIndex(function(element){  // return object of find value
    return element.id === 2;
})
console.log(cours);
