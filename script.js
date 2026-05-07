<script>

/* SCROLL REVEAL ANIMATION */

window.addEventListener('scroll', reveal);

function reveal(){

    let reveals = document.querySelectorAll('.reveal');

    for(let i = 0; i < reveals.length; i++){

        let windowHeight = window.innerHeight;

        let revealTop = reveals[i].getBoundingClientRect().top;

        let revealPoint = 120;

        if(revealTop < windowHeight - revealPoint){

            reveals[i].classList.add('active');

        }

    }

}

/* SMOOTH NAVBAR EFFECT */

window.addEventListener("scroll", function(){

    const nav = document.querySelector("nav");

    nav.classList.toggle("sticky", window.scrollY > 50);

});

/* PREMIUM BUTTON RIPPLE EFFECT */

const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {

button.addEventListener('click', function(e){

const x = e.clientX - e.target.offsetLeft;
const y = e.clientY - e.target.offsetTop;

const ripple = document.createElement('span');

ripple.style.left = x + 'px';
ripple.style.top = y + 'px';

this.appendChild(ripple);

setTimeout(() => {
ripple.remove();
}, 600);

});

});

</script>