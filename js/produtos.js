// Importando os produtos
import { produtos } from "./lista_produtos.js";
import { addItem } from "./carrinho.js";

// Pegando elementos do DOM
const sectionCards = document.querySelector("#cards");

// Carregando os cards
const lista_produtos = () => {

    // Limpando os cards
    sectionCards.innerHTML = "";

    // Percorrendo o array de produtos
    produtos.forEach((elem) => {

        const divCard = document.createElement("div");
        divCard.className = "card";

        const imgCard = document.createElement("img");
        imgCard.src = elem.caminho_imagem;
        imgCard.alt = elem.descricao_produto;

        const pCard = document.createElement("p");
        pCard.textContent = elem.descricao_produto;

        const h2Card = document.createElement("h2");
        h2Card.textContent = `R$ ${elem.valor_unitario.toFixed(2).replace(".", ",")}`;

        const btnCard = document.createElement("button");
        btnCard.className = "btn-add";
        btnCard.textContent = "Adicionar";

        divCard.appendChild(imgCard);
        divCard.appendChild(pCard);
        divCard.appendChild(h2Card);
        divCard.appendChild(btnCard);

        sectionCards.appendChild(divCard);
    });

};

lista_produtos();

// Montando o menu das seções
const menuSecoes = () => {

    const mapSecoes = new Map();

    produtos.forEach((elem) => {
        mapSecoes.set(elem.id_secao, elem);
    });

    return Array.from(mapSecoes.values());

};

// Carregando menu
const carregaSecoes = () => {

    const ulMenuSecoes = document.querySelector("#menu-secoes");

    ulMenuSecoes.innerHTML = "";

    menuSecoes().forEach((elem) => {

        const liMenu = document.createElement("li");

        const aMenu = document.createElement("a");
        aMenu.href = "#";
        aMenu.className = "link-secao";
        aMenu.textContent = elem.secao;

        aMenu.addEventListener("click", (evento) => {

            evento.preventDefault();
            montaCards(filtroProduto(elem.id_secao));

        });

        liMenu.appendChild(aMenu);
        ulMenuSecoes.appendChild(liMenu);

    });

};

carregaSecoes();

// Filtra produtos da seção
const filtroProduto = (idSecao) => {

    return produtos.filter(elem => elem.id_secao === idSecao);

};

// Monta os cards filtrados
const montaCards = (objProduto) => {

    sectionCards.innerHTML = "";

    objProduto.forEach((elem) => {

        const divCard = document.createElement("div");
        divCard.className = "card";

        const imgCard = document.createElement("img");
        imgCard.src = elem.caminho_imagem;
        imgCard.alt = elem.descricao_produto;

        const pCard = document.createElement("p");
        pCard.textContent = elem.descricao_produto;

        const h2Card = document.createElement("h2");
        h2Card.textContent = `R$ ${elem.valor_unitario.toFixed(2).replace(".", ",")}`;

        const btnCard = document.createElement("button");
        btnCard.className = "btn-add";
        btnCard.textContent = "Adicionar";

        divCard.appendChild(imgCard);
        divCard.appendChild(pCard);
        divCard.appendChild(h2Card);
        divCard.appendChild(btnCard);

        sectionCards.appendChild(divCard);

    });

};