export default class AnuncioMascota{
    
    static getLocalStorage() {
        return "mascotas";
    }

    constructor(id,titulo,descripcion,animal,precio,raza,fechaNacimiento,vacuna,castrado) {
        this.id=id;
        this.titulo=titulo;
        this.descripcion=descripcion;
        this.animal=animal;
        this.precio=precio;
        this.raza=raza;
        this.fechaNacimiento=fechaNacimiento;
        this.vacuna=vacuna;
        this.castrado=castrado;
    };

}