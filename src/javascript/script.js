const email = document.getElementById('email')
const bot = document.getElementById('bot')
const ialert = document.getElementById('alert')
const pes = document.getElementById('pescondido')

bot.addEventListener('click', () => {//chama função anonima ao clicar
    if (email.validity.typeMismatch) {//verifica se o formato esta incorreto e executa o bloco
        event.preventDefault();//não envia o formulario //por padrão o formulario tenta enviar mesmo se estiver errado
        window.alert('[ERROR] format incorrect')
        email.value = ''
        ialert.style.opacity = '1'
        pes.style.opacity = '100%' // deixa o texto visivel
        pes.style.userSelect = 'text' //permite selecionar o texto
    }
    
})

email.addEventListener('focus', () => {//chama função anonima ao ficar com focus 
    bot.style.opacity = '0'//torna o icone invisivel ao ficar com foco o input
    bot.style.display = 'none'
    ialert.style.opacity = '0'
})

email.addEventListener('blur', () => {
    bot.style.opacity = '1'//torna visivel o input quando fica fora de foco
    bot.style.display = 'block'
})

