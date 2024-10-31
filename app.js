const input = document.querySelector('.main__input'); 

function selectButtons() {
    const btns = document.querySelectorAll('.main__btn');
    return btns;
}

function changeParagraph(btn) {

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
            if (event.target.textContent === 'AC') {
                clearInput();
            } else {
                changeParagraph(event.target);
            }
        });
    }
}

function clearInput() {
    input.textContent = '0';
}

addEventListeners();
