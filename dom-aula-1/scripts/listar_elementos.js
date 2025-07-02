const carItemListaElementos = document.querySelectorAll('.card-item')
let listaFormatadaDosProdutos = []

/** 
 * Listando e formatando para um novo array
 */
carItemListaElementos.forEach((cardItemElemento) => {
    const tituloElemento = cardItemElemento.querySelector('.produto-titulo')
    const precoElemento = cardItemElemento.querySelector('.produto-preco')

    const itemProduto = {
        titulo: tituloElemento.textContent,
        preco: precoElemento.textContent,
    }

    listaFormatadaDosProdutos.push(itemProduto)
    // console.log(itemProduto)
    // console.log(tituloElemento.textContent, precoElemento.textContent)
    // console.log(cardItemElemento.textContent)
})

/** 
 * Alterando os itens na DOM
 */

carItemListaElementos.forEach((cardItemElemento, indice) => {
    const tituloElemento = cardItemElemento.querySelector('.produto-titulo')

    tituloElemento.textContent = (indice + 1) + " - " + tituloElemento.textContent
})

const instrucaoElemento = document.querySelector('.instruction')
instrucaoElemento.innerHTML = "<strong>Alterando via javascript</strong>"

// console.log(instrucaoElemento.innerHTML)

// instrucaoElemento.innerHTML = "Alterando via javascript"
// instrucaoElemento.textContent = "<strong>Alterando via javascript</strong>"