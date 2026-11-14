const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

//para limpar os campos de select do modal
const campoPesquisarProd = document.querySelector('#campoPesquisarProduto')
const modalBuscaGrupo = document.querySelector('#buscaGrupo')
const modalBuscaFornecedor = document.querySelector('#buscaFornecedor')

document.addEventListener('click', event => {
    const btnExcluirCampos = event.target.dataset.btnApagar
    
    if(!btnExcluirCampos) return

    if(btnExcluirCampos === 'grupo') {
        modalBuscaGrupo.value = ''

    } else if (btnExcluirCampos === 'fornecedor') {
        modalBuscaFornecedor.value = ''

    } else if (btnExcluirCampos === 'buscaProduto') {
        campoPesquisarProd.value = ''
    }
})

//para resetar os campos do modal de pesquisa de produtos
const modalInputTodosOsProd = document.querySelector('#todosProdutos')
const modalInputFiltroPorCodProd = document.querySelector('#filtroPorCodigoProd')
const btnPesquisarProduto = document.querySelector('#btnPesquisarProduto')

btnPesquisarProduto.addEventListener('click', () => {
    modalInputTodosOsProd.checked = 'true'
    modalInputFiltroPorCodProd.checked = 'true'
    modalBuscaGrupo.value = ''
    modalBuscaFornecedor.value = ''
})


/* Media Querie */
//Para os botões do menu
const secMenu = document.querySelector('#sec-menu')
const buscaElemento = document.querySelector('.busca-elemento')

const liBtnNovo = document.querySelector('#liBtnNovo')
const liBtnPesquisar = document.querySelector('#liBtnPesquisar')
const liBtnPDF = document.querySelector('#liBtnPDF')
const liBtnManual = document.querySelector('#liBtnManual')
const liPagInicial = document.querySelector('#liPagInicial')

const liLinha1 = document.querySelector('#liLinha1')
const liLinha2 = document.querySelector('#liLinha2')
const liLinha3 = document.querySelector('#liLinha3')
const liLinha4 = document.querySelector('#liLinha4')

const btnNovo = document.querySelector('#btnNovo')
const imgNovo = document.querySelector('#imgNovo')

const imgPesquisarProd = document.querySelector('#imgPesquisarProd')

const btnPDF = document.querySelector('#btnPDF')
const imgPDF = document.querySelector('#imgPDF')

const btnManual = document.querySelector('#btnManual')
const imgManual = document.querySelector('#imgManual')

const pagInicial = document.querySelector('#pagInicial')
const imgPagInicial = document.querySelector('#imgPagInicial')
const textPagInicial = document.querySelector('#textPagInicial')

const linha1 = document.querySelector('#linha1')
const linha2 = document.querySelector('#linha2')
const linha3 = document.querySelector('#linha3')
const linha4 = document.querySelector('#linha4')

function responsividadeMenu() {
    const queryHtml = matchMedia("(max-width: 500px)")

    if (queryHtml.matches) {

        imgNovo.classList.remove('icon-l')
        imgPesquisarProd.classList.remove('icon-l')
        imgPDF.classList.remove('icon-l')
        imgManual.classList.remove('icon-l')
        imgPagInicial.classList.remove('icon-l')

        imgNovo.classList.add('icon-m')
        imgPesquisarProd.classList.add('icon-m')
        imgPDF.classList.add('icon-m')
        imgManual.classList.add('icon-m')
        imgPagInicial.classList.add('icon-m')

        btnNovo.classList.add('btn')
        btnPesquisarProduto.classList.add('btn')
        btnPDF.classList.add('btn')
        btnManual.classList.add('btn')
        pagInicial.classList.add('btn')

        textPagInicial.textContent = 'Inicial'
        
        liBtnNovo.append(btnNovo)
        liLinha1.append(linha1)
        liBtnPesquisar.append(btnPesquisarProduto)
        liLinha2.append(linha2)
        liBtnPDF.append(btnPDF)
        liLinha3.append(linha3)
        liBtnManual.append(btnManual)
        liLinha4.append(linha4)
        liPagInicial.append(pagInicial)

    } else {

        imgNovo.classList.remove('icon-m')
        imgPesquisarProd.classList.remove('icon-m')
        imgPDF.classList.remove('icon-m')
        imgManual.classList.remove('icon-m')
        imgPagInicial.classList.remove('icon-m')

        imgNovo.classList.add('icon-l')
        imgPesquisarProd.classList.add('icon-l')
        imgPDF.classList.add('icon-l')
        imgManual.classList.add('icon-l')
        imgPagInicial.classList.add('icon-l')

        btnNovo.classList.remove('btn')
        btnPesquisarProduto.classList.remove('btn')
        btnPDF.classList.remove('btn')
        btnManual.classList.remove('btn')
        pagInicial.classList.remove('btn')
        
        textPagInicial.textContent = 'Pg. Inicial'

        secMenu.append(
            btnNovo, 
            linha1, 
            btnPesquisarProduto, 
            linha2, 
            btnPDF, 
            linha3, 
            btnManual, 
            linha4, 
            pagInicial, 
            buscaElemento
        )
    }
}
responsividadeMenu()
addEventListener("resize", responsividadeMenu)