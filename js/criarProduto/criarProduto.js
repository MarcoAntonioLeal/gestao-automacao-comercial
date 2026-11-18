// -- habilitando botao ENTER como principal -- //
/*document.addEventListener('keydown', element => {

    if(element.key === 'Enter') {
        element.key === 'Tab'

        console.log('oi')
    }
    console.log(element)
})*/


// -- menu -- //
const todosOsInputs = document.querySelectorAll('input, textarea, select')
const inputDescricaoProduto = document.querySelector('#descricao')
const statusAtivo = document.querySelector('#ativo-inativo')
const estoque = document.querySelector('#estoque')
const custo = document.querySelector('#custo')
const preco = document.querySelector('#preco')
const margem = document.querySelector('#margem')
const CampoUnidadeVenda = document.querySelector('#unidadeVenda')


//menu ao abrir o modulo
const btnExcluir = document.querySelector('.btn-excluir')
btnExcluir.classList.add('disabled')

document.addEventListener('click', event => {
    
    const btnMenu = event.target.closest('.btn-menu')
    if(!btnMenu) return

    const btnMenuData = btnMenu.dataset.btnMenu
    
    //novo
    if(btnMenuData === 'novo') {
        btnExcluir.classList.add('disabled')
        todosOsInputs.forEach(element => element.value = '')

        CampoUnidadeVenda.value = 'un'
        statusAtivo.checked = true
        estoque.value = 0
        custo.value = 0

        inputDescricaoProduto.focus()
    
    //salvar
    } else if (btnMenuData === 'salvar') {
        const form = document.querySelector('.formCriarProduto')

        if(preco.value == 0) {
            preco.setCustomValidity('O valor do produto tem de ser maior que 0')
            preco.reportValidity();
            return;
        }

        preco.setCustomValidity('')
        form.requestSubmit()

    //excluir
    } else if (btnMenuData === 'excluir') {
        //verificar se terá algum evento
    }
})


// -- validação do value para aceitar somente numeros -- // 
let inputNumeros = document.querySelectorAll('#cod-barras, #estoque')
let inputNumerosPontoVirgula = document.querySelectorAll('#custo, #margem, #preco')

inputNumeros.forEach(element => {
    element.addEventListener('input', num => {
        num.target.value = num.target.value.replace(/\D/g, '')
    })
})


// -- validação do value para aceitar somente numeros e ponto -- // 
inputNumerosPontoVirgula.forEach(element => {
    element.addEventListener('input', num => {
        num.target.value = num.target.value.replace(/[^0-9.]|^\./g, '').replace(/\.(?=.*\.)/g, '')
    })
})








// -- validação do preco e margem de lucro -- //
document.addEventListener('input', event => {

    const valorProduto = event.target.closest('.calcValorProduto')

    if(!valorProduto) return

    const calcValorProduto = valorProduto.dataset.preco

    const custoValueFloatPonto = Number(custo.value)
    const precoValueFloatPonto = Number(preco.value)
    const margemValueFloatPonto = Number(margem.value)

    const novoPreco = (custoValueFloatPonto + (margemValueFloatPonto * custoValueFloatPonto) / 100).toFixed(2)
    const novaMargem = (((precoValueFloatPonto * 100) / custoValueFloatPonto) - 100).toFixed(2)

    if(custo.value == 0) return margem.value = ''
    
    //controle de valores de custo, margem e preço
    if(calcValorProduto === 'margem') {
        preco.value = novoPreco

    } else if(calcValorProduto === 'preco') {
        margem.value = novaMargem

    } else if (calcValorProduto === 'custo') {
        preco.value = novoPreco
    }
})