import { objectElement } from "./config.js"
const addItem = () => {
    // Validasi input
    if(!objectElement.input.value.trim()) {
        objectElement.alertTodo.textContent = 'Harap, anda masukkan input yang sesuai dan tidak boleh kosong!!!';
        objectElement.alertTodo.style.color = '#ed071e';
        return;
    }
    objectElement.alertTodo.textContent = '';

    const valueText = objectElement.input.value;
    const elementDate = document.createElement('p');
    elementDate.textContent = objectElement.inputDate.value;
    const elementLi = document.createElement('li');
    elementLi.append(valueText, elementDate);

    const textContainer = document.createElement('div');
    textContainer.classList.add('container-list');
    textContainer.append(elementLi);
    objectElement.containerItemList.append(textContainer);

    makeTodoElement(textContainer);
    
    objectElement.input.value = '';
    objectElement.inputDate.value = '';
}

const makeTodoElement = (textContainer) => {
    const buttonRemove = document.createElement('button');
    buttonRemove.textContent = 'Hapus';
    buttonRemove.classList.add('btn-delete');
    buttonRemove.addEventListener('click', () => {
        textContainer.remove();
    });
    textContainer.append(buttonRemove);
    objectElement.containerItemList.append(textContainer);
}

const removeItem = () => {
    objectElement.containerItemList.innerHTML = '';
}

export {addItem, makeTodoElement, removeItem};