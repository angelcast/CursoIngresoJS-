//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{ 
	var precioProducto;
	var importe;

	precioProducto = prompt("Ingrese Precio Del Producto");
    precioProducto = parseInt(precioProducto);

	importe = precioProducto*1.21; 
	
	document.getElementById("importe").value = importe;	
	
}

