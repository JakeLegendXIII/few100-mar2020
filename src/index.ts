
import './styles.css';

interface ShoppingItem {
    description: string;
}

const items: ShoppingItem[] = [
    { description: 'Toilet Paper' },
    { description: 'Hand Sanitizer' },
    { description: 'Beer' }
];

const theList = document.getElementById('the-list') as HTMLUListElement;
const theButton = document.getElementById('addButton') as HTMLButtonElement;
const itemToAdd = document.getElementById('itemToAdd') as HTMLInputElement;
drawList();

theButton.addEventListener('click', addTheItem);

function addTheItem() {
    const newItem: ShoppingItem = {
        description: itemToAdd.value
    };
    items.unshift(newItem);
    drawList();
}

function drawList() {
    items.forEach(item => {
        const newElem = document.createElement('li');
        newElem.classList.add('alert');
        newElem.classList.add('alert-info');
        const newSpan = document.createElement('span');
        newSpan.innerText = item.description;
        newElem.appendChild(newSpan);
        theList.appendChild(newElem);
    });

}

