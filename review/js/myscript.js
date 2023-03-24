//varible
var family = " Alireza";
//alert("hello " + family);

// Arrays
var Names = ["ali","reza","hosein"];
document.write(Names.length);
document.write("<br/>");
document.write(Names[1]);
//change array value 
document.write("<br/>");
Names[1] = "mina";
document.write(Names[1]);
var families = new Array("jafari","hasani","mammadi")
document.write("<br/>");
document.write(families[2]);
var person = ["mohammad reeza","jafari",25];
document.write("<br/>");
document.write("<h1>"+"my name is "+person[0]+" and family "+person[1]+" age is "+person[2]  +"<h1/>");
console.log(person);

//sort my array and show in log 
console.log(person.sort());


var lbl = document.getElementById('lblResult');
lbl.innerHTML = "salam mammad"

//functions and create calc

function sum(num1 , num2){
    var num1  =parseInt(num1);
    var num2 =parseInt(num2);
    lbl.innerHTML = num1+num2;
}

function substraction(num1 , num2){
    var num1  =parseInt(num1);
    var num2 =parseInt(num2);
    lbl.innerHTML = num1-num2;
}

function multiplication(num1 , num2){
    var num1  =parseInt(num1);
    var num2 =parseInt(num2);
    lbl.innerHTML = num1*num2;
}
function Division(num1 , num2){
    var num1  =parseInt(num1);
    var num2 =parseInt(num2);
    lbl.innerHTML = num1+num2;
}

