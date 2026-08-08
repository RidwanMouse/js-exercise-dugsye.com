const list = document.querySelector(".list")

function addItem() {
    const newItem = document.createElement("li")
    newItem.textContent = ("item3")

    list.appendChild(newItem)

}

function removeItem(){

    if(list.lastChild){
        list.removeChild(list.lastChild)
    } else {
        alert("completed delete")
    }
}