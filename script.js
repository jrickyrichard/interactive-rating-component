function submit(){
    let button = document.querySelector('button');
    let rating = document.querySelector('#rating');
    let thankYou = document.querySelector('#thank-you');

    button.addEventListener('click', function() {
        rating.classList.add('display-none');
        thankYou.classList.remove('display-none');
    })
}

submit();