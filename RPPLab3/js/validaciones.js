export const validarCampoVacio=(e)=>{
    const input = e.target;
    const value = input.value.trim();

    (!value)?setError(input):clearError(input);
};

const validarLongitudMaxima = (input,maximo)=> input.value.trim().length < maximo;

export const validarCantCaracteres = (e)=>{
    const input = e.target;

    if(!validarLongitudMaxima(input,30))
    {
        setError(input,"No puede tener mas de 30 caracteres");
    }
};

export const validarCampoPrecio=(e)=>{
    const input = e.target;
    console.log(input.value);
    if(input.value<0||input.value>50000)
    {
        setError(input,"El campo de precio es entre 0 y 50000");
    }
};

const setError = (input,mensaje)=>{
    const small = input.nextElementSibling; 
    small.textContent= mensaje || `${input.name} requerido`; 
    input.classList.add("inputError");
    small.classList.add("danger");
}
const clearError = (input,mensaje)=>{
    const small = input.nextElementSibling;
    small.textContent="";
    input.classList.remove("inputError");
    small.classList.remove("danger");
}