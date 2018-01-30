var usb = require ('usb');
const fs = require('fs');

console.log(usb.getDeviceList());

var texto = usb.getDeviceList();

fs.writeFile('prueba.txt', texto, (err) =>{
    if (err) throw err;
    console.log('guardado con éxito');
})


