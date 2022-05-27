/* Aplicado a arrays */

let colores = ['rojo', 'azul', 'amarillo']

let colorRojo = colores[0]
let colorAzul = colores[1]
let colorAmarillo = colores[2]

let [rojo,azul,pepito] = colores;

console.log(colorAmarillo, pepito);

/* Aplicado a objetos literales */

let auto = {
    marca : 'Volkswagen',
    modelo : 'Vento',
    precio : 6000000,
    km : 60000,
    color : 'turquesa',
    anio : 2020,
    patente : 'COM017',
    vendido : true
}

let {anio} = auto

// SI QUIERO CAMBIARLE EL NOMBRE A UNA CLAVE
let {color:pintura} = auto

console.log(pintura, anio);