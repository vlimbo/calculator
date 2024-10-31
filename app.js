function selectButtons() {
    const btns = document.querySelectorAll('.main__btn');
    return btns;
}

function changeParagraph(btn) {
    const input = document.querySelector('.main__input'); 

    if (btn.textContent === ',' && input.textContent === '0') {
        input.textContent = input.textContent + btn.textContent;
        return
    }

    if (input.textContent === '0') {
        input.textContent = '';
    }

    input.textContent = input.textContent + btn.textContent;
}

function addEventListeners() {
    btns = selectButtons();

    for (let btn of btns) {
        btn.addEventListener('click', (event) => {
            changeParagraph(event.target);
        });
    }
}

addEventListeners();
