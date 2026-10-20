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
    
    //Validação do CPF
    let novoCpf = [...cpf.value.replaceAll('.', '').replace('-', '')]

    //1ª validação 
    let = cpfValidado = novoCpf.some(element => element != novoCpf[0])
    
    if(!cpfValidado) {
        //colocar modal
        console.log('colocar modal - teste 01')
        return
    }

    //2ª validação
    let primeiroPasso = novoCpf.slice(0, 9)
    let segundoPasso = []
    
    for(let i = 0; i < primeiroPasso.length; i++) {
        segundoPasso.push(primeiroPasso[i] * (10 - i))
    }

    let terceiroPasso = segundoPasso.reduce((arg1, arg2) => arg1 + arg2)

    if(terceiroPasso % 11 < 2) {
        if(novoCpf[10] != 0) {
        //colocar modal
        console.log('colocar modal - teste 02')
        return
        }
    }

    console.log(primeiroPasso)
    console.log(segundoPasso)
    console.log(terceiroPasso)
    console.log(novoCpf)

    /*if(form.reportValidity()) {
        form.submit()
    }*/
})
            
        




/*
Dígitos repetidos: CPFs com todos os dígitos iguais (como 111.111.111-11 ou 000.000.000-00) são automaticamente inválidos, embora passem no cálculo matemático


1. Cálculo do 1º Dígito Verificador (10º dígito do CPF)

1. Pegue os 9 primeiros dígitos do CPF.
2. Multiplique cada um deles por pesos decrescentes que vão de 10 até 2 (o 1º dígito por 10, o 2º por 9, e assim por diante, até o 9º dígito por 2).
3. Some todos os resultados das multiplicações.
4. Calcule o resto da divisão dessa soma por 11 (soma % 11):
	• Se o resto for menor que 2, o primeiro dígito verificador é 0.
	• Se o resto for 2 ou mais, o dígito verificador é 11 menos o resto (11 - resto).
5. O resultado deve ser igual ao 10º dígito do CPF.

2. Cálculo do 2º Dígito Verificador (11º dígito do CPF)

1. Pegue os 10 primeiros dígitos do CPF (incluindo o 1º dígito verificador que você acabou de calcular).
2. Multiplique cada um deles por pesos decrescentes que vão de 11 até 2 (o 1º por 11, o 2º por 10, até o 10º por 2).
3. Some todos os resultados.
4. Calcule o resto da divisão dessa soma por 11 (soma % 11):
	• Se o resto for menor que 2, o segundo dígito verificador é 0.
	• Se o resto for 2 ou mais, o dígito verificador é 11 menos o resto (11 - resto).
5. O resultado deve ser igual ao 11º dígito do CPF

*/