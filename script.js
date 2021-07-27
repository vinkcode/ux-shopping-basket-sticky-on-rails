import { train } from './train-rails'

var test = train();

let ticking = false;

document.addEventListener('scroll', (e) => {
    if (!ticking) {
        window.requestAnimationFrame(function() {
        test();
        //console.log("scrolling");
        ticking = false;
        });
    ticking = true;
    }
});