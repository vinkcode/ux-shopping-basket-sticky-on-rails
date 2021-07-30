const train = () => {

    let element = document.querySelector(".right");
    let stop = document.querySelector(".stop");
    
    // using margin to animate the movement
    stop.style.marginTop = stop.offsetTop + "px";

    let trainStart = element.offsetTop;
    let lastScrollTop = 0;

    return () => {
        let startScrolling = window.scrollY >= element.offsetTop ? true : false;
        let stopScrolling = stop.offsetTop - element.offsetHeight > window.scrollY ? true : false;
        let startReverse = element.offsetTop >= trainStart && stop.offsetTop - element.offsetHeight;
        let pageOffset = window.pageYOffset || document.documentElement.scrollTop;
        
        if (pageOffset > lastScrollTop) {
            // user scrolling down
            if (startScrolling && stopScrolling) {
                element.style.marginTop = window.scrollY - trainStart + "px";
            }
        } else {
            // user scrolling up
            if (startReverse > window.scrollY) {
                element.style.marginTop = window.scrollY - trainStart + "px";
            }
        }
        // For Mobile or negative scrolling
        lastScrollTop = pageOffset <= 0 ? 0 : pageOffset;

        //tmp bugfix
        if(parseInt(document.querySelector(".right").style.marginTop.replace("px", "")) < 0) {
            element.style.marginTop = "0px";
        }
    };
}

const trainDeparture = (start) => {
    if (start) {
        let move = train();
        let ticking = false;

        document.addEventListener('scroll', (e) => {
            if (!ticking) {
                window.requestAnimationFrame(function () {
                    move();
                    ticking = false;
                });
                ticking = true;
            }
        });
    }
}

export { train, trainDeparture }