const formContainer = document.getElementById('form-container');

const form = document.createElement('form');
form.id = 'card-form';

const cardNumberGroup = createFormGroup('card-number', 'Номер карты', 'number', 'Введите номер карты (16 цифр)');
cardNumberGroup.querySelector('input').maxLength = 16;

const cardHolderGroup = createFormGroup('card-holder', 'Имя владельца', 'text', 'Введите имя владельца');

const expiryDateGroup = createFormGroup('expiry-date', 'Срок действия (MM/YY)', 'text', 'Например: 12/25');

const cvcGroup = createFormGroup('cvc', 'CVC/CVV', 'number', 'Введите CVC/CVV (3 цифры)');
cvcGroup.querySelector('input').maxLength = 3;

const submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.textContent = 'Отправить';

form.append(cardNumberGroup, cardHolderGroup, expiryDateGroup, cvcGroup, submitButton);

formContainer.appendChild(form);

function createFormGroup(id, labelText, inputType, placeholderText) {
    const group = document.createElement('div');
    group.className = 'form-group';

    const label = document.createElement('label');
    label.htmlFor = id;
    label.textContent = labelText;

    const input = document.createElement('input');
    input.id = id;
    input.name = id;
    input.type = inputType;
    input.placeholder = placeholderText;

    group.appendChild(label);
    group.appendChild(input);
    return group;
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const cardNumber = form['card-number'].value;
    const cardHolder = form['card-holder'].value;
    const expiryDate = form['expiry-date'].value;
    const cvc = form['cvc'].value;

    if (validateCardNumber(cardNumber) && validateExpiryDate(expiryDate) && validateCVC(cvc)) {
        alert(`Форма успешно отправлена!
               Номер карты: ${cardNumber}
               Владелец: ${cardHolder}
               Срок действия: ${expiryDate}
               CVC: ${cvc}`);
    } else {
        alert('Пожалуйста, проверьте введенные данные.');
    }
});

// Функция проверки номера карты
function validateCardNumber(number) {
    return number.length === 16 && !isNaN(number);
}

// Функция проверки срока действия
function validateExpiryDate(date) {
    const regex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    return regex.test(date);
}

// Функция проверки CVC
function validateCVC(cvc) {
    return cvc.length === 3 && !isNaN(cvc);
}
