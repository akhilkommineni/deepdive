// class person{
//     constructor(name){
//         this.name=name;
//     }
//     greet(){
//         console.log(`welcome! ${this.name}`);
//     }
// }

// const person1 = new person('Akhil');
// person1.greet();
// ------------------------------------------------------------------------------

// const person ={
//     name:'akhil',
//     greet: function() {
//         const innerGreet=()=>{
//             console.log(this.name)
//         }
//         innerGreet()
//     }
// }

// person.greet();

//----------------------------------

// const person ={
//     name:'akhil',
//     greet: function (){
//         function innerGreet(){
//             console.log(this.name)
//         }
//         innerGreet.bind(this)();
//     }

// }

// person.greet()

//=-------------

// function outer() {
//     let count = 0;
//     return function() {
//       count++;
//       console.log(count);
//     };
//   }

//   const func1 = outer();
//   const func2 = outer();
// func1()
// func1()
// func2()

//-----------

// function multiply(x){
//     return function(y){
//         return x*y
//     }
// }

// const double = multiply(2)
// console.log(double(5))

// self exec function

// (
//     function(){
//         let secret = 'hidden';
//         console.log(secret);
//     }
// )()

//-----------

function testVar() {
    var x = 1;
    if (true) {
        var x = 2;
        console.log(x);  // Output inside if block
    }
    console.log(x);  // Output outside if block
}

testVar();

//----blocklevel scoping

//watchout below -- self executing function

(function testScoping(){
    let x=1;
    if(true){
        let x=2;
        console.log(2)
    }
    console.log(x)
})()