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


/* Media Querie */
const btnBackup = document.querySelector('.backup')
const imgBackup = document.querySelector('#imgBackup')

const listBackupNavbar = document.querySelector('#listBackupNavbar')
const listBackupDropdown = document.querySelector('#listBackupDropdown')

function responsividade() {
    const queryHtml = matchMedia("(max-width: 990px)")

    if (queryHtml.matches) {

        btnBackup.classList.remove('nav-link', 'me-5', 'btn', 'backup')
        imgBackup.classList.remove('icon-s')

        btnBackup.classList.add('dropdown-item')
        imgBackup.classList.add('icon-ms')

        listBackupDropdown.append(btnBackup)

    } else {

        btnBackup.classList.remove('dropdown-item')
        imgBackup.classList.remove('icon-ms')

        btnBackup.classList.add('nav-link', 'me-5', 'btn', 'backup')
        imgBackup.classList.add('icon-s')

        listBackupNavbar.append(btnBackup)
    }
}
responsividade()

// Executa a função sempre que a tela mudar de tamanho
addEventListener("resize", responsividade);