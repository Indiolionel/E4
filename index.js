const pizzas = [];
localStorage.setItem("Pizzas", pizzas)

class Pizza {
    constructor(id, nombre, ingredientes, precio, img) {
        this.id = id,
            this.nombre = nombre,
            this.ingredientes = [ingredientes],
            this.precio = precio,
            this.img = img

    }
}



const pizzaMuzza = new Pizza(1, "Muzza", ["Muzzarella", " Aceitunas"], 554, "Muzza.jpg");
const pizzaRoquefort = new Pizza(2, "Roquefort", ["Roquefort", " Muzzarella", " Aceitunas"], 854, "Roquefort.jpg");
const pizzaCuatroQ = new Pizza(3, "4 Quesos", ["Roquefort", " Muzzarella", " Chedar", " Gouda", " Aceitunas"], 1154, "4-quesos.jpg");
const pizzaAnana = new Pizza(4, "Anana", ["Anana", " Muzzarella", " Jamon", " Aceitunas"], 954, "Anana.jpg");
const pizzaCalabresa = new Pizza(5, "Calabresa", ["Calabresa", " Muzzarella", " Aceitunas negras"], 854, "Calabresa.jpg");
const pizzaAnchoas = new Pizza(6, "Anchoas", ["Anchoas", " Muzzarella", " Aceitunas negras"], 654, "Anchoas.jpg");

pizzas.push(pizzaMuzza, pizzaRoquefort, pizzaCuatroQ, pizzaAnana, pizzaCalabresa, pizzaAnchoas)
localStorage.setItem("Pizzas", JSON.stringify(pizzas))
const btn = document.querySelector(".boton");
const idPizza = document.querySelector(".idPizza");
const render = document.getElementById("render")


function mostrarInfo(nombre, precio, img, ingredientes) {

    render.innerHTML = `<div class="card">
     <h2>${nombre}</h2>
     <h4>$ ${precio}</h4>
     <img src="./Img/${img}" alt=" ${nombre}">   
     <p>Ingredientes: ${ingredientes}</p>
     </div>
    `;
}

btn.addEventListener("click", () => {
    render.innerHTML = ""
   
    pizzas.forEach(p => {

        (p.id == idPizza.value) ? mostrarInfo(p.nombre, p.precio, p.img, p.ingredientes) : null;

    })
    if (render.innerHTML == "") {
        render.innerHTML = `<div class="card">
        <h3>No existe esa Pizza</h3> 
        </div>      
        `;
    }
})


