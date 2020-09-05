function optenerdato() {
    var nombre = document.getElementById("txtnombres").value;
    var apellido = document.getElementById("txtapellidos").value;
    var edad = document.getElementById("txtedad").value;
    var producto = document.getElementById("txtproducto1").value;
    var venta = document.getElementById("txtproducto2").value;
    var fecha = new Date();
    var ano = fecha. getFullYear();

    nacimiento = (edad - ano);

    alert(nombre+" "+apellido+" "+edad+" "+nacimiento);
  }
