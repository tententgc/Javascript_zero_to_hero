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

//if ซ้อน if
let age=16;
if (age>15){
    if (age==16){
        console.log("m.4")
    }else if(age = 17){
        console.log("m.5")
    }
}else{
    console.log("m.3")
}

let a = 20
console.log(a%2==0 ? "even_number":"odd_number")

let x=50 , y=100;

if (x>y){
    console.log("x more y")
}else if(x<y){
    console.log("y more x")
}else{
    console.log("x==y")
}


let count =1;
while(count <= 3){
    console.log("hello =",count)
    count++
}


for(let i =1;i<=10;i++){
    console.log(i)
}

for(let count= 1;count<=10;count++){
    if(count==5) break;
    console.log(count)
}

// continue ข้ามตัวเลขค่านั้นไป
for(let count= 1;count<=10;count++){
    if(count==5) continue;
    console.log(count)
}


// null == ไม่มีค่าไรเลย
// undefined == ประกาศมาแต่ไม่มีค่า
// NaN == หาค่าไม่ได้

function hello(){
    console.log("Hello world")
    console.log("Hello world")
}
hello()

//<button onclick= "message();">notification</button>
// ทำปุ่มแจ้งเตือน
function print(){
    console.log("Hello world")
}
function message(){
    alert("show notofication")
}
function displayname(){
    document.write("tentenTGC")
}


function plus_number(x){
    console.log("number input =",x)
}
let number = 5
plus_number(number)



function fullname(fname,lname){
    console.log("name :",fname,"surname :",lname)
}
fullname("tenten","thanyapisit")


function getIP(){
    return "127.264.36"
}
console.log(getIP())


function setsalary(money){
    let bonus =1000;
    return money+bonus 
}
console.log (setsalary(1000))

//set default variable function
function fullname(fname,lname,city="bangkok"){
    console.log("name :",fname,"surname :",lname,"city :",city)
}
fullname("tenten","thanyapisit")

let a=100;
function display(){
    let b= 50
    console.log(a)
    // ค่า b อยู่แค่ใน funtion
    console.log(b)
}
console.log("global",a)
display()


let colors =["red","green","blue","white"]
let x =colors.length
let y = colors.sort()
console.log(x)
console.log(y)
y.reverse()
console.log(y)

let colors =["red","green","blue","white"]
console.log(colors[0])
console.log(colors[colors.length-1])

let colors =["red","green","blue","white"]
console.log(colors)
colors.push("black")
console.log(colors)


let colors =["red","green","blue","white"]
let count = colors.length
for (let i=0;i<count;i++){
    console.log(colors[i])
}


let colors =["red","green","blue","white"]
colors.forEach(mydata);
function mydata(item){
    console.log(item)
}

let colors =["red","green","blue","white"]
let x =colors.toString()
console.log(x)

let colors =["red","green","blue","white"]
let x =colors.join("*")
console.log(x)


let colors =["red","green","blue","white"]
let x =colors.pop()
console.log(colors)


let a =["red","green","blue","white"]
let b = ["asskad","askd","asasd",'asd']
let x = a.concat(b)
console.log(x)