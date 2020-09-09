
    var nombre = document.getElementById("txtnombres").value;
    var apellido = document.getElementById("txtapellidos").value;
    var edad = document.getElementById("txtedad").value;
    var producto = document.getElementById("txtproducto1").value;
    var venta = document.getElementById("txtproducto2").value;
    var fecha = new Date();
    var ano = fecha. getFullYear();

    nacimiento = (edad - ano);

    //alert(nombre+" "+apellido+" "+edad+" "+nacimiento);

function enviar() {
document.getElementById("nombre01").innerHTML = nombre;
document.getElementById("apellido01").innerHTML = apellido;
document.getElementById("edad01").innerHTML = edad;
document.getElementById("ano01").innerHTML = nacimiento;
document.getElementById("comicion01").innerHTML = venta;
}

document.getElementById("optenerdato").onclick = function () {
  enviar();
}
