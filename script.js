let buttonAdd = document.getElementById('button-add');

let nome = document.getElementById('nome');
let ra = document.getElementById('ra');

let lista = document.getElementById('lista');

buttonAdd.addEventListener('click', (event) => {

    let formHolder = document.createElement('div');
    formHolder.className = 'form-holder';

    let inputNome = document.createElement('input');
    inputNome.type = 'text';
    inputNome.value = nome.value;
    inputNome.disabled = true;

    let inputRa = document.createElement('input');
    inputRa.type = 'text';
    inputRa.value = ra.value;
    inputRa.disabled = true;

    let checkButton = document.createElement('img');
    checkButton.src = 'check.svg';
    checkButton.className = 'button-icon';
    checkButton.addEventListener('click', (event) => {
        inputNome.disabled = true;
        inputRa.disabled = true;
        checkButton.style.display = 'none';
    });

    let editButton = document.createElement('img');
    editButton.src = 'edit.svg';
    editButton.className = 'button-icon';
    editButton.addEventListener('click', (event) => {
        inputNome.disabled = false;
        inputRa.disabled = false;

        checkButton.style.display = 'block';
    });

    let removeButton = document.createElement('img');
    removeButton.src = 'remove.svg';
    removeButton.className = 'button-icon';
    removeButton.addEventListener('click', (event) => formHolder.remove());

    formHolder.appendChild(inputNome);
    formHolder.appendChild(inputRa);
    formHolder.appendChild(editButton);
    formHolder.appendChild(checkButton);
    formHolder.appendChild(removeButton);

    checkButton.style.display = 'none';

    lista.appendChild(formHolder);

    nome.value = null;
    ra.value = null;

});