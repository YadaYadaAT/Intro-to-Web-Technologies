document.addEventListener('DOMContentLoaded', function(event){
    //need an array with all the data that goes into the typewriter
    var typeData = ["Artist", "smth", "Woman"];
    let i = 0;

    function typeWriter(text, i, fnCallback){
        if (i < (text.length)) {
            //add the next character if the text isn't finished yet
            document.querySelector("dev-line").innerHTML = text.substring(0, i+1) + '<span aria-hidden="true"></span>';

            //wait a bit before calling the function again
            setTimeout(function() {
                typeWriter(text, i + 1, fnCallback)
            }, 100);
        }
        else if (typeof fnCallback == 'function') {
            setTimeout(fnCallback, 700);
        }
    };

    //starting typewriter animation for some text in the array

    function startTextAnimation(i) {
        if (typeof typeData[i] == 'undefined'){
            setTimeout(function() {
                startTextAnimation(0);
            }, 20000);
        }
    }
    if(i < typeData[i].length) {
        typeWriter(typeData[i], 0, function(){
            //callback until the entire thing is animated, then we start with the next word
            startTextAnimation(i + 1);
        });
    }
    

    startTextAnimation(0);
});

