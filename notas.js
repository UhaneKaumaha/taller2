alert("Por favor ingrese uno a uno los siguientes datos solicitados")
let nombre = prompt("Por favor ingrese el nombre del estudiante")
let apellido = prompt("Por favor ingrese el apellido del estudiante")
let doc = prompt("Por favor ingrese el documento del estudiante")
let nota = prompt("Por favor ingrese la nota asignada al estudiante")
let resultado



if (parseFloat(nota) >= 3.0) {
    resultado = "aprobó"
}
else{
    resultado = "reprobó"
}

document.write("El estudiante de nombre " + nombre + " " + apellido  + " identificado con el número de documento " + doc + " con una nota igual a " + nota + " " + resultado)