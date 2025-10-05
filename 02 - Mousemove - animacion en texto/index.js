let texto = document.querySelector('h1');
let  hero = document.querySelector('.hero');

/*document.addEventListener('mousemove', function(e) {
    let x = e.offsetX;
    let y = e.offsetY;
    //Que la sombra se mueva por todo el texto
    texto.style.textShadow = `${x}px ${y}px 0 rgba(255,0,255,0.7)`;
});*/

hero.addEventListener('mouseleave', function(e) {
    let {offsetX: x, offsetY: y} = e;
    let {offsetWidth: width, offsetHeight: height} = hero;

    let moveX = Math.round((x / width * 100) - 50);
    let moveY = Math.round((y / height * 100) - 50);
    texto.style.textShadow = `${moveX}px ${moveY}px 0px rgba(248, 6, 6, 1)`;
});
