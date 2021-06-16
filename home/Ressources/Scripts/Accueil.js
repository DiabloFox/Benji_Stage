const titreSpans = document.querySelectorAll('h1 span');
const titreSpans2 = document.querySelectorAll('h2 span');

window.addEventListener('load', () => {

    const TL = gsap.timeline({paused: true});

    TL.staggerFrom(titreSpans, 1, {top: -50, opacity: 0, ease: "power2.out"}, 0.5)
    TL.staggerFrom(titreSpans2, 1, {top: -50, opacity: 0, ease: "power2.out"}, 0.5)

    
    TL.play();

})