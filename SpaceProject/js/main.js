var images = [];

document.addEventListener("DOMContentLoaded", function(){
    images = [
        '../SpaceProject/img/earth.jpg',
        '../SpaceProject/img/mercury.jpg',
        '../SpaceProject/img/venus.jpg',
        '../SpaceProject/img/mars.jpg',
        '../SpaceProject/img/jupiter.jpg',
        '../SpaceProject/img/saturn.jpg',
        '../SpaceProject/img/uranus.jpg',
        '../SpaceProject/img/neptune.jpg'
    ];
    images.forEach(Element => {
        var img = new Image();
        img.src = Element;
        console.log(img);   
    });
})

var clickMenuFlag = false;

window.onresize = function(){
    if (window.matchMedia("screen and (min-width: 501px)").matches) {
        document.getElementById('burger-menu').style.display = 'block';
    }
}

document.getElementById('name-spacebook').onclick = function(){
    if (window.matchMedia("screen and (min-width: 1px) and (max-width:600px)").matches) {
            if (clickMenuFlag == false){
            document.getElementById('burger-menu').style.display = 'block';
            clickMenuFlag = true;
        }else{
            document.getElementById('burger-menu').style.display = 'none';
            clickMenuFlag = false;
        }
    }
}

var planet = document.getElementsByClassName('planet-name');
var content = document.getElementsByClassName('content');
var bodystyle = document.querySelector('body').style;
var planetsNames = document.querySelectorAll('footer');

var Mercury = document.getElementById('Mercury').onclick = function(){
    bodystyle.backgroundSize = 'cover';
    bodystyle.backgroundImage = 'url(' + images[1] + ')';
    bodystyle.backgroundRepeat = 'no-repeat';
    bodystyle.backgroundPosition = 'fixed';
    
    planet[0].innerHTML = '<p>Mercury</p> <p>not home</p>';
    content[0].innerHTML = '<p>Age: <span>3,7 - 3,9 billion years</span> </p> <p>Radius: <span>2439 km</span></p><p>Satellite:   <span>NO</span></p>';

}

document.getElementById('Venus').onclick = function(){
    bodystyle.backgroundSize = 'cover';
    bodystyle.backgroundImage = 'url(' + images[2] + ')';
    bodystyle.backgroundRepeat = 'no-repeat';
    bodystyle.backgroundPosition = 'fixed';

    planet[0].innerHTML = '<p>Venus</p> <p>not home</p>';
    content[0].innerHTML = '<p>Age: <span>4,59 billion years</span> </p> <p>Radius: <span>6,051 km</span></p><p>Satellite:   <span>NO</span></p>';
}

document.getElementById('Earth').onclick = function(){
    bodystyle.backgroundSize = 'cover';
    bodystyle.backgroundImage = 'url(' + images[0] + ')';
    bodystyle.backgroundRepeat = 'no-repeat';
    bodystyle.backgroundPosition = 'fixed';

    planet[0].innerHTML = '<p>Earth</p> <p>home</p>';
    content[0].innerHTML = '<p>Age: <span>4,543 billion years</span> </p> <p>Radius: <span>6,371 km</span></p><p>Satellite:   <span>Moon</span></p>';
}
document.getElementById('Mars').onclick = function(){
    bodystyle.backgroundSize = 'cover';
    bodystyle.backgroundImage = 'url(' + images[3] + ')';
    bodystyle.backgroundRepeat = 'no-repeat';
    bodystyle.backgroundPosition = 'fixed';
    
    planet[0].innerHTML = '<p>Mars</p> <p>red planet</p>';
    content[0].innerHTML = '<p>Age: <span>4,603 billion years</span> </p> <p>Radius: <span>3,389 km</span></p><p>Satellite:   <span>Phobos and Deimos</span></p>';
}

document.getElementById('Jupiter').onclick = function(){
    bodystyle.backgroundSize = 'cover';
    bodystyle.backgroundImage = 'url(' + images[4] + ')';
    bodystyle.backgroundRepeat = 'no-repeat';
    bodystyle.backgroundPosition = 'fixed';
    
    planet[0].innerHTML = '<p>Jupiter</p> <p>not home</p>';
    content[0].innerHTML = '<p>Age: <span>4,503 billion years</span> </p> <p>Radius: <span>69,911 km</span></p><p>Satellite:   <span>Io Ganymede <br> Callisto</span></p>';
}
document.getElementById('Saturn').onclick = function(){
    bodystyle.backgroundSize = 'cover';
    bodystyle.backgroundImage = 'url(' + images[5] + ')';
    bodystyle.backgroundRepeat = 'no-repeat';
    bodystyle.backgroundPosition = 'fixed';
    
    planet[0].innerHTML = '<p>Saturn</p> <p>not home</p>';
    content[0].innerHTML = '<p>Age: <span>4,503 billion years</span> </p> <p>Radius: <span>58,232 km</span></p><p>Satellite:   <span>Titan</span></p>';
}
document.getElementById('Uranus').onclick = function(){
    bodystyle.backgroundSize = 'cover';
    bodystyle.backgroundImage = 'url(' + images[6] + ')';
    bodystyle.backgroundRepeat = 'no-repeat';
    bodystyle.backgroundPosition = 'fixed';
    
    planet[0].innerHTML = '<p>Uranus</p> <p>not home</p>';
    content[0].innerHTML = '<p>Age: <span>4,503 billion years</span> </p> <p>Radius: <span>25,362 km</span></p><p>Satellite:   <span>Miranda Ariel <br> Umbriel Titania <br> and Oberon</span></p>';
}
document.getElementById('Neptune').onclick = function(){
    bodystyle.backgroundSize = 'cover';
    bodystyle.backgroundImage = 'url(' + images[7] + ')';
    bodystyle.backgroundRepeat = 'no-repeat';
    bodystyle.backgroundPosition = 'fixed';
    
    planet[0].innerHTML = '<p>Neptune</p> <p>not home</p>';
    content[0].innerHTML = '<p>Age: <span>4,503 billion years</span> </p> <p>Radius: <span>24,622 km</span></p><p>Satellite:   <span>Triton  Nereid <br> and Protei</span></p>';
}