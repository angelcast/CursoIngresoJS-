
function Mostrar()
{ var base; 
  var perimetro;

  base= document.getElementById("laBase").value;

  base= parseInt(base);

  perimetro= base * 4; 

  alert ("el perimetro de la base es " + perimetro);
}
