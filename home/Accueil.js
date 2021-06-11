const titreSpans = document.querySelectorAll('h1 span');
const l1 = document.querySelector('.l1');
const l2 = document.querySelector('.l2');

window.addEventListener('load', () => {

    const TL = gsap.timeline({paused: true});

    TL.staggerFrom(titreSpans, 1, {top: -50, opacity: 0, ease: "power2.out"}, 0.5)
    .from(l1, 1, {width: 0, ease: "power2.out"}, '-=2')
    .from(l2, 1, {width: 0, ease: "power2.out"}, '-=2')
    
    TL.play();

})