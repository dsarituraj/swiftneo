
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});



function menuAnimation() {
    var menu = document.querySelector("nav h3");
    var full = document.querySelector("#full-scr");
    var navimg = document.querySelector("#nav-part2");
    var flag = 0;

    menu.addEventListener("click", function () {
        if (flag == 0) {
            gsap.to(full, {top: 0, duration: 0.4});
            gsap.to(navimg, {opacity: 0, duration: 0.4});
            flag = 1;
        } else {
            gsap.to(full, {top: "-100%", duration: 0.4});
            gsap.to(navimg, {opacity: 1, duration: 0.4});
            flag = 0;
        }
    });
}
menuAnimation();


function page2Animation() {
    var rightElems = document.querySelectorAll(".right-elem")

    rightElems.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {




            gsap.to(elem.childNodes[3], {
                opacity: 1,
                scale: 1
            })
        })
        elem.addEventListener("mouseleave", function () {
            gsap.to(elem.childNodes[3], {
                opacity: 0,
                scale: 0
            })
        })
        elem.addEventListener("mousemove", function (dets) {

            gsap.to(elem.childNodes[3], {
                x: dets.x - elem.getBoundingClientRect().x - 90,
                y: dets.y - elem.getBoundingClientRect().y - 215
            })
        })
    })
}
page2Animation();


function page4Animation() {
    var elemC = document.querySelector("#elem-container");
    var fixed = document.querySelector("#fixed-image");

    elemC.addEventListener("mouseenter", function() {
        fixed.style.display = "block";
    });

    elemC.addEventListener("mouseleave", function() {
        fixed.style.display = "none";
    });

    var elems = document.querySelectorAll(".elem");
    elems.forEach(function(e) {
        e.addEventListener("mouseenter", function() {
            var image = e.getAttribute("data-image");
            fixed.style.backgroundImage = `url(${image})`;
            // Optionally adjust the position if needed
            fixed.style.top = e.offsetTop + 'px'; // Example, adjust as needed
            fixed.style.left = e.offsetLeft + '50%'; // Example, adjust as needed
        });
    });
}

page4Animation()

function page6Animation() {
    document.addEventListener('DOMContentLoaded', () => {
        gsap.registerPlugin(ScrollTrigger);

        // Assuming locomotiveScroll instance is already created and assigned to locoScroll
        const locoScroll = new LocomotiveScroll({
            el: document.querySelector("#main"),
            smooth: true
        });

        locoScroll.on("scroll", ScrollTrigger.update);

        ScrollTrigger.scrollerProxy("#main", {
            scrollTop(value) {
                return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
            },
            getBoundingClientRect() {
                return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
            },
            pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
        });

        ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
        ScrollTrigger.refresh();

        // Main container animation on scroll
        gsap.from('#main6', {
            scrollTrigger: {
                trigger: '#main6',
                scroller: "#main", // Locomotive Scroll container
                start: 'top 80%',
                end: 'bottom top',
                scrub: 1,
                markers: false,
                toggleActions: "play none none reverse" // Play on enter, reverse on leave
            },
            opacity: 0,
            y: 60,
            scale: 0.95,
            duration: 1.5,
            ease: 'power3.out'
        });

        // Animation for the heading in main6-left
        gsap.from('.main6-left h2', {
            scrollTrigger: {
                trigger: '.main6-left h2',
                scroller: "#main", // Locomotive Scroll container
                start: 'top 80%',
                end: 'top 50%',
                scrub: 1,
                markers: false,
                toggleActions: "play none none reverse" // Play on enter, reverse on leave
            },
            opacity: 0,
            x: -100,
            scale: 1.05,
            duration: 1.5,
            ease: 'power3.out'
        });

        // Animation for the main6-right section
        gsap.from('.main6-right', {
            scrollTrigger: {
                trigger: '.main6-right',
                scroller: "#main", // Locomotive Scroll container
                start: 'top 80%',
                end: 'top 50%',
                scrub: 1,
                markers: false,
                toggleActions: "play none none reverse" // Play on enter, reverse on leave
            },
            opacity: 0,
            x: 100,
            scale: 1.05,
            duration: 1.5,
            ease: 'power3.out'
        });

        // Animation for the boxd elements
        gsap.from('.boxd', {
            scrollTrigger: {
                trigger: '.allcontents',
                scroller: "#main", // Locomotive Scroll container
                start: 'top 80%',
                end: 'bottom 20%',
                scrub: 1,
                markers: false,
                toggleActions: "play none none reverse" // Play on enter, reverse on leave
            },
            opacity: 0,
            y: 80,
            scale: 0.95,
            stagger: 0.2,
            duration: 1.5,
            ease: 'power3.out'
        });

        // Hover animations for .boxd elements
        const boxdElements = document.querySelectorAll('.boxd');

        boxdElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                gsap.to(element, {
                    scale: 1.1,
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });

            element.addEventListener('mouseleave', () => {
                gsap.to(element, {
                    scale: 1,
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
        });

        // Hover animations for #main6 h2 and p
        const h2Element = document.querySelector('#main6 h2');
        const pElement = document.querySelector('#main6 p');

        h2Element.addEventListener('mouseenter', () => {
            gsap.to(h2Element, {
                scale: 1.1,
                color: '#ff6600',
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        h2Element.addEventListener('mouseleave', () => {
            gsap.to(h2Element, {
                scale: 1,
                color: '#1a1a1a',
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        pElement.addEventListener('mouseenter', () => {
            gsap.to(pElement, {
                scale: 1.05,
                color: '#555555',
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        pElement.addEventListener('mouseleave', () => {
            gsap.to(pElement, {
                scale: 1,
                color: '#000000',
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
}

page6Animation();



function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 50, // Reduced space for larger images
        loop: true, // Enable infinite loop
        autoplay: {
            delay: 3000, // 3 seconds delay for auto sliding
            disableOnInteraction: false,
        },
        speed: 800, // Smooth transition speed
        on: {
            init: function () {
                let slides = document.querySelectorAll('.swiper-slide');
                slides.forEach((slide, index) => {
                    setTimeout(() => {
                        slide.style.opacity = '1';
                        slide.style.transform = 'translateY(0)';
                    }, index * 100); // Staggered animation
                });
            },
            slideChangeTransitionEnd: function () {
                let slides = document.querySelectorAll('.swiper-slide');
                slides.forEach(slide => {
                    slide.style.opacity = '1';
                    slide.style.transform = 'translateY(0)';
                });
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', swiperAnimation);

swiperAnimation();


function page8Animations() {
    gsap.registerPlugin(ScrollTrigger);

    // Assuming locomotiveScroll instance is already created and assigned to locoScroll
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();

    gsap.from("#btm8-part2 h4", {
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#btm8-part2",
            scroller: "#main", // Locomotive Scroll container
            // markers: true,
            start: "top 80%",
            end: "top 10%",
            scrub: true
        }
    });
}

page8Animations();



function page9Animation() {
    document.addEventListener('DOMContentLoaded', () => {
        const videoSections = document.querySelectorAll('.sec-right9 video');

        videoSections.forEach(video => {
            video.addEventListener('mouseenter', () => {
                video.play();
            });

            video.addEventListener('mouseleave', () => {
                video.pause();
                video.currentTime = 0;
            });
        });

        // GSAP Animations
        gsap.registerPlugin(ScrollTrigger);

        // Assuming locomotiveScroll instance is already created and assigned to locoScroll
        const locoScroll = new LocomotiveScroll({
            el: document.querySelector("#main"),
            smooth: true
        });

        locoScroll.on("scroll", ScrollTrigger.update);

        ScrollTrigger.scrollerProxy("#main", {
            scrollTop(value) {
                return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
            },
            getBoundingClientRect() {
                return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
            },
            pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
        });

        ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
        ScrollTrigger.refresh();

        gsap.from('.section9', {
            scrollTrigger: {
                trigger: '.section9',
                scroller: "#main", // Locomotive Scroll container
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse',
            },
            opacity: 0,
            y: 50,
            duration: 1,
            stagger: 0.3
        });

        gsap.from('.sec-left9 h2, .sec-left9 p', {
            scrollTrigger: {
                trigger: '.sec-left9',
                scroller: "#main", // Locomotive Scroll container
                start: 'top 90%',
                end: 'bottom 10%',
                toggleActions: 'play none none reverse',
            },
            opacity: 0,
            x: -50,
            duration: 1,
            stagger: 0.3
        });

        gsap.to('.sec-left9 h2, .sec-left9 p', {
            scrollTrigger: {
                trigger: '.sec-left9',
                scroller: "#main", // Locomotive Scroll container
                start: 'top 90%',
                end: 'bottom 10%',
                toggleActions: 'play none none reverse',
            },
            opacity: 1,
            x: 0,
            duration: 1,
            onEnter: ({ target }) => gsap.to(target, { opacity: 1, x: 0 }),
            onLeaveBack: ({ target }) => gsap.to(target, { opacity: 0, x: -50 }),
        });
    });
}
page9Animation();

function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4200)
}
loaderAnimation()
