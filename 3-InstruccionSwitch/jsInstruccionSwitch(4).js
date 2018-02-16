function Mostrar()
{
  
    var mesDelAño = document.getElementById('mes').value;
 
     switch (mesDelAño)
  {  
        case "Enero": 
        case "Marzo":
        case "Mayo":
        case "Julio":
        case "Agosto":
        case "Octubre":
        case "Diciembre":
              alert ("Tiene 31 días");
              break;
        
        case "Febrero":
              alert ("tiene 28 días");
              break;
        
        default:
                alert ("tiene 30 días");      
              
  }

	





//al seleccionar un mes informar. 
//si tiene 28 días. 
//si tiene 30 días. 
//si tiene 31 días.
}
//FIN DE LA FUNCIÓN