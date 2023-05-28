import {
    buscarTodaLaRopaMujer
 } from "./api.js";
 const root = document.getElementById("root");

async function mostrarProductos(){
    const productos = await buscarTodaLaRopaMujer();

    for (let i = 0; i < productos.length; i++){
        const producto = productos[i];
        root.innerHTML += `
        <div class="card">
            <img class="image" src=${producto.imagen} />
            <div class="card-content">
                <h4 class="compartir">${producto.titulo.slice(0,30)+"..."}</h4>
                <h6 class="compartir"> ${"$"+producto.precio+" MXN"}</h6>
                <span class="compartir"> ${producto.descripcion.slice(0,40)+"..."}</span>
            <button class="compartir">Agregar a Carrito</button>
        </div>
    </div>`
    }
}

mostrarProductos();