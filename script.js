let semaf = document.getElementById('semaf')
let img = document.createElement('img')
img.setAttribute('src', 'imagem')


function desligado(){
    semaf.innerHTML = ''
    img.setAttribute('src', 'desligado.png')
    semaf.appendChild(img)
    
}

function vermelho() {
    semaf.innerHTML = ''
    img.setAttribute('src', 'vermelho.png')
    semaf.appendChild(img)
}

function amarelo() {
    semaf.innerHTML = ''
    img.setAttribute('src', 'amarelo.png')
    semaf.appendChild(img)
}

function verde() {
    semaf.innerHTML = ''
    img.setAttribute('src', 'verde.png')
    semaf.appendChild(img)
}



