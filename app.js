let home = document.querySelector("#home");
let main = document.querySelector("#main")
let dot = document.querySelector(".dot");
let page3 = document.querySelector("#page3");
let page2 = document.querySelector("#page2")
home.addEventListener("mousemove",(e)=>{
     gsap.to(dot, {
        x: e.clientX,
        y: e.clientY,
        

     })
})
home.addEventListener("mouseleave",(e)=>{
     gsap.to(dot, {
        opacity: 0,
        duration: 0.5,
        scale:0
     })
})
home.addEventListener("mouseenter",(e)=>{
     gsap.to(dot, {
        opacity: 1,
        duration: 0.5,
        scale:1,
        
     })
})

page3.addEventListener("mousemove",(e)=>{

   gsap.to(".cur", {
      x: e.clientX,
      y: e.clientY,
   })

})

page3.addEventListener("mouseleave",(e)=>{
   gsap.to(".cur", {
      opacity: 0,
      duration: 0.5,
      scale:0
   })
})
page3.addEventListener("mouseenter",(e)=>{
   gsap.to(".cur", {
      opacity: 1,
      duration: 0.5,
      scale:1,
      
   })
})

page2.addEventListener("mousemove",(e)=>{

   gsap.to(".cur1", {
      x: e.clientX,
      y: e.clientY,
      duration:0.1,
      
   })

})

page2.addEventListener("mouseleave",(e)=>{
   gsap.to(".cur1", {
      opacity: 0,
      duration: 0.2,
      scale:0
   })
})
page2.addEventListener("mouseenter",(e)=>{
   gsap.to(".cur1", {
      opacity: 1,
      duration: 0.2,
      scale:1,
      
   })
})






let tl = gsap.timeline()
tl.from("nav h1",{
    y: -200,
    opacity:0,
    duration:0.5,
    delay:0.2
})



tl.from(".heading h1", {
  y:300,
  duration:0.5,
  delay:0.5,
  opacity:0,
})

let tl1 = gsap.timeline()

gsap.from(".one h1",{
   scrollTrigger: ".one h1",
   y:100,
   scale:0,
   opacity:0,
   duration:1,
   stagger:0.5,
})


gsap.from(".two p",{
   scrollTrigger: ".two",
   y:150,
   opacity:0,
   delay:1,
   duration:0.5
})

