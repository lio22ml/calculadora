

var operacion = ' ';
var resultado = ' ';

function enviarNumero(calcular) {
		alert("seleccionastes el numero:   "+calcular);
		operacion = operacion + calcular;
		inserteTesxto();
}



function enviarSigno(calcular) {
		alert("seleccionastes el signo   "+calcular);
		operacion = operacion + calcular;
		inserteTesxto();
}



function igual() {
		resultado=eval(operacion);
		alert("resultado de la operacion :   "+resultado)
	operacionFinal(resultado);
}

function borrar() {
	operacion='';
	resultado='';
	document.getElementById("total").innerHTML="";
}



function insertetesxto(){
	document.getElementById("total").innerHTML=operacion;
}



function operacionFinal(calcular){
	document.getElementById("total").innerHTML=operacion+"="+resultado;
}