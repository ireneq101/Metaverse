// const Options = {
//     rootMargin: "0px",
//     threshold:1,
// }

// function observeFunc(entries) {
//     entries.forEach((entry) => {
//         console.log(entry)
//         if (entry.isIntersecting) {
//             const { target } = entry

//             if (
//                 target.class === "section4"
//             ) {
//                 target.classList.add ("fade-in")
//             }
//         }
//     })
// }

// const observer = new IntersectionObserver (
//     observeFunc,
//     Options
// )

// observer.observe (section4)


// const Options = {
//     rootMargin: "0px",
//     threshold:1,
// }
// const faders = document.querySelectorAll(".collections");

// const appearOptions = {};

// const appearOnScroll = new IntersectionObserver
// (function(
//     entries, 
//     appearOnScroll
// ) {
//    entries.forEach(entry => {
//     if (!entery.isIntersecting) {
//         return;
//     } else {
//         entry.target.classList.add("appear");
//         appearOnScroll.unobserve(entry.target);
//     }
//    }) 
// }, 
// appearOptions);

// faders.forEach(fader => {
//     appearOnScroll.observe(fader);
// })

<script>
  AOS.init();
</script>