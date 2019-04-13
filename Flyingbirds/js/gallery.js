var img = document.getElementsByClassName('imgbg');

var bgPath = {
    'path' : "../img/background1.png",
    set : function(value){
        this.path = value;
    }
}

img[0].addEventListener('click', function(){
    img[0].style.cssText = 'box-shadow:0px 0px 30px black; opacity: 1;';
    for(let i=0; i<img.length; i++){
        if (i != 0){
            img[i].style.cssText = 'box-shadow:0px 0px; opacity: 0.7';
        }
    }

    bgPath.set("../img/background1.png");
    localStorage.setItem('background', JSON.stringify(bgPath));
})

img[1].addEventListener('click', function(){
    img[1].style.cssText = 'box-shadow:0px 0px 30px black; opacity: 1;';
    for(let i=0; i<img.length; i++){
        if (i != 1){
            img[i].style.cssText = 'box-shadow:0px 0px; opacity: 0.7';
        }
    }

    bgPath.set("../img/background2.png");
    localStorage.setItem('background', JSON.stringify(bgPath));
})

img[2].addEventListener('click', function(){
    img[2].style.cssText = 'box-shadow:0px 0px 30px black; opacity: 1;';
    for(let i=0; i<img.length; i++){
        if (i != 2){
            img[i].style.cssText = 'box-shadow:0px 0px; opacity: 0.7';
        }
    }

    bgPath.set("../img/background3.png");
    localStorage.setItem('background', JSON.stringify(bgPath));
})
img[3].addEventListener('click', function(){
    img[3].style.cssText = 'box-shadow:0px 0px 30px black; opacity: 1;';
    for(let i=0; i<img.length; i++){
        if (i != 3){
            img[i].style.cssText = 'box-shadow:0px 0px; opacity: 0.7';
        }
    }

    bgPath.set("../img/background4.png");
    localStorage.setItem('background', JSON.stringify(bgPath));
})

img[4].addEventListener('click', function(){
    img[4].style.cssText = 'box-shadow:0px 0px 30px black; opacity: 1;';
    for(let i=0; i<img.length; i++){
        if (i != 4){
            img[i].style.cssText = 'box-shadow:0px 0px; opacity: 0.7';
        }
    }

    bgPath.set("../img/background5.png");
    localStorage.setItem('background', JSON.stringify(bgPath));
})

img[5].addEventListener('click', function(){
    img[5].style.cssText = 'box-shadow:0px 0px 30px black; opacity: 1;';
    for(let i=0; i<img.length; i++){
        if (i != 5){
            img[i].style.cssText = 'box-shadow:0px 0px; opacity: 0.7';
        }
    }

    bgPath.set("../img/background6.png");
    localStorage.setItem('background', JSON.stringify(bgPath));
})

img[6].addEventListener('click', function(){
    img[6].style.cssText = 'box-shadow:0px 0px 30px black; opacity: 1;';
    for(let i=0; i<img.length; i++){
        if (i != 6){
            img[i].style.cssText = 'box-shadow:0px 0px; opacity: 0.7';
        }
    }

    bgPath.set("../img/background7.png");
    localStorage.setItem('background', JSON.stringify(bgPath));
})
img[7].addEventListener('click', function(){
    img[7].style.cssText = 'box-shadow:0px 0px 30px black; opacity: 1;';
    for(let i=0; i<img.length; i++){
        if (i != 7){
            img[i].style.cssText = 'box-shadow:0px 0px; opacity: 0.7';
        }
    }

    bgPath.set("../img/background8.png");
    localStorage.setItem('background', JSON.stringify(bgPath));
})

window.onload = () => {
    if(localStorage.getItem('background') == null){
        localStorage.setItem('background', JSON.stringify(bgPath));
    }
}