/* Media Querie */
//Para os botões do menu
const secMenu = document.querySelector('#sec-menu')

const liBtnNovo = document.querySelector('#liBtnNovo')
const liBtnSalvar = document.querySelector('#liBtnSalvar')
const liBtnExcluir = document.querySelector('#liBtnExcluir')
const liBtnVoltar = document.querySelector('#liBtnVoltar')
const liPagInicial = document.querySelector('#liPagInicial')

const liLinha1 = document.querySelector('#liLinha1')
const liLinha2 = document.querySelector('#liLinha2')
const liLinha4 = document.querySelector('#liLinha4')

const btnNovo = document.querySelector('.btn-novo')
const imgNovo = document.querySelector('#imgNovo')

const btnSalvar = document.querySelector('.btn-salvar') 
const imgSalvar = document.querySelector('#imgSalvar')

const btnExclui = document.querySelector('.btn-excluir')
const imgExclui = document.querySelector('#imgExcluir')

const btnVoltar = document.querySelector('.btn-voltar')
const imgVoltar = document.querySelector('#imgVoltar')

const pagInicial = document.querySelector('.btn-pag-incial')
const imgPagInicial = document.querySelector('#imgPagInicial')
const textPagInicial = document.querySelector('#textPagInicial')

const linha1 = document.querySelector('#linha1')
const linha2 = document.querySelector('#linha2')
const linha3 = document.querySelector('#linha3')
const linha4 = document.querySelector('#linha4')

function responsividadeMenu() {
    const queryHtml = matchMedia("(max-width: 770px)")

    if (queryHtml.matches) {

        imgNovo.classList.remove('icon-l')
        imgSalvar.classList.remove('icon-l')
        imgExclui.classList.remove('icon-l')
        imgVoltar.classList.remove('icon-l')
        imgPagInicial.classList.remove('icon-l')

        imgNovo.classList.add('icon-m')
        imgSalvar.classList.add('icon-m')
        imgExclui.classList.add('icon-m')
        imgVoltar.classList.add('icon-m')
        imgPagInicial.classList.add('icon-m')

        btnNovo.classList.add('btn')
        btnSalvar.classList.add('btn')
        btnExclui.classList.add('btn')
        btnVoltar.classList.add('btn')
        pagInicial.classList.add('btn')

        textPagInicial.textContent = 'Inicial'

        linha3.style.display = 'none'
        
        liBtnNovo.append(btnNovo)
        liLinha1.append(linha1)
        liBtnSalvar.append(btnSalvar)
        liLinha2.append(linha2)
        liBtnExcluir.append(btnExclui)
        liBtnVoltar.append(btnVoltar)
        liLinha4.append(linha4)
        liPagInicial.append(pagInicial)

    } else {

        imgNovo.classList.remove('icon-m')
        imgSalvar.classList.remove('icon-m')
        imgExclui.classList.remove('icon-m')
        imgVoltar.classList.remove('icon-m')
        imgPagInicial.classList.remove('icon-m')

        imgNovo.classList.add('icon-l')
        imgSalvar.classList.add('icon-l')
        imgExclui.classList.add('icon-l')
        imgVoltar.classList.add('icon-l')
        imgPagInicial.classList.add('icon-l')

        btnNovo.classList.remove('btn')
        btnSalvar.classList.remove('btn')
        btnExclui.classList.remove('btn')
        btnVoltar.classList.remove('btn')
        pagInicial.classList.remove('btn')
        
        textPagInicial.textContent = 'Pg. Inicial'

        linha3.style.display = 'block'

        secMenu.append(
            btnNovo, 
            linha1, 
            btnSalvar, 
            linha2, 
            btnExclui, 
            linha3, 
            btnVoltar, 
            linha4, 
            pagInicial, 
        )
    }
}
responsividadeMenu()
addEventListener("resize", responsividadeMenu)