//Haz tú validación en javascript acá

const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const asunto = document.getElementById("asunto");

form.addEventListener("submit" , e =>{
    e.preventDefault();

    validarInputs();
});


/*Arow function para errores o valores requeridos  en los imputs*/ 
const setError = (element , message) =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = message;

    inputControl.classList.add("error");
    inputControl.classList.remove("success");
    
};

/*Arow function para  cuando los imputs cumplan los requerimientos*/ 
const setSuccess = element  =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = '';

    inputControl.classList.add("success");
    inputControl.classList.remove("error");
    
};

const validarEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validarInputs = () =>{
    const nombreValue = nombre.value.trim();
    const emailValue = email.value.trim();
    const asuntoValue = asunto.value.trim();

    if(nombreValue === ''){
        setError(nombre ,'Este campo requiere de un nombre');
    }else{
        setSuccess(nombre);
    }

    if(emailValue === ''){
        setError(email ,'Este campo es requerido completar');
    }else if(!validarEmail(emailValue)){
        setError(email ,"Email no valido");
    }else{
        setSuccess(email);
    }

    if(asuntoValue === ''){
        setError(asunto ,'Este campo es requerido completar');
    }else{
        setSuccess(asunto);
    }
    
};



//Menu bar

document.querySelector(".icon_menu").addEventListener("click" , animacion);

var l1 = document.querySelector(".linea1");
var l2 = document.querySelector(".linea2");
var l3 = document.querySelector(".linea3");
var menudesplegable = document.querySelector("section"+".menu");
var i = document.querySelector(".menu__list");
var itemsme1 = document.querySelector(".itm1");
var itemsme2 = document.querySelector(".itm2");
var itemsme3 = document.querySelector(".itm3");
var itemsme4 = document.querySelector(".itm4");
var itemsme5 = document.querySelector(".itm5");
var itemsme6 = document.querySelector(".itm6");

function animacion(){
    l1.classList.toggle("a");
    l2.classList.toggle("b");
    l3.classList.toggle("c");

    menudesplegable.classList.toggle("trasformacion");
    i.classList.toggle("menu_columna");
    itemsme1.classList.toggle("trns_itens");
    itemsme2.classList.toggle("trns_itens2");
    itemsme3.classList.toggle("trns_itens3");
    itemsme4.classList.toggle("trns_itens4");
    itemsme5.classList.toggle("trns_itens5");
    itemsme6.classList.toggle("trns_itens6");  
}




