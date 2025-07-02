// console.log(document.body.children)

/** 
 * Recuperar titulo principal
 */

const tituloElemento = document.getElementById("titulo-principal")

// tituloElemento.
// console.log(tituloElemento)
// tituloElemento.addEventListener('click', console.log)
// console.log(tituloElemento.getElementsByTagName('span'))
/** 
 * Recuperar lista de elementos por nome de classe
 */

const itemsElemento = document.getElementsByClassName('item-lista')

const paragrafosElementos = document.getElementsByTagName('p')

// console.log('quantidade encontrada: ', paragrafosElementos.length)
// console.log(paragrafosElementos)
// console.log(itemsElemento)


const navegacaoElemento = document.querySelectorAll('.quick-nav a')

// console.log(navegacaoElemento)

const inputElemento = document.querySelector('input')


function bemvindo() {
    const valorInput = inputElemento.value;

    alert("Seja bem-vindo, Sr(a)." + valorInput)
}