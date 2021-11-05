
//      Ativando interação com a tecla Enter 
    document.addEventListener("keypress", function(e)
                              
    {
        if(e.key === "Enter")
        {
            const botaoCriarEstrelas = document.querySelector("#send");
            
            botaoCriarEstrelas.click();
        }
    
    });
    
    
//    Declarando Variáveis Globais sem valor definido
    let estrelinhas;
    let repeat;
    
    

//    Função para Calcular as Estrelinhas
    
    function calcularEstrelinhasDescrecente()
    {
        
        
//    Capturando o valor inserido no Input
        
         estrelinhas = document.getElementById("campoEstrelinhas").value;
        
        
        document.getElementById("resultado").innerHTML = null;
     
// FIM RESET
        
         
        
        
//        IMPORTANTE: informar o valor inicial fora do loop.
        
       let loop="";
      
   
        
        
        
//        IF para processar apenas números válidos
         if(estrelinhas>0)
            {

                
     
        
//        LOOP WHILE, para repetir a quantidade de linhas/estrelinhas, conforme informado pelo usuário
              while(estrelinhas >= 0)
                    {
//        For para acumular a quantidade de estrelinhas correspondente ao valor inicial digitado pelo cliente
                for(var i=1;i <= estrelinhas;i++)
                    { 
//                        IF para validar númros pares
                        if(estrelinhas%2 == 0)

                         {
                             loop += "*";// incrementando estrelas
                         }
//                        Entrando nos números não pares (ímpares)
                        else 
                        {
                             
                            loop += "@";// incrementando arrobas
                        }     

                    }
                        
               
                document.getElementById("resultado").innerHTML += loop+"<br>";
                loop =""; // Zerando a variável
                estrelinhas--; // decrementando a quantidade da variável para não ficar em um loop eterno
                
             
                        
                     }//        FIM WHILE


            }// Fim Condição Válida


            else
            { // Condição Inválida
                document.getElementById("resultado").innerHTML = "<p style='text-align:center !important;margin-right: 40px !important'> Informe um número <b style='color: #8ce563'>Válido</b> <b><br><br>Maior que 0 (zero)</b></p>";
            } // Fim condição inválida


    }//FIM Função



 function calcularEstrelinhas()
    {
        
        
//    Capturando o valor inserido no Input
        
         estrelinhas = document.getElementById("campoEstrelinhas").value;
        
        
        
//   Resetando a função, caso o cliente queira aplicar uma nova quantia de estrelas  
        
        repeat = 0;

        document.getElementById("resultado").innerHTML = null;
     
// FIM RESET
        
         
        
        
//        IMPORTANTE: informar o valor inicial fora do loop.
        
         var loop = "*"; 
      
   
        
        
        
//        IF para processar apenas números válidos
         if(estrelinhas>0)
            {

                
     
        
//        LOOP WHILE, para repetir a quantidade de linhas/estrelinhas, conforme informado pelo usuário
              while(repeat< estrelinhas)
                    {


                document.getElementById("resultado").innerHTML += loop+"<br>";

                loop += "*"; // Incrementando as estrelas conforme a quantidade de repetição.

                repeat++; // Incrementando o repetidor, caso contrário ele ficará no while para sempre.


                     }//        FIM WHILE


            }// Fim Condição Válida


            else
            { // Condição Inválida
                document.getElementById("resultado").innerHTML = "<p style='text-align:center !important;margin-right: 40px !important'> Informe um número <b style='color: #8ce563'>Válido</b> <b><br><br>Maior que 0 (zero)</b></p>";
            } // Fim condição inválida


    }//FIM Função

