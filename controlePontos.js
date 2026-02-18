const botaoBaterPonto = document.querySelector('.card-ponto button');
const botaoBaterPontoSaida = document.querySelector('.card-ponto button:nth-child(3)');
const dataAtual = new Date();
const dataFormatada = dataAtual.toLocaleString('pt-BR',);

botaoBaterPonto.addEventListener('click', () => {
    alert('Ponto batido com sucesso!');
    document.getElementById('displayEntrada').innerText = ("Entrada: " + dataFormatada)
    
});
botaoBaterPontoSaida.addEventListener('click', () => {
    alert('Ponto de saída batido com sucesso!');
    document.getElementById('displayEntrada').innerHTML = ("Saída: " + dataFormatada + "<br>" + document.getElementById('displayEntrada').innerHTML)
});
