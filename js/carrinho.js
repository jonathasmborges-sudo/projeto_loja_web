// Criando o array de itens do carrinho
const itensCarrinho =
JSON.parse(sessionStorage.getItem("carrinhoSessao")) || [];

// Função para adicionar um item
const addItem = (objItem) => {

    itensCarrinho.push(objItem);

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