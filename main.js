document.addEventListener("DOMContentLoaded", () => {
    const divProdutos = document.getElementById("listaProdutos");
// const divProdutos = document.getElementById("listaProdutos");

//Components: bloco que pode ser abstraído da minha interface

//declaramos uma variável, e dentro dela estamos definindo uma função 
//smepre que eu precisar utilizar  essa função eu chamo ela pelo nome da variável.

//arrow function (maneira diferente de criar funções)
const componenteProdutos = (produto) => {
    return `<div class='card-produto'>
        <img src = '${produto.image}' alt='${produto.title}'>
        <h2>${produto.title}</h2>
        <span>Preço = R$ ${produto.price}</span>
        <a href="">Ver Produto</a>
        
    </div>`;
};
//fetch: função que faz requisições para APIs

fetch('https://fakestoreapi.com/products')
.then(function (resposta) {
    return resposta.json()
})

.then(function(listaProdutos) {
    listaProdutos.forEach((itemAtualDoArray) => {
        console.log(componenteProdutos(itemAtualDoArray));
        divProdutos.innerHTML += componenteProdutos(itemAtualDoArray); 
    });
}); 
        
});