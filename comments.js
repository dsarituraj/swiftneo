
// =========================================
//              Comment
// ========================================

// function page4Animation() {
//     var elemC = document.querySelector("#elem-container");
//     var fixed = document.querySelector("#fixed-image");

//     elemC.addEventListener("mouseenter", function() {
//         fixed.style.display = "block";
//     });

//     elemC.addEventListener("mouseleave", function() {
//         fixed.style.display = "none";
//     });

//     var elems = document.querySelectorAll(".elem");
//     elems.forEach(function(e) {
//         e.addEventListener("mouseenter", function() {
//             var image = e.getAttribute("data-image");
//             fixed.style.backgroundImage = `url(${image})`;
//         });
//     });
// }

// page4Animation();

function page6Animation() {
    document.addEventListener('DOMContentLoaded', () => {
        gsap.registerPlugin(ScrollTrigger);
    
        // Main container animation on scroll
        gsap.from('#main6', {
            scrollTrigger: {
                trigger: '#main6',
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
                start: 'top 80%',
                end: 'bottom 20%',
                scrub: 1,
                markers: false,
                toggleActions: "play none none reverse" // Play on enter, reverse on leave
            },
            opacity: 1,
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
    


// function page8Animations() {
//     gsap.from("#btm8-part2 h4", {
//         x: 0,
//         duration: 1,
//         scrollTrigger: {
//             trigger: "#btm8-part2",
//             scroller: "#main",
//             // markers:true,
//             start: "top 80%",
//             end: "top 10%",
//             scrub: true
//         }
//     })
// }
// page8Animations();


// function page9Animation() {

// document.addEventListener('DOMContentLoaded', () => {
//     const videoSections = document.querySelectorAll('.sec-right9 video');

//     videoSections.forEach(video => {
//         video.addEventListener('mouseenter', () => {
//             video.play();
//         });

//         video.addEventListener('mouseleave', () => {
//             video.pause();
//             video.currentTime = 0;
//         });
//     });

//     // GSAP Animations
//     gsap.registerPlugin(ScrollTrigger);

//     gsap.from('.section9', {
//         scrollTrigger: {
//             trigger: '.section9',
//             start: 'top 80%',
//             end: 'bottom 20%',
//             toggleActions: 'play none none reverse',
//         },
//         opacity: 0,
//         y: 50,
//         duration: 1,
//         stagger: 0.3
//     });

//     gsap.from('.sec-left9 h2, .sec-left9 p', {
//         scrollTrigger: {
//             trigger: '.sec-left9',
//             start: 'top 90%',
//             end: 'bottom 10%',
//             toggleActions: 'play none none reverse',
//         },
//         opacity: 0,
//         x: -50,
//         duration: 1,
//         stagger: 0.3
//     });

//     gsap.to('.sec-left9 h2, .sec-left9 p', {
//         opacity: 1,
//         x: 0,
//         duration: 1,
//         onEnter: ({ target }) => gsap.to(target, { opacity: 1, x: 0 }),
//         onLeaveBack: ({ target }) => gsap.to(target, { opacity: 0, x: -50 }),
//     });
// });

// }
// page9Animation();

// function swiperAnimation() {
//     var swiper = new Swiper(".mySwiper", {
//         slidesPerView: "auto",
//         centeredSlides: true,
//         spaceBetween: 100,
//     });
// }
