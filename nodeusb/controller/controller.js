var usb = require ('usb');
const fs = require('fs');

var texto = usb.getDeviceList();

console.log(texto);
console.log(typeof(texto));

str = JSON.stringify(texto);

fs.writeFile('prueba.txt', str, (err) =>{
   if (err) throw err;
   console.log('guardado con éxito');
})


