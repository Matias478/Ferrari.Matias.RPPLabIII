import AnuncioMascota from "./anuncioMascota.js";
import { getLocalStorageData, setLocalStorageData } from "./localStorage.js";

export function crear(newEntity) {
    console.log("createEntity", newEntity);
    let auxArray = getLocalStorageData(AnuncioMascota.getLocalStorage());
    console.log("aurarray", auxArray);
    auxArray !== null ? newEntity.id = (auxArray.length + 1) : newEntity.id = 0;
    auxArray.push(newEntity);
    setLocalStorageData(AnuncioMascota.getLocalStorage(), auxArray);
}

export function modificar(editedEntity) {
    console.log("edited", editedEntity);
    let actualData = getLocalStorageData(AnuncioMascota.getLocalStorage());
    let index = actualData.findIndex(x => x.id == editedEntity.id);
    actualData[index] = editedEntity;
    setLocalStorageData(AnuncioMascota.getLocalStorage(), actualData);
}

export function borrar(id) {
    let actualData = getLocalStorageData(AnuncioMascota.getLocalStorage());
    let index = actualData.findIndex(x => x.id == id);
    if(index==1)
    {
        actualData.shift();// ???
    }else{
        actualData.splice(index, 1);
    }
    setLocalStorageData(AnuncioMascota.getLocalStorage(), actualData);
}