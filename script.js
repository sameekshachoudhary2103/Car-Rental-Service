const cars = [
    { name: "Tesla Model S", image: "tesla.jpg", specs: "Electric, 396 mi range", price: "$20/hr" },
    { name: "BMW X5", image: "bmw.jpg", specs: "Luxury SUV, 335 HP", price: "$25/hr" },
    { name: "Audi A6", image: "audi.jpg", specs: "Sedan, 261 HP", price: "$18/hr" },
    { name: "Mercedes-Benz C-Class", image: "mercedes.jpg", specs: "Sedan, 255 HP", price: "$22/hr" },
    { name: "Ford Mustang", image: "mustang.jpg", specs: "Sports Car, 450 HP", price: "$30/hr" },
    { name: "Toyota Corolla", image: "corolla.jpg", specs: "Sedan, 139 HP", price: "$15/hr" },
    { name: "Honda Civic", image: "civic.jpg", specs: "Sedan, 158 HP", price: "$16/hr" },
    { name: "Chevrolet Camaro", image: "camaro.jpg", specs: "Sports Car, 275 HP", price: "$28/hr" },
    { name: "Jeep Wrangler", image: "wrangler.jpg", specs: "SUV, 285 HP", price: "$24/hr" },
    { name: "Nissan Altima", image: "altima.jpg", specs: "Sedan, 188 HP", price: "$17/hr" },
    { name: "Hyundai Sonata", image: "sonata.jpg", specs: "Sedan, 191 HP", price: "$16/hr" },
    { name: "Volkswagen Passat", image: "passat.jpg", specs: "Sedan, 174 HP", price: "$19/hr" },
    { name: "Subaru Outback", image: "outback.jpg", specs: "SUV, 182 HP", price: "$21/hr" },
    { name: "Mazda CX-5", image: "cx5.jpg", specs: "SUV, 187 HP", price: "$23/hr" },
    { name: "Kia Sorento", image: "sorento.jpg", specs: "SUV, 191 HP", price: "$22/hr" }
];

const carList = document.querySelector(".car-list");

cars.forEach(car => {
    const carCard = document.createElement("div");
    carCard.classList.add("car-card");

    carCard.innerHTML = `
        <img src="images/${car.image}" alt="${car.name}">
        <h3>${car.name}</h3>
        <p><strong>Specifications:</strong> ${car.specs}</p>
        <p><strong>Rental Price:</strong> ${car.price}</p>
        <button class="book-btn" onclick="bookCar('${car.name}')">Book Now</button>
    `;

    carList.appendChild(carCard);
});

function bookCar(carName) {
    alert(`You have selected ${carName}. Proceed to booking.`);
    window.location.href = "booking.html"; // Redirect to booking page
}