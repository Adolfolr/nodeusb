var usb = require ('usb');
const fs = require('fs');
var util = require('util');

var texto = usb.getDeviceList();

str = JSON.stringify(texto);

fs.writeFile('prueba.txt', str, (err) =>{
   if (err) throw err;
   console.log('guardado con éxito');
})

function pasarArray(){
    var array = str.split("Device");
    console.log(array);
    fs.writeFile('prueba2.txt', JSON.stringify(array), (err)=>{
        if (err) throw err;
        console.log('22222 con exito');
    })
}
pasarArray();


// var stream = require('stream');
// var Stream = stream.Stream;

// var ws = new Stream;
// ws.writable = true;

// ws.write = function(data) {
//   console.log("input=" + data);
// }

// ws.end = function(data) {
//     var str = "prueba";
//     console.log("bye");
//     fs.writeFile('asd.txt', str, (err) =>{
//         if (err) throw err;
//     })
// }

// process.stdin.pipe(ws);

