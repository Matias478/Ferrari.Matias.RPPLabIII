import AnuncioMascota from "./anuncioMascota.js";

export function formData(dataInputs) {
        console.log(dataInputs.formId.value);
        return new AnuncioMascota(
                dataInputs.formId.value,
                dataInputs.Titulo.value,
                dataInputs.Descripcion.value,
                dataInputs.radioAnimal.value,
                dataInputs.numPrecio.value,
                dataInputs.Raza.value,
                dataInputs.fecha.value,
                dataInputs.tipoSangre.value,
                dataInputs.estaCastrado.value);
}

export function updateForm(tr, dataInputs) {
        dataInputs.formId.value = tr.id;
        dataInputs.Titulo.value = tr.children[0].textContent;
        dataInputs.Descripcion.value = tr.children[1].textContent;
        dataInputs.radioAnimal.value = tr.children[2].textContent;
        dataInputs.numPrecio.value = tr.children[3].textContent;
        dataInputs.Raza.value = tr.children[4].textContent;        
        dataInputs.fecha.value = tr.children[5].textContent;
        dataInputs.tipoSangre.value = tr.children[6].textContent;
        dataInputs.estaCastrado.value = tr.children[7].textContent;
}

export function showButtons() {
        document.querySelector('#btnSubmit').classList.add('hidden');
        document.querySelector('#btnActualizar').classList.remove('hidden');
        document.querySelector('#btnEliminar').classList.remove('hidden');
}

export function hideButtons() {
        document.querySelector('#id').value = "";
        document.querySelector('#btnSubmit').classList.remove('hidden');
        document.querySelector('#btnActualizar').classList.add('hidden');
        document.querySelector('#btnEliminar').classList.add('hidden');
}

export function enableButtons(enable) {
        if (enable) {
                document.querySelector('#btnSubmit').disabled = false;
                document.querySelector('#btnCancelar').disabled = false;
                document.querySelector('#btnActualizar').disabled = false;
                document.querySelector('#btnEliminar').disabled = false;
        } else {
                document.querySelector('#btnSubmit').disabled = true;
                document.querySelector('#btnCancelar').disabled = true;
                document.querySelector('#btnActualizar').disabled = true;
                document.querySelector('#btnEliminar').disabled = true;
        }
}