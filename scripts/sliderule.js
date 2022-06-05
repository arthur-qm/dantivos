let images = document.querySelectorAll("img")

let ruleTop = document.querySelector("#top")
let ruleMiddle = document.querySelector("#middle")
let ruleBottom = document.querySelector("#bottom")
let cursor = document.querySelector("#cursor")
let metal = document.querySelectorAll(".metal")

let btnFlip = document.querySelector("#flip")

let rulex = ruleMiddle.getBoundingClientRect().left, cursorx = cursor.getBoundingClientRect().left;
let flip = 0;

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
  
  ruleMiddle.style.top = `${parseInt(ruleMiddle.style.top.slice(0, -2)) + 15 * ( 2 * flip - 1)}px`
  ruleMiddle.children[0].setAttribute("src", !flip ? "./imgs/sliderule/meio1.jpg" : "./imgs/sliderule/meio2.jpg")
  
  ruleBottom.style.top = `${parseInt(ruleBottom.style.top.slice(0, -2)) + 15 * ( 2 * flip - 1)}px`
  ruleBottom.children[0].setAttribute("src", !flip ? "./imgs/sliderule/baixo1.jpg" : "./imgs/sliderule/baixo2.jpg")

  metal.forEach(div => {
    div.style.top = `${parseInt(div.style.top.slice(0, -2)) + 14 * ( 2 * flip - 1)}px`
    if (div.id !== "mdireito") {
      div.style.left = `${-4 * flip}px`
    } else {
      div.style.left = `${parseInt(div.style.left.slice(0, -2)) - 4*(2 * flip - 1)}px`
    }
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