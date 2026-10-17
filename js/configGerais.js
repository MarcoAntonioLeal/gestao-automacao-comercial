const btnSalvar = document.querySelector('#btnSalvar')
const form = document.querySelector('form')


/*
const inputCpf = document.querySelector('#cpf');

inputCpf.addEventListener('input', () => {
    let valor = inputCpf.value;

    // Remove tudo que não for número
    valor = valor.replace(/\D/g, '');

    // Limita a 11 dígitos
    valor = valor.slice(0, 11);

    // Aplica a máscara
    valor = valor
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})\.(\d{3})(\d)/, '$1.$2.$3')
        .replace(/(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4');

    inputCpf.value = valor;
});
*/


btnSalvar.addEventListener('click', () => {
    if(form.reportValidity()) {
        form.submit
    }
})