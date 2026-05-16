import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.genDomain = function() {
    let wordOrigin = document.getElementById("word").value.replace(/\s+/g, '');
    let display = document.getElementById("result");

    if (wordOrigin.length < 4) {
        display.innerText = "Esta bien que no quieras usar el cerebro... pero no abuses!, coloca almenos cuatro letritas";
        return;
    }
        let initialPart = wordOrigin.slice(0, -3);
        let extensionPart = wordOrigin.slice(-3);
        
        let getHack = initialPart + "." + extensionPart;
        
        display.innerText = "Tu dominio sera: " + getHack.toLowerCase();
    
}

//******Codigo anterior********
//     window.generarHack = function() {
//     let inpuText = document.getElementById("word").value.replace(/\s+/g, '');
//     let display = document.getElementById("result");

//     if (inpuText.length < 4) {
//         display.innerText = "Esta bien que no quieras usar el cerebro... pero no abuses!, coloca almenos cuatro letritas";
//     } else {
//         let nombre = inpuText.slice(0, -3);
//         let tld = inpuText.slice(-3);
        
//         let hack = nombre + "." + tld;
        
//         display.innerText = "Tu dominio sera: " + hack.toLowerCase();
//     }
// }
