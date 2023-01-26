function copyTextDesencriptado() {
    let textoDesencriptado = document.getElementById("outputSalida");
    textoDesencriptado.select();
    document.execCommand('copy');
}

function encriptar() {
    let palabra = document.getElementById("inputEncrip").value.toLowerCase();
    let palabraEncriptada = "";
    for (let i = 0; i < palabra.length; i++) {
        switch (palabra[i]) {
            case "a":
                palabraEncriptada += "ai";
                break;
            case "e":
                palabraEncriptada += "enter";
                break;
            case "i":
                palabraEncriptada += "imes";
                break;
            case "o":
                palabraEncriptada += "ober";
                break;
            case "u":
                palabraEncriptada += "ufat";
                break;
            default:
                palabraEncriptada += palabra[i];
                break;
        }
    }
    document.getElementById("inputEncrip").value = ""
    document.getElementById("outputSalida").value = palabraEncriptada;
}
function desencriptar() {
    let palabra = document.getElementById("inputEncrip").value.toLowerCase();

    palabra = palabra.replaceAll("enter", "e").replaceAll("ai", "a").replaceAll("imes", "i").replaceAll("ober", "o").replaceAll("ufat", "u")
    
    document.getElementById("inputEncrip").value = ""
    document.getElementById("outputSalida").value = palabra
}


