/*---------------- Abaixo para grupo ---------------*/

// -- validação do value do campo de grupos -- // 
const inputGrupos = document.querySelector('#grupo')
const grupoOptions = document.querySelectorAll('#grupos option')

inputGrupos.addEventListener('change', () => {
    let grupoValue = [...grupoOptions].map(option => option.value)

    if(!grupoValue.includes(inputGrupos.value)) {
        inputGrupos.value = ''
    }
})


// -- menu grupo -- //
function add_disabled(...btns) {
    btns.forEach(btn => {btn.classList.add('disabled')})
}

function remove_disabled(...btns) {
    btns.forEach(btn => {btn.classList.remove('disabled')})
}

const btnNovoGrupo = document.querySelector('.btn-novo-grupo')
const btnCancelarGrupo = document.querySelector('.btn-cancelar-grupo')
const btnSalvarGrupo = document.querySelector('.btn-salvar-grupo')
const btnExcluirGrupo = document.querySelector('.btn-excluir-grupo')
const nomeGrupo = document.querySelector('#nomeGrupo')
const grupo = document.querySelectorAll('.grupo')

//ao entrar no modulo de grupo
const btnAbrirModalGrupo = document.querySelector('.action-grupo')
btnAbrirModalGrupo.addEventListener('click', () => {

    add_disabled(btnCancelarGrupo, btnSalvarGrupo, btnExcluirGrupo, nomeGrupo)

    nomeGrupo.value = ''

    remove_disabled(btnNovoGrupo)
    grupo.forEach(element => element.checked = '')
    grupo.forEach(element => element.classList.remove('disabled'))
})

document.addEventListener('click', event => {
    const btnMenuGrupo = event.target.closest('.btn-menu-grupo')
    if(!btnMenuGrupo) return

    const btnMenuGrupoData = btnMenuGrupo.dataset.btnMenuGrupo

    //novo grupo
    if(btnMenuGrupoData === 'novo') {
        remove_disabled(btnCancelarGrupo, nomeGrupo)
        add_disabled(btnNovoGrupo, btnExcluirGrupo)
        grupo.forEach(element => element.checked = '')
        grupo.forEach(element => element.classList.add('disabled'))
        nomeGrupo.focus()
        
    //cancelar grupo
    } else if(btnMenuGrupoData === 'cancelar') {

        add_disabled(btnCancelarGrupo, btnSalvarGrupo, btnExcluirGrupo, nomeGrupo)

        nomeGrupo.value = ''

        remove_disabled(btnNovoGrupo)
        grupo.forEach(element => element.checked = '')
        grupo.forEach(element => element.classList.remove('disabled'))
        
    //salvar grupo
    } else if(btnMenuGrupoData === 'salvar') {
        remove_disabled(btnNovoGrupo)
        grupo.forEach(element => element.classList.remove('disabled'))
        
        nomeGrupo.value = ''
        
        add_disabled(btnSalvarGrupo, btnCancelarGrupo, nomeGrupo)

    //excluir grupo
    } else if(btnMenuGrupoData === 'excluir') {
        remove_disabled(btnNovoGrupo)

        grupo.forEach(element => element.checked = '')
        
        add_disabled(btnExcluirGrupo, btnCancelarGrupo)
    }
})

//input grupo
grupo.forEach(event => {
    event.addEventListener('change', () => {
        remove_disabled(btnExcluirGrupo, btnCancelarGrupo)
        add_disabled(btnNovoGrupo)
    })
})

//evento para liberar o botao de salvar de grupo
nomeGrupo.addEventListener('input', () => {
    if(nomeGrupo.value.trim() === '') {
        add_disabled(btnSalvarGrupo)
    } else {
        remove_disabled(btnSalvarGrupo)
    }
})