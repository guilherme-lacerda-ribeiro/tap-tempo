function resultado() {
    const li = $('.div-clicou li')
    if (li.length < 2) { return }

    let soma = 0
    for (let index = 1; index < li.length; index++) {
        soma += (li[index].innerText  -  li[index-1].innerText)
    }

    const tempo = (60 * 1000) / (soma / (li.length-1))
    $('.div-resultado').html(  Math.round(tempo)  )
}

function clicou() {
    $('.div-clicou ul').append(`<li>${Date.now()}</li>`)
    $('.div-clicado').append('<i></i>')
    resultado()
}