function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fano.value.length == 0 || Number(fano.value) > ano) {
        alert('/ERRO/ Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        var bg = document.createElement('bg')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            document.body.style.backgroundImage = "url('bg2.jpg')";
            // document.body.style.background = '#6DAEF0'
            document.body.style.transition = "3s";
            if (idade >= 0 && idade < 5) {
                // bebe
                img.setAttribute('src', 'ft-bebe-m.png')
            } else if (idade < 12) {
                // Criança
                img.setAttribute('src', 'ft-crianca-m.png')
            } else if (idade < 20) {
                // Jovem
                img.setAttribute('src', 'ft-jovem-m.png')   
            } else if (idade < 36) {
                // Adulto
                img.setAttribute('src', 'ft-adulto-m.png')
            } else if (idade < 46) {
                // Adulto
                img.setAttribute('src', 'ft-adulto2-m.png')   
            } else if (idade < 60) {
                img.setAttribute('src', 'ft-adulto3-m.png')
            } else {
                // Velho
                img.setAttribute('src', 'ft-velho-m.png')
            }
            res.style.textAlign = 'center'
            res.innerHTML = `Dectamos um ${genero} com ${idade} anos.`
            res.appendChild(img)
        } else if (fsex[1].checked) {
            genero = 'mulher'
            document.body.style.backgroundImage = "url('bg3.jpg')";
            document.body.style.transition = "3s";
            if (idade >= 0 && idade < 5) {
                // Crianca 0 a 5
                img.setAttribute('src', 'ft-bebe-f.png')
            } else if (idade < 12) {
                // Criança
                img.setAttribute('src', 'ft-crianca-f.png')
            } else if (idade < 20) {
                // Jovem
                img.setAttribute('src', 'ft-jovem-f.png')   
            } else if (idade < 36) {
                // Adulto
                img.setAttribute('src', 'ft-adulto-f.png')
            } else if (idade < 46) {
                // Adulto
                img.setAttribute('src', 'ft-adulto2-f.png')   
            } else if (idade < 60) {
                img.setAttribute('src', 'ft-adulto3-f.png')
            } else {
                // Velho
                img.setAttribute('src', 'ft-velho-f.png')
            }
            res.style.textAlign = 'center'
            res.innerHTML = `Dectamos uma ${genero} com ${idade} anos.`
            res.appendChild(img)
        }

    }
}