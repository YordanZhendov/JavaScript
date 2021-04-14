function addItem() {
    const liElement=document.createElement('li');
    liElement.textContent=document.getElementById('newItemText').value;
    document.getElementById('items').appendChild(liElement);

    const buttonDelete=document.createElement('button');
    buttonDelete.addEventListener('click',removeItem);
    liElement.appendChild(buttonDelete);
    buttonDelete.textContent='Delete';
}

function removeItem(event){
    const currEve=event.target;
    currEve.parentNode.remove();
}