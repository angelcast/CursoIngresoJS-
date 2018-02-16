function Mostrar()
{
 var numero;
 numero= parseInt((Math.random())*(11-1)+1);
                                          alert(numero); 
	//Genero el número RANDOM entre 1 y 10 
if (numero >=9)
{
			alert("exelente");
}	
else if (numero >=5){
	                 alert("aprobó");
}
else if (numero <=4){
	              alert("Mas suerte para la proxima");
}
}//FIN DE LA FUNCIÓN