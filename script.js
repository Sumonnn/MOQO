function pageOneAnim() {

    let page1TL = gsap.timeline({
        scrollTrigger: {
            trigger: ".page1",
            scroller: "body",
            // markers: true,
            scrub: 2,
            pin: true,
        }
    })
    page1TL.to(".page1-center>h1", {
        x: '-60vw',
        fontWeight: 300,
    })
    page1TL.to(".page1-center>h1", {
        x: '-125vw',
        fontWeight: 900,
    })
    page1TL.to(".page1-video", {
        top: 0,
    })
    page1TL.to(".page1-video", {
        scale: 1,
    })
}

function pageTwoAnim() {
    let page2TL = gsap.timeline({
        scrollTrigger:{
            trigger:".page2",
            scroller:"body",
            scrub:2,
            // markers:true,
            start:"40% 40%",
            pin:true,
        }
    });

    page2TL.to(".page2-left ", {
        opacity: 1,
        y:'-40vh',
    })
    page2TL.to(".page2-right ", {
        opacity:1,
        y:'-40vh',
    })
}

pageOneAnim();
pageTwoAnim();