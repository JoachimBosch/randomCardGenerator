function changeIcon() {
    let icons = ['♦', '♥', '♠', '♣'];
    let icon = document.querySelectorAll(".heart");
    let iconNumber = Math.floor(Math.random() * icons.length);
    icon[0].innerHTML = icons[iconNumber];
    icon[1].innerHTML = icons[iconNumber];
        if (icons[iconNumber] === '♦' || icons[iconNumber] === '♥') {
            icon[0].classList.remove("text-dark");
            icon[0].classList.add("text-danger");
            icon[1].classList.remove("text-dark");
            icon[1].classList.add("text-danger");
        }
        else if (icons[iconNumber] === '♠' || icons[iconNumber] === '♣') {
            icon[0].classList.remove("text-danger");
            icon[0].classList.add("text-dark");
            icon[1].classList.remove("text-danger");
            icon[1].classList.add("text-dark");
        }
        
}

function changeNumber() {
    let cardNumber = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 'J', 'Q', 'K'];
    let currentNumber = document.querySelector("#number");
    let newNumber = Math.floor(Math.random() * cardNumber.length);
    number.innerHTML = cardNumber[newNumber];
}

/* setInterval(function() {
    changeIcon();
    changeNumber();
    }, 3000) */


