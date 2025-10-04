let secuencia = [];
let reproducirBtn = document.getElementById('reproducirBtn');
let limpiarSecuenciaBtn = document.getElementById('limpiarBtn');

document.addEventListener('keydown', function(e) {
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    console.log(audio);
    audio.play();
    guardarSecuencia(e.keyCode);
});

function guardarSecuencia(codigoTecla) {
    secuencia.push(codigoTecla);
}

function reproducirSecuencia() {
    for (let i = 0; i < secuencia.length; i++) {
        setTimeout(function() {
            let audioEnSecuencia = document.querySelector(`audio[data-key="${secuencia[i]}"]`);
            audioEnSecuencia.play();
        }, i * 500); // Reproduce cada sonido con un intervalo de 500ms
    }
}

function limpiarSecuencia() {
    secuencia = [];
}

reproducirBtn.addEventListener('click', reproducirSecuencia);
limpiarSecuenciaBtn.addEventListener('click', limpiarSecuencia);