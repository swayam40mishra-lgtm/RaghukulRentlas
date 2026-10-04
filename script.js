const fleet = [
  {name:"Fortuner", price6:null, price12:12000, price24:12000, category:["premium","suv"], range:"220 KM / 24H", badge:"FLAGSHIP"},
  {name:"Scorpio-N", price6:2750, price12:3850, price24:5500, category:["premium","suv"], range:"220 KM / 24H"},
  {name:"Thar", price6:2500, price12:3500, price24:5000, category:["premium","suv"], range:"220 KM / 24H", badge:"POPULAR"},
  {name:"Innova Crysta", price6:3000, price12:4200, price24:6000, category:["premium","suv"], range:"220 KM / 24H"},
  {name:"Dzire CNG", price6:1250, price12:1750, price24:2500, category:["city"], range:"220 KM / 24H"},
  {name:"Swift Petrol", price6:1200, price12:1980, price24:2400, category:["city"], range:"220 KM / 24H"},
  {name:"Black Swift VXi", price6:1350, price12:2090, price24:2700, category:["city"], range:"220 KM / 24H"},
  {name:"Virtus", price6:2250, price12:3465, price24:4500, category:["premium"], range:"220 KM / 24H"},
  {name:"Verna", price6:2250, price12:3465, price24:4500, category:["premium"], range:"220 KM / 24H"},
  {name:"XUV700", price6:2750, price12:3835, price24:5500, category:["premium","suv"], range:"220 KM / 24H"},
  {name:"Aura CNG", price6:1250, price12:1925, price24:2500, category:["city"], range:"220 KM / 24H"},
  {name:"Fronx", price6:1250, price12:1925, price24:2500, category:["city","suv"], range:"220 KM / 24H"},
  {name:"Punch Petrol", price6:1100, price12:1705, price24:2200, category:["city","suv"], range:"220 KM / 24H"},
  {name:"Scorpio Classic", price6:1750, price12:2450, price24:3500, category:["suv"], range:"220 KM / 24H"}
];

const grid = document.getElementById("fleetGrid");

const money = value => value == null ? "—" : `₹${value.toLocaleString("en-IN")}`;

function carCard(car) {
  return `
    <article class="car-card" data-category="${car.category.join(" ")}">
      <div class="car-image image-placeholder">
        ${car.badge ? `<span class="car-badge">${car.badge}</span>` : ""}
        <span>CAR PHOTO</span>
      </div>
      <div class="car-body">
        <h3>${car.name}</h3>
        <div class="car-meta">
          <span>24/7</span><span>5 KM FREE DELIVERY</span>
        </div>
        <div class="prices">
          <div class="price"><small>6 Hours</small><strong>${money(car.price6)}</strong></div>
          <div class="price"><small>12 Hours</small><strong>${money(car.price12)}</strong></div>
          <div class="price"><small>24 Hours</small><strong>${money(car.price24)}</strong></div>
        </div>
        <div class="card-action">
          <span class="range">${car.range}</span>
          <a class="enquire" href="https://wa.me/917705962008?text=${encodeURIComponent(`Hi Raghukul Rentals, I want to enquire about renting the ${car.name}.`)}" target="_blank" rel="noopener">Enquire ↗</a>
        </div>
      </div>
    </article>`;
}

function render(filter="all") {
  grid.innerHTML = fleet
    .filter(car => filter === "all" || car.category.includes(filter))
    .map(carCard)
    .join("");
}

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(b => b.classList.remove("active"));
    button.classList.add("active");
    render(button.dataset.filter);
  });
});

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});
document.querySelectorAll(".nav a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

window.addEventListener("scroll", () => {
  document.querySelector(".site-header").classList.toggle("scrolled", window.scrollY > 10);
});

document.getElementById("year").textContent = new Date().getFullYear();
render();
