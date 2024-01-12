const panels = document.querySelectorAll('.panel')

// Remove a classe .active de todos e adiciona ao panel que foi clicado
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}