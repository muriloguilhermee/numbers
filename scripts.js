const qtd = parseInt(document.getElementById("quantidade").value); // Pega a quantidade de números do input
const min = parseInt(document.getElementById("min").value);        // Pega o valor mínimo do input
const max = parseInt(document.getElementById("max").value);        // Pega o valor máximo do input
const repeat = document.getElementById("repeat").checked;          // Verifica se "não repetir número" está marcado
function sortear() { // Função chamada ao clicar em "SORTEAR"

  let numeros = []; // Array vazio para armazenar os números sorteados

  while (numeros.length < qtd) { // Continua até sortear a quantidade pedida
    let num = Math.floor(Math.random() * (max - min + 1)) + min; // Gera número aleatório entre min e max

    if (repeat) { // Se a opção de não repetir estiver marcada
      if (!numeros.includes(num)) { // Verifica se o número ainda não existe no array
        numeros.push(num); // Adiciona o número ao array
      }
    } else { 
      numeros.push(num); // Se repetição for permitida, adiciona direto
    }
  }

  document.getElementById("resultado").innerText = numeros.join("   "); // Mostra os números sorteados separados por espaço
  document.getElementById("formBox").style.display = "none";            // Esconde o formulário
  document.getElementById("telaResultado").style.display = "block";     // Mostra a tela de resultado
}

function voltar() { // Função chamada ao clicar em "SORTEAR NOVAMENTE"
  document.getElementById("telaResultado").style.display = "none"; // Esconde a tela de resultado
  document.getElementById("formBox").style.display = "block";      // Mostra novamente o formulário
}