function accionMouse(click){
    click.style.position ='absolute';
    click.style.top = Math.floor(Math.random()*90+5)+ '%'  ;
    click.style.left = Math.floor(Math.random()*90 + 5)+'%' ;
}

var tkk = document.querySelector('#theOption');
var tkk = document.querySelector('div.container');

theOption.addEventListener('mouseenter', function(e){ accionMouse(e.target);});

theOption.addEventListener('click', function(e){ alert ("You are good");});

console.log("nana")