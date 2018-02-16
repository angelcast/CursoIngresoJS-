function Mostrar()
{
 var edad 
 edad=document.getElementById("edad").value;
//tomo la edad  
 if (edad <13){
               alert ("Usted es un niño");  
 }
 if (edad >13 && edad <17){
                           alert ("Usted es un adolescente");
 }
 if (edad >=18){
                 alert ("Usted es mayor");
 }
 }
 //FIN DE LA FUNCIÓN