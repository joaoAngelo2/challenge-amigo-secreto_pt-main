//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaNomes = [];
let nome = document.getElementById('amigo');

function adicionarAmigo(){
    if(nome.value.length == 0){
        alert("Por favor, insira um nome");
    }else{
    listaNomes.push(nome.value);
    nome.value = '';
    imprimeLista();
    }
}
function imprimeLista(){
    for(let i=0; i<listaNomes.length; i++){
        console.log(listaNomes[i]);
    }
}
function sortearAmigo(){
    return listaNomes[(Math.random() * listaNomes.length - 1)];
}
