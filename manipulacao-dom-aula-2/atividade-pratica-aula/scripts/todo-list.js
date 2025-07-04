// id => ul#taskList
const listaElementoPai = document.querySelector('#taskList')

/** 
 * Criar o elemento
 * createElement('tagName')
 */
// const itemElemento = document.createElement('li')

// if(listaElementoPai) {
//     itemElemento.textContent = "Criando um elemento"

//     /** 
//      * Adicionando items ao elemento pai
//      * utilizando o appendChild(element)
//      */
//     // listaElementoPai.appendChild("<li>criando elemento</li>") => Incorreto!
//     // listaElementoPai.appendChild(itemElemento)
//     /** 
//      * Incluindo no inicio 
//      * prepend()
//      */
//     // itemElemento.textContent = "Adiciona ao inicio"
//     // listaElementoPai.prepend(itemElemento)
// }


/** 
 * Inserindo elemento na posição especifica
 */
// const itemElementoDois = document.createElement('li')
// itemElementoDois.textContent = "Item antes do .completed"

// const elementoReferencia = document.querySelector(".task-item.completed")

// listaElementoPai.insertBefore(itemElementoDois, elementoReferencia)
// console.log(elementoReferencia)


/** 
 * Adicionando logica ao todo
 */

const taskInputElement = document.querySelector('input#taskInput')

function adicionarItem() {
    const valor = taskInputElement.value
    /**
     * Criando elemento e adicionando valor nele
     */
    const itemElemento = document.createElement('li')
    // itemElemento.textContent = valor
    itemElemento.classList.add('task-item')
    // itemElemento.setAttribute('onclick', 'removerTask(this)')
    /** 
     * Aplicar estrutura e classes
     */
    const spanElemento = document.createElement('span')
    spanElemento.textContent = valor;
    // incluindo elemento <span> no <li>
    itemElemento.appendChild(spanElemento)

    /** 
     * Adicionar na lista
     */

    listaElementoPai.appendChild(itemElemento)
    /** Limpar o valor do input */
    taskInputElement.value = ''
}


function removerItem(posicao) {

    if(posicao === 'primeiro') {
        const primerioItem = listaElementoPai.firstElementChild

        if(primerioItem) {
            primerioItem.remove()
            // listaElementoPai.removeChild(primerioItem)
        }

    } else { // ultimo
        const ultimoItem = listaElementoPai.lastElementChild

        if(ultimoItem) {
            listaElementoPai.removeChild(ultimoItem)
        }
    }
    // console.log(posicao)
}


function removerTask(element) {
    element.parentNode.remove()
}
/**
 * 
 * @param {Element} element 
 */
function toggleCompleted(element) {
    // console.log(element)
    element.classList.toggle('completed')
    const indice = element.getAttribute('data-indice')

    console.log(indice)
}


/** 
 * Gestão de classes
 */

const primeiroElementoLista = document.querySelector('.task-item')
// Adicionando class
// primeiroElementoLista.classList.add('completed')
// removendo class
// primeiroElementoLista.classList.remove('task-item')
// verificar se existe class
// const completado = primeiroElementoLista.classList.contains('completed')
// console.log(completado)
// console.log()