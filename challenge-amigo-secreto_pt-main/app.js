//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaNomes = [];
let lista = document.getElementById('listaAmigos');
let nome = document.getElementById('amigo');

function adicionarAmigo(){
    if(nome.value.length == 0){
        alert("Por favor, insira um nome");
    }else{
    listaNomes.push(nome.value);
    lista.innerHTML = "";
    inserirLista();
    nome.value = '';
    imprimeLista();
    }
}
function imprimeLista(){
    for(let i=0; i<listaNomes.length; i++){
        console.log(listaNomes[i]);
    }
}
function inserirLista(){
    for(let i=0; i<listaNomes.length; i++){
        var element = document.createElement('li');
        element.textContent = listaNomes[i];
        lista.appendChild(element);
    }
}
function sortearAmigo(){
    let resultado  = document.getElementById("resultado");
    resultado.innerHTML = "";
    var element = document.createElement('li');
    if(listaNomes.length == 0 || !listaNomes){
        element.textContent = "insira um elemento válido";
        resultado.appendChild(element);
        return;
    }
    let sorteado = listaNomes[Math.floor(Math.random() * listaNomes.length )];
    element.textContent = `o nome sorteado foi: ${sorteado}`;
    resultado.appendChild(element);
}
