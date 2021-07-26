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


function welcome(){
    alert("welcome to my web")
}

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

function highlight(obj){
    obj.style.background="yellow"
}

function unhighlight(obj){
    obj.style.background="red"
}