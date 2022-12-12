import { Modal } from "./modal.js"

const buttonCalc = document.querySelector('#button')
const inputPeso = document.querySelector('#pesokg')
const inputAltura = document.querySelector('#altura')
const error = document.querySelector('.error')



function calcIMC() {
    let peso = Number(inputPeso.value)
    let altura = Number(inputAltura.value)
    
    const result = imc(peso, altura)
    const message = `Seu IMC é de ${result}`

    const showAlertError = notANumber (altura) || notANumber (peso)

    if (showAlertError) {
        error.classList.remove('hiden')
        error.classList.add('move')

    } else {
        error.classList.add('hiden')
        Modal.message.innerText = message
        Modal.open()
        console.log(peso, altura, result)}
}

function notANumber(value) {
    return isNaN(value) || value == ''
}

function imc(peso, altura) {
    return (peso / ((altura / 100) ** 2)).toFixed(2)
}


buttonCalc.addEventListener('click', function(){calcIMC()})

