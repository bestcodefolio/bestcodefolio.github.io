var birdPath;
var img = document.getElementsByClassName('imgbird');

var obj = {
    'path' : "../img/bird1.png",
    set : function(value){
        this.path = value;
    }
}

img[0].addEventListener('click', function(){
    img[0].style.cssText = 'box-shadow:0px 0px 30px gray; opacity: 1;';
    for(let i=0; i<img.length; i++){
        if (i != 0){
            img[i].style.cssText = 'box-shadow:0px 0px; opacity: 0.7';
        }
    }

    obj.set("../img/bird1.png");
    localStorage.setItem('bird', JSON.stringify(obj));
})

img[1].addEventListener('click', function(){
    img[1].style.cssText = 'box-shadow:0px 0px 30px gray; opacity: 1;';
    for(let i=0; i<img.length; i++){
        if (i != 1){
            img[i].style.cssText = 'box-shadow:0px 0px; opacity: 0.7';
        }
    }
    obj.set("../img/bird2.png");
    localStorage.setItem('bird', JSON.stringify(obj));
})

img[2].addEventListener('click', function(){
    img[2].style.cssText = 'box-shadow:0px 0px 30px gray; opacity: 1;';
    for(let i=0; i<img.length; i++){
        if (i != 2){
            img[i].style.cssText = 'box-shadow:0px 0px; opacity: 0.7';
        }
    }

    obj.set("../img/bird3.png");
    localStorage.setItem('bird', JSON.stringify(obj));
})
img[3].addEventListener('click', function(){
    img[3].style.cssText = 'box-shadow:0px 0px 30px gray; opacity: 1;';
    for(let i=0; i<img.length; i++){
        if (i != 3){
            img[i].style.cssText = 'box-shadow:0px 0px; opacity: 0.7';
        }
    }

    obj.set("../img/bird4.png");
    localStorage.setItem('bird', JSON.stringify(obj));
})

img[4].addEventListener('click', function(){
    img[4].style.cssText = 'box-shadow:0px 0px 30px gray; opacity: 1;';
    for(let i=0; i<img.length; i++){
        if (i != 4){
            img[i].style.cssText = 'box-shadow:0px 0px; opacity: 0.7';
        }
    }

    obj.set("../img/bird5.png");
    localStorage.setItem('bird', JSON.stringify(obj));
    
})

img[5].addEventListener('click', function(){
    img[5].style.cssText = 'box-shadow:0px 0px 30px gray; opacity: 1;';
    for(let i=0; i<img.length; i++){
        if (i != 5){
            img[i].style.cssText = 'box-shadow:0px 0px; opacity: 0.7';
        }
    }

    obj.set("../img/bird6.png");
    localStorage.setItem('bird', JSON.stringify(obj));
})

img[6].addEventListener('click', function(){
    img[6].style.cssText = 'box-shadow:0px 0px 30px gray; opacity: 1;';
    for(let i=0; i<img.length; i++){
        if (i != 6){
            img[i].style.cssText = 'box-shadow:0px 0px; opacity: 0.7';
        }
    }

    obj.set("../img/bird7.png");
    localStorage.setItem('bird', JSON.stringify(obj));
})
img[7].addEventListener('click', function(){
    img[7].style.cssText = 'box-shadow:0px 0px 30px gray; opacity: 1;';
    for(let i=0; i<img.length; i++){
        if (i != 7){
            img[i].style.cssText = 'box-shadow:0px 0px; opacity: 0.7';
        }
    }

    obj.set("../img/bird8.png");
    localStorage.setItem('bird', JSON.stringify(obj));
})

window.onload = () => {
    if(localStorage.getItem('bird') == null){
        localStorage.setItem('bird', JSON.stringify(obj));
    }
}