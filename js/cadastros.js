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

//Validações dos campos de texto
const validationText = document.querySelectorAll('.validation-text')

validationText.forEach(element => {
    element.addEventListener('input', ev => {
        ev.target.value = ev.target.value.replace(/[^a-zA-Z\u00C0-\u00FF\s]/g, '')
    })
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
        .replace(/^(\d{2})\.(\d{3})\.(\d{3})\/(\d{4})(\d)/, '$1.$2.$3/$4-$5')

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
const modal = new bootstrap.Modal(document.getElementById('idInvalido'))
const modalBody = document.querySelector('.modal-body')

btnSalvar.addEventListener('click', () => {

    if(labelId.textContent == 'CPF:') {

//-------------------Validação do CPF--------------------------
        let novoCpf = [...cpf.value.replaceAll('.', '').replace('-', '')]

        //1ª validação 
        let cpfValidado = novoCpf.some(element => element != novoCpf[0])
    
        if(!cpfValidado) {
            modal.show()
            modalBody.textContent = 'CPF Inválido'
            return
        }

        //2ª validação
        let segundoDigito = novoCpf.slice(0, 9)
    
        let primeiroDigito = novoCpf.slice(0, 9)

        let controlePrimeiroDigito = []
    
        for(let i = 0; i < primeiroDigito.length; i++) {
            controlePrimeiroDigito.push(primeiroDigito[i] * (10 - i))
        }

        let somaPrimeiroDigito = controlePrimeiroDigito.reduce((arg1, arg2) => arg1 + arg2)

        //Cálculo do 1º Dígito Verificador (10º dígito do CPF)
        if(somaPrimeiroDigito % 11 < 2) {
            segundoDigito.push(0)

            if(novoCpf[9] != 0) {
                modal.show()
                modalBody.textContent = 'CPF Inválido'
                return
            }

        } else if (somaPrimeiroDigito % 11 >= 2) {
            let resto = 11 - (somaPrimeiroDigito % 11) 
        
            segundoDigito.push(resto)

            if(novoCpf[9] != resto) {
                modal.show()
                modalBody.textContent = 'CPF Inválido'
                return
            }
        }

        //Cálculo do 2º Dígito Verificador (11º dígito do CPF)
        let controleSegundoDigito = []
    
        for(let i = 0; i < segundoDigito.length; i++) {
            controleSegundoDigito.push(segundoDigito[i] * (11 - i))
        }

        let somaSegundoDigito = controleSegundoDigito.reduce((arg1, arg2) => arg1 + arg2)

        if(somaSegundoDigito % 11 < 2) {

            if(novoCpf[10] != 0) {
                modal.show()
                modalBody.textContent = 'CPF Inválido'
                return
            }

        } else if (somaSegundoDigito % 11 >= 2) {
            let resto = 11 - (somaSegundoDigito % 11) 

            if(novoCpf[10] != resto) {
                modal.show()
                modalBody.textContent = 'CPF Inválido'
                return
            }
        }

    } else {

//-------------------Validação do CNPJ--------------------------
        let novoCnpj = [...cnpj.value.replaceAll('.', '').replace('-', '').replace('/', '')]
    
        //1ª validação 
        let cnpjValidado = novoCnpj.some(element => element != novoCnpj[0])
        
        if(!cnpjValidado) {
            modal.show()
            modalBody.textContent = 'CNPJ Inválido'
            return
        }

        //2ª validação
        let primeiraParte = novoCnpj.slice(0, 4)
        let segundaParte = novoCnpj.slice(4, 12)
        let terceiraParte = novoCnpj.slice(0, 12)

        let controlePrimeiraParte = []
        let controleSegundaParte = []
    
        for(let i = 0; i < primeiraParte.length; i++) {
            controlePrimeiraParte.push(primeiraParte[i] * (5 - i))
        }

        for(let i = 0; i < segundaParte.length; i++) {
            controleSegundaParte.push(segundaParte[i] * (9 - i))
        }

        let somaPrimeiraParte = controlePrimeiraParte.reduce((arg1, arg2) => arg1 + arg2)
        let somaSegundaParte = controleSegundaParte.reduce((arg1, arg2) => arg1 + arg2)
        let somaTotal = somaPrimeiraParte + somaSegundaParte

        //Cálculo do 1º Dígito Verificador (13º dígito do CNPJ)
        if(somaTotal % 11 < 2) {
            terceiraParte.push(0)

            if(novoCnpj[12] != 0) {
                modal.show()
                modalBody.textContent = 'CNPJ Inválido'
                return
            }

        } else if (somaTotal % 11 >= 2) {
            let resto = 11 - (somaTotal % 11) 
        
            terceiraParte.push(resto)

            if(novoCnpj[12] != resto) {
                modal.show()
                modalBody.textContent = 'CNPJ Inválido'
                return
            }
        }
        
        //Cálculo do 2º Dígito Verificador (14º dígito do CNPJ)
        let quartaParte = terceiraParte.slice(0, 5)
        let quintaParte = terceiraParte.slice(5, 13)

        let controleQuartaParte = []
        let controleQuintaParte = []
    
        for(let i = 0; i < quartaParte.length; i++) {
            controleQuartaParte.push(quartaParte[i] * (6 - i))
        }

        for(let i = 0; i < quintaParte.length; i++) {
            controleQuintaParte.push(quintaParte[i] * (9 - i))
        }

        let somaQuartaParte = controleQuartaParte.reduce((arg1, arg2) => arg1 + arg2)
        let somaQuintaParte = controleQuintaParte.reduce((arg1, arg2) => arg1 + arg2)
        let somaTotal2 = somaQuartaParte + somaQuintaParte

        if(somaTotal2 % 11 < 2) {

            if(novoCnpj[13] != 0) {
                modal.show()
                modalBody.textContent = 'CNPJ Inválido'
                return
            }

        } else if (somaTotal2 % 11 >= 2) {
            let resto = 11 - (somaTotal2 % 11) 

            if(novoCnpj[13] != resto) {
                modal.show()
                modalBody.textContent = 'CNPJ Inválido'
                return
            }
        }
    }

    if(form.reportValidity()) {
        form.submit()
    }
})