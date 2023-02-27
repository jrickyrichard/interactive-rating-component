function submit(){
    let button = document.querySelector('button');
    let rating = document.querySelector('#rating');
    let thankYou = document.querySelector('#thank-you');
    let option = document.querySelector('#rating-option');
    let small = document.querySelector('small span');
    
    
    Array.from(option.children).map(item => {
        item.addEventListener('click', function(){
            let result = item.textContent;
            small.textContent = result;
        })
    })

    button.addEventListener('click', function() {
        rating.classList.add('display-none');
        thankYou.classList.remove('display-none');
    })
}

submit();