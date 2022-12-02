import {validarCampoVacio,validarCantCaracteres,validarCampoPrecio} from "./validaciones.js";
import {createTable,updateTable} from "./tablaDinamica.js";
import {crear,borrar,modificar} from "./crud.js";
import AnuncioMascota from "./anuncioMascota.js";
import { getLocalStorageData, setLocalStorageData } from "./localStorage.js";
import {enableButtons, formData,hideButtons,showButtons,updateForm} from "./form.js";
import {agregarSpinner,eliminarSpinner} from "./spinner.js";

const $formulario = document.forms[0];
const controles = $formulario.elements;
const alert = document.getElementById("customAlert");
alert.classList.add("hidden");

let localData;

window.addEventListener("load", () => {
    localData = getLocalStorageData(AnuncioMascota.getLocalStorage());

    updateTable(localData);

    console.log("Data desde el load", localData);
});

for (let index = 0; index < controles.length; index++) {
    const control = controles.item(index);
    if(control.matches("input")){
        if(control.matches("[type=text]")){
            control.addEventListener("blur", validarCampoVacio);
            control.addEventListener("blur",validarCantCaracteres);
            if(control.matches("[type=number]")){
                control.addEventListener("blur", validarCampoPrecio);
            }
        }
    }
}


window.addEventListener("click", (e) => {
    if (e.target.matches("td")) {
        showButtons();
        updateForm(e.target.parentElement, $formulario.elements);
    }
    if (e.target.matches("#btnCancelar")) {
        hideButtons();
    }
    if (e.target.matches("#btnEliminar")) {
        let id = $formulario.elements.formId.value;
        borrar(id);
        customAlert("Anuncio Borrado !!!",1);
        agregarSpinner();

        localData = getLocalStorageData(AnuncioMascota.getLocalStorage());

        setTimeout(() => {
            updateTable(localData);
            hideButtons();
            eliminarSpinner();
            setTimeout(()=>{
                limpiarTextAlert();
            },2000);
        },3000);

        $formulario.reset();
    }
});

$formulario.addEventListener("submit", (e) => {

    e.preventDefault();
    const formAnuncio = formData($formulario.elements);

    if(validarInputsEnBlanco()&&!validarFormEnBlanco()){
        if(formAnuncio.id===""){
            crear(formAnuncio)
            customAlert("Anuncio Creado!!!",1);
        }else{
            modificar(formAnuncio);

            customAlert("Anuncio Modificado!!!",1);
        }
        agregarSpinner();

        //console.log(document.getElementById("fileFotoAnuncio").value); ruta de el archivo!!!!

        localData = getLocalStorageData(AnuncioMascota.getLocalStorage());
    
        setTimeout(() => {
            updateTable(localData);
            eliminarSpinner();
            setTimeout(()=>{
                limpiarTextAlert();
            },2000);
        }, 3000);
        hideButtons();
        $formulario.reset();
    }else{
        customAlert("Debe Completar todos los campos del anuncio!!!",2);
        setTimeout(()=>{
            limpiarTextAlert();
        },2000)
    }
    // for (const controls of controles) {//si tienen la clase error no se deja crear o modificar un anuncio
    //     if(controls.classList.contains("inputError")){
    //         return;
    //     }
    // }

    //formAnuncio.id === '' ? crear(formAnuncio) : modificar(formAnuncio); // ???

});

let nav = document.getElementById("nav-header");

window.addEventListener("scroll",()=>{
    let scroll = window.scrollY;
    if(scroll>10){
        nav.style.background = "hwb(29 0% 0%)";
    }
});

function limpiarTextAlert() {
    alert.textContent="";
    alert.classList.add("hidden");
}
function customAlert(texto,condicion) {
    if(condicion===1){
        setTimeout(()=>{
            alert.classList.remove("hidden");
            alert.textContent=texto;
        },3000);
    }else{
        alert.classList.remove("hidden");
        alert.textContent=texto;
    }
}


function validarInputsEnBlanco(){
    const controles = $formulario.elements;

    for (const control of controles) {
      if (control.classList.contains("inputError")) {
        return false;
      }
    }
    return true;
};
  
function validarFormEnBlanco(){
    if ($formulario.txtTitulo.value== "" ||
        $formulario.txtDescripcion.value== "" ||
        $formulario.numPrecio.value== "" ||
        $formulario.txtRaza.value== "" ||
        $formulario.dateFechaNacimiento.value== ""){
        return true;
    }
    return false;
};


