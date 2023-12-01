document.addEventListener('DOMContentLoaded', function () {
    const chocolateOptionsContainer = document.querySelector('.chocolate-options');
    const selectedItemsList = document.getElementById('selected-items');
    const totalPriceElement = document.getElementById('total-price');
    const checkboxes = document.querySelectorAll('.chocolate-options input[type="checkbox"]');
    const maxItems = 8;

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateSelectedItems);
    });

    function updateSelectedItems() {
        let totalPrice = 0;
        let selectedItemsCount = 0;

        selectedItemsList.innerHTML = '';

        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                const itemName = checkbox.dataset.name;
                const itemPrice = parseFloat(checkbox.dataset.price);

                if (selectedItemsCount < maxItems) {
                    totalPrice += itemPrice;
                    selectedItemsCount++;

                    const listItem = document.createElement('li');
                    listItem.textContent = itemName;
                    selectedItemsList.appendChild(listItem);
                } else {
                    checkbox.checked = false;
                    alert('You can select a maximum of 8 items.');
                }
            }
        });

        totalPriceElement.textContent = totalPrice.toFixed(2);
    }
});
