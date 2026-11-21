//Para manter o formulário sempre aberto
document.addEventListener("DOMContentLoaded", () => {

    const collapse = bootstrap.Collapse.getOrCreateInstance(form, {
        toggle: false
    })

    collapse.show()
})

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
const codigo = document.querySelector('#codigo')
codigo.addEventListener('input', element => {
    element.target.value = element.target.value.replace(/\D/g, '')
})

let estoque = ''
const novoEstoque = document.querySelector('#novoEst')
novoEstoque.addEventListener('input', element => {
    element.target.value = element.target.value
        .replace(/[^0-9,.]/g, '') // apenas numeros
        .replace(/\./g, ',') // troca ponto por virgula
        .replace(/,(?=.*[,])/g, '') // uma virgula somente
        .replace(/(,\d{3})\d+/g, '$1') // três casas decimais

        estoque = element.target.value
})

const custoPreco = document.querySelectorAll('.custoPreco')
custoPreco.forEach(ev => {
    ev.addEventListener('input', element => {
        element.target.value = element.target.value
        .replace(/[^0-9,.]/g, '') // apenas numeros
        .replace(/\./g, ',') // troca ponto por virgula
        .replace(/,(?=.*[,])/g, '') // uma virgula somente
        .replace(/^(,)/, '') // ñ virgula no início
        .replace(/(,\d{2})\d+/g, '$1') // duas casas decimais       
    })
})

//Envio das informações
const form = document.querySelector('form')

document.addEventListener('click', element => {

    const btnSalvar = element.target.closest('.btn-salvar')
    if(!btnSalvar) return

    if(form.reportValidity()) {
        if(estoque.startsWith(',') && estoque.length === 1) return
        
        //Tratando valores do input de estoque
        let qtdZero = [...novoEstoque.value.replace(',', '')].every(value => value == 0)

        if(qtdZero) { //Para zero
            novoEstoque.value = 0

        } else if(novoEstoque.value.startsWith(',')) { //Para virgula no início

            novoEstoque.value = String(novoEstoque.value.padStart(
                novoEstoque.value.length + 1, '0'
            ))

        } else if (novoEstoque.value.endsWith(',')) { //Para virgula no final
            novoEstoque.value = novoEstoque.value.slice(0, -1)
        } 


       console.log(novoEstoque.value)
        //form.submit()
    }
    novoEstoque.value = ''
})