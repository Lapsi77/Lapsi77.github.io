const toolbarElement = document.getElementById("toolbar");
const rowContainerElement = document.getElementById("rowContainer");
const colors =["orange", "lime", "lightblue", "blue", "purple", "darkred", "black", "white"]
let selectedColorElement
let rowCount = 80;
let i = 0;

function columns(){
rowContainerElement.style.gridTemplateColumns = `repeat(8, auto )`
}
columns()


while(i < rowCount){
let row = document.createElement("div")
rowContainerElement.appendChild(row)
row.classList.add("row")
row.addEventListener("click", onPain)

i ++
}


colors.map(color => {
let colorElement = document.createElement("a")
colorElement.href = "#"
colorElement.classList.add("color")
colorElement.style.backgroundColor = color;
colorElement.addEventListener("click", onSelectColor)


toolbarElement.appendChild(colorElement)
});

function onSelectColor(e){
    e.preventDefault();

        if(selectedColorElement) {
            selectedColorElement.classList.remove('--selected');
        }

    selectedColorElement = e.target
    selectedColorElement.classList.add("--selected")


}


function onPain(e){

    e.target.style.backgroundColor = 
        selectedColorElement.style.backgroundColor;

}


