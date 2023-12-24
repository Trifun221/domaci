document.addEventListener('DOMContentLoaded', function () {

    var items = [
        { "naziv": "Chair", "komada": 1, "cena": 233 },
        { "naziv": "Car", "komada": 3, "cena": 324 },
        { "naziv": "Computer", "komada": 2, "cena": 319 },
        { "naziv": "Chair", "komada": 3, "cena": 405 },
        { "naziv": "Pizza", "komada": 3, "cena": 121 },
        { "naziv": "Chips", "komada": 3, "cena": 58 },
        { "naziv": "Table", "komada": 2, "cena": 324 },
        { "naziv": "Sausages", "komada": 3, "cena": 204 },
        { "naziv": "Pants", "komada": 3, "cena": 335 },
        { "naziv": "Table", "komada": 1, "cena": 350 }
    ];

    function renderTable() {
        var tableBody = document.querySelector('#tabela tbody');
        var punaCenaElement = document.getElementById('punaCena');

        tableBody.innerHTML = '';
        var punaTabelaCena = 0;

        items.forEach(function (item) {
            var row = tableBody.insertRow();
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);

            cell1.textContent = item.naziv;

            var quantityInput = document.createElement('input');
            quantityInput.type = 'number';
            quantityInput.value = item.komada;
            quantityInput.min = 0;  
            quantityInput.addEventListener('change', function () {
                updateQuantity(item, parseInt(quantityInput.value, 10));
            });
            cell2.appendChild(quantityInput);

            cell3.textContent = item.cena;

            var rowPunaCena = item.komada * item.cena;
            cell4.textContent = rowPunaCena;

            var addButton = document.createElement('button');
            addButton.textContent = '+';
            addButton.addEventListener('click', function () {
                updateQuantity(item, item.komada + 1);
            });
            cell5.appendChild(addButton);

            var removeButton = document.createElement('button');
            removeButton.textContent = '-';
            removeButton.addEventListener('click', function () {
                updateQuantity(item, Math.max(item.komada - 1, 0));
            });
            cell5.appendChild(removeButton);

            punaTabelaCena += rowPunaCena;
        });

        punaCenaElement.textContent = punaTabelaCena;
    }

    function updateQuantity(item, newQuantity) {
        
        items.find(i => i === item).komada = newQuantity;

        renderTable();
    }

    renderTable();
});