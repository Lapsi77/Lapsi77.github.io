const toolbarElement = document.getElementById("toolbar");
const rowContainerElement = document.getElementById("rowContainer");
const colors =["orange", "lime", "lightblue", "purple", "darkred", "black", "white"]
let selectedColorElement
let rowCount = 30;
let i = 0;


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


