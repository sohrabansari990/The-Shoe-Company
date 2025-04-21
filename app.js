var main = gsap.timeline()

main.from("#hero", {
    y:-30,
    opacity:0,
    duration:2,
    delay:1

})

// gsap.from("#nav >*" ,{
//     opacity:0,
//     duration:2,
//     opacity:1,
//     stagger:0.3,
//     ease:"power2.out"

// })


const tl = gsap.timeline();

// nav

tl.from("#nav", {
  opacity: 0,
  duration: 1,
  
})
.from("#nav a", {
  opacity: 0,
  duration: 0.6,
  stagger: 0.2,
});


tl.from("#how-it-works",{
    opacity:0,
    y:40,
    duration:3,
    delay:0.5,
    scrollTrigger: {
        trigger: "#how-it-works",
        start: "top 50%",
        end:"top 10%",
        scrub:2, 
    }
})

// absout

tl.from("#about", {
    opacity:0,
    duration:3,
    x:40,
    delay:0.5,
    scrollTrigger: {
        trigger: "#about",
        start: "top 50%",
        end: "top 10%",
        scrub:2,
    }
})

// testimononials

let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#Testomonials",
      start: "top 50%",
      end: "top 10%",
      scrub: 2,
    }
});
  
tl2.from("#Testomonials", {
    opacity: 0,
    duration: 3,
    x: -40,
    delay: 0.5,
})
  
tl2.from("#pic .w-40", {
    opacity: 0,
    duration: 2,
    y: 40,
    stagger: 0.3,
})
  
tl2.from("#contact", {
    opacity: 0,
    x: -40,
    duration: 2,
    delay: 0.5,
    scrollTrigger: {
      trigger: "#contact",
      start: "top 80%",
      end: "top 30%",
      scrub: 2,
    }
});

tl2.from("#map", {
    opacity: 0,
    x: 40,
    duration: 2,
    delay: 0.5,
    scrollTrigger: {
        trigger: "#map",
        start: "top 80%",
        end: "top 30%",
        scrub: 2,
    }
});
tl2.from("#footer", {
    opacity: 0,
    y: 40,
    duration: 2,
    delay: 0.5,
    scrollTrigger: {
        trigger: "#footer",
        start: "top bottom",
        end: "top 85%",
        scrub: 2,
    }
});

