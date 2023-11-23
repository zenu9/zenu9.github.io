// Function to add a new order
function addOrder() {
    const orderInput = document.getElementById('orderInput');
    const orderText = orderInput.value.trim();
    if (orderText !== '') {
        const orderList = document.getElementById('orderList');
        const orderItem = document.createElement('li');
        orderItem.className = 'list-group-item d-flex justify-content-between align-items-center';
        orderItem.innerHTML = `
            <span>${orderText}</span>
            <span>
                <button class="btn btn-success btn-sm" onclick="markComplete(this)">Add Sauce</button>
                <button class="btn btn-danger btn-sm" onclick="deleteOrder(this)">Delete</button>
            </span>
        `;
        orderList.appendChild(orderItem);
        orderInput.value = '';
    }
}

// Function to mark a order as complete
function markComplete(button) {
    const orderItem = button.parentElement.parentElement;
    orderItem.classList.toggle('list-group-item-success');
}

// Function to delete a order
function deleteOrder(button) {
    const orderItem = button.parentElement.parentElement;
    orderItem.remove();
}

// Add order when the "Add" button is clicked
document.getElementById('addButton').addEventListener('click', addOrder);

// Add order when Enter key is pressed
document.getElementById('orderInput').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        addOrder();
    }
});

// Select the "Make an order" button
const makeOrderButton = document.getElementById('makeOrderButton');

// Add a click event
makeOrderButton.addEventListener('click', function() {
    const confirmation = confirm("Are you sure you want to place this order?");
    const orderSound = document.getElementById("orderSound");
    
    if (confirmation) {
        orderSound.play();
        alert("Your order has been placed!");
    } else {
        alert("Order canceled.");
    }
});
