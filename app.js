//1-DECLARACIÓN DE VARIABLES
let mensajeAEncriptar = "";
let mensajeEncriptado = "";
let mensajeDesencriptado = "";

//2-DECLARARACION DE FUNCIONES
//invisibilzar el boton
function inicilizarPantalla() {
    mensajeAEncriptar = "";
    mensajeEncriptado = "";
    mensajeDesencriptado = "";
    document.querySelector("#mensajeEncriptado").value = "";
    document.querySelector("#idDesencriptar").setAttribute("disabled", "true");
    document.getElementById("idCopiar").style.visibility = "hidden";
    document.getElementById("mensajeEncriptado").readOnly = true;
    document.getElementById("idLimpiar").style.visibility = "hidden";
    document.getElementById("mensajeOriginal").readOnly = false;
    document.getElementById("idEncriptar").removeAttribute("disabled");
}
function hacerInvisible() {
    document.getElementById("idCopiar").style.visibility = "hidden";
}
//Visibilizar el boton
function hacerVisible() {
    document.getElementById("idCopiar").style.visibility = "visible";
}


function encriptar() {
    mensajeAEncriptar=document.getElementById("mensajeOriginal").value;
    console.log(`mensaje a encriptar: ${mensajeAEncriptar} tipo de dato: ${typeof(mensajeAEncriptar)}`)
    console.log(`Longitud del mensaje: ${mensajeAEncriptar.length}`);
        
    for (let i = 0; i < mensajeAEncriptar.length; i++) {
        let letra = mensajeAEncriptar[i];
        console.log(letra);
        switch (letra) {
            case 'a': mensajeEncriptado += 'ai'; break;
            case 'e': mensajeEncriptado += 'enter'; break;
            case 'i': mensajeEncriptado += 'imes'; break;
            case 'o': mensajeEncriptado += 'ober'; break;
            case 'u': mensajeEncriptado += 'ufat'; break;
            default: mensajeEncriptado += letra; break;
        }
    }
    console.log(`mensaje encriptado: ${mensajeEncriptado} tipo de dato: ${typeof(mensajeEncriptado)}`)
    console.log(`Longitud del mensaje: ${mensajeEncriptado.length}`);
    document.getElementById("mensajeEncriptado").value = mensajeEncriptado;
    document.getElementById("mensajeOriginal").readOnly = true;
    hacerVisible();
    return;
}

function copiar() {
    //Borro mensaje original
    document.getElementById("mensajeOriginal").value = "";
    document.getElementById("mensajeEncriptado").value;
    //copiar texto al portapapeles
    navigator.clipboard.writeText(mensajeEncriptado);
    document.getElementById("mensajeEncriptado").value = "";
    document.getElementById("mensajeOriginal").value = "";
    document.querySelector("#idDesencriptar").removeAttribute("disabled");
    document.querySelector("#idEncriptar").setAttribute("disabled", "true");
    document.getElementById("mensajeOriginal").readOnly = false;
    hacerInvisible();
}

function desencriptar() {
    console.log(`mensaje a desencriptar: ${mensajeEncriptado} tipo de dato: ${typeof(mensajeEncriptado)}`)
    console.log(`Longitud del mensaje: ${mensajeEncriptado.length}`);
    let i = 0;
    while (i <= (mensajeEncriptado.length-1)) {
        let letra = mensajeEncriptado[i];
        console.log(letra);
        switch (letra) {
            case 'a': {
                let j=i+1;
                if (mensajeEncriptado[j] == 'i') {mensajeDesencriptado+='a', i=j+1;}
                else {mensajeDesencriptado+= 'a'; i++};
                break;
            }
            case 'e': {
                let j=i+1;
                if (mensajeEncriptado[j] == 'n' && mensajeEncriptado[j + 1] == 't' && mensajeEncriptado[j + 2] == 'e' && mensajeEncriptado[j + 3] == 'r') 
                {mensajeDesencriptado+= 'e'; i=j+4}
                else {mensajeDesencriptado+= 'e'; i++};
                break;
                }
            case 'i': {
                let j=i+1;
                if (mensajeEncriptado[j] == 'm' && mensajeEncriptado[j + 1] == 'e' && mensajeEncriptado[j + 2] == 's')
                    { mensajeDesencriptado+= 'i'; i=j+3;}
                else {mensajeDesencriptado+= 'i'; i++};;
                break;
                }   
            case 'o': {
                let j=i+1;
                if (mensajeEncriptado[j] == 'b' && mensajeEncriptado[j + 1] == 'e' && mensajeEncriptado[j + 2] == 'r')
                    { mensajeDesencriptado+= 'o'; i=j+3; }
                else {mensajeDesencriptado+= 'o'; i++};
                break;
                }
            case 'u': {
                let j=i+1;
                if (mensajeEncriptado[j] == 'f' && mensajeEncriptado[j + 1] == 'a' && mensajeEncriptado[j + 2] == 't')
                    { mensajeDesencriptado+= 'u'; i=j+3; }
                else {mensajeDesencriptado+= 'u'; i++};
                break;
                }
            default: { mensajeDesencriptado += letra; i++; break; }
        }
    }
    console.log(`mensaje desencriptado ${mensajeDesencriptado}`)      
    document.getElementById("mensajeEncriptado").value = mensajeDesencriptado;
    document.getElementById("mensajeOriginal").value = "";
    document.querySelector("#idDesencriptar").setAttribute("disabled", "true");
    document.getElementById("mensajeOriginal").readOnly = true;
    document.getElementById("idLimpiar").style.visibility = "visible";
}

function limpiar() {
    inicilizarPantalla();
}
//4-EJCUCION DE FUNCIONES
inicilizarPantalla();
