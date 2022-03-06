

function validarEmail() {
	
	
	var email = ''
	email = document.getElementById('email').value
	
	
	if(email.indexOf('.') != -1 && email.indexOf('@') != -1) {
		alert('O email '+ email +' foi enviado')
		
		document.getElementById('conteudoTopo').innerHTML ='BEM VINDO'
	} else{
		alert('Email inválido')
	}
}

