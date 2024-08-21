function encriptar(){
    let texto =document.getElementById("texto").value;
    let tituloMensaje=document.getElementById("titulo-mensaje");
    let parrafo=document.getElementById("parrafo");
    
    let muñeco= document.getElementById("muñeco");
    let textoCifrado=texto
    .replace(/e/gi,"enter")
    .replace(/i/gi,"imes")
    .replace(/a/gi,"ai")
    .replace(/o/gi,"ober")
    .replace(/u/gi,"ufat");

    if(document.getElementById("texto").value.length !=0){
        document.getElementById("texto").value=textoCifrado;
        tituloMensaje.textContent="texto encriptado con exito";
        parrafo.textContent="";
        muñeco.src="./img/encriptado.jpg";
    }else{
        muñeco.src="./img/Muñeco.png";
        parrafo.textContent="Ingresa el texto que deseas encriptar o desencriptar";
        tituloMensaje.textContent="Ningun mensaje encontrado";
        alert("Debes ingresar algun texto");
    }

}

function desencriptar(){
    
    let tituloMensaje=document.getElementById("titulo-mensaje");
    let parrafo=document.getElementById("parrafo");
    
    let muñeco= document.getElementById("muñeco");
    let texto= document.getElementById("texto").value;

    let textoCifrado=texto
    .replace(/enter/gi,"e")
    .replace(/imes/gi,"i")
    .replace(/ai/gi,"a")
    .replace(/ober/gi,"o")
    .replace(/ufat/gi,"u");

    if(document.getElementById("texto").value.length !=0){
        document.getElementById("texto").value=textoCifrado;
        tituloMensaje.textContent="texto desencriptado con exito";
        parrafo.textContent="";
        muñeco.src="./img/desencriptado.jpg";
    }else{
        muñeco.src="./img/Muñeco.png";
        parrafo.textContent="Ingresa el texto que deseas encriptar o desencriptar";
        tituloMensaje.textContent="Ningun mensaje encontrado";
        alert("Debes ingresar algun texto");

    }

}
