import { createListItem } from "./scripts/criarItemDaLista.js";
import checkEmptyList from "./scripts/checkEmptyList.js";

const itemList = document.getElementById('lista-de-compras');

const addingButton = document.getElementById('adicionar-item');

addingButton.addEventListener('click', (evento) => {
    evento.preventDefault();

    const listItem = createListItem();
    itemList.appendChild(listItem);

    checkEmptyList(itemList);

    document.getElementById('input-item').value = '';
})

checkEmptyList(itemList);
