const nome = "Gustavo Henrique";
let nome2 = "";
let pessoaDefault =  {
        nome: "Gustavo Henrique",
        idade: "18",
        trabalho: "Gestor de tráfego"
    }

    let nomes = ["Gustavo Henrique", "Nicolas", "João Pereira"];

        pessoasListaVazia = [];

    let pessoas = [
     {
        nome: "Gustavo Henrique",
        idade: "18",
        trabalho: "Gestor de tráfego"
     },
     {
        nome: "Nicolas",
        idade: "23",
        trabalho: "MKT"
     }
]

function alterarNome () {
    nome2 ("Nicolas");
    console.log("Valor alterado:");
    console.log(nome2);
}

function recebeEalteraNome(novoNome) {
    nome2 = novoNome
    console.log("Valor alterado recebendo um nome:");
    console.log(nome2);
}

function imprimirPessoa(pessoa) {
    console.log ("Nome:");
    console.log(pessoa.nome);

    console.log ("Idade:");
    console.log(pessoa.idade);

    console.log ("Trabalho:");
    console.log(pessoa.trabalho);

}

function adicionarPessoa(pessoa) {
    pessoas.push(pessoa);
}

function imprimirPessoas({
    console.log("-------Imprimir Pessoas--------")
    pessoasforEach((item => {
        console.log("Nome:");
        console.log(item.nome)

        console.log ("Idade:");
    console.log(item.idade);

    console.log ("Trabalho:");
    console.log(item.trabalho);
    });
})
    
imprimirPessoas();


adicionarPessoa ({
    nome: "Joao Pereira",
    idade: "20",
    trabalho: "Porteiro"
});



//imprimirPessoa(pessoaDefault);

//imprimirPessoa ({
    
       // nome: "Gustavo Henrique",
       // idade: "18",
       // trabalho: "Gestor de tráfego"
    
//});

//recebeEalteraNome ("João Pereira");
//recebeEalteraNome ("Nicolas")

//alterarNome ();