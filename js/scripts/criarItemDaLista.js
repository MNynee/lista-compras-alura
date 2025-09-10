import generateWeekDay from "./gerarDiaDaSemana.js";
import checkEmptyList from "./checkEmptyList.js";

const inputItem = document.getElementById('input-item');
const itemList = document.getElementById('lista-de-compras');
let contador = 0;

export function createListItem() {

    if (inputItem.value === '') {
        alert('Por favor, insira um item na lista.');
        return;
    }

    const listItem = document.createElement('li');

    const listItemContainer = document.createElement('div');
    listItemContainer.classList.add('lista-item-container');

    const inputCheckbox = document.createElement('input');
    inputCheckbox.type = 'checkbox';
    inputCheckbox.id = 'checkbox-' + contador++;

    const itemName = document.createElement('p');
    itemName.innerHTML = inputItem.value;

    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('container-botoes');

    const deleteButton = document.createElement('img');
    deleteButton.src = '../../img/delete.svg';
    deleteButton.classList.add('container-botao');

    const editButton = document.createElement('img');
    editButton.src = '../../img/edit.svg';
    editButton.classList.add('container-botao');

    inputCheckbox.addEventListener('click', function () {
        if (inputCheckbox.checked) {
            itemName.style.textDecoration = 'line-through';
        } else {
            itemName.style.textDecoration = 'none';
        }
    });

    editButton.addEventListener('click', function () {
        const newListItem = prompt('Edite o nome do item:');
        itemName.innerHTML = newListItem;

        return newListItem;
    });

    deleteButton.addEventListener('click', function () {
        if (confirm('Tem certeza que quer excluir este item?')) {
            itemList.removeChild(listItem);

            checkEmptyList(itemList);
        }
    })

    buttonsContainer.appendChild(deleteButton);
    buttonsContainer.appendChild(editButton);
    listItemContainer.appendChild(inputCheckbox);
    listItemContainer.appendChild(itemName);
    listItemContainer.appendChild(buttonsContainer);
    listItem.appendChild(listItemContainer);

    const dateInfo = generateWeekDay();

    const itemDate = document.createElement('p');
    itemDate.classList.add('texto-data');
    itemDate.innerHTML = dateInfo;

    listItem.appendChild(itemDate);

    return listItem;
}