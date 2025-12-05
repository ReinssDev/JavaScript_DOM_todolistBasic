import { objectElement } from "./config.js"
// Buat id untuk setiap item memiliki id unik
const addTodo= (text) => {
    return({id: Date.now(), text });
}

objectElement.buttonSubmit.addEventListener('click', () => {
    // Validasi jika input kosong atau tidak
    if(!objectElement.input.value.trim()) {
        const alertText = 'Harap, anda masukkan input yang sesuai dan tidak boleh kosong!!!';
        objectElement.alertTodo.textContent = alertText;
        objectElement.alertTodo.style.color = '#ed071e';
        return;
    } else {
        objectElement.alertTodo.style.display = 'none';
    }
    const valueText = objectElement.input.value;
    const elementLi = document.createElement('li');
    elementLi.append(valueText);
    objectElement.containerItemList.append(elementLi);
    objectElement.input.value = '';
});