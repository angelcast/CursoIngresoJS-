function Mostrar()
{
var numeroUno, numeroDos, resultado;
numeroUno= prompt(" ingrese un valor ");
numeroDos= prompt(" ingrese otro valor ");

numeroUno= parseInt(numeroUno);
numeroDos= parseInt(numeroDos);

if (numeroUno == numeroDos) {
                            resultado= numeroUno*numeroDos; 
}
else if (numeroUno>numeroDos) {
                               resultado= numeroUno-numeroDos;
}
else {
                             resultado= numeroUno+numeroDos;
}document.write(resultado); 
}

