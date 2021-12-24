
function exibirProvedor() {
    var email = ["charles@anapro.com.br", "billgates@microsoft.com.br", "anael@anapro.com.br", "eduardo@apple.com", "x@gmasldfkjasdlfkasjdfljasdkf.com"];

    document.getElementById("outResultado").innerHTML = "";

    for (i = 0; i < email.length; i++) {
        var provedorDoEmail = extrairProvedorDeUmEmailComSplit(email[i]);
        document.getElementById("outResultado").innerHTML += "<br />O provedor do email " + email[i] + " é: " + provedorDoEmail;        
    }

}

function extrairProvedorDeUmEmail(email)
{
    var emailInformado = email;
    var posicaoDoArroba = emailInformado.lastIndexOf("@"); // A posicao em numero inteiro de onde achou o texto que vc passou. Se nao achar, retorna -1
    var posicaoDeCorte = posicaoDoArroba + 1;
    var corteTexto = emailInformado.substr(posicaoDeCorte);
    emailInformado = corteTexto;
    var posicaoDoPonto = emailInformado.indexOf(".");
    return emailInformado.substr(0, posicaoDoPonto);
}

function extrairProvedorDeUmEmailComSplit(email)
{
    // charles.silva@olxbr.com.br
    var quebrarNoArroba = email.split('@');
    /*
    [0] = "charles.silva"
    [1] = "olxbr.com.br"
    */

    // olxbr.com.br
    var quebraDoDominio = quebrarNoArroba[1].split('.');
    /*
    [0] = "olxbr"
    [1] = "com"
    [2] = "br"
    */

    var provedorEncontrado = quebraDoDominio[0];

    return provedorEncontrado;

    // return email.split('@')[1].split('.')[0];
}
