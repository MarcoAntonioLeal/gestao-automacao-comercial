const btnPeriodoDeVendas = document.querySelectorAll('.btn-check')
const periodoDeVendas = document.querySelector('#periodo-vendas')

btnPeriodoDeVendas.forEach(element => {
    element.addEventListener('click', event => {
        const periodo = event.target.value

        if(periodo === 'Dia') {
            periodoDeVendas.textContent = 'Vendas de Hoje'
        } else if(periodo === 'Semana') {
            periodoDeVendas.textContent = 'Vendas da Semana'
        } else {
            periodoDeVendas.textContent = 'Vendas do Mês'
        }
    })
})

/*
Colocar o btn de backup dentro do dropdown e verificar como irá ficar o layout. Fazer com o apend para colocar e tirar, verificar se volta automátco ou se realmente temos de voltá-lo na mão
*/

/* Media Querie */
function responsividade() {
    const queryHtml = matchMedia("(max-width: 990px)")

    if (queryHtml.matches) {
        //document.body.style.backgroundColor = 'red'
    } else {
        //document.body.style.backgroundColor = 'black'
    }
}

responsividade()

// Executa a função sempre que a tela mudar de tamanho
addEventListener("resize", responsividade);