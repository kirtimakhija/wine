gsap.to("#bottle",{
    delay: 1,
    rotate:-15,
    scale: 0.6,
    scrollTrigger:{
        trigger:"#bottle",
        scroller:"body",
        markers:false,
        start:"top 0%",
        end:"top -290%",
        scrub:true,
        pin: true
    }
})
gsap.from("#dog",{
    opacity: 0,
    duration: 1,
    scale: 0,
    delay: 2
})
gsap.from("#lagunitas-stamp",{
    opacity: 0,
    duration: 1,
    scale: 7,
    delay: 3
})
gsap.from("#page1 h1",{
    y: -300,
    opacity: 0,
    duration: 1
})
gsap.from("#nav",{
    y: -300,
    opacity: 0,
    duration: 1
})
gsap.from("#bottle",{
    opacity: 0,
    duration: 1,
    delay: 1
})
gsap.from("#page2-part1",{
    x: -100,
    opacity: 0,
    duration: 2,
    scrollTrigger:{
        trigger: "#page2",
        scroller: "body",
        markers: false,
        start: "top 40%"
    }
})
gsap.from("#page2-part2",{
    x: 100,
    opacity: 0,
    duration: 2,
    scrollTrigger:{
        trigger: "#page2",
        scroller: "body",
        markers: false,
        start: "top 40%"
    }
})
gsap.from("#page3 h1",{
    opacity: 0,
    duration: 2,
    scrollTrigger:{
        trigger: "#page3",
        scroller: "body",
        markers: false,
        start: "top 40%"
    }
})
gsap.from("#page3-part1",{
    x: -100,
    opacity: 0,
    duration: 2,
    scrollTrigger:{
        trigger: "#page3",
        scroller: "body",
        markers: false,
        start: "top 40%"
    }
})
gsap.from("#page3-part2",{
    x: 100,
    opacity: 0,
    duration: 2,
    scrollTrigger:{
        trigger: "#page3",
        scroller: "body",
        markers: false,
        start: "top 40%"
    }
})
gsap.from("#page4 h1",{
    opacity: 0,
    duration: 2,
    scrollTrigger:{
        trigger: "#page4",
        scroller: "body",
        markers: false,
        start: "top 40%"
    }
})
gsap.from("#page5-part1 #page5-red-paint",{
    opacity: 0,
    duration: 2,
    scrollTrigger:{
        trigger: "#page5",
        scroller: "body",
        markers: false,
        start: "top 40%"
    }
})
gsap.from("#page5-part2 #page5-red-paint",{
    opacity: 0,
    duration: 2,
    delay: 0.5,
    scrollTrigger:{
        trigger: "#page5",
        scroller: "body",
        markers: false,
        start: "top 40%"
    }
})
gsap.from("#page5-black-paint",{
    opacity: 0,
    duration: 2,
    delay: 0.3,
    scrollTrigger:{
        trigger: "#page5",
        scroller: "body",
        markers: false,
        start: "top 40%"
    }
})
gsap.from("#page6-div-left",{
    x: -100,
    opacity: 0,
    duration: 2,
    scrollTrigger:{
        trigger: "#page6",
        scroller: "body",
        markers: false,
        start: "top 40%"
    }
})
gsap.from("#page6-div-right",{
    x: 100,
    opacity: 0,
    duration: 2,
    scrollTrigger:{
        trigger: "#page6",
        scroller: "body",
        markers: false,
        start: "top 40%"
    }
})








// var dog = document.querySelector("#dog")
// var h1 = document.querySelector("#page1 h1")
// h1.addEventListener("mouseover", function(){
//     dog.style.display = "initial";
// })
// h1.addEventListener("mouseout", function(){
//     dog.style.display = "none";
// })