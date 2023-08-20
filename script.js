var tl = gsap.timeline();
// function time() {
//   var tm =0;
//   setInterval(function () {
//     tm = tm + Math.floor(Math.random() * 10);
//     if (tm < 100) {
//       document.querySelector("#loader").innerHTML = tm + "%";
//       console.log(tm);
//     }else{
//       tm = 100;
//       document.querySelector("#loader").innerHTML=tm+ "%";
//     }
//   }, 150);
// }

// tl.to("#loader h1", {
//   delay:0.5,
//   duration:4,
//   onStart:time()
// });

// tl.to("#loader", {
//   scale:1.9,
//   top: "-150vh",
//   delay:0.5,
//   duration:1.3
// });


var typed = new Typed(".typing", {
  strings: ["Suresh", "Web Developer", "Programmer"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: Infinity,
});
var tl2 = gsap.timeline();
tl2.from("#logo,.links",{
  y:-100,
  delay:0.1,
  duration:.6,
  stagger:0.2
})
tl2.from(" #hero ",{
  opacity:0,
  scale:0.6,
  stagger:0.2
})
tl2.from(" #hero h1, #hero span",{
  // scale:1.3,
  opacity:0,
  y:10,
  delay:0.2,
  stagger:0.2
})
tl2.from("#work-container, .last",{
  opacity:0,
  y:-10,
  stagger:0.3
})

const instaIcon = document.getElementById('insta');
const linkedIcon = document.getElementById('linked');
const emailIcon = document.getElementById('email');
const githubIcon = document.getElementById('github')
instaIcon.addEventListener('click', function() {
  window.open('https://www.instagram.com/sureshkumawat_01/', '_blank');
});
githubIcon.addEventListener('click', function() {
  window.open('https://github.com/sureshkumar8696', '_blank');
});

linkedIcon.addEventListener('click', function() {
  window.open('https://www.linkedin.com/in/sureshkumar007/', '_blank');
});

emailIcon.addEventListener('click', function() {
  window.open('mailto:suresh08696@gmail.com', '_blank');
});
const contact = document.querySelector(".contact");
contact.addEventListener('click',function(){
  window.location.href = "#connect"
})


