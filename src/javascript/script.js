const email = document.getElementById('email')

email.addEventListener('focus', () => {
    var botão = document.getElementById('bot')
    botão.style.opacity = '0'
    botão.style.display = 'none'
})

email.addEventListener('blur', () => {
    var botão = document.getElementById('bot')
    botão.style.opacity = '1'
    botão.style.display = 'block'
})