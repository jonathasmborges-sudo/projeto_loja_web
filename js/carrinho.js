// Criando o array de itens do carrinho
const itensCarrinho =
JSON.parse(sessionStorage.getItem("carrinhoSessao")) || [];

// Função item
const item = (objProduto)=>{

    const item = {
        id_produto: objProduto.id_produto,
        descricao_produto: objProduto.descricao_produto,
        valor_unitario: objProduto.valor_unitario,
        unidade: objProduto.unidade,
        caminho_imagem: objProduto.caminho_imagem,
        quantidade : 1
    }

return item

}


// Função para adicionar um item
const addItem = (objProduto) => {

    // Procura se o produto já existe no carrinho
    const indiceProduto = itensCarrinho.findIndex(
        (elem) => elem.id_produto === objProduto.id_produto
    );

    // Produto já existe
    if (indiceProduto !== -1) {

        itensCarrinho[indiceProduto].quantidade++;

    }

    // Produto ainda não existe
    else {

        itensCarrinho.push(item(objProduto));

    }

    // Atualiza o sessionStorage
    sessionStorage.setItem(
        "carrinhoSessao",
        JSON.stringify(itensCarrinho)
    );

};

// Função para listar os itens
const listItens = () => {

    return JSON.parse(
        sessionStorage.getItem("carrinhoSessao")
    ) || [];

};

// Função para remover um item do carrinho
const removeItem = (indice) => {

    itensCarrinho.splice(indice, 1);

    sessionStorage.setItem(
        "carrinhoSessao",
        JSON.stringify(itensCarrinho)
    );

};

// Exportação
export { addItem, listItens, removeItem };