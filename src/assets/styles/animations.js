import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const imageMovingOnScroll = (element) => {
  gsap.fromTo(
    element,
    { y: '0' },
    {
      y: '-=70',

      scrollTrigger: {
        trigger: element,
        start: 'top top',
        scrub: 1,
      },
    }
  );
};

export const lazyLoading = (element) => {
  gsap.fromTo(
    element,
    { autoAlpha: 0, y: '-=30', visibility: 'visible' },
    {
      autoAlpha: 1,
      y: '0',
      duration: 1,
      stagger: 0.15,
      scrollTrigger: {
        trigger: element,
        start: `top 90%`,
      },
    }
  );
};
