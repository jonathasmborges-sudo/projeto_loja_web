//Criadno o array de itens do carrinho
const itensCarrinho = JSON.parse(sessionStorage.getItem('carrinhoSessao')) || []
//const itensCarrinho2 = JSON.parse(localStorage.get('carrinhoSessao')) || []

//Função para adicionar um item
const addItem = (objItem)=>{
    itensCarrinho.push(objItem)

    sessionStorage.setItem('carrinhoSessao', JSON.stringify(itensCarrinho))

    listItens()
}

//Função para listar os itens do carrinho
const listItens = () =>{
    const listaItens = JSON.parse(sessionStorage.getItem('carrinhoSessao'))

    montaTelaCarrinho(listItens)
}

//Montar tela Carrinho
const montaTelaCarrinho = (objListaItens) =>{
const sectionItensCarrinho = document.querySelector('#itens-carrinho')

objListaItens.forEach((elem, i)=>{
   const sectionItem = document.createElement('section')
   sectionItem.setAttribute('class', item)

   const divImgItem = document.createElement('div')
   divImgItem.setAttribute('class', 'img-item')

   const imgItem = document.createElement('div')
   imgItem.setAttribute('src', elem.caminho_imagem)
   imgItem.setAttribute('alt', elem.descricao_produto)

   imgItem.appendChild(imgItem)

   const divDescricaoItens = document.createElement('div')
   divDescricaoItens.setAttribute('class', 'descricoes-itens')

   const divValores = document.createElement('div')
   divValores.setAttribute('class','valores')

   const pItem = document.createElement('p')
   pItem.innerHTML = `R$ ${parseFloat(elem. valor_unitario).toFixed(2).replace('.',',')}`

   const divQuant = document.createElement('div')
   divQuant.setAttribute('class', input-quantidade)

   const inputQuantidade = document.createElement('input')
   inputQuantidade.setAttribute('type','number')
   inputQuantidade.setAttribute('name' `quant${i}`)
   inputQuantidade.setAttribute('id',`quant${i}`)
   inputQuantidade.setAttribute('class','input-item')
   inputQuantidade.setAttribute('value',1)

   divQuant.appendChild(inputQuantidade)

   const pCalc = document.createElement('p')
   pCalc.innerHTML = `R$ ${elem.valor_unitario * 1}`

   divValores.appendChild(pItem)
   divValores.appendChild(divQuant)
   divValores.append(pCalc)
})
}
//Exportação
export{addItem}