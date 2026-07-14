//Importando os produtos do arquivo lista_produtos.js
import { produtos } from "./lista_produtos.js";

//Importando a função para adicionar itens ao carrinho do arquivo carrinho.js
import { addItem } from "./carrinho.js";

//Pegando elementos do DOM
const sectionCards = document.querySelector("#cards");
const inputPesquisa = document.querySelector("#campo-pesquisa");

//Carregando os cards
const lista_produtos = () => {

    //Limpando a section cards
    sectionCards.innerHTML = "";

    //Percorrendo o array de produtos
    produtos.forEach((elem) => {

        //Criando o elemento div e definindo o atributo card
        const divCard = document.createElement("div");
        divCard.setAttribute("class", "card");

        //Criando o elemento img e definindo os atributos src e alt com os valores do caminho da imagem e descrição do produto
        const imgCard = document.createElement("img");
        imgCard.setAttribute("src", elem.caminho_imagem);
        imgCard.setAttribute("alt", elem.descricao_produto);

        //Criando o elemento p e atribuindo a descrição do produto
        const pCard = document.createElement("p");
        pCard.innerHTML = elem.descricao_produto;

        //Criando o elemento h2 e atribuindo o valor unitário deixando em duas casas decimais e substituindo ponto por vírgula
        const h2Card = document.createElement("h2");
        h2Card.innerHTML = `R$ ${parseFloat(elem.valor_unitario).toFixed(2).replace(".", ",")}`;

        //Criando o elemento button e definindo os atributos class e a descrição adicionar
        const btnCard = document.createElement("button");
        btnCard.setAttribute("class", "btn-add");
        btnCard.innerHTML = "Adicionar";

        //Adicionando evento ao botão para adicionar o produto ao carrinho e redirecionar para a página do carrinho
        btnCard.addEventListener("click", () => {

            addItem(elem);
            window.location.href = "paginas/carrinho.html";

        });

        //Adicionando os elementos filhos ao divCard
        divCard.appendChild(imgCard);
        divCard.appendChild(pCard);
        divCard.appendChild(h2Card);
        divCard.appendChild(btnCard);

        //Adicionando o divCard à section cards
        sectionCards.appendChild(divCard);

    });

}

//Chamando a função listar produtos
lista_produtos();

//Montando os menus de seções
const menuSecoes = () => {

    const mapSecoes = new Map();

    //Percorrendo o array de produtos
    produtos.forEach((elem) => {

        mapSecoes.set(elem.id_secao, elem);

    });

    //Convertendo o Map para Array
    const secoesFiltradas = Array.from(mapSecoes.values());

    //Retornando o array filtrado
    return secoesFiltradas;

}

//Função para inserir os menus na lista
const carregaSecoes = () => {

    //Pegando o menu de seções do DOM
    const ulMenuSecoes = document.querySelector("#menu-secoes");

    //Limpando o menu
    ulMenuSecoes.innerHTML = "";

    //Percorrendo o array de seções
    menuSecoes().forEach((elem) => {

        //Criando o elemento li
        const liMenu = document.createElement("li");

        //Criando o elemento a
        const aMenu = document.createElement("a");
        aMenu.setAttribute("href", "#");
        aMenu.setAttribute("class", "link-secao");
        aMenu.innerHTML = elem.secao;

        //Evento para filtrar produtos pela seção
        aMenu.addEventListener("click", (evento) => {

            evento.preventDefault();
            montaCards(filtroProduto(elem.id_secao));

        });

        //Adicionando o link ao li
        liMenu.appendChild(aMenu);

        //Adicionando o li ao menu
        ulMenuSecoes.appendChild(liMenu);

    });

}

//Chamando a função para carregar as seções
carregaSecoes();

//Função para filtrar os produtos da seção selecionada
const filtroProduto = (idSecao) => {

    //Retornando somente os produtos da seção informada
    return produtos.filter(elem => elem.id_secao === idSecao);

}

//Capturando os caracteres digitados no campo de pesquisa
inputPesquisa.addEventListener("input", (evento) => {

    //Pegando o texto digitado e convertendo para letras minúsculas
    const textoPesquisa = evento.target.value.toLowerCase();

    //Filtrando os produtos pelo nome
    const produtosFiltrados = produtos.filter((elem) => {

        return elem.descricao_produto
            .toLowerCase()
            .includes(textoPesquisa);

    });

    //Montando novamente os cards com os produtos filtrados
    montaCards(produtosFiltrados);

});

//Função para montar os cards dos produtos
const montaCards = (objProduto) => {

    //Limpando a section cards
    sectionCards.innerHTML = "";

    //Percorrendo o array de produtos
    objProduto.forEach((elem) => {

        //Criando o elemento div e definindo o atributo card
        const divCard = document.createElement("div");
        divCard.setAttribute("class", "card");

        //Criando o elemento img e definindo os atributos src e alt
        const imgCard = document.createElement("img");
        imgCard.setAttribute("src", elem.caminho_imagem);
        imgCard.setAttribute("alt", elem.descricao_produto);

        //Criando o elemento p e atribuindo a descrição do produto
        const pCard = document.createElement("p");
        pCard.innerHTML = elem.descricao_produto;

        //Criando o elemento h2 e atribuindo o valor unitário deixando em duas casas decimais
        const h2Card = document.createElement("h2");
        h2Card.innerHTML = `R$ ${parseFloat(elem.valor_unitario).toFixed(2).replace(".", ",")}`;

        //Criando o elemento button e definindo os atributos class e descrição
        const btnCard = document.createElement("button");
        btnCard.setAttribute("class", "btn-add");
        btnCard.innerHTML = "Adicionar";

        //Adicionando evento ao botão para adicionar o produto ao carrinho e redirecionar para a página do carrinho
        btnCard.addEventListener("click", () => {

            addItem(elem);
            window.location.href = "paginas/carrinho.html";

        });

        //Adicionando os elementos filhos ao divCard
        divCard.appendChild(imgCard);
        divCard.appendChild(pCard);
        divCard.appendChild(h2Card);
        divCard.appendChild(btnCard);

        //Adicionando o divCard à section cards
        sectionCards.appendChild(divCard);

    });

}