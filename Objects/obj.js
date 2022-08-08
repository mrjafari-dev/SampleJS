let ar = new Array("sada","Sadad","asdad")
for (let key of ar)
console.log(key);

const obj ={
    result : 1,
    draw(){
        console.log("draw")
    }
}

for (let key in obj)
console.log(key , obj[key]);

for (let key of Object.keys(obj))
console.log(key);

if ('resut' in obj) console.log("yes");


// copy object to another object 
// first solution with loop (FOR)
 
const another = {}

for (let key in obj)
    another[key] = obj[key]

    console.log(another);

    // socond solution with Object (Assign)

    let obj2 = Object.assign({} , obj)
    console.log(obj2);

     // thered solution with ...
     let obj3 ={...obj}
    console.log(obj3);