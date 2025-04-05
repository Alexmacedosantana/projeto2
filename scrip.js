// Função que é chamada quando o botão "Média" é clicado
function calculaMedia() {
    // Pegando os valores digitados nos inputs e convertendo para número decimal
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);
    let n3 = parseFloat(document.getElementById("n3").value);
    let n4 = parseFloat(document.getElementById("n4").value);
  
    // Calculando a média das quatro notas
    let media = (n1 + n2 + n3 + n4) / 4;
  
    // Selecionando a div que mostra a mensagem e o span onde o texto será inserido
    let mensagemDiv = document.getElementById("mensagem");
    let textoMensagem = document.getElementById("textoMensagem");
  
    // Verificando se a média é maior ou igual a 7 (aprovado) ou menor (reprovado)
    if (media >= 7) {
      // Se aprovado, mostra a mensagem com a média e muda a borda da caixa para verde
      textoMensagem.innerText = `Sua média foi ${media}. Você foi Aprovado!`;
      mensagemDiv.style.border = "2px solid #00ff00"; // Verde
    } else {
      // Se reprovado, mostra a mensagem com a média e muda a borda da caixa para vermelha
      textoMensagem.innerText = `Sua média foi ${media.toFixed(2)}. Você foi Reprovado!`;
      mensagemDiv.style.border = "2px solid red"; // Vermelho
    }
  
    // Exibe a div da mensagem na tela (ela estava oculta)
    mensagemDiv.style.display = "block";
  }
  
  // Função chamada ao clicar no botão "x" para esconder a mensagem
  function fecharMensagem() {
    document.getElementById("mensagem").style.display = "none";
  }
  