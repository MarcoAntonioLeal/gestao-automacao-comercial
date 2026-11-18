/*---------------- Para unidade de venda ---------------*/

// -- menu unidade de venda -- //
const btnNovaUnidadeVenda = document.querySelector('.btn-nova-unidadeVenda')
const btnCancelarUnidadeVenda = document.querySelector('.btn-cancelar-unidadeVenda')
const btnSalvarUnidadeVenda = document.querySelector('.btn-salvar-unidadeVenda')
const btnExcluirUnidadeVenda = document.querySelector('.btn-excluir-unidadeVenda ')
const nomeUnidadeVenda = document.querySelector('#nomeUnidadeVenda')
const unidadeVenda = document.querySelectorAll('.unidadeVenda')

//ao entrar no modulo de unidade de venda
const btnAbrirModalUnidadeVenda = document.querySelector('.action-unidade-venda')
btnAbrirModalUnidadeVenda.addEventListener('click', () => {

    add_disabled(btnCancelarUnidadeVenda, btnSalvarUnidadeVenda, btnExcluirUnidadeVenda, nomeUnidadeVenda)

    nomeUnidadeVenda.value = ''

    remove_disabled(btnNovaUnidadeVenda)
    unidadeVenda.forEach(element => element.checked = '')
    unidadeVenda.forEach(element => element.classList.remove('disabled'))
})

document.addEventListener('click', event => {
    const btnMenuUnidadeVenda = event.target.closest('.btn-menu-unidadeVenda')
    if(!btnMenuUnidadeVenda) return

    const btnMenuUnidadeData = btnMenuUnidadeVenda.dataset.btnUnidadeVenda

    //nova unidade de venda
    if(btnMenuUnidadeData === 'novo') {
        remove_disabled(btnCancelarUnidadeVenda, nomeUnidadeVenda)
        add_disabled(btnNovaUnidadeVenda, btnExcluirUnidadeVenda)
        unidadeVenda.forEach(element => element.checked = '')
        unidadeVenda.forEach(element => element.classList.add('disabled'))
        nomeUnidadeVenda.focus()
        
    //cancelar unidade de venda
    } else if(btnMenuUnidadeData === 'cancelar') {

        add_disabled(btnCancelarUnidadeVenda, btnSalvarUnidadeVenda, btnExcluirUnidadeVenda, nomeUnidadeVenda)

        nomeUnidadeVenda.value = ''

        remove_disabled(btnNovaUnidadeVenda)
        unidadeVenda.forEach(element => element.checked = '')
        unidadeVenda.forEach(element => element.classList.remove('disabled'))
        
    //salvar unidade de venda
    } else if(btnMenuUnidadeData === 'salvar') {
        remove_disabled(btnNovaUnidadeVenda)
        unidadeVenda.forEach(element => element.classList.remove('disabled'))
        
        nomeUnidadeVenda.value = ''
        
        add_disabled(btnSalvarUnidadeVenda, btnCancelarUnidadeVenda, nomeUnidadeVenda)

    //excluir unidade de venda
    } else if(btnMenuUnidadeData === 'excluir') {
        remove_disabled(btnNovaUnidadeVenda)

        unidadeVenda.forEach(element => element.checked = '')
        
        add_disabled(btnExcluirUnidadeVenda, btnCancelarUnidadeVenda)
    }
})

//input unidade de venda
unidadeVenda.forEach(event => {
    event.addEventListener('change', () => {
        remove_disabled(btnExcluirUnidadeVenda, btnCancelarUnidadeVenda)
        add_disabled(btnNovaUnidadeVenda)
    })
})

//evento para liberar o botao de salvar unidade de venda
nomeUnidadeVenda.addEventListener('input', () => {
    if(nomeUnidadeVenda.value.trim() === '') {
        add_disabled(btnSalvarUnidadeVenda)
    } else {
        remove_disabled(btnSalvarUnidadeVenda)
    }
})