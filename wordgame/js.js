let textbox = document.getElementById("text")
let theWord = "thepartyrockisinthehousetonight"
let theGameWord = theWord
let i = 0
keySpan()

window.addEventListener("keydown", e)

function keySpan(){
    while(theGameWord.length > i){
       textbox.innerHTML += `<span>${theGameWord.charAt(i)}</span>`
    
    i++
    }
}

let a = 0
function e(keyPressed){
if(keyPressed.key == theGameWord.charAt(0)){
    theGameWord = theGameWord.slice(1)
    textbox.children[a].classList.add("used")
a++
if(theGameWord == ""){
    let b = 0
    while(textbox.children.length>b){
        textbox.children[b].classList.remove("used")       
        b++
    }
    theGameWord = theWord
    a = 0
}
}
}
