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
let c = ['df','dsf','sdf']
let x = a.concat(b,c)
console.log(x)

//maen is same sort b-a == more to less ,a-b == less to more
let number =[20,100,-100,-5,25]
number.sort(function(a,b){
    return b-a
})
console.log(number)

// java script object
let product ={
    name : "mouse",
    price :1500,
    color : "black",
    category :"computer",
    size:"M"
};
console.log("name of product :",product.name);
console.log("name of price :",product.price);
console.log("name of color :",product.color);


let product ={
    name : "mouse",
    price :1500,
    color : "black",
    category :"computer",
    size:"M",
    displayproduct:function(){
        return "name : "+product.name +' price : '+product.price +" color : "+ product.color
    }
};
console.log(product.displayproduct()) 

//confiam dialog 
function deletedata(){
    let result = confirm("you want to delete data ?")
    let a = (result == true ?"delete data" :" not delete data")
    console.log(a)
}


let a = document.getElementsByTagName('p')
console.log(a)

let a = document.getElementById('demo')
console.log(a)

//inner text edit text
//inner HTML edit web browser 
function displaytext(){
    a.innerText="<strong>text js</strong>"
    a.innerHTML="<strong>text js</strong>"
}

let a = document.getElementById('demo')
let x=10
let y=20
function displaytext(){
    a.innerHTML=  "show data  x = "+x+" show data y = "+y
}


// queryselectorr  mean same gerElementby ID
let a = document.querySelector('#demo') // อ้างอิง id
let b = document.querySelector('.myjs') // อ้างอิง class 
let c = document.querySelector('p')// อ้างอิง variables
console.log(a)
console.log(b)
console.log(c)


let titleEl = document.getElementById('title') // อ้างอิง id
let contentEl = document.querySelector('.content') // อ้างอิง class 
let allEl  = document.querySelector('p')// อ้างอิง variables
function displaytext(){
    titleEl.style.color ="red"
    titleEl.style.backgroundColor="yellow"
    titleEl.style.fontSize = "60px"

    contentEl.setAttribute('class','kong')
}

const box = document.querySelector(".light")


function displaytext(){
    box.setAttribute('class','dark')
}



//     <div  class="light">
//         <p>jsdfna;lkkkkkkkklgfklnlkdngknaslkdngandgsnaodiignaiongnangdognanfgoan</p>
//     </div>


//    <button onclick ="lightmode()">light mode</button>
//    <button onclick ="darkmode()">night mode  </button>
const box = document.querySelector(".light")
function lightmode(){
    box.setAttribute('class','light')
}
function darkmode(){
    box.setAttribute('class','dark')
}

const textall = document.querySelectorAll('p')
console.log(textall[0].innerHTML)



const menu =document.getElementById('menu')
function additem(){
    const item = document.createElement('li')
    item.innerText="item"
    menu.appendChild(item)
}
function deleteitem(){
    const item1 =document.getElementById('item-3')
    menu.removeChild(item1)
}




{/* <body>
    <div id ="box">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut interdum, est id scelerisque pulvinar, sapien velit luctus sapien, ut laoreet nunc sapien vel enim. Duis vel risus egestas, semper enim non, lobortis augue. Quisque elementum et nunc malesuada tempus. Mauris mattis in tellus eu aliquam. In porta convallis tempor. Vivamus semper volutpat mi, et auctor sem cursus sed. Cras nec eleifend libero. Phasellus vulputate pretium vestibulum. Donec vel efficitur urna. Nulla sit amet pharetra neque. In gravida nunc a nibh molestie viverra. Cras accumsan at mauris ac laoreet. Maecenas efficitur risus sed malesuada maximus. Proin dignissim viverra lacus, at iaculis mauris ullamcorper nec. Etiam elit metus, feugiat eget sem et, rutrum rhoncus turpis. Curabitur porta odio eget faucibus mollis.</p>
    </div>
    <button onclick ="adddarkmode()">เพิ่ม style </button>
    <button onclick ="removedarkmode()">ลบ style </button>
    <button onclick="switchmode()">สลับ style </button>
   <script src ="app.js"></script>
</body> */}

const box =document.getElementById('box')

function adddarkmode(){
    box.classList.add('darkmode')
}
function removedarkmode(){
    box.classList.remove('darkmode')
}
function switchmode(){
    box.classList.toggle('darkmode')
    let status = box.classList.contains("darkmode")
    if (status){
        box.style.color="yellow"
    }else{
        box.style.color= "red"
    }
}



// <body onload="welcome()"></body>
function welcome(){
    alert("welcome to my web")
}


    // <label for= "">name</label>
    // <input type="text" placeholder="put yourname" onfocus= "highlight(this)" onblur="unhighlight(this)">

function highlight(obj){
    obj.style.color="red"
    obj.style.background="blue"
}

function unhighlight(obj){
    obj.style.background="black"
}


    // <label for="">select your advent</label>
    // <select name ="" id ="menu" onchange ="getmenu()">
    //     <option value ="javascript">javascript</option>
    //     <option value ="python">python</option>
    //     <option value ="bootstarp">bootstarp</option>
    // </select>
    
function highlight(obj){
    obj.style.color="red"
    obj.style.background="blue"
}

function unhighlight(obj){
    obj.style.background="black"
}

function getmenu(){
    const menu = document.getElementById("menu")
    console.log(menu.value)
}





// <a href="" onmouseover="highlight(this)" onmouseout="unhighlight(this)">Menu</a>
 function highlight(obj){
    obj.style.background="yellow"
}

function unhighlight(obj){
    obj.style.background="red"
}