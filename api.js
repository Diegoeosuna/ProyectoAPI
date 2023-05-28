const urlFake = "https://fakestoreapi.com/products";

//Buscar todos los productos
export async function buscarTodosLosProductos(){
    const data = await fetch(`${urlFake}`);
    const dataJson = await data.json();
        // const productosObtenidos = dataJson.id;
    const resultadosFormateados = [];

    dataJson.forEach((producto) => {
        let productoFormateado = {
            titulo: producto.title,
            precio: producto.price,
            imagen: producto.image,
            descripcion: producto.description,
        };

    resultadosFormateados.push(productoFormateado)
    });
    return resultadosFormateados;
}


//Buscar los productos de ropa de hombre
export async function buscarTodaLaRopaHombre(){
    const data = await fetch (`${urlFake}/category/men's%20clothing`);
    const dataJson = await data.json();

    const resultadosFormateados = [];

    dataJson.forEach((producto) => {
        let productoFormateado = {
            titulo: producto.title,
            precio: producto.price,
            imagen: producto.image,
            descripcion: producto.description,
        };
        resultadosFormateados.push(productoFormateado)
    });
    return resultadosFormateados;
}

//Buscar los productos de ropa de mujer
export async function buscarTodaLaRopaMujer(){
    const data = await fetch (`${urlFake}/category/women's%20clothing`);
    const dataJson = await data.json();

    const resultadosFormateados = [];

    dataJson.forEach((producto) => {
        let productoFormateado = {
            titulo: producto.title,
            precio: producto.price,
            imagen: producto.image,
            descripcion: producto.description,
        };
        resultadosFormateados.push(productoFormateado)
    });
    return resultadosFormateados;
}

//Buscar los productos de joyas
export async function buscarTodaLasJoyas(){
    const data = await fetch (`${urlFake}/category/jewelery`);
    const dataJson = await data.json();

    const resultadosFormateados = [];

    dataJson.forEach((producto) => {
        let productoFormateado = {
            titulo: producto.title,
            precio: producto.price,
            imagen: producto.image,
            descripcion: producto.description,
        };
        resultadosFormateados.push(productoFormateado)
    });
    return resultadosFormateados;
}

//Buscar los productos de electrónica
export async function buscarTodaLaElectronica(){
    const data = await fetch (`${urlFake}/category/electronics`);
    const dataJson = await data.json();

    const resultadosFormateados = [];

    dataJson.forEach((producto) => {
        let productoFormateado = {
            titulo: producto.title,
            precio: producto.price,
            imagen: producto.image,
            descripcion: producto.description,
        };
        resultadosFormateados.push(productoFormateado)
    });
    return resultadosFormateados;
}

// const url = "https://rickandmortyapi.com/api";

// export async function buscarTodosLosPersonajes() {
//   const data = await fetch(`${url}/character`); //pedimos datos a la api y llega como xml

//   const dataJson = await data.json(); 
//   const resultadosObtenidos = dataJson.results; // busco la propiedad results que es un []

//   const resultadosFormateados = []; // array auxiliar para guardar nuestros datos nuevos

//   resultadosObtenidos.forEach((personaje) => {
//     recorro ese array y pusheo lo que quiero al array vacio

//     let personajeFormateado = {
//       nombre: personaje.name,
//       genero: personaje.gender,
//       imagen: personaje.image,
//       planetaDeOrigen: personaje.origin.name,
//       urlPlaneta: personaje.origin.url || "No tiene planeta asociado",
//     };

//     resultadosFormateados.push(personajeFormateado);
//   });

//   return resultadosFormateados;

// }