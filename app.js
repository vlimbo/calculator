function selectButtons() {
    const btns = document.querySelectorAll('.main__btn');
    return btns;
}

function changeParagraph(btn) {
    const input = document.querySelector('.main__input'); 
    input.textContent = input.textContent + btn.textContent;
}
