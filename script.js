
/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

// let matrizCodigo [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

/*
let codigoA = ["a", "ai"];
let codigoE = ["e", "enter"];
let codigoI = ["i", "imes"];
let codigoO = ["o", "ober"];
let codigoU = ["u", "ufat"];
*/

const textArea = document.querySelector(".texto-encriptar");

const textMsj = document.querySelector(".texto-desencriptar");


function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value)
    textMsj.value = textoEncriptado
    textArea.value = "";
    textMsj.style.backgroundImage = "none";
}

function encriptar(codigoEncriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    codigoEncriptado = codigoEncriptado.toLowerCase()
   
    for(let i = 0; i < matrizCodigo.length; i++) {
        if(codigoEncriptado.includes(matrizCodigo[i][0])) {
            codigoEncriptado = codigoEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }

    }
    return codigoEncriptado;
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value)
    textMsj.value = textoDesencriptado
    textArea.value = "";
    textMsj.style.backgroundImage = "none";
}

function desencriptar(codigoDesencriptado) {
    let matrizCodigoNvo = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];
    codigoDesencriptado = codigoDesencriptado.toLowerCase()
   
    for(let i = 0; i < matrizCodigoNvo.length; i++) {
        if(codigoDesencriptado.includes(matrizCodigoNvo[i][0])) {
            codigoDesencriptado = codigoDesencriptado.replaceAll(matrizCodigoNvo[i][0], matrizCodigoNvo[i][1])

        }

    }
    return codigoDesencriptado;
}

/* //////otra forma de copiar al portapapeles//////
function copiarPortapapeles() {
    textMsj.focus();
    document.execCommand("selectAll");
    document.execCommand("copy");
*/

function copiarPortapapeles() {
    textMsj.select();
    textMsj.setSelectionRange(0, 99999);
    document.execCommand("copy");
}


