// Criando o array de itens do carrinho
const itensCarrinho = JSON.parse(sessionStorage.getItem("carrinhoSessao")) || []


//  Função para adicionar um item
const addItem = (objItem)=>{
    itensCarrinho.push(objItem)
    sessionStorage.setItem('carrinhoSessao', JSON.stringify(itensCarrinho))

    listItens()
}


// Função para listar os itens do carrinho
const listItens = ()=> {
    const listaItens = JSON.parse(sessionStorage.getItem('carrinhoSessao'))

    montaTelaCarrinho(listItens)

}

// Montar tela carrinho
const mantaTelaCarrinho = (objListaItens)=>{
    const sectionItensCarrinho = document.querySelector('#itens-carrinho')

    itensCarrinho.forEach((elem, i)=> {
        const sectionItens = document.createElement('section')
        sectionItens.setAttribute('class', item)

        const divImgItem = document.createElement('div')
        divImgItem.setAttribute('class', 'img-item')

        const imgItem = document.createElement('img')
        imgItem.setAttribute('src', elem.caminho_imagem)
        imgItem.setAttribute('alt', elem.descricao_produto)

        imgItem.appendChild(imgItem)

        const divDescricaoItens = document.createElement('div')
        divDescricaoItens.setAttribute('class', 'descricoes-itens')

        const divDescricao = document.
    })
        
// Exportação
export{addItem}