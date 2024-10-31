const input = document.querySelector('.main__input'); 
let sum = 0;

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
            } else if (event.target.textContent === '=') {
                changeParagraph(calculate(input.textContent));
            } else {
                if (event.target.textContent === '+') {
                    addToSum(input.textContent);
                } else {
                    changeParagraph(event.target);
                }
            }
        });
    }
}

function clearInput() {
    input.textContent = '0';
    sum = 0;
}

function addToSum(amount) {
    sum += +amount;
    console.log(sum);
}

addEventListeners();
