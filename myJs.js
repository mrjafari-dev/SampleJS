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
var message , num;

// let a =1;
// var element = document.getElementById("menu"); 
// document.write("salam")
// document.write("salam")
// while(a<10){
//   element.innerHTML = "wdd <br/>";
//     a++
//     document.write("salam <br/>")
// }
