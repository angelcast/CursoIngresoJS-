//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{ 
	var anchoDelTerreno;
	var largoDelTerreno;
	var perimetro;
	var alambre;
	
	    largoDelTerreno = document.getElementById("largo").value;
		anchoDelTerreno = document.getElementById("ancho").value;
	
	    largoDelTerreno= parseInt(largoDelTerreno);
		anchoDelTerren = parseInt(anchoDelTerreno);
		
		
		
		perimetro = largoDelTerreno*2 * anchoDelTerreno*2 ;
		alambre = perimetro*6; 
		
		alert("Se Necesitan "+ alambre+ " metros de alambre");
	
}

