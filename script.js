let allDishes = [
    {
        title: "Pizza Margherita",
        description: "Eine klassische italienische Pizza mit Tomatensauce und Mozzarella.",
        price: "8,50€"
    },
    {
        title: "Spaghetti Carbonara",
        description: "Spaghetti mit cremiger Carbonara-Soße, Speck und Parmesan.",
        price: "10,90€"
    },
    {
        title: "Caesar Salad",
        description: "Frischer Salat mit Caesar-Dressing, Croutons und Parmesan.",
        price: "7,20€"
    }
];

function init() {
    renderDishes();
}

// Funktion zum Rendern der Gerichte
function renderDishes() {
    const dishesContainer = document.getElementById("dishes");

    // Inhalt des Containers leeren, falls vorhanden
    dishesContainer.innerHTML = "";

    // Jedes Gericht dynamisch erstellen und hinzufügen
    allDishes.forEach(dish => {
        const dishDiv = document.createElement("div");
        dishDiv.classList.add("dish");

        dishDiv.innerHTML = `
        <p class="dish__title">${dish.title}</p>
        <p class="dish__description">${dish.description}</p>
        <p class="dish__price">${dish.price}</p>
      `;

        dishesContainer.appendChild(dishDiv);
    });
}


// Select the burger icon and the menu
document.addEventListener("DOMContentLoaded", () => {
    const burger = document.getElementById("burger");
    const menu = document.getElementById("menu");

    // Add click event listener to toggle menu visibility
    burger.addEventListener("click", () => {
        menu.classList.toggle("active");
        burger.classList.toggle("open");
    });
});