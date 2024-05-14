const $ = (e, p = document) => document.querySelector(e, p);
const $$ = (e, p = document) => document.querySelectorAll(e, p);





window.onload = () => {
  const img = $('img');
  
  const lenis = new Lenis({
    wheelMultiplier: 0.6,
    syncTouch: true,
    touchMultiplier: 0.6
  })

  lenis.on('scroll', ScrollTrigger.update)
  gsap.ticker.add(time => lenis.raf(time * 2000))
  gsap.ticker.lagSmoothing(0)


  const hoiimg = new Image();
  for (let i = 1; i <= 151; i++) {
    hoiimg.src = `./images/frame-${i}.jpg`;

    hoiimg.addEventListener('load', () => {
      if (i > 150) {
        ScrollTrigger.create({
          ease: 'none',
          scroller: document.body,
          trigger: img,
          scrub: true,
          markers: true,
          start: 'top top',
          pin: img,
          end: 'bottom -200%',
          onUpdate: p => {
            const mappedPrg = gsap.utils.mapRange(0, 1, 1, 151, p.progress);
            const mappedRoundedPrg = Math.round(mappedPrg);
            const formattedFrameNumber = String(mappedRoundedPrg).padStart(3, '0');
            img.src = `./images/frame-${formattedFrameNumber}.jpg`;
          }
        })
      }
    })
  }





}