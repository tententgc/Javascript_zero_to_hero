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