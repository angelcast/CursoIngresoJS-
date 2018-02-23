function Mostrar()
{

	var contador=0;
	var numero;
	var maximo; 
	var minimo;
		
	var respuesta='si';

	while(respuesta!='no')
	{
		
		numero=prompt("ingrese numero");
        numero=parseInt(numero);
        
        if(contador==0)
        {
        	maximo=numero;
            minimo=numero;
        }else
        {
        	if(numero>maximo)
            {
              maximo=numero              
            }
            if(numero<minimo)
            {
             minimo= numero;
            }
        }
        
        contador++;
        respuesta= prompt("para salir, ingresar no");
	}




}//FIN DE LA FUNCIÓN