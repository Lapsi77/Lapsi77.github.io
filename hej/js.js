let linje = document.getElementsByClassName("line");
let box = document.getElementsByClassName("box")



let b = 0
let i = 0


while(i < linje.length){
    while(i < box.length){
    box[i].addEventListener("click",changeColor)
    i++
    }
}

function changeColor(a){
if(a.target.style.backgroundColor == "black"){
a.target.style.backgroundColor = "white"
}
else{
a.target.style.backgroundColor = "black"
}

}

