function Mostrar()
{ 
  var mesDelAño; 
  mesDelAño = document.getElementById('mes').value;

   switch(mesDelAño) 
 { 
        case "Febrero":
              alert ("Este mes tiene menos de 29 días");
              break;
        
        default:
              alert ("Este mes tiene 30 o más días");
              break;
 }


	
	


}//FIN DE LA FUNCIÓN

//al seleccionar un mes informar. 
//si es Febrero: " Este mes no tiene más de 29 días." 
//si NO es Febrero: "Este mes tiene 30 o más días"