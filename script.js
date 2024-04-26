function encriptar() {
    var texto = document.getElementById("inputText").value;
    var clave = 3; // Clave para el cifrado César
    var textoEncriptado = "";

    for (var i = 0; i < texto.length; i++) {
        var charCode = texto.charCodeAt(i);

        // Solo encriptar letras del alfabeto (mayúsculas y minúsculas)
        if (charCode >= 65 && charCode <= 90) {
            textoEncriptado += String.fromCharCode(((charCode - 65 + clave) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            textoEncriptado += String.fromCharCode(((charCode - 97 + clave) % 26) + 97);
        } else {
            textoEncriptado += texto[i]; // Mantener caracteres que no son letras sin cambios
        }
    }

    document.getElementById("outputText").value = textoEncriptado;
}

function desencriptar() {
    var textoEncriptado = document.getElementById("inputText").value;
    var clave = 3; // Clave para el cifrado César
    var textoDesencriptado = "";

    for (var i = 0; i < textoEncriptado.length; i++) {
        var charCode = textoEncriptado.charCodeAt(i);

        // Solo desencriptar letras del alfabeto (mayúsculas y minúsculas)
        if (charCode >= 65 && charCode <= 90) {
            textoDesencriptado += String.fromCharCode(((charCode - 65 - clave + 26) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            textoDesencriptado += String.fromCharCode(((charCode - 97 - clave + 26) % 26) + 97);
        } else {
            textoDesencriptado += textoEncriptado[i]; // Mantener caracteres que no son letras sin cambios
        }
    }

    document.getElementById("outputText").value = textoDesencriptado;
}
