function createUsser(){
	
	var usser=document.getElementById('usser').value;
	var pass=document.getElementById('pass').value;
	var pass1=document.getElementById('pass1').value;
	var ussers=loadUssers();
	for (var c = 0; c < ussers.length; c++) {
		if (ussers[c].usserName==usser) {
			var validate=false;
			
		}else{
			var validate=true;
			
		}
	}
	if (validate) {
		if (pass1==pass) {
				//var ussers=loadUssers();
				ussers.push({
					usserName:usser,
					pass:pass,
					account:parseInt(Math.random(1)*10000),
					balanceAccount:0,
					extractLimit:5000,
				});
				saveUsser(ussers);
				alert("El usuario se creo exitosamente.");
				window.location="login.html";
			}else{
				alert('las contraseñas no coinciden');
				location.href="newAccount.html";
			}
	}else{
		alert("el usuario ya existe");
		location.href="newAccount.html";
	}
	

	
	
}

function loadUssers(){
	var ussers=JSON.parse(localStorage.getItem('ussers'));
	return ussers;
}

function saveUsser(usser){
	var ussers=loadUssers();
	
	for (c=0;c<ussers.length;c++) {
		if (usser.usserName==ussers[c].usserName) {
			ussers[c]=usser;
			localStorage.setItem('ussers',JSON.stringify(ussers));
			window.location="index.html";
			break;
		}else{

			localStorage.setItem('ussers',JSON.stringify(usser));
		}
	}
	
}

/*function logIn(){
	var usser1=document.getElementById("usser").value();
	var pass=document.getElementById("pass").value();
	loadUssers();
}*/

function iniciarSesion() {
	var ussers=loadUssers();
	//var session=(prompt("Ingrese usuario: "));
	var usser=document.getElementById('usser').value;
	var pass=document.getElementById('pass').value;
	var usserSession=false;
	for(c=0;c<ussers.length;c++){
		if (ussers[c].usserName==usser) {
			usserSession=ussers[c];
			break;
		}else{
			usserSession=false;
		}
	}

	if (usserSession!=false) {
			
		if (usserSession.pass==pass) {
			
			localStorage.setItem('logUsser',JSON.stringify(usserSession)); 
			window.location = "index.html";

		}else{
			alert('la constraseña ingresada es incorrecta')
		}
	}else{
		alert("el usuario no existe");
		location.href="login.html";
	}
}

/*function usserSave(usser){
	var ussers=loadUssers();
	//var session=(prompt("Ingrese usuario: "));
	var usser=logUsser.usserName;
	var pass=logUsser.pass;
	
	for(c=0;c<ussers.length;c++){
		if (ussers[c].usserName==usser && ussers[c].pass==pass) {
			
			break;
		}else{
			usserSession=false;
		}
	}
}*/