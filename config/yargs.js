/*=====================================
            ARREGLOS GLOBALES
======================================*/

const descripcion = {
    demand: true, // Obligatorio
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    demand: true, // Obligatorio
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
};

/*=====================================
            COMANDOS
======================================*/

const argv = require('yargs') // Obligatorio estar cerca de los (.command)

.command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea', {
        descripcion
    })

.help()
    .argv;

module.exports = {
    argv
}



// const opciones = { // Este objeto contiene las configuraciones de: (la base y el limite)

//     descripcion: { // Este es el comando --descripcion
//         demand: true, // Esto es para definir que el comando es obligatorio
//         alias: 'd', // Sin alias: --descripcion | Con alias: -d
//         desc: 'Descripción de la tarea por hacer'
//     },
//     compleatado: {
//         alias: 'c',
//         desc: 'Marca como completado o pendiente la tarea'
//     }

// }

// const argv = require('yargs') // yargs es una libreria, un paquete que está en los "node_modules"

// /*=====================================
// 	    Comando Crear en Consola
// ======================================*/
// // Los comandos tienen 3 parametros
// // # Un Nombre | # Una Descripcion | # Un objeto que va a recibir la configuracion de parametros / flags que el comando va a recibir

// .command('crear', 'Crear un elemento por hacer', opciones)

// /*=====================================
// 	    Comando Actualizar en Consola
// ======================================*/

// .command('actualizar', 'Actualiza el estado completado de una tarea', opciones)
//     .help()
//     .argv;

// module.exports = {
//     argv
// }