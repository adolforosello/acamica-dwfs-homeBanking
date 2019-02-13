//Declaración de variables
if (ussers=JSON.parse(localStorage.getItem('ussers'))==null) {
	var ussers=[{
			usserName:"root",
			pass:'admin',
			account:parseInt(Math.random(1)*10000),
			balanceAccount:0,
			extractLimit:5000,
		}];
	localStorage.setItem('ussers',JSON.stringify(ussers));	
}else{

}

logUsser();
cargarNombreEnPantalla(logUsser);
actualizarSaldoEnPantalla(logUsser);
actualizarLimiteEnPantalla(logUsser);
//location.href="login.html";

//Ejecución de las funciones que actualizan los valores de las variables en el HTML




//Funciones que tenes que completar
function logUsser(){
	if (logUsser=JSON.parse(localStorage.getItem('logUsser'))==null) {
		window.location="login.html";
	}else{
		logUsser=JSON.parse(localStorage.getItem('logUsser'));
		
	}
}

function logOut(){
	localStorage.setItem('logUsser',JSON.stringify(null));
	
	saveUsser(logUsser);
	window.location='login.html';
}

function extraerDinero(){
	var value=prompt("ingrese extraccion: ")
	if(inputValidate(value)){
		if(value<=logUsser.extractLimit ){
			if (Number.isInteger(value/100)) {
				//limitValidate(value);
				logUsser.balanceAccount-=parseInt(value);
				actualizarSaldoEnPantalla(logUsser);
			}else{
				alert("Solo puede expender billetes de 100. Ingrese valores multiplos de 100");
				extraerDinero();
			}
			
		}else{
			alert("el importe es mayor a su limite.");
			extraerDinero();
		}
		
	}else{
		
		extraerDinero();
	}
}

function cambiarLimiteDeExtraccion(){
	var value=prompt("ingrese nuevo limite de extraccion: ")
	if(inputValidate(value)){
		logUsser.extractLimit=parseInt(value);
		actualizarLimiteEnPantalla(logUsser);
	}else{
		cambiarLimiteDeExtraccion();
	}
}

function depositarDinero() {
	var value=prompt("ingrese importe a depositar: ")
	if(inputValidate(value)){
		logUsser.balanceAccount+=parseInt(value);
		actualizarSaldoEnPantalla(logUsser);
	}else{
		depositarDinero();
	}
}

function pagarServicio() {
		value=prompt("Ingrese el numero que corresponda con el servicio que quiera pagar \n1-Agua \n2-Luz \n3-Internet \n4-Telefono \n5-salir");
		
			switch(value){
			case "1":
				value=350;
				limitValidate(value);
			break;
			case "2":
				value=425;
				limitValidate(value);
			break;
			case "3":
				value=210;
				limitValidate(value);
			break;
			case "4":
				value=570;
				limitValidate(value);
			break;
			case "5":
			break;
			case null:
			break;
			default:
				alert("El servicio no existe");
				pagarServicio();
			}

	}

function transferirDinero() {
	var account = prompt('Seleccione la cuenta :');
	if (account!=null) {
		var ussers=loadUssers();
		for (c=0;c<ussers.length;c++) {
			if (account==ussers[c].account) {
				var value=prompt('ingrese importe a depositar');
				ussers[c].balanceAccount+=parseInt(value);
				localStorage.setItem('ussers',JSON.stringify(ussers));
				var message=alert('La operacion se realizo exitosamente');
				
			}else{ 
				var message=false;
			}
		}
		if (message==false) {alert('la cuenta no existe')}
	}
}



function inputValidate(value){
		if (isNaN(value) || value < 0 || value==null || value=="") {
				alert("Solo puede ingresar numeros positivos")
				//cambiarLimiteDeExtraccion();
		}else{
				return true;
		}
}
function limitValidate(value){
	if (value>logUsser.balanceAccount) {
		alert("No tienes saldo suficiente");
		
	}else{
		logUsser.balanceAccount-=value;
		actualizarSaldoEnPantalla(logUsser);
	}
}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla(logUsser) {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + logUsser.usserName;
}

function actualizarSaldoEnPantalla(logUsser) {
	if (logUsser.balanceAccount<100) {
		document.getElementById('extract').style.display='none';
	}else{
		document.getElementById('extract').style.display='block';
	}
	document.getElementById("saldo-cuenta").innerHTML = "$" + logUsser.balanceAccount;
}

function actualizarLimiteEnPantalla(logUsser,value) {
	document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + logUsser.extractLimit;
}


