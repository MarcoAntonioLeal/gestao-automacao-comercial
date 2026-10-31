/* Media Querie */
//Para os botões do menu
const secMenu = document.querySelector('#sec-menu')
const liBtnSalvar = document.querySelector('#liBtnSalvar')
const liBtnExcluir = document.querySelector('#liBtnExcluir')
const liPagInicial = document.querySelector('#liPagInicial')
const liLinha1 = document.querySelector('#liLinha1')
const liLinha2 = document.querySelector('#liLinha2')

const btnSalvar = document.querySelector('#btnSalvar')
const imgSalvar = document.querySelector('#imgSalvar')

const btnExcluir = document.querySelector('#btnExcluir')
const imgExcluir = document.querySelector('#imgExcluir')

const pagInicial = document.querySelector('#pagInicial')
const imgPagInicial = document.querySelector('#imgPagInicial')
const textPagInicial = document.querySelector('#textPagInicial')

const linha1 = document.querySelector('#linha1')
const linha2 = document.querySelector('#linha2')

function responsividadeMenu() {
    const queryHtml = matchMedia("(max-width: 500px)")

    if (queryHtml.matches) {

        imgSalvar.classList.remove('icon-l')
        imgExcluir.classList.remove('icon-l')
        imgPagInicial.classList.remove('icon-l')

        imgSalvar.classList.add('icon-m')
        imgExcluir.classList.add('icon-m')
        imgPagInicial.classList.add('icon-m')

        btnSalvar.classList.add('btn')
        btnExcluir.classList.add('btn')
        pagInicial.classList.add('btn')

        textPagInicial.textContent = 'Inicial'
        
        liBtnSalvar.append(btnSalvar)
        liLinha1.append(linha1)
        liBtnExcluir.append(btnExcluir)
        liLinha2.append(linha2)
        liPagInicial.append(pagInicial)

    } else {

        imgSalvar.classList.remove('icon-m')
        imgExcluir.classList.remove('icon-m')
        imgPagInicial.classList.remove('icon-m')

        imgSalvar.classList.add('icon-l')
        imgExcluir.classList.add('icon-l')
        imgPagInicial.classList.add('icon-l')

        btnSalvar.classList.remove('btn')
        btnExcluir.classList.remove('btn')
        pagInicial.classList.remove('btn')
        
        textPagInicial.textContent = 'Pg. Inicial'

        secMenu.append(btnSalvar, linha1, btnExcluir, linha2, pagInicial)
    }
}
responsividadeMenu()
addEventListener("resize", responsividadeMenu)

//seção novo uauário
const novoUser = document.querySelector('#novoUser')
novoUser.addEventListener('input', () => {
    novoUser.value = novoUser.value.replace(/[^a-zA-Z\u00C0-\u00FF\s]/g, '')
})

const senhaUser = document.querySelector('#senhaUser')
senhaUser.addEventListener('input', () => {
    senhaUser.value = senhaUser.value.replace(/\D/g, '')
})

const btnEyeSenha = document.querySelector('#btnEyeSenha')
const imgEyeSenha = document.querySelector('#imgEyeSenha')

btnEyeSenha.addEventListener('click', () => {
    if(senhaUser.type == 'password') {
        senhaUser.type = 'text'
        imgEyeSenha.src = '../img/eye-open.svg'

    } else {
        senhaUser.type = 'password'
        imgEyeSenha.src = '../img/eye-close.svg'
    }
})