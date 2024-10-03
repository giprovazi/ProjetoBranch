// ESTRUTURA DE REPETIÇÃO

for(let i=0; i<10;i++){
    // console.log(i)
}

// WHILE

let f = 0;
while(f < 10){
    // console.log(f)
    f++
}

// DO WHILE

let w=0;

do{
    // console.log(w);
    w++;
}
while(w<5);

// FUNÇÕES

function Ola(nome){
    // `` (strings literal ou template string ${}) chama a variável
    console.log(`seja bem vindo ${nome}`)
    alert(`seja bem vindo a ${nome}`)
    document.write(`seja bem vindo a ${nome}`)
}
// executando a função Ola passando o valor
Ola("fiap")

// ARROW FUNCTION

const hello=()=>(console.log("função arrow function"))

hello()

// ARRAY[], OBJETO{} E METODOS()

let jogadores =[
    {nome:"Huguinho", idade:17}
    {nome:"Zezinho", idade:18}
    {nome:"Luizinho", idade:19}
]

let listarJogadores = jogadores.map(function(item){
    return item.nome;
})
console.log(listarJogadores)