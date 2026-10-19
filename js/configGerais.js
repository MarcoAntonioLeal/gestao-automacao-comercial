const labelId = document.querySelector('label[for="labelId"]')
const cpf = document.querySelector('#idCPF')
const cnpj = document.querySelector('#idCNPJ')
const tipoPessoa = document.querySelector('#tipo_pessoa')

//alternancia entre CPF e CNPJ
cnpj.disabled = true

tipoPessoa.addEventListener('change', () => {
    if(tipoPessoa.value === 'PJ') {
        cnpj.classList.remove('display-none')
        cnpj.classList.add('display-block')

        cpf.classList.remove('display-block')
        cpf.classList.add('display-none')

        cpf.value = ''
        
        cnpj.disabled = false
        cpf.disabled = true
        labelId.textContent = 'CNPJ:'

    } else if (tipoPessoa.value === 'PF') {
        cnpj.classList.remove('display-block')
        cnpj.classList.add('display-none')

        cpf.classList.remove('display-none')
        cpf.classList.add('display-block')

        cnpj.value = ''

        cnpj.disabled = true
        cpf.disabled = false
        labelId.textContent = 'CPF:'
    }
})

//Validações dos campos de números e suas respectivas máscaras
const validationNumber = document.querySelectorAll('.validation-number')

validationNumber.forEach(element => {
    element.addEventListener('input', ev => {
       ev.target.value = ev.target.value.replace(/\D/g, '')

       if(element.id === 'idCPF') {
    
        ev.target.value = ev.target.value
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})\.(\d{3})(\d)/, '$1.$2.$3')
        .replace(/(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4')

       } else if (element.id === 'idCNPJ') {

        ev.target.value = ev.target.value
        .replace(/^(\d{2})(\d)/, '$1.$2')
        .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
        .replace(/^(\d{2})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3/$4')
        .replace(/^(\d{2})\.(\d{3})\.(\d{3})\/(\d{4})(\d)/, '$1.$2.$3/$4-$5');

       } else if (element.id === 'cep') {

        ev.target.value = ev.target.value
        .replace(/(\d{5})(\d)/, '$1-$2')

       } else if (element.id === 'telFixo') {
        ev.target.value = ev.target.value
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{4})(\d)/, '$1-$2')

       } else if(element.id === 'celular01') {
        ev.target.value = ev.target.value
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{5})(\d)/, '$1-$2')

       } else if (element.id === 'celular02') {
        ev.target.value = ev.target.value
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{5})(\d)/, '$1-$2')
       }
    })
})

const btnSalvar = document.querySelector('#btnSalvar')
const form = document.querySelector('form')

btnSalvar.addEventListener('click', () => {
    if(form.reportValidity()) {
        form.submit()
    }
})