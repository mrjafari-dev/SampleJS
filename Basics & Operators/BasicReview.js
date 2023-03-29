let test = "ed";
switch(test){
    case "mammad":
        {
            console.log(test);
            breack;
        } 
        case "ali":{
            console.log(test);
            breack;
        }
        default :{
            console.log("fuck you");
        }
}

let person = [
    {
        name : "ali",
        age:22,
    },
    {
        name : "mammad",
        age:23, 
    },
    {
        name : "reza",
        age:19, 
    },
    {
        name : "hasan",
        age:19, 
    }
]

//for(let i = 0; i<10;i++){
 //   console.log(i);
 //   let card = createCard("ali",22);
  //  document.body.appendChild(card);
//}
for (let val of person){
    let card = createCard(val.name,val.age);
    document.body.appendChild(card);
}
function createCard(name , age){
    const card = document.createElement('div');
    const Name = document.createElement('span');
    Name.innerText = `hello ${name}`;
    const Age =document.createElement('span');
    Age.innerText = `you are ${age} years Old`;
    card.appendChild(Name);
    card.appendChild(Age);
    return card;
}
