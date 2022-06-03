// let  str = "  abuzar mohd    "
// let str2 = "abuzar"

// let con = str.concat( " ",str2)

// let position = str.indexOf('mohd')

// let substr = str.substring( 3, 6)

// let trimstr = str.trimEnd()

// let str3 = str.replace('mohd ' , 'hello')

// let str3 = str.includes('mohd')

// console.log(str);
// console.log(str3);


// let arr = ["hello", "hello", 55, 85, true]

// arr.splice(1,3)

// position = arr.indexOf(55)
// let text = "My Name Mohoammad abuzar";

// let newarr = text.split(' ');

// joinarr = arr.join(' - ')

// newarrr = newarr.concat(arr)

// twoarr = [85, 79, arr, newarr]


// console.log(twoarr[2]);
// debugger
// for(i = 0; i < arr.length ; i++){
//     console.log(arr[i]);
// }

// arr.forEach((e, i, a) => {
//     console.log(a);
// })


// for(i=1;i<=10;i++){
//     console.log( ` 2x${i} = ${2*i}` );
// }


// function multable(num){
//     for(i=1;i<=10;i++){
//         console.log( `${num} x ${i} = ${num*i}` );
//     }
// }

// multable(205)


// function add() {
//     let val = arguments
//     let sum = 0
//     if (val.length == 0) {
//         return console.log("val not");
//     }
//     for (let i = 0; i < val.length; i++) {
//         sum += val[i]
//     }
//     console.log(sum);
// }


// add(45, 87, 87, 79, 454)
// add()


// function compare(a,b){
//     if(a<b){
//         return 1
//     }
//     else if(b < a){
//         return -1
//     }
//     else{
//         return 0
//     }
// }

// let c = compare(7 , 6);


// let car ="audi"


// function add(){
//     let res = "bmw"
//     // console.log(car);

//     console.log(car);
// }

// add()

// console.log(res);

//anonymous function

// function expression
// const x = function () {
//     console.log("hello world");
// }


// setTimeout(x, 1000)




// immediately invoked function

// (function () {
//     console.log("hello world");
// })();

// let person = {
//     fname: 'abuzar',
//     lname: "mohd",
//     age: 22,
//     mobile: 852,
//     sayhello () {
//         console.log(`hello !  ${this.fname}`);
//     }
// }
// person.sayhello = () => {
//     console.log("hello");
// }

// let car = {
//         brand: 'tata',
//         model: 'safari'
//     }

// person.sayhello()

// function greet() {
//     console.log("hello !");
// }

// person.sayhello = greet
// console.log('age' in person);

// for(let key in person){
//     console.log(person[key]);
// }

// console.log(person.sayhello());

// var x = Math.max(4,10 ,565,4465,55 ,8,0) 

// console.log(x);

// var z = Math.floor(Math.random() * 10) ;//0-9


// console.log(z);

// let d = new Date(2018,11,13,10,33,46,77)

// console.log(d);

// var d = new Date()

// d.setFullYear(2000)

// console.log(d);


// let div = document.getElementById('root');

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// let x = "Apple"

// let data =  fruits.filter((e)=>{
//     return e === x 
// })

// console.log(data);



// fruits.push("Kiwi", "Lemon");

// fruits.forEach((e)=>{
// 	console.log(e)
// }	
// )


// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// // console.log(fruits);

// fruits.filter((e, i, arr) => {
//     console.log(arr);
// })

// for (let i = 0; i < fruits.length; i++) {
//     // console.log(fruits[i]);
// }


// console.log(window.x);
// console.log(window.c);

// let x = "name";

// let arr = [
//     { name: "monu", technology: "node js", version: "0" },
//     { name: "shivam", technology: "node js", version: "0" },
//     { name: "abuzar", technology: "node js", version: "0" },
//     { name: "zahid", technology: "React", version: "0" },
//     { name: "amit", technology: "React", version: "0" },
// ];


// let name = { name: "monu", technology: "node js", version: "0" }


// for (let y in name) {

//     console.log(y);
// }


// console.log(name.name = x)

// arr.forEach((item) => {
//     // console.log(item.name)
//     if (item.name == 'abuzar') {
//         item.name = "monu"
//     }
// })


// console.log(arr)



// let arr = [10, 15, 0, 50, 50, 53, 1, 32, 45, 210, 15, 1, 205];

// let arr2 = []

// let arr3 = [];

// for (let x = 0; x < arr.length; x++) { 
//     if(arr.indexOf(arr[x]) != x){
//         arr2.push(arr[x]);
//     }else{
//         arr3.push(arr[x])
//     }
// }
// console.log(arr)

// console.log(arr3)

// console.log(arr2)


// for (let x = 0; x < arr.length; x++) { 
//     if(arr.indexOf(arr[x]) != x){
//         arr2.push(arr[x]);
//     }else{
//         arr3.push(arr[x])
//     }
// }

// let arr = [10, 15, 0, 50, 50, 53, 1, 32, 45, 210, 15, 1, 205];



// let data = arr.filter((item, index) => {
//     return arr.indexOf(item) != index
// })

// console.log(data)

// let data = "abcdef";
// let arr = data.split('');
// let arr2 = []
// let str = arr2.join('');

// arr.forEach((item, index) => {
//     let num = index + 1;
//     let value = (num % 2 !== 0) ? index + 1 : index - 1;
//     arr2.push(arr[value]);
// })


// console.log(arr2)
// console.log(arr2.join(''))
// console.log(str)