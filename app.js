/*
    FORMATO DE CADA TAREA
        - titulo: string
        - status: string (
           * terminada
           * pendiente
         )
*/

let tareas = require('./tareas.json');
const fs = require('fs');

exports.leerTareas = function () {
    /*
        En esta función debes leer y retornar las tareas registradas.
    */
    let lista = fs.readFileSync('./tareas.json', 'utf-8');
    let nuevo = JSON.parse(lista);
    console.log('leer');
    console.log(nuevo);
    return nuevo;
    //return JSON.parse(lista);
};

exports.agregarTarea = function (tarea) {
    /*
        Registra y guarda una nueva tarea.
    */
   let lista = fs.readFileSync('./tareas.json', 'utf-8');
   console.log(lista);
    lista=JSON.parse(lista);
    lista.push(tarea);
    lista = JSON.stringify(lista);
    console.log('agregar');
    console.log(lista);
    fs.writeFileSync('./tareas.json', lista, 'utf-8');
}

exports.filtrarTareasPorEstado = function (estado) {
    /*
        En esta función debes de leer las tareas y retornar las que tengan el estado que se
        manda en el parametro.
    */
   let lista = fs.readFileSync('./tareas.json', 'utf-8');
   lista=JSON.parse(lista);
    let filtrado = lista.filter(function(param){
    return param.status == estado;
    });
    return filtrado;
}