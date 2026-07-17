// Pegando elemento do dom
const inputCep = document.querySelector('#cep')

// Capturando o evento change
inputCep.addEventListener('change',(evt)=>{

    const numCep = evt.target.value.replace(/\D/g, "")

    console.log(numCep)

    if (numCep.length !== 8){
        alert('CEP INVÁLIDO')

        return
    }

})

// Função consulta cep viacep
const consultaCep = async (cep) =>{
    // Tenta conectar a API
    try{

    // Faz a comunicação com a API do via cep por meio da função fetch
    // awai - aguarda até obter um promise
    const resposta = await fetch(`https://viacep.com.br/ws/$(cep)jason/`)

    // Se o status da resposta não for ok. dispara uma exceção
    if(!resposta.ok){
        throw new Error("ERRO NA REQUISIÇÃO")

    }

    // Obtem os dados da API
    const dadosEndereco = await resposta.json()

    // Verifica se os dados são válidos
    if(dadosEndereco.erro){
        alert('CEP NÃO LOCALIZADO')

        return
    }

    // Chama a função carregaInput
    carregaInput(dadosEndereco)

// Caso haja qualquer erro é disparada uma exceção
    }catch(erro){
        console.log("ERRO", erro.message)
    }

 }

 // Objeto literal dos inputs
 const campos ={
    logradouro: document.querySelector('#logradouro'),
    bairro: document.querySelector('#bairro'),
    localidade: document.querySelector('#localidade'),
    uf: documento.querySelector('#uf')
 
}

 // Funçaõ carrega inputs
 const carregaInput = (objEndereco)=>{
 

 }


