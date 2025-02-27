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


function renderDishes() {
    allDishes.forEach((dish, i) => {
        document.getElementById(`title${i}`).innerHTML = dish.title;
        document.getElementById(`description${i}`).innerHTML = dish.description;
        document.getElementById(`price${i}`).innerHTML = dish.price;
    });
}



// Select the burger icon and the menu
document.addEventListener("DOMContentLoaded", () => {
    let burger = document.getElementById("burger");
    let menu = document.getElementById("menu");

    // Add click event listener to toggle menu visibility
    burger.addEventListener("click", () => {
        menu.classList.toggle("active");
        burger.classList.toggle("open");
    });
});