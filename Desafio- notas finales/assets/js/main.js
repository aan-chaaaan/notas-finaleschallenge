var nombre = prompt( "Ingresa tu nombre y apellido:" );
var carrera= prompt( "Ingresa tu carrera:" );
var ramo1= prompt( "A continuación escribe el nombre de tu primer ramo" );
var ramo1nota1= prompt( "Introduce tu nota 1 del ramo " + ramo1 );
var ramo1nota2= prompt( "tu nota 2 del ramo " + ramo1 );
var ramo1nota3= prompt( "y tu nota 3 del ramo " + ramo1 );

ramo1nota1 = parseInt(ramo1nota1);
ramo1nota2 = parseInt(ramo1nota2);
ramo1nota3 = parseInt(ramo1nota3);

total_suma= ramo1nota1 + ramo1nota2 + ramo1nota3

total_divi= total_suma / 3

promedio1= total_divi;


var ramo2= prompt( "Ahora el nombre de tu segundo ramo " );
var ramo2nota1= prompt( "Introduce tu nota 1 del ramo " + ramo2 );
var ramo2nota2= prompt( "tu nota 2 del ramo " + ramo2 );
var ramo2nota3= prompt( "Y tercera nota del ramo " + ramo2 );

ramo2nota1 = parseInt(ramo2nota1);
ramo2nota2 = parseInt(ramo2nota2);
ramo2nota3 = parseInt(ramo2nota3);

total_suma2= ramo2nota1 + ramo2nota2 + ramo2nota3

total_divi= total_suma2 / 3

promedio2= total_divi;


var ramo3= prompt( "y finalmente el nombre de tu tercer ramo" )
var ramo3nota1= prompt( "Introduce tu nota 1 del ramo " + ramo3 )
var ramo3nota2= prompt( "tu nota 2 del ramo " + ramo3 )

ramo3nota1 = parseFloat(ramo3nota1);
ramo3nota2 = parseFloat(ramo3nota2);

total_suma3= ramo3nota1 + ramo3nota2

total_divi= total_suma3 / 3

promedio3= total_divi

var porcentaje1= ramo3nota1 * 0.333
var porcentaje2= ramo3nota2 * 0.333

var total_suma3= porcentaje1 + porcentaje2

var minuendo= 4
var sustraendo= total_suma3

var total_resta =  minuendo - sustraendo;

var dividendo= total_resta
var divisor= 0.333

ramo3nota3= (total_resta / 0.333);

if ( promedio3 < 4 ){
    document.write( "Para aprobar el ramo " + ramo3 + " con nota 4 " + "necesitas obtener un " + ramo3nota3  );
 }

document.write( "<div>" );
document.write( "<div class='container mb-3'>" );
document.write( "<h1>Notas finales</h1>" )
document.write( "</div>" );
document.write( "<div class='container'>" );
document.write( "<p class= 'font-weight-bold'> Nombre: " + nombre )
document.write( "</p>")
document.write( "<p class= 'font-weight-bold'> Carrera: " + carrera )
document.write( "</p>")
document.write( "</div>" );
document.write( "<div class='container'>" );
document.write( "<table class='table table-dark'>" );
document.write( "<thead>" );
document.write( "<tr>" );
document.write( "<th scope='col'>Ramo</th> " );
document.write( "<th scope='col'>Nota 1</th> " );
document.write( "<th scope='col'>Nota 2</th> " );
document.write( "<th scope='col'>Nota 3</th> " );
document.write( "<th scope='col'>Promedio</th>" );
document.write( "</tr" );
document.write( "</thead>" );
document.write( "<tbody>" );
document.write( "<tr>" );
document.write( "<th scope='row'>" +ramo1+ "</th> ");
document.write( "<td>" +ramo1nota1+ "</td>" );
document.write( "<td>" +ramo1nota2+ "</td>" );
document.write( "<td>" +ramo1nota3+ "</td>" );
document.write( "<td>" +promedio1+ "</td>" );
document.write( "</tr>" );
document.write( "<tr>" );
document.write( "<th scope='row'>" +ramo2+ "</th> " );
document.write( "<td>" + ramo2nota1 + "</td>" );
document.write( "<td>" + ramo2nota2 + "</td>"  );
document.write( "<td>" + ramo2nota3 + "</td>" );
document.write( "<td>" + promedio2 + "</td>" );
document.write( "</tr>" );
document.write( "<tr>" );
document.write( "<th scope='row'>" +ramo3+ "</th> " );
document.write( "<td>" + ramo3nota1 + "</td>" );
document.write( "<td>" + ramo3nota2 + "</td>" );
document.write( "<td>-</td>" );
document.write( "<td>-</td>" );
document.write( "</tr>" );
document.write( "</tbody>" );
document.write( "</table" );
document.write( "</div>" );






