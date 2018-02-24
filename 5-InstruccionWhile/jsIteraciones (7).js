function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';

	while(respuesta="si") 
	{
		 numero = prompt("Ingrese Un Numero");
         numero = parseInt(numero);

          while(numero<1 || numero>10)
           {
            numero = prompt("Ingrese Un Numero");
            numero = parseInt(numero);       
           }

           acumulador = acumulador + numero;

           contador = contador + 1;
	       
	       respuesta = prompt("Desea ingresar otro numero? si/no")

	}

		
        //respuesta = confirm("Desea ingresar otro numero? si/no")
        //"confirm" es una ventana que devuenve True o False.

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN