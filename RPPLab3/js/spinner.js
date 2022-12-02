import { enableButtons } from './form.js';

export function agregarSpinner() {
    let spinner = document.createElement("img");
    spinner.setAttribute("src", "../img/Running deer.gif");
    spinner.setAttribute("alt", "imagen spinner");
    spinner.setAttribute("width","100px");

    document.getElementById("spinner").appendChild(spinner);
    enableButtons(false);
}

export function eliminarSpinner() {
    enableButtons(true);
    document.getElementById("spinner").innerHTML = "";
}