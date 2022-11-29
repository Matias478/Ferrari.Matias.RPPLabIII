import { enableButtons } from './form.js';

export function agregarSpinner() {
    let spinner = document.createElement("img");
    spinner.setAttribute("src", "../img/Hourglass.gif");
    spinner.setAttribute("alt", "imagen spinner");

    document.getElementById("spinner").appendChild(spinner);
    enableButtons(false);
}

export function eliminarSpinner() {
    enableButtons(true);
    document.getElementById("spinner").innerHTML = "";
}