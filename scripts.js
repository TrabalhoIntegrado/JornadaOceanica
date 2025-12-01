const myObserver = new IntersectionObserver( (entries) => {
    console.log(entries);
    entries.forEach( (entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const elementos = document.querySelectorAll('.hiddens')
elementos.forEach( (elementos) => myObserver.observe(elementos))




