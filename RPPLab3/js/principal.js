import AnuncioMascota from "./anuncioMascota.js";
import { getLocalStorageData } from "./localStorage.js";

let localData;

window.addEventListener("load", () => {
    localData = getLocalStorageData(AnuncioMascota.getLocalStorage());
    console.log(localData);

    localData.forEach(item => {
        createDivs(item);
    });
});

function createDivs(item) {
    const article = document.querySelector("#articles");
    const div = document.createElement("div");
    div.className = "article";

    const title = document.createElement("h1");
    const description = document.createElement("p");
    
    //const animal = document.createElement("p");

    const price = document.createElement("p");
    price.id = "price";

    const raza = document.createElement("p");
    raza.style.display = "inline";

    const fecha = document.createElement("p");
    fecha.style.display = "inline";
    
    const vacuna = document.createElement("p");
    vacuna.style.display = "inline";    

    const estaCastrado = document.createElement("p");
    estaCastrado.style.display="inline";

    const razaIcon = document.createElement("img");
    razaIcon.src = "./img/razaicono.png";
    razaIcon.style.margin = "5px";
    razaIcon.classList.add("iconsPagPrincipal");

    const fechaIcon = document.createElement("img");
    fechaIcon.src = "./img/cigueña.png";
    fechaIcon.style.margin = "5px";
    fechaIcon.classList.add("iconsPagPrincipal");

    const vacunaIcon = document.createElement("img");
    vacunaIcon.src = "./img/sangre.png";
    vacunaIcon.style.margin = "5px";
    vacunaIcon.classList.add("iconsPagPrincipal");

    const castradoIcon = document.createElement("img");
    castradoIcon.src = "./img/fertibilidad.jpg";
    castradoIcon.style.margin = "5px";
    castradoIcon.classList.add("iconsPagPrincipal");

    const tamaño = document.createElement("p");
    tamaño.style.display = "row";

    const boton = document.createElement("button");
    boton.id = "btnCancelar";
    boton.className = "formButton";        
    boton.innerHTML = "Ver Mascota";


    title.innerHTML = item.titulo;
    description.innerHTML = item.descripcion;
    price.innerHTML = "$" + item.precio;
    raza.innerHTML = item.raza;
    fecha.innerHTML = item.fechaNacimiento;
    vacuna.innerHTML = item.vacuna;
    estaCastrado.innerHTML = item.castrado;
    tamaño.innerHTML = "Tamaño: "+item.tamaño;
    div.appendChild(title);
    div.appendChild(description);
    div.appendChild(tamaño);
    div.appendChild(price);
    div.appendChild(razaIcon);
    div.appendChild(raza);
    div.appendChild(fechaIcon);
    div.appendChild(fecha);
    div.appendChild(vacunaIcon);
    div.appendChild(vacuna);
    div.appendChild(castradoIcon);
    div.appendChild(estaCastrado);
    div.appendChild(boton);


    article.appendChild(div);
}