/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
    var contadorIntentos = 0;
    var numeroIngresado;
    var intentos;
    var tePasaste;
function comenzar()
{
    numeroSecreto= Math.floor(Math.random() * 100) + 1;

    console.log(numeroSecreto);

	//Genero el número RANDOM entre 1 y 100
	//alert(numeroSecreto );
}
function verificar()
{
	  numeroIngresado=document.getElementById("numero").value;   

    contadorIntentos = 0

    intentos++;
    document.getElementById("intentos").value=intentos;
    tePasaste= numeroSecreto - numeroIngresado;
    
    if (numeroIngresado==numeroSecreto)
   {     
     alert("Usted es un ganador!!! y en solo " + contadorIntentos + " intentos");
   
     intentos=0;

   }
	  else if (numeroIngresado > numeroSecreto)
    {
      alert("Te faltó " + tePasaste + " para adivinarlo");
        
    }
	   //{
         //alert("te faltó" +tePasaste+ "para adivinarlo");
	   //}
           //if (numeroIngresado > numeroSecreto) 
           //{
      	     //alert("te pasaste wey");
           //}
             //else
		     //{
			  //alert("Te falta..");
		     //}
	}




