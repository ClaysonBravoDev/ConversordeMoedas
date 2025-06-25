const convertButton = document.querySelector(".convert-button"); // Seleciona o botão de conversão do DOM
const currencySelect = document.querySelector(".currency-select"); // Seleciona o elemento de seleção de moeda do DOM

function convertValue() { // Função que realiza a conversão de moeda
    const inputCurrencyValue = parseFloat(document.querySelector(".input-currency").value); // Obtém o valor inserido pelo usuário e o converte para um número decimal
    const valueAconvert = document.querySelector(".currency-value"); // Seleciona o elemento onde será exibido o valor a ser convertido
    const valueAconvertido = document.querySelector(".currency-value2"); // Seleciona o elemento onde será exibido o valor convertido

    console.log(currencySelect.value); // Log do valor selecionado no dropdown de moeda

    const dolarToday = 5.51; // Valor de um real em dólares (taxa de câmbio)
    const euroToday = 6.4;   // Valor de um real em euros (taxa de câmbio)
    const libraToday = 0.13;   // Valor de um real em libras (taxa de câmbio)
    const argentinaToday = 0.0047;   // Valor de um real em Peso Argentino(taxa de câmbio)

    if (isNaN(inputCurrencyValue) || inputCurrencyValue <= 0) { // Verifica se o valor inserido é um número válido e maior que zero
        /*alert("Não cara Meus Deus, Por favor, insira um valor válido."); // Alerta o usuário*/
        return; // Sai da função se o valor não for válido
    }

    valueAconvert.innerHTML = new Intl.NumberFormat("pt-BR", { // Formata e exibe o valor original em reais
        style: "currency",
        currency: "BRL",
    }).format(inputCurrencyValue);

    let convertedValue; // Variável para armazenar o valor convertido

    if (currencySelect.value === "dolar") { // Verifica se a moeda selecionada é dólar
        convertedValue = inputCurrencyValue / dolarToday; // Converte o valor de reais para dólares
        valueAconvertido.innerHTML = new Intl.NumberFormat("en-US", { // Formata e exibe o valor convertido em dólares
            style: "currency",
            currency: "USD",
        }).format(convertedValue);
    }  
    if (currencySelect.value === "euro") { // Verifica se a moeda selecionada é euro
        convertedValue = inputCurrencyValue / euroToday; // Converte o valor de reais para euros
        valueAconvertido.innerHTML = new Intl.NumberFormat("de-DE", { // Formata e exibe o valor convertido em euros
            style: "currency",
            currency: "EUR",
        }).format(convertedValue);
    }
    if (currencySelect.value === "libra") { // Verifica se a moeda selecionada é euro
        convertedValue = inputCurrencyValue / libraToday; // Converte o valor de reais para euros
        valueAconvertido.innerHTML = new Intl.NumberFormat("en-GB", { // Formata e exibe o valor convertido em euros
            style: "currency",
            currency: "GBP",
        }).format(convertedValue);
    }
     if (currencySelect.value === "argentina") { // Verifica se a moeda selecionada é euro
        convertedValue = inputCurrencyValue / argentinaToday; // Converte o valor de reais para euros
        valueAconvertido.innerHTML = new Intl.NumberFormat("es-AR", { // Formata e exibe o valor convertido em euros
            style: "currency",
            currency: "ARS",
        }).format(convertedValue);
    }


    console.log(convertedValue); // Log do valor convertido para depuração
}

function changeCurrency(){
   const currencyDolar = document.getElementById("currency-dolar");
    const currencyImg = document.querySelector(".usa");
    currencyImg.src = "./assets/usa.png";

   if(currencySelect.value === "dolar") {
   currencyDolar.innerHTML = "Dólar Americano"
     }

        if(currencySelect.value === "euro") {
   currencyDolar.innerHTML = "Euro"
    currencyImg.src = "./assets/euro.png";
     }

     if(currencySelect.value === "libra") {
   currencyDolar.innerHTML = "Libra"
    currencyImg.src = "./assets/libra.png";
     }

     if(currencySelect.value === "argentina") {
   currencyDolar.innerHTML = "Peso Argentino"
    currencyImg.src = "./assets/argentina.png";
     }

     convertValue()

}

currencySelect.addEventListener("change", changeCurrency); // Adiciona um evento de mudança ao dropdown de moeda, chamando a função convertValue quando selecionado
convertButton.addEventListener("click", convertValue); // Adiciona um evento de clique ao botão de conversão, chamando a função convertValue quando clicado

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('tema') === 'dark') {
    document.body.classList.add('dark');
  }
});

function alternarTema() {
  document.body.classList.toggle('dark');
  const temaAtual = document.body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('tema', temaAtual);
}
