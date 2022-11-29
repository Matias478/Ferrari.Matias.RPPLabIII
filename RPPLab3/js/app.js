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
const cBox = document.getElementById("estaCastrado");

let localData;

window.addEventListener("load", () => {
    localData = getLocalStorageData(AnuncioMascota.getLocalStorage());
     if(cBox.checked===true){
         cBox.value="SI";
     }else{
         cBox.value="NO";
     }
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
        customAlert("Anuncio Borrado");
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
    const controles = e.target.elements;

    for (const controls of controles) {//si tienen la clase error no se deja crear o modificar un anuncio
        if(controls.classList.contains("inputError")){
            return;
        }
    }

    //formAnuncio.id === '' ? crear(formAnuncio) : modificar(formAnuncio); // ???
    if(formAnuncio.id===""){
        crear(formAnuncio);
        customAlert("Anuncio Creado");
    }else{
        modificar(formAnuncio);
        customAlert("Anuncio Modificado");
    }
    agregarSpinner();

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
});


function limpiarTextAlert() {
    alert.textContent="";
    alert.classList.add("hidden");
}
function customAlert(texto) {
    setTimeout(()=>{
        alert.classList.remove("hidden");
        alert.textContent=texto;
    },3000);
}



