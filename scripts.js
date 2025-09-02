let rodada = 0;        // contador de quantas vezes já sorteou
let ultimaConfig = {}; // guarda a última configuração usada

function sortear(novamente = false) {
  const qtd = parseInt(document.getElementById("quantidade").value);
  const min = parseInt(document.getElementById("min").value);
  const max = parseInt(document.getElementById("max").value);
  const noRepeat = document.getElementById("repeat").checked;

  // Quando for "sortear novamente", usa a última configuração
  let qtdFinal = novamente ? ultimaConfig.qtd : qtd;
  let minFinal = novamente ? ultimaConfig.min : min;
  let maxFinal = novamente ? ultimaConfig.max : max;
  let noRepeatFinal = novamente ? ultimaConfig.noRepeat : noRepeat;

  // Salva a configuração na primeira vez
  if (!novamente) {
    ultimaConfig = { qtd, min, max, noRepeat };
    rodada = 0; // reset contador
  }

  let numeros = [];

  // Validações
  if (isNaN(qtdFinal) || isNaN(minFinal) || isNaN(maxFinal)) {
    alert("Preencha todos os campos corretamente!");
    return;
  }

  if (minFinal > maxFinal) {
    alert("O valor mínimo não pode ser maior que o máximo!");
    return;
  }

  if (noRepeatFinal && qtdFinal > (maxFinal - minFinal + 1)) {
    alert("Erro: não é possível gerar mais números únicos do que o intervalo permite.");
    return;
  }

  // Sorteio
  while (numeros.length < qtdFinal) {
    let num = Math.floor(Math.random() * (maxFinal - minFinal + 1)) + minFinal;

    if (noRepeatFinal) {
      if (!numeros.includes(num)) {
        numeros.push(num);
      }
    } else {
      numeros.push(num);
    }
  }

  rodada++; // incrementa número do resultado

  // Exibe resultado
  document.getElementById("resultado").innerText = numeros.join("   ");
  document.getElementById("tituloResultado").innerText = `${rodada}° RESULTADO`;

  // Mostra a tela de resultado na primeira vez
  document.getElementById("formBox").style.display = "none";
  document.getElementById("telaResultado").style.display = "block";
}