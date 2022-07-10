function calcute(){
    var message,num;
    message = document.getElementById("result");
    num = document.getElementById("numInput").value;

    try{
        if (!isNaN(num)){
            if (num>=5){
                alert("true")
            }else{
                alert("false") 
            }
          
        }else throw "String"
    }catch(err){
            alert("value is "+err);
    }finally{
        document.log("its ok")
    }

}
function LOG(message){
    console.log(message); 
}
var message , num;
 let person ={
    name : "ALi",
    age : 28,
    family:"emami"
 }
 person.lastName = "ASGAR"
 person['family']= "Mammad agha hosein"
 LOG(person.family);

  let names = ['ali','gholi','reza','mammad']
  names[0]=18
    LOG(names[0])

   
    let point =50;
    let result = point === 100?'true':'flase';
    LOG(result);

    //Logical AND (&&)
       let first = false;
       let second= true;
       let AndResult=first && second;
       LOG("And result : "+AndResult);
            //Logical OR ||

        let  ORRsult = first || second;
        LOG("OR result : "+ORRsult);

        //Bitwise Operators
        let Bitwise_OR = 1|2;
        LOG(Bitwise_OR)
        let Bitwise_And = 1|2;
        LOG(Bitwise_And)

// let a =1;
// var element = document.getElementById("menu"); 
// document.write("salam")
// document.write("salam")
// while(a<10){
//   element.innerHTML = "wdd <br/>";
//     a++
//     document.write("salam <br/>")
// }
