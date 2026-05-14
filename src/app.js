import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.generarHack = function() {
    let inpuText = document.getElementById("word").value.replace(/\s+/g, '');
    let display = document.getElementById("result");

    if (inpuText.length < 4) {
        display.innerText = "Esta bien que no quieras usar el cerebro... pero no abuses!, coloca almenos cuatro letritas";
    } else {
        let nombre = inpuText.slice(0, -3);
        let tld = inpuText.slice(-3);
        
        let hack = nombre + "." + tld;
        
        display.innerText = "Tu dominio sera: " + hack.toLowerCase();
    }
}
