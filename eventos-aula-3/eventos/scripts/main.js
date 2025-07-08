/** 
 * Evento de Click
 */

// button => #btnClick
// saida feedback => outputClick
const buttonClickElement = document.querySelector("#btnClick")

buttonClickElement.addEventListener('click', () => {
  const paragraphElement = document.querySelector("#outputClick")
  paragraphElement.style.color = "green";

  paragraphElement.textContent = "⚡ Clicou no elemento"
})

/** 
 * Evento de mouse (mouseover e mouseout)
 */

const outputMouseElement = document.querySelector('#outputMouse')
const caixaMouseElemento = document.querySelector('#divMouse');

caixaMouseElemento.addEventListener('mouseover', () => {
    outputMouseElement.style.color = "green"
    outputMouseElement.textContent = "Mouse está dentro da caixa!";
})

caixaMouseElemento.addEventListener("mouseout", () => {
  outputMouseElement.style.color = "red"
  outputMouseElement.textContent = "Mouse fora";
})

/** 
 * Eventos referente a formulário
*/

// HTMLInputElement
/**
 * @type {HTMLInputElement}
 */
const inputElemento = document.querySelector("#inputTexto")

inputElemento.addEventListener('change', (event) => { // só chamada a função, quando eu tiro focus
  // console.log('[EVENT_TARGET]:', event.target)
  const value = event.target.value
  console.log('valor atual: ', value)
})

/**
 * @type {HTMLParagraphElement}
 */
const outputInputElement = document.querySelector('#outputInput')

inputElemento.addEventListener('input', (event) => { // chama a cada digito
  // console.log('Estado do evento input: ', inputElemento.value)
  const value = event.target.value
  outputInputElement.textContent = value
})

/** 
 * Submit
 */

const formElemento = document.querySelector("#myForm")
const inputNomeForm = document.querySelector("#inputNomeForm")
const outputForm = document.querySelector('#outputForm')

formElemento.addEventListener("submit", (event) => {
  event.preventDefault()

  outputForm.style.color = "green"
  outputForm.textContent = "Enviou o formulário e esse é seu nome: " + inputNomeForm.value

  inputNomeForm.value = ""
})


/** 
 * Eventos de teclado (keydown | keyup)
 */
const inputTecladoElemento = document.querySelector("#inputTeclado")

inputTecladoElemento.addEventListener('keydown', (event) => {
  console.log("TECLA", event)
})

// inputTecladoElemento.addEventListener('keyup', (event) => {
//   // console.log("TECLA", event)
// })

/** 
 * Eventos de foco (focus / blur)
 */
/**
 * @type {HTMLInputElement}
 */
const inputFocoElemento = document.querySelector('#inputFocus')


inputFocoElemento.addEventListener('focus', () => {
  // inputFocoElemento.style.borderColor = "blue"
    inputFocoElemento.classList.add('input-focus')
})

inputFocoElemento.addEventListener('blur', (event) => {
    // inputFocoElemento.classList.remove('input-focus')
    if(event.target.value.includes("@")) {
      inputFocoElemento.classList.remove('input-focus')
      inputFocoElemento.classList.remove('input-error')
    } else {
      inputFocoElemento.classList.remove('input-focus')
      inputFocoElemento.classList.add('input-error')
    }
})