let images = document.querySelectorAll("img")

let ruleTop = document.querySelector("#top")
let ruleMiddle = document.querySelector("#middle")
let ruleBottom = document.querySelector("#bottom")
let metal = document.querySelectorAll(".metal")

let btnFlip = document.querySelector("#flip")
let flip = 0

images.forEach(img => {
  img.setAttribute("draggable", false)
})

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

btnFlip.addEventListener("click", fliprule)

document.querySelectorAll(".draggable").forEach(el => {
  el.onmousedown = e => {
    const offsetX = e.clientX - parseInt(el.style.left);

    window.onmousemove = ev => {
      el.style.left = ev.clientX - offsetX + "px";
    }

    window.onmouseup = () => {
      window.onmousemove = null;
      window.onmouseup = null;
    }
  }

  el.ontouchstart = e => {
    let location = e.targetTouches[0];
    const offsetX = location.clientX - parseInt(el.style.left);

    el.ontouchmove = e => {
      let movement = e.targetTouches[0];
      el.style.left = movement.clientX - offsetX + "px";
    }
  }
})