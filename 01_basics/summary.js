// Stack (Primitive)
// All primitive datatypes work as a stack

let myName = "Hridya";
let myAnotherName = myName;
myAnotherName = "RektyRowdyy"

console.log(myName); //Hridya
console.log(myAnotherName); //RektyRowdyy

//Heap (Non-Primitive)
//All non primivite datatypes like arrays, object goes work as a Heap

let userDetail1 = {
    name: "Hridya",
    email: "hridyadham@gmail.com"
}

let userDetail2 = userDetail1;

userDetail2.email = "rektyrowdy@gmail.com";

console.log(userDetail1.email); // "rektyrowdy@gmail.com"
console.log(userDetail2.email); // "rektyrowdy@gmail.com"