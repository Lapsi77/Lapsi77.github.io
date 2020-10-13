let textbox = document.getElementById("text")
let theWord = "thepartyrockisinthehousetonight"
let theGameWord = theWord
let i = 0
keySpan()

window.addEventListener("keydown", e)

function keySpan(){
    while(theWord.length > i){
       textbox.innerHTML += `<span>${theGameWord.charAt(i)}</span>`
    
    i++
    }
}

let a = 0
function e(keyPressed){
console.log(keyPressed.key)
if(keyPressed.key == theGameWord.charAt(0)){
    theGameWord = theGameWord.slice(1)
    textbox.children[a].classList.add("used")
    console.log("Next is: " + theGameWord.charAt(0))
a++
if(theGameWord == ""){
    let b = 0
    while(textbox.children.length>b){
        console.log("removed " + b)
        textbox.children[b].classList.remove("used")       
        b++
    }
    console.log("done")
    theGameWord = theWord
    console.log("Reset the gameword to: " + theGameWord)
    a = 0
}
}
}
