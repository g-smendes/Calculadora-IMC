const calcular = document.getElementById('calcular')

function imc () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso =  document.getElementById('peso').value; 
    const resultado = document.getElementById('resultado');    
    
    if(nome.value !== '' && altura !== '' && peso !== '') {
       
        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classsificação = '';

        if(valorIMC < 18.5) {
            classsificação = 'abaixo do peso';
        }else if (valorIMC < 25) {
            classsificação = 'Peso ideal. Parabéns!!';
        }else if (valorIMC < 30 ){
            classsificação = 'levemente acima do peso.';
        }else if (valorIMC < 35){
            classsificação = 'com obesidade grau I.';
        }else if (valorIMC < 40) {
            classsificação = 'com obesidade grau II.';
        }else {
            classsificação = 'com obesidade grau III. Cuidado, procure um médico.';
        }
        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classsificação}`; 

    }else {
        resultado.textContent = 'Preencha todos os campos!';
    }    
}
calcular.addEventListener('click', imc);