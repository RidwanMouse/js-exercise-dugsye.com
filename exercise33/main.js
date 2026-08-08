
const header = document.querySelector(".header");

console.log(header)

const text = document.querySelector(".text")

console.log(text)

const buttons = document.querySelector("button")
console.log(buttons)

function changeContent(){
    header.textContent = "welcome my special web organisation"
}


function changeElement(){
    text.innerHTML =    `!welcome to my website <strong> consider to my special organization website to the world</strong>`
}
