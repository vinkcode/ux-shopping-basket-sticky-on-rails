const train = () => {

    var element = document.querySelector(".right");
    var stop = document.querySelector(".stop");
        stop.style.marginTop = stop.offsetTop + "px";
        var lastScrollTop = 0;

        const go = () => {

            var pageOffset = window.pageYOffset || document.documentElement.scrollTop;
            if (pageOffset > lastScrollTop){
               // user scrolling down
               if(window.scrollY < stop.offsetTop - element.offsetHeight) {
                element.style.marginTop = window.scrollY + "px";
                }
                else if(element.offsetTop > stop.offsetTop - element.offsetHeight) {
                    element.style.marginTop = stop.offsetTop - element.offsetHeight + "px";
                }
            } else {
               // user scrolling up
               element.style.marginTop = window.scrollY + "px";
            }
            // For Mobile or negative scrolling
            lastScrollTop = pageOffset <= 0 ? 0 : pageOffset;
        } 



        return go;
}


//const rails = () => {

//}



export {train}