let circle={
    radius :1,
    location :{
            x:2,
            y:3
    },
    draw:function(){
        console.log('draw');
    }
}
circle.draw();

//factory functions

function CreatCircle(radius){
    return {
        radius,
        name :"", 
        draw(){
            console.log('draw');
        }
    }
}
console.log(CreatCircle(1));



   // const t =new test(1);
   
    //   console.log(t);
     //  console.log(CreatCircle());

       let a= ["sadsad",54]
       console.log(a);
       delete a[0]
       console.log(a);

       const persons ={
        name : "mammad"
       }

       persons.age= 26

       persons.family  ="edsfasf"
       console.log(persons);

       delete persons.age
       console.log(persons);

       //constractor function

function test(radius){
    this.radius =radius;
    this.draw =function(){
        console.log(radius);
    }
}
//console.log(test.call({},1));

    let bo ={
        radius : "ds"
    }

    test.call(bo,1) 

    function pp(firstname, lastname) {
        this.firstname = firstname
        this.lastname = lastname
        this.hello = function() {
            return 'Hello' + this.firstname + ' ' + this.lastname 
            }
       }

       let hello = new pp("mohammad","ali")
       
      console.log(hello.hello())

      let num ={val : 1};
      function add(num){
num.val++
      }
      add(num)
      console.log(num);