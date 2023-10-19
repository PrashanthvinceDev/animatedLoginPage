const container = document.getElementById('container');
const regButton = document.getElementById('register'); // toggle pannel -> button id 

const logIn = document.getElementById('login'); // lgoin button from toggle container

// Eventlistner 
regButton.addEventListener('click', () => {
    container.classList.add("active");
});

logIn.addEventListener('click', () => {
    container.classList.remove("active");
});