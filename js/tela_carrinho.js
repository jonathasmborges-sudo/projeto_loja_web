// Importando a função para listar os itens do carrinho
import { listItens, removeItem } from "./carrinho.js";

// Pegando elemento do DOM
const sectionListaProdutos = document.querySelector("#lista-produtos");

// Pegando elementos do resumo da compra
const spanSubtotal = document.querySelector("#subtotal-compra");
const spanTotal = document.querySelector("#total-compra");

// Função para montar a tela do carrinho
const montaTelaCarrinho = () => {

    // Limpando a área dos produtos
    sectionListaProdutos.innerHTML = "";

    // Pegando os produtos armazenados na sessão
    const itensCarrinho = listItens();

    // Atualizando o resumo da compra
    atualizarResumo(itensCarrinho);

    // Verificando se existem produtos no carrinho
    if (itensCarrinho.length === 0) {

        sectionListaProdutos.innerHTML = `
            <h2 style="text-align:center; color:#058cd7;">
                Seu carrinho está vazio.
            </h2>
        `;

        return;
    }

    // Percorrendo os itens do carrinho
    itensCarrinho.forEach((elem, i) => {

        // Criando o card do produto
        const divProduto = document.createElement("div");
        divProduto.setAttribute("class", "produto");

        // Criando a imagem
        const imgProduto = document.createElement("img");
        imgProduto.setAttribute("src", "../" + elem.caminho_imagem);
        imgProduto.setAttribute("alt", elem.descricao_produto);

        // Criando a descrição
        const divDescricao = document.createElement("div");
        divDescricao.setAttribute("class", "descricao");

        const h2Descricao = document.createElement("h2");
        h2Descricao.innerHTML = elem.descricao_produto;

        const pDescricao = document.createElement("p");
        pDescricao.innerHTML = `Unidade: ${elem.unidade}`;

        divDescricao.appendChild(h2Descricao);
        divDescricao.appendChild(pDescricao);

        // Criando o preço
        const divPreco = document.createElement("div");
        divPreco.setAttribute("class", "preco");

        const h3Preco = document.createElement("h3");
        h3Preco.innerHTML = "Preço";

        const pPreco = document.createElement("p");
        pPreco.innerHTML = `R$ ${parseFloat(elem.valor_unitario)
            .toFixed(2)
            .replace(".", ",")}`;

        divPreco.appendChild(h3Preco);
        divPreco.appendChild(pPreco);

        // Criando quantidade
        const divQuantidade = document.createElement("div");
        divQuantidade.setAttribute("class", "quantidade");

        const h3Quantidade = document.createElement("h3");
        h3Quantidade.innerHTML = "Quantidade";

        const inputQuantidade = document.createElement("input");
        inputQuantidade.setAttribute("type", "number");
        inputQuantidade.setAttribute("value", elem.quantidade);
        inputQuantidade.setAttribute("min", "1");
        inputQuantidade.setAttribute("id", `quant${i}`);

        divQuantidade.appendChild(h3Quantidade);
        divQuantidade.appendChild(inputQuantidade);

        // Criando subtotal
        const divSubtotal = document.createElement("div");
        divSubtotal.setAttribute("class", "subtotal");

        const h3Subtotal = document.createElement("h3");
        h3Subtotal.innerHTML = "Subtotal";

        const pSubtotal = document.createElement("p");
        pSubtotal.innerHTML = `R$ ${parseFloat(elem.valor_unitario)
            .toFixed(2)
            .replace(".", ",")}`;

        divSubtotal.appendChild(h3Subtotal);
        divSubtotal.appendChild(pSubtotal);

      // Criando botão para remover o produto
const btnRemover = document.createElement("button");
btnRemover.setAttribute("class", "btn-remover");
btnRemover.setAttribute("title", "Remover produto");

// Criando o ícone do botão
const imgRemover = document.createElement("img");
imgRemover.setAttribute("src", "../imagens/icone_remover.png");
imgRemover.setAttribute("alt", "Remover produto");

btnRemover.appendChild(imgRemover);

// Criando a área onde ficará o botão
const divRemover = document.createElement("div");
divRemover.setAttribute("class", "remover");

divRemover.appendChild(btnRemover);

// Evento para remover o item do carrinho
btnRemover.addEventListener("click", () => {

    if (confirm(`Tem certeza que deseja remover ${elem.descricao_produto} do carrinho?`)) {

        removeItem(i);

        montaTelaCarrinho();

    }

});

        // Adicionando os elementos ao card
        divProduto.appendChild(imgProduto);
        divProduto.appendChild(divDescricao);
        divProduto.appendChild(divPreco);
        divProduto.appendChild(divQuantidade);
        divProduto.appendChild(divSubtotal);
        divProduto.appendChild(divRemover);

        // Adicionando o card à página
        sectionListaProdutos.appendChild(divProduto);

    });

};

// Função para atualizar o resumo da compra
const atualizarResumo = (itensCarrinho) => {

    let total = 0;

    itensCarrinho.forEach((item) => {
        total += item.valor_unitario;
    });

    const valorFormatado = `R$ ${total.toFixed(2).replace(".", ",")}`;

    spanSubtotal.textContent = valorFormatado;
    spanTotal.textContent = valorFormatado;

};

// Chamando a função para montar o carrinho
montaTelaCarrinho();