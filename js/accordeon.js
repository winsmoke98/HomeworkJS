const content = document.querySelectorAll('.program-line__content')

content.forEach((elem) =>{ 
    const title = elem.querySelector('.program-line__title')
    const descr = elem.querySelector('.program-line__descr')

    title.addEventListener('click', () => {
        content.forEach(elem => {
                const icon = elem.querySelector('.program-line__descr');
                if (icon !== descr){
                    icon.classList.remove('active');
                }
            });
        descr.classList.toggle('active')
        }            
    )   
})


