// show on web browser
document.write("<h1>Hello world</h1>");
document.write("<p> javascript basic for beginer</p>")

alert("สวัสดีครับ : ")
console.log("Hello");
console.error("เจอไวรัส");
console.warn("เจอจ้อผิดพลาด")
let age ="20"+10;
let age = +("20.15") // use+  to convert str to number

let age = +("20.15")
let price = 99.99.toString() //convert to string from number
console.log(typeof(age))
console.log(typeof(price))

// Array 
let number = Array(1,2,3,4,5,6);
number[0]=100
console.log(number)
console.log("first number : ",number[0])

console.log(number[0]>number[1])
if (a>b){console.log("GG")} else{console.log("tenten")}

let a=10,b=10,c=10,d=10
// prefix ลบกหรือบวกก่อนค่อยใช้ postfix ลบหรือบวกเพิ่มทีหลัง
console.log(++a) 
console.log(b++)
console.log(--a)
console.log(b--)



//ternary operator
let score = 52;
let pass
 //true แทนด้วย ? false แทนด้วย :
pass = score>50 ? "pass":"notpass"
console.log(pass)