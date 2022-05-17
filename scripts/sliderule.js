let images = document.querySelectorAll("img")

let ruleTop = document.querySelector("#top")
let ruleMiddle = document.querySelector("#middle")
let ruleBottom = document.querySelector("#bottom")
let cursor = document.querySelector("#cursor")
let metal = document.querySelectorAll(".metal")

let btnFlip = document.querySelector("#flip")

let rulex = ruleMiddle.getBoundingClientRect().left, cursorx = cursor.getBoundingClientRect().left, flip = false;

images.forEach(img => {
  img.setAttribute("draggable", false)
})

function dragrule({ movementX }) {
  rulex += movementX;
  ruleMiddle.style.left = `${rulex}px`
}

function dragcursor({ movementX }) {
  cursorx += movementX;
  cursor.style.left = `${cursorx}px`
}

function fliprule(){
  flip = !flip;
  
  ruleTop.children[0].setAttribute("src", !flip ? "./imgs/sliderule/cima1.jpg" : "./imgs/sliderule/cima2.jpg")
  
  ruleMiddle.style.top = `${!flip ? 77 : 92}px`
  ruleMiddle.children[0].setAttribute("src", !flip ? "./imgs/sliderule/meio1.jpg" : "./imgs/sliderule/meio2.jpg")
  
  ruleBottom.style.top = `${!flip ? 77 + 133 : 92 + 133}px`
  ruleBottom.children[0].setAttribute("src", !flip ? "./imgs/sliderule/baixo1.jpg" : "./imgs/sliderule/baixo2.jpg")

  metal.forEach(div => {
    div.style.top = `${!flip ? 77 : 92}px`
    div.style.left ? div.style.left = `${-4 * flip}px` : div.style.right = `${4 * flip}px`
  })
}

ruleMiddle.addEventListener("mousedown", () => {
  window.addEventListener("mousemove", dragrule)
})

cursor.addEventListener("mousedown", () => {
  window.addEventListener("mousemove", dragcursor)
})

window.addEventListener("mouseup", () => {
  window.removeEventListener("mousemove", dragrule)
  window.removeEventListener("mousemove", dragcursor)
})

btnFlip.addEventListener("click", fliprule)