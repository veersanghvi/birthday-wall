document.addEventListener('DOMContentLoaded', () => {
    const wishForm = document.getElementById('wishForm');
    const wishInput = document.getElementById('wishInput');
    const nameInput = document.getElementById('nameInput');
    const wishList = document.getElementById('wishList');

    // Load wishes from local storage
    loadWishes();

    wishForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const wish = wishInput.value;
        const name = nameInput.value;

        // Save wish to local storage
        saveWish(wish, name);

        // Clear input fields
        wishInput.value = '';
        nameInput.value = '';
    });

    function saveWish(wish, name) {
        const wishes = JSON.parse(localStorage.getItem('wishes')) || [];
        wishes.push({ wish, name, date: new Date().toLocaleString() });
        localStorage.setItem('wishes', JSON.stringify(wishes));
        loadWishes();
    }

    function loadWishes() {
        const wishes = JSON.parse(localStorage.getItem('wishes')) || [];
        wishList.innerHTML = '';
        wishes.forEach(({ wish, name
