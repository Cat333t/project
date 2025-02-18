let arrow = document.querySelector('.header_btn')

arrow.addEventListener('click', function() {
    anime({
        targets: '.header_btn',
        translateY: 400,
        duration: 300,
        easing: 'linear',
    }).finished.then(() => {
        document.querySelector('.skills').scrollIntoView({behavior: 'smooth'})
       arrow.style.transform = ''
    })
})

anime({
    targets: '.bio',
    translatex: -1000,
    duration: 200,
    easing: 'easeInOutQuad',
})