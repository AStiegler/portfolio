

gitHub = document.getElementById("gitHub")
gitHubProfile = document.getElementById("gitHubProfile")
arrowBack = document.getElementById("arrowBack")


sobreMim = document.getElementById("sobreMim")
pageSobreMim = document.getElementById("pageSobreMim")
backObra = document.getElementById("arrowBackObra")


cardHabilidades = document.getElementById("cardHabilidades")
pageHabilidades = document.getElementById("pageHabilidades")


cardProjetos = document.getElementById("cardProjetos")

function macBookGitHub() {

    gitHub.classList.add("gitHubHide")
    sobreMim.classList.add("sobreMimHide")
    cardHabilidades.classList.add("cardHabilidadesHide")
    cardProjetos.classList.add("cardProjetosHide")

    gitHubProfile.classList.remove("gitHubProfileHide")
    arrowBack.classList.remove("arrow-backHide")

}


function arrowGitHubProfile() {

    gitHubProfile.classList.add("gitHubProfileHide")
    arrowBack.classList.add("arrow-backHide")

    gitHub.classList.remove("gitHubHide")
    sobreMim.classList.remove("sobreMimHide")
    cardHabilidades.classList.remove("cardHabilidadesHide")
    cardProjetos.classList.remove("cardProjetosHide")
}


function macBookSobreMim() {

    gitHub.classList.add("gitHubHide")
    sobreMim.classList.add("sobreMimHide")
    cardHabilidades.classList.add("cardHabilidadesHide")
    cardProjetos.classList.add("cardProjetosHide")

    pageSobreMim.classList.remove("pageSobreMimHide")
    backObra.classList.remove("arrow-backObraHide")
    
}

function arrowObra() {

    backObra.classList.add("arrow-backObraHide")
    pageSobreMim.classList.add("pageSobreMimHide")

    gitHub.classList.remove("gitHubHide")
    sobreMim.classList.remove("sobreMimHide")
    cardHabilidades.classList.remove("cardHabilidadesHide")
    cardProjetos.classList.remove("cardProjetosHide")

}

function macBookHabilidades() {

    gitHub.classList.add("gitHubHide")
    sobreMim.classList.add("sobreMimHide")
    cardHabilidades.classList.add("cardHabilidadesHide")
    cardProjetos.classList.add("cardProjetosHide")

    pageSobreMim.classList.remove("pageSobreMimHide")
    backObra.classList.remove("arrow-backObraHide")
}

function macBookProjetos() {
    gitHub.classList.add("gitHubHide")
    sobreMim.classList.add("sobreMimHide")
    cardHabilidades.classList.add("cardHabilidadesHide")
    cardProjetos.classList.add("cardProjetosHide")

    pageSobreMim.classList.remove("pageSobreMimHide")
    backObra.classList.remove("arrow-backObraHide") 
}