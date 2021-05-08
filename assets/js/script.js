
//Esto es el header
document.write("<header class='pl-0 pr-0'>")
document.write("<div class='container-fluid pl-0'>")
document.write("<img class='pr-0 mt-0' src='assets/img/logo.png' alt='logo-header'></img>")
document.write("<h1 class='pl-0'>Notas Finales</h1>");
document.write("</div>");
document.write("</header>")

//Nombre y carrera dentro del header
var nombre = prompt("Ingresa tu Nombre", "Juan");
var apellido = prompt("Ingresa tu Apellido", "Alvarez")
var carrera = prompt("Ingresa la carrera", "Desarrollo Web");

//Alineamiento de Nombre y carrera
document.write("<dl class='row p-0'>")
document.write("<dt class='col-sm-3 pb-3 m-0'>Nombre:</dt><dd class='col-sm-9 m-0'>" + nombre + " " + apellido +"</dd>");
document.write("<dt class='col-sm-3 m-0'>Carrera:</dt><dd class='col-sm-9 m-0'>" + carrera + "</dd>");
document.write("</dl>");

//Solicitud dinámica de datos para las 3 notas y Ramo 1
var r1 = prompt("Ingresa el Ramo 1", "HTML");
var nota1r1 = prompt("Ingresa la Nota 1 para ["+ r1 +"] ", 7);
var nota2r1 = prompt("Ingresa la Nota 2 para ["+ r1 +"] ", 5);
var nota3r1 = prompt("Ingresa la Nota 3 para ["+ r1 +"] ", 6);
var promedio1 = (parseFloat(nota1r1)+parseFloat(nota2r1)+parseFloat(nota3r1))/3;
var conDecimal1 = promedio1.toFixed(2);

//Solicitud dinámica de datos para las 3 notas y Ramo 2
var r2 = prompt("Ingresa el Ramo 2", "CSS");
var nota1r2 = prompt("Ingresa la Nota 1 para ["+ r2 +"] ", 7);
var nota2r2 = prompt("Ingresa la Nota 2 para ["+ r2 +"] ", 5);
var nota3r2 = prompt("Ingresa la Nota 3 para ["+ r2 +"] ", 6);
var promedio2 = (parseFloat(nota1r2)+parseFloat(nota2r2)+parseFloat(nota3r2))/3;
var conDecimal2 = promedio2.toFixed(2);

//Solicitud dinámica de datos para las 3 notas y Ramo 3
var r3 = prompt("Ingresa el Ramo 3", "JavaScript");
var nota1r3 = prompt("Ingresa la Nota 1 para ["+ r3 +"] ", 7);
var nota2r3 = prompt("Ingresa la Nota 2 para ["+ r3 +"] ", 5);

//Solicitud dinámina para saber datos de la 3era nota del Ramo 3
var notaAprobacion = prompt("Ingresa la nota de aprobación para ["+r3+"] ", 6);
var promedioAprobacion = ((parseFloat(notaAprobacion)*3)-(parseFloat(nota1r3)+parseFloat(nota2r3)));

//Inicio de la tabla
document.write("<table class='table'>");
document.write("<thead class='thead-dark'>");

//Encabezado de la taba
document.write("<tr>");
document.write("<th scope='col'>Ramo</th>");
document.write("<th scope='col'>Nota 1</th>");
document.write("<th scope='col'>Nota 2</th>");
document.write("<th scope='col'>Nota 3</th>");
document.write("<th scope='col'>Promedio</th>");
document.write("</tr>");
document.write("</thead>");

//Cuerpo de la tabla
document.write("<tbody>");
//Datos registrados del ramo1
document.write("<tr>");
document.write("<th scope='row'>" + r1 + "</th>");
document.write("<th>" + nota1r1 + "</th>");
document.write("<th>" + nota2r1 + "</th>");
document.write("<th>" + nota3r1 + "</th>");
document.write("<th>" + conDecimal1 + "</th>");
document.write("</tr>");

//Datos registrados del ramo2
document.write("<tr>");
document.write("<th scope='row'>" + r2 + "</th>");
document.write("<th>" + nota1r2 + "</th>");
document.write("<th>" + nota2r2 + "</th>");
document.write("<th>" + nota3r2 + "</th>");
document.write("<th>" + conDecimal2 + "</th>");
document.write("</tr>");

//Datos registrados del ramo3
document.write("<tr>");
document.write("<th scope='row'>" + r3 + "</th>");
document.write("<th>" + nota1r3 + "</td>");
document.write("<th>" + nota2r3 + "</th>");
document.write("<th>-</th>");
document.write("<th>-</th>");
document.write("</tr>");

//Fin del cuerpo de la tabla
document.write("</tbody>");

//Fin de la tabla
document.write("</table>");

//Nota de aprobación requerida en Nota 3 para aprobar el Ramo 3 
document.write("<span class='p-0'>Para aprobar el ramo " +r3+ " con nota " +notaAprobacion+ ", necesitas obtener un " +promedioAprobacion+ " en la nota 3" + "</span>");