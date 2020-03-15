const fs = require('fs');

let listadoPorHacer = []; // Areglo

/*===========================================
    Guardar Elementos del Array en el .JSON
=============================================*/

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer); // FUNCION QUE CONVIERTE UN OBJETO A UN JSON

    /* 
    | Primer Argumento es la ruta.
    | Segundo Argumento es lo que quiero guardar.
    | Tercer Argumento es un error si fallo.
    */
    fs.writeFile('db/data.json', data, (err) => {

        if (err) throw new Error('No se pudo grabar', err);
    });
};

/*=====================================
    Leer .JSON, Retornarlo al Listado
======================================*/

const cargarDB = () => {

    try { // Si no menejamos la funcion con el try/catch; no podemos insertar tereas cuando el archivo esta en blanco

        listadoPorHacer = require('../db/data.json');

    } catch (error) {

        listadoPorHacer = [];
    }
}

/*=====================================
            Crear Tarea 
======================================*/

const crear = (descripcion) => {

    cargarDB();

    let porHacer = { // Objeto
        descripcion,
        completado: false

    };

    // El método push() añade uno o más elementos al final de un array y devuelve la nueva longitud del array.
    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer; // Para tener una retroalimentacion de que esto es lo que se acaba de crear 
}

/*=====================================
    Obtener el Listado De Tareas
======================================*/

const getListado = () => {

    cargarDB();
    return listadoPorHacer;
};

/*=====================================
        Actualizar Tarea
======================================*/

const actualizar = (descripcion, completado = true) => {

    cargarDB();

    // El método findIndex() devuelve el índice del primer elemento de un array que cumpla con la función de prueba proporcionada. En caso contrario devuelve -1.

    //  if return -1 no encontro la tarea; else if >= 0 return la posicion index del elemento
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {

        listadoPorHacer[index].completado = completado;

        guardarDB();

        return true;
    } else {
        return false;
    }
}

/*=====================================
            Borrar Tarea
======================================*/

const borrar = (descripcion) => {

    cargarDB();

    // El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.

    let nuevoListado = listadoPorHacer.filter(tarea => {

        return tarea.descripcion !== descripcion // Si la descripcion que tengo es != a la que recibo
    }); // ENTONCES ESE ELEMENTO ES QUE EXCLUYO AL "nuevoListado"

    // Si ambos listados, tienen el MISMO TAMAÑO
    if (listadoPorHacer.length === nuevoListado.length) {

        return false; // ENTONCES NINGUN ELEMENTO SE BORRO 

    } else {

        listadoPorHacer = nuevoListado; // LO QUE SE GUARDA ES DB ES "listadoPorHacer"

        guardarDB();

        return true;
    }
}

/*=====================================
        Exportar Modulos/Funciones
======================================*/

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}