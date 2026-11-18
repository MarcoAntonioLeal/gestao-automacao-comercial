/* Media Querie */
//Para os botões do menu
const secMenu = document.querySelector('#sec-menu')
const liBtnSalvar = document.querySelector('#liBtnSalvar')
const liBtnVoltar = document.querySelector('#liBtnVoltar')
const liPagInicial = document.querySelector('#liPagInicial')
const liLinha1 = document.querySelector('#liLinha1')
const liLinha2 = document.querySelector('#liLinha2')

const btnSalvar = document.querySelector('#btnSalvar')
const imgSalvar = document.querySelector('#imgSalvar')

const btnVoltar = document.querySelector('#btnVoltar')
const imgVoltar = document.querySelector('#imgVoltar')

const pagInicial = document.querySelector('#pagInicial')
const imgPagInicial = document.querySelector('#imgPagInicial')
const textPagInicial = document.querySelector('#textPagInicial')

const linha1 = document.querySelector('#linha1')
const linha2 = document.querySelector('#linha2')

function responsividadeMenu() {
    const queryHtml = matchMedia("(max-width: 500px)")

    if (queryHtml.matches) {

        imgSalvar.classList.remove('icon-l')
        imgVoltar.classList.remove('icon-l')
        imgPagInicial.classList.remove('icon-l')

        imgSalvar.classList.add('icon-m')
        imgVoltar.classList.add('icon-m')
        imgPagInicial.classList.add('icon-m')

        btnSalvar.classList.add('btn')
        btnVoltar.classList.add('btn')
        pagInicial.classList.add('btn')

        textPagInicial.textContent = 'Inicial'
        
        liBtnSalvar.append(btnSalvar)
        liLinha1.append(linha1)
        liBtnVoltar.append(btnVoltar)
        liLinha2.append(linha2)
        liPagInicial.append(pagInicial)

    } else {

        imgSalvar.classList.remove('icon-m')
        imgVoltar.classList.remove('icon-m')
        imgPagInicial.classList.remove('icon-m')

        imgSalvar.classList.add('icon-l')
        imgVoltar.classList.add('icon-l')
        imgPagInicial.classList.add('icon-l')

        btnSalvar.classList.remove('btn')
        btnVoltar.classList.remove('btn')
        pagInicial.classList.remove('btn')
        
        textPagInicial.textContent = 'Pg. Inicial'

        secMenu.append(btnSalvar, linha1, btnVoltar, linha2, pagInicial)
    }
}
responsividadeMenu()
addEventListener("resize", responsividadeMenu)

const btnTogglerSecCadastro = document.querySelector('#btn-toggler-sec-cadastro')

btnTogglerSecCadastro.addEventListener('click', () => {
    btnTogglerSecCadastro.classList.toggle('btn-toggler-show')
})

//Validações dos campos de números
const validationNumber = document.querySelectorAll('.validation-number')

validationNumber.forEach(element => {
    element.addEventListener('input', ev => {
        ev.target.value = ev.target.value.replace(/\D/g, '')
    })
})

//Envio das informações
const form = document.querySelector('form')

document.addEventListener('click', element => {

    const btnSalvar = element.target.closest('.btn-salvar')
    if(!btnSalvar) return
    
    if(form.reportValidity()) {
        form.submit()
    }
})

//Para manter o formulário sempre aberto
document.addEventListener("DOMContentLoaded", () => {

    const collapse = bootstrap.Collapse.getOrCreateInstance(form, {
        toggle: false
    })

    collapse.show()
})