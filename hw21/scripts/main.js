createTable(10, 10);

function createTable(rows, cols) {
    const table = document.createElement('table');

    let seqNumber = 1;
    for (let i = 0; i < rows; i++) {
        const tr = document.createElement('tr');

        for (let j = 0; j < cols; j++) {
            const td = document.createElement('td');
            td.innerHTML = seqNumber;

            tr.appendChild(td);
            seqNumber++;
        }
        table.appendChild(tr);
    }

    const main = document.getElementsByTagName('main')[0];
    main.appendChild(table);
}


//with insertRow and insertCell
function createTableV2(rows, cols) {
    const table = document.createElement('table');

    let seqNumber = 1;
    for (let i = 0; i < rows; i++) {
        const tr = table.insertRow();

        for (let j = 0; j < cols; j++) {
            const td = tr.insertCell();
            td.innerHTML = seqNumber;

            seqNumber++;
        }
    }

    const main = document.getElementsByTagName('main')[0];
    main.appendChild(table);
}