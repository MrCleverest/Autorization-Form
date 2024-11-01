const gridContainer = document.getElementById('grid-container');
let username = "";
let password = "";

function login() {
    userInput = document.getElementById("usernameBox").value;
    passInput = document.getElementById("passwordBox").value;
    let usernameError = document.getElementById("usernameBox");
    let passwordError = document.getElementById("passwordBox");

    if (userInput == username) {
        if (passInput == password) {
            alert("Вітаємо! Авторизація успішна!");
        }
        else {
            document.getElementById("passwordBox").style.color = "red";
            document.getElementById("passwordBox").value = "Incorect Password!";
        }
    }
    else {
        document.getElementById("usernameBox").style.color = "red";
        document.getElementById("usernameBox").value = "Username not found!";
    }

}

function register() {
    username = document.getElementById("usernameBox").value;
    password = document.getElementById("passwordBox").value;
    window.location.href = "autorization.html";
}

function resetInput() {
    document.getElementById("usernameBox").style.color = "#6B6B6B";
    document.getElementById("passwordBox").style.color = "#6B6B6B";
}

// Анімація
// Функція для створення квадрата
function createSquare() {
    const square = document.createElement('div');
    square.classList.add('square');
    return square;
}

// Додаємо квадрати в контейнер, достатню кількість для заповнення екрану
const numSquares = 16 * Math.ceil(window.innerWidth / 90); // 16 рядів * кількість стовпців

for (let i = 0; i < numSquares; i++) {
    gridContainer.appendChild(createSquare());
}

