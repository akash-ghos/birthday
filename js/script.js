var tl = gsap.timeline();
function hero() {

  tl.from(".color-flag", {

    y: -100,
    opacity: 0,
    duration: 0.5,
    ease: 'power.in'
  })

  tl.from(".ribbon", {

    y: -100,
    opacity: 0,
    duration: 0.5,
    ease: 'power.in'
  })

  tl.from('.img-container', {

    x: 100,
    opacity: 0,
    ease: 'power.out',
    duration: 1,
    rotate: 360
  })

  tl.from(".name-guy", {

    opacity: 0,
    delay: 2,
    duration: 0.7
  })

  tl.from(".name-des", {

    opacity: 0,
    duration: 0.7,
  })

  tl.from(".scroll-up,.down-arrow", {

    opacity: 0,
    duration: 0.7,
    delay: 4
  })

}

hero()

gsap.to('.explore-msg', {

  scrollTrigger: {

    trigger: '.explore-msg-sec',
    start: 'top 60%',
    end: 'bottom center',
    scrub: true,
    // markers: true
  },

  opacity: 1,
  y: 0,
  ease: 'power2.out',
  stagger: 0.2
})

gsap.to('.explore-msg-2', {

  scrollTrigger: {

    trigger: '.something-sub-con',
    start: 'top 50%',
    end: 'bottom center',
    scrub: true,
    // markers: true
  },

  opacity: 1,
  y: 0,
  ease: 'power2.out',
  stagger: 0.2
})

function slide(){

gsap.to(".image-slide-wrapper", {

  transform: "translateX(-450%)",
  // delay: 1,
  ease: "power1.out",
  scrollTrigger: {

    trigger: ".image-slide-sec",
    // markers: true,
    start: "top 0%",
    end: "top -250%",
    scrub: 1,
    pin: true
  }
})

}

slide()

tl.to('.slide-text',{

  opacity:1
})


gsap.to('.envelope-container',{

  transform: 'translateX(0%)',
  ease: 'power1.out',
  scrollTrigger : {

    trigger: '.envelope-sec',
    start:'top 60%',
    // markers: true,
    once: true
  }
})

 gsap.utils.toArray(".note").forEach((card, index) => {
    gsap.fromTo(card,
      {
        opacity: 0,
        y: 60,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
          // markers: true
        },
      }
    );
  });

gsap.to('#starCanvas, .star-content, .star-name, .star-quote',{

  scrollTrigger : {

    trigger: '.starry-name-section',
    start: 'top 20%',
    once: true,
    // markers: true
  },

  x: 0,
  ease: 'power2.out'
})

gsap.to('.starry-name-section',{

  scrollTrigger : {

    trigger: '.starry-name-section',
    start: 'top 20%',
    once: true,
    // markers: true
  },

  opacity: 1,
  ease: 'power2.out'
}) 



// https://5fq5ddml-5500.inc1.devtunnels.ms/


const canvas = document.getElementById('starCanvas');
const ctx = canvas.getContext('2d');
let stars = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function createStars() {
  stars = [];
  for (let i = 0; i < 150; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5,
      alpha: Math.random(),
      delta: 0.005 + Math.random() * 0.015
    });
  }
}
createStars();

function animateStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let star of stars) {
    star.alpha += star.delta;
    if (star.alpha <= 0 || star.alpha >= 1) star.delta = -star.delta;

    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
    ctx.fill();
  }
  requestAnimationFrame(animateStars);
}
animateStars();






  function openEnvelope(el) {
    const envelope = el.querySelector('.envelope');
    envelope.classList.toggle('open');
  }






var confettiBtn = document.querySelector('.confetti-btn')

confettiBtn.addEventListener('click', () => {

  blastConfetti()
})

  setTimeout(() => {
    blastConfetti();
  }, 1500); 

 setTimeout(() => {
    createBalloon() ;
  }, 5000); 

function blastConfetti() {
  const wrapper = document.getElementById('confetti-wrapper');
  for (let i = 0; i < 120; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');


    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;


    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.top = '-10px';


    const rotate = Math.random() * 360;
    const duration = 2 + Math.random() * 2;
    const delay = Math.random() * 1;
    const drift = `${(Math.random() - 0.5) * 200}px`;

    confetti.style.setProperty('--drift', drift);
    confetti.style.animation = `fall ${duration}s ease-out ${delay}s forwards`;
    confetti.style.transform = `rotate(${rotate}deg)`;

    wrapper.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, (duration + delay) * 1000);
  }
}

function createBalloon() {
  // const wrapper = document.getElementById('balloon-wrapper');
  //       const balloon = document.createElement('div');
  //       balloon.classList.add('balloon');

  //       // Random left position
  //       balloon.style.left = Math.random() * 100 + 'vw';

  //       // Random size and color
  //       const color = `hsl(${Math.random() * 360}, 80%, 60%)`;
  //       const duration = 5 + Math.random() * 5;
  //       const drift = `${(Math.random() - 0.5) * 100}px`;

  //       balloon.style.backgroundColor = color;
  //       balloon.style.setProperty('--drift', drift);
  //       balloon.style.animationDuration = `${duration}s`;

  //       wrapper.appendChild(balloon);

  //       setTimeout(() => balloon.remove(), duration * 1000);


  const wrapper = document.getElementById('balloon-wrapper');
  const numberOfBalloons = 30; // total balloons

  for (let i = 0; i < numberOfBalloons; i++) {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');

    balloon.style.left = Math.random() * 100 + 'vw';

    const color = `hsl(${Math.random() * 360}, 80%, 60%)`;
    const duration = 5 + Math.random() * 4;
    const drift = `${(Math.random() - 0.5) * 100}px`;

    balloon.style.backgroundColor = color;
    balloon.style.setProperty('--drift', drift);
    balloon.style.animationDuration = `${duration}s`;

    wrapper.appendChild(balloon);

    // Remove after animation ends
    setTimeout(() => balloon.remove(), duration * 1000);
  }


}

// Continuously create balloons
// setInterval(createBalloon, 15000);