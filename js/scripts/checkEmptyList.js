const emptyListMsg = document.querySelector('.mensagem-lista-vazia');

function checkEmptyList(itemList) {
    const listItems = itemList.querySelectorAll('li');

    if (listItems.length === 0) {
        emptyListMsg.style.display = 'block'
    } else {
        emptyListMsg.style.display = 'none'
    }
}

export default checkEmptyList;