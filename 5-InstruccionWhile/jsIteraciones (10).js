function Mostrar()
{

	var contador=0;
	var numero;
	var acumuladorNegativos=0;
	var acumuladorPositivos=0;
    var contadotPositivos=0;
    var contadorCero=0;
	var contadorPares=0;
	var contadorNegativos=0;
	var promedioPositivos;
	var promedioNegativos;
	var diferencia;
	//declarar contadores y variables
    var respuesta="si";

	while(respuesta!="no")
	{
		contador++;
		numero = prompt("ingrese numero");
		numero = parseInt(numero);
		
		if (numero%2==0 && numero!=0)
		{
           contadorPares++;
		}
		if (numero < 0) 
        {
          contadorNegativos++;
          acumuladorNegativos = acumuladorNegativos+contadorNegativos++;   
        }
	    else 
	    {
	    	if(numero > 0) 
	    	{
             acumuladorPositivos= acumuladorPositivos+contadorPositivos++;
	    	}
          
	    }else
	    {
	    	contadorCero++;
	    }

	}  
        respuesta= prompt("no para salir");

		promedioNegativos = acumuladorNegativos/contadorNegativos;
		promedioPositivos = acumuladorPositivos/contadorPositivos;
        diferencia= acumuladorPositivos - acumuladorNegativos;
     
        document.white("<br>"+promedioPositivos)

}//FIN DE LA FUNCIÓN