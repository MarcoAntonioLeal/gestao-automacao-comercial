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

        //Validação do CPF
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

        //Validação do CNPJ
        let novoCnpj = [...cnpj.value.replaceAll('.', '').replace('-', '').replace('/', '')]
    
        //1ª validação 
        let cnpjValidado = novoCnpj.some(element => element != novoCnpj[0])
        
        if(!cnpjValidado) {
            modal.show()
            modalBody.textContent = 'CNPJ Inválido'
            return
        }
    
      console.log(novoCnpj)

    }

    if(form.reportValidity()) {
        form.submit()
    }
})


/*
Validação do CNPJ

Também é importante rejeitar sequências com todos os dígitos iguais, como ocorre na validação do CPF.

A regra de validação do CNPJ é semelhante à do CPF, mas utiliza dois dígitos verificadores calculados por meio de multiplicações com pesos específicos e divisão por 11.
1. Primeiro dígito verificador
- Utilize os 12 primeiros dígitos do CNPJ.
- Multiplique cada dígito por pesos que variam de 5 até 2 e depois de 9 até 2, nessa ordem.
- Some todos os resultados.
- Calcule o resto da divisão da soma por 11.
- Se o resto for menor que 2, o primeiro dígito verificador será 0. Caso contrário, será 11 - resto.

2. Segundo dígito verificador
- Utilize os 12 dígitos originais mais o primeiro dígito verificador calculado.
- Multiplique cada dígito pelos pesos que variam de 6 até 2 e depois de 9 até 2, nessa ordem.
- Some todos os resultados.
- Calcule o resto da divisão da soma por 11.
- Se o resto for menor que 2, o segundo dígito verificador será 0. Caso contrário, será 11 - resto.

3. Validação final
Compare os dois dígitos calculados com os dois últimos dígitos do CNPJ informado. Se ambos coincidirem, o CNPJ passa na validação matemática.
*/