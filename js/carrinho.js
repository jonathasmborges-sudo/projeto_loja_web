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

// Exportação
export { addItem, listItens };