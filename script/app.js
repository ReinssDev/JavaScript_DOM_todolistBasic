import { addItem, makeTodoElement, removeItem } from "./function.js";
import { objectElement } from "./config.js";

const init = () => {
    objectElement.input.addEventListener('keydown', (e) => {
        if(e.key === 'Enter') {
            addItem();
            e.preventDefault();
        }
    });

    objectElement.buttonSubmit.addEventListener('click', (e) => {
        addItem();
        // makeTodoElement();
        e.preventDefault();
    });

    objectElement.buttonDelete.addEventListener('click', (e) => {
        removeItem();
        e.preventDefault();
    })
}

init();