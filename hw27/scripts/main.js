const submit = document.getElementById('registration-form');
submit.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(e) {
    e.preventDefault();
    const form = e.target.closest('form');
    const formObj = createObjFrom(form);

    const table = createTableFrom(formObj);
    const main = document.getElementsByTagName('main')[0];

    form.remove();
    main.appendChild(table);
}

function createObjFrom(form) {
    const firstName = form.elements['firstName'].value;
    const lastName = form.elements['lastName'].value;
    const dateOfBirth = form.elements['dateOfBirth'].value;
    const gender = form.elements['gender-group'].value;
    const email = form.elements['email'].value;
    const city = form.elements['city'].value;
    const address = form.elements['address'].value;
    const languages = getSelectedCheckboxes(form.elements['language-group']);

    return {firstName, lastName, dateOfBirth, email, gender, city, address, languages};
}

function getSelectedCheckboxes(elements) {
    return [...elements]
        .filter(e => e.checked)
        .map(e => e.value)
        .join(', ');
}

function createTableFrom(formObj) {
    const table = document.createElement('table');

    const thead = document.createElement('thead');
    const headList = ['Form key', 'Form value'];
    const tr = thead.insertRow();
    for (let columnName of headList) {
        const td = tr.insertCell();
        td.innerHTML = columnName;
    }

    const tbody = document.createElement('tbody');
    for (let propertyName in formObj) {
        const tr = tbody.insertRow();
        const tdKey = tr.insertCell();
        tdKey.innerHTML = propertyName;

        const tdVal = tr.insertCell();
        tdVal.innerHTML = formObj[propertyName] || '-';
    }

    table.appendChild(thead);
    table.appendChild(tbody);
    return table;
}