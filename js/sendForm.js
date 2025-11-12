const sendForm = () => {
    const form = document.querySelector('.modal');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const text = form.querySelector('input[type=text]')
        const tel = form.querySelector('input[type=tel]')
        const email = form.querySelector('input[type=email]')

        const sendobj = {
            name: text.value,
            phone: tel.value,
            email: email.value
        }

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(sendobj),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(response => {
                if(response.status === 202){
                    throw new Error('Error')
                }
                return response.json()})
            
            .then(json => {
                console.log(json)})
            
            .catch(error => {
                alert(error.message)
            })
            
            .finally(() => {
                console.clear();
                console.log('Форма очищена');
                
            })
    })
}
sendForm()