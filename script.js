const train = () => {

    var element = document.querySelector(".right");
    var stop = document.querySelector(".stop");
        //console.dir(stop);
        //console.log(window.scrollY);

        //element.style.marginTop = ;
        //stop.style.marginTop = i;

        element.style.marginTop = element.offsetTop + "px";
        stop.style.marginTop = stop.offsetTop + "px";
        const go = () => {
            if(element.offsetTop < stop.offsetTop) {
                element.style.marginTop = window.scrollY + "px";
            }
            
        } 



        return go;
}


const rails = () => {

}

var test = train();

setInterval(() => {
    test();
},1000);
