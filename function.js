
let botonAbogacia = document.getElementById("botonAbogacia");

let ocultarAbogacia = document.getElementById("ocultarAbogacia");


botonAbogacia.addEventListener("click", toggleText1);

function toggleText1(){
    ocultarAbogacia.classList.toggle("show");

    if(ocultarAbogacia.classList.contains("show")){
        botonAbogacia.innerHTML = "Ver Menos"
    }
        else {
            botonAbogacia.innerHTML = "Ver Más"
        }
    
}

let botonMinisterio = document.getElementById("botonMinisterio");

let ocultarMinisterio = document.getElementById("ocultarMinisterio");


botonMinisterio.addEventListener("click", toggleText2);

function toggleText2(){
    ocultarMinisterio.classList.toggle("show");

    if(ocultarMinisterio.classList.contains("show")){
        botonMinisterio.innerHTML = "Ver Menos"
    }
        else {
            botonMinisterio.innerHTML = "Ver Más"
        }
    
}

let botonCamara = document.getElementById("botonCamara");

let ocultarCamara = document.getElementById("ocultarCamara");


botonCamara.addEventListener("click", toggleText3);

function toggleText3(){
    ocultarCamara.classList.toggle("show");

    if(ocultarCamara.classList.contains("show")){
        botonCamara.innerHTML = "Ver Menos"
    }
        else {
            botonCamara.innerHTML = "Ver Más"
        }
    
}

let botonConoc = document.getElementById("botonConoc");

let ocultarConoc = document.getElementById("ocultarConoc");


botonConoc.addEventListener("click", toggleText4);

function toggleText4(){
    ocultarConoc.classList.toggle("show");

    if(ocultarConoc.classList.contains("show")){
        botonConoc.innerHTML = "Ver Menos"
    }
        else {
            botonConoc.innerHTML = "Ver Más"
        }
    
}