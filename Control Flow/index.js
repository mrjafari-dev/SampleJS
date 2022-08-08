
// Java Script have 2 Condtional StateMents
// If ... else  and Swich ... case
let hour = 24;
if (hour>=6 && hour<12){
    console.log('Good morning');
}else if(hour>=12 && hour<18){
    console.log("Good afternoon");
}else {
    console.log('Good evening');
}


let role = 'owner';
switch(role){
    case 'gust':
        console.log('Gust user');
        break;
        case 'owner':
            console.log('Owner user');
            break;
                default:
                    console.log('Unknown user');
}

//loops

//For
console.log('loops _ for:');
for (let i =0;i<10;i++){
    if(i%2 !== 0) console.log(i);
}


//while
console.log('loops _ while:');
let j = 1;
while (j<10){
    if(j%2 === 0) console.log(j);
    j++;
}

//do {..} while()
console.log('loops _do .. while:');
let k = 0;
do{
if(k%2 !== 0) console.log(k);
k++
}while(k<=10);


// for in
console.log('For in ........ Object');

const person ={
    name:'ali',
    age: 21
}
for (let key in person){
    console.log(key , ': '+person[key]);
}
console.log('For in ........ Array');

let names = ['ali','reza','mammad']
for (let index in names)
    console.log(index,names[index]);


    console.log('For of ........ Array');
    for (let name of names)
    console.log(name);


    //break and continue
    console.log('.............break');
    let y =0;
    while (y<10){
        if (y===5) break;
        console.log(y);
        y++
    }

    
    console.log('.............continue');
    let u =0;
    while (u<10){
     
        u++
        if (u===5) continue;
        console.log(u);
    }

    //Exercise 1
    //im write a function that take two number and return the maximum of two

    function max(num1,num2){
       // if (num1<num2) return num2;
        //else if (num2<num1) return num1;
        //else return 'draw'
        return (num1>num2) ? num1: num2;
    }

    console.log(max(245,248));
    

    //Exercise 2

    function isLandscape(width , heght){
        return (width>heght)
    }
   console.log(isLandscape(600,550));

   //Exercise 3
    function fizzBuss(number){
        if ( typeof number !=='number')
        return NaN;
        
        if ((number%3 === 0) && (number%5===0))
        return 'FizzBuzz';

        if(number%3 === 0)
        return 'fizz';
        if (number%5===0)
        return 'Buzz'

    }
console.log(fizzBuss(15));

 //Exercise 4

 function showNumber(number){
    let EVEN_ODD='';
    for (let i=0;i<=number;i++){

        if(i%2===0)EVEN_ODD = 'EVEN';
        else EVEN_ODD ='ODD';
        console.log(i +" : "+EVEN_ODD);
    }
 }
 showNumber(10);
 




















