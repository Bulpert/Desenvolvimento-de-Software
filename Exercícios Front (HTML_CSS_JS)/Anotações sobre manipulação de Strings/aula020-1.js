function exibirProvedor() {
    var email = ["charles@anapro.com.br", "billgates@microsoft.com.br", "anael@anapro.com.br", "eduardo@apple.com", "x@gmasldfkjasdlfkasjdfljasdkf.com"];

    document.getElementById("outResultado").innerHTML = "";

    for (i = 0; i < email.length; i++) {
        var emailAdaptado = adaptarEmail(email[i]       );
        document.getElementById("outResultado").innerHTML += "<br />Email Original: " + email[i] + " Após adaptar: " + emailAdaptado;        
    }

}

function adaptarEmail(email)
{
    // bill.gates@microsoft.com.br.bilionario
    var primeiraParte = email.split('@')[0];
    
    // microsoft.com.br.bilionario
    var parteDepoisDoArroba = email.substr(email.indexOf("@") + 1);

    // microsoft
    var provedor = parteDepoisDoArroba.substr(0, parteDepoisDoArroba.indexOf("."));

    // .com.br.bilionario
    var parteDepoisProvedor = parteDepoisDoArroba.substr(parteDepoisDoArroba.indexOf("."));

    // junta as partes cortadas
    var emailAdaptado = primeiraParte + parteDepoisProvedor + "@" + provedor;

    return emailAdaptado;
}