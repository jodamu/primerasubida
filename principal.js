const opciones = {
	id:{
		demand: true,
		alias: 'i'
	},
	nombre:{
		demand: true,
		alias: 'n'
	},
	cedula:{
		demand: true,
		alias: 'c'
	},

} 
const express = require('express')
const app = express()
const argv = require('yargs')
			.command ('inscribir', 'los datos del aspirante',opciones)
			.argv
const fs = require('fs');

let cursos=[{
	id:1,
	nombre: 'PHP BASICO',
	duracion: 32,
	valor: 1200	
},{
	id:2,
	nombre: 'PHP INTERMEDIO',
	duracion: 50,
	valor: 3200	
},{
	id:3,
	nombre: 'PHP AVANZADO',
	duracion: 33,
	valor: 25000	
},{
	id:4,
	nombre: 'NODE JS',
	duracion: 25,
	valor: 36000	
}
]

if(argv.id){

let cursoseleccionado = cursos.find(cursosele => cursosele.id==argv.i)

nombrecurso=cursoseleccionado.nombre;
duracion=cursoseleccionado.duracion;
valor=cursoseleccionado.valor;
//estudiate=argv.nombre


//let crearArchivo=()=>{
	 texto= 'el nombre del estudiante  <h1>'+ argv.n +'</h1><br>'+
			' con cedula numero  <b>'+argv.c+'</b><br>'+
			'se ha matriculado en el curso llamado <b>'+ nombrecurso + '</b><br>'+
			'y tiene una duracion de <b>'+ duracion +' </b>horas y el valor es<b> '+valor+'</b>';
		/*fs.writeFile('datos.txt',texto,(err)=>{
			if (err) throw (err);
			console.log('se ha creado el archivo');
		});*/
//}

//crearArchivo();

} else {
	
texto=' ';

//let lista=()=>console.log(texto);
var num=0;
function lista(){
	if(num<4){
	texto +='  el curso de ID '+cursos[num].id+' se llama '+cursos[num].nombre+' \n'+
		'y tiene una duracion de '+cursos[num].duracion+' horas y un valor '+cursos[num].valor+'<br>';

	num++;
} else{
	//process.exit(1);
}
}

setInterval(lista, 2000);

}


 app.get('/', function (req, res) {
  res.send(texto)
})
 
app.listen(3000)
