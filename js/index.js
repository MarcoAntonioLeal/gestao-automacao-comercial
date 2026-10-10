/* Media Querie */

//Para o botão de backup
const btnBackup = document.querySelector('.backup')
const imgBackup = document.querySelector('#imgBackup')

const listBackupNavbar = document.querySelector('#listBackupNavbar')
const listBackupDropdown = document.querySelector('#listBackupDropdown')

function responsividadeBackup() {
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
responsividadeBackup()
addEventListener("resize", responsividadeBackup)

//Para tag de hora do sistema
const listHoraNavbar = document.querySelector('.listHoraNavbar')
const listHoraMain = document.querySelector('.listHoraMain')
const hora = document.querySelector('.hora')

function responsividadeHora() {
    const queryHtml = matchMedia("(max-width: 800px)")

    if (queryHtml.matches) {
        listHoraMain.classList.add('style-padrao', 'borda')

        hora.classList.remove('nav-link', 'text-logo')
        hora.classList.add('listHoraMain')

        listHoraMain.append(hora)

    } else {
        listHoraMain.classList.remove('style-padrao', 'borda')
        
        hora.classList.remove('listHoraMain')
        hora.classList.add('nav-link', 'text-logo')

        listHoraNavbar.append(hora)
    }
}
responsividadeHora()
addEventListener("resize", responsividadeHora)