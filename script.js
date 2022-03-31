let chute = Math.floor(Math.random() * 11);
let resultado = document.querySelector('#resultado');

function chutar(){
    let numero = Number(document.querySelector('#valor').value);
    
    if(numero > 10 || numero < 0 || document.querySelector('#valor').value == ''){
        seNumeroInvalido(); 

    }else if(numero == chute){
        acertou();
        
    }else{
        errou();
    }
}

function acertou() {
    let seAcertou = new Audio("acertou-mizeravijk.mp3");
    seAcertou.play();
    resultado.innerHTML = `ACERTOU, MIZERÁVI!`;
    resultado.style.color = 'blue';
    document.querySelector('#valor').value = "";
    setTimeout( () => {
        resultado.innerHTML = "";
    }, 3000)
    
    chute = Math.floor(Math.random() * 11);
}

function errou() {
    let seErrou = new Audio("faustao-errou.mp3");
    seErrou.play();
    resultado.innerHTML = `ERROU!!`;
    resultado.style.color = 'red';
    document.querySelector('#valor').value = "";
}

function seNumeroInvalido () {
    alert('Você digitou um número inválido!');
    document.querySelector('#valor').value = ""; 
}