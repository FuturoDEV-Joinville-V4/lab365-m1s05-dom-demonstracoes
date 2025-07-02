/** 
 * Recuperar os valores
 */
const inputElemento = document.querySelector('input')
const selectElemento = document.querySelector('select')
// const buttonElemento = document.querySelector('#btn-modificar-tudo')
const listaElemento = document.querySelector('.lista-adicionar')


function adicionarItem() {
    // const valorInput = inputElemento.value;
    // // const valorSelect = selectElemento.value;

    // const itemsAnteriores = listaElemento.innerHTML
    // const itemNovo = "<li>" + valorInput + "</li>"

    // listaElemento.innerHTML = itemsAnteriores + itemNovo


    const valorInput = inputElemento.value;
    const estadoAnteriorDaLista = listaElemento.innerHTML;
    const novoItemElemento = "<li>" + valorInput + "</li>"

    listaElemento.innerHTML = novoItemElemento + estadoAnteriorDaLista
    // console.log(estadoAnteriorDaLista, novoItemElemento)
}