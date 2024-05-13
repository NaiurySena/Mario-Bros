const forms = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-forms")


function CliqueiNoBotao(){
    forms.style.left = "50%"
    forms.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}

function CliqueiNaMascara(){
    forms.style.left = "-300px"
    forms.style.transform = "translateX(0)"
    mascara.style.visibility = "hidden"

}

function FaleConosco(){
    forms.style.left = "50%"
    forms.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}