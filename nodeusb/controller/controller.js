var usb = require ('usb');
const fs = require('fs');
var util = require('util');

// ##############################################
// Imprime la lista de USB's
// ##############################################
// var texto = usb.getDeviceList();

// str = JSON.stringify(texto);

// fs.writeFile('prueba.txt', str, (err) =>{
//    if (err) throw err;
//    console.log('guardado con éxito');
// })

// console.log(texto);



encontrado=usb.findByIds(8086,3);
console.log(JSON.stringify(encontrado));
// #################################################
// pruebas para trabajar con la cosa esta como array
// ################################################
// function pasarArray(){
//     var array = str.split("Device");
//     //console.log(array);
//     fs.writeFile('prueba2.txt', JSON.stringify(array), (err)=>{
//         if (err) throw err;
//         //console.log('22222 con exito');
//     })
// }
// pasarArray();





















