const items = document.querySelectorAll('.item');
const categories = document.querySelectorAll('.category');
const message = document.getElementById('message');

items.forEach(item => {
    item.addEventListener('dragstart', dragStart);
});

categories.forEach(category => {
    category.addEventListener('dragover', dragOver);
    category.addEventListener('dragenter', dragEnter);
    category.addEventListener('dragleave', dragLeave);
    category.addEventListener('drop', drop);
});

function dragStart(e) {
    e.dataTransfer.setData('text', e.target.dataset.value);
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
    this.classList.add('hovered');
}

function dragLeave() {
    this.classList.remove('hovered');
}

function drop(e) {
    e.preventDefault();
    const draggedItem = e.dataTransfer.getData('text');
    const targetCategory = this.dataset.value;
    
    this.appendChild(items[Array.from(items).findIndex(item => item.dataset.value === draggedItem)]);
    this.classList.remove('hovered');
    checkAllMatched();
}

function checkAllMatched() {
    const gameSound = document.getElementById("gameSound");
    const droppedItems = document.querySelectorAll('.category .item');

    if (droppedItems.length === items.length) {
        let inCorrectOrder = true;
        // Check if the dropped items are in the correct order
        droppedItems.forEach((item, index) => {
            const expectedValue = categories[index].dataset.value;
            if (item.dataset.value !== expectedValue) {
                inCorrectOrder = false;
            }
        });

        if (inCorrectOrder) {
            gameSound.play();
            message.innerHTML = "<div class='alert alert-success'>Congratulations! You've won a promo code for drinks. <a href=\"promocode.html\" class=\"btn btn-success\">Promo code</a></div>";
        } else {
            message.innerHTML = message.innerHTML = "<div class='alert alert-danger'>Unfortunately, you lost. Come play at another time.</div>";
        }
    }    
}

const gameTitle = document.querySelector("#game-title");
const gameDescription = document.querySelector("#game-description");

gameTitle.addEventListener("mouseover", () => {
  gameDescription.style.display = "block"; // Show the description when hovering over the game title
});

gameTitle.addEventListener("mouseout", () => {
  gameDescription.style.display = "none"; // Hide the description when moving the mouse away from the game title
});
