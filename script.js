document.addEventListener('DOMContentLoaded', function () {
    // Form Validation
    const form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');

        if (!name.value || !email.value || !message.value) {
            alert('Please fill out all fields.');
            event.preventDefault();
        } else if (!validateEmail(email.value)) {
            alert('Please enter a valid email address.');
            event.preventDefault();
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Search Functionality
    const searchButton = document.querySelector('.search-button');
    searchButton.addEventListener('click', function () {
        const searchInput = document.querySelector('.search-input');
        alert('Searching for: ' + searchInput.value);
        // Implement actual search functionality here
    });

    // Interactive Elements
    const hoverButtons = document.querySelectorAll('.hover-button');
    hoverButtons.forEach(button => {
        button.addEventListener('mouseover', function () {
            button.style.backgroundColor = 'white';
            button.style.color = '#4CAF50';
        });

        button.addEventListener('mouseout', function () {
            button.style.backgroundColor = '#003049';
            button.style.color = 'white';
        });
    });

    const rooms = document.querySelectorAll('.room img');
    rooms.forEach(room => {
        room.addEventListener('mouseover', function () {
            room.style.transform = 'scale(1.1)';
            room.style.transition = 'transform 0.3s';
        });

        room.addEventListener('mouseout', function () {
            room.style.transform = 'scale(1)';
        });
    });
});