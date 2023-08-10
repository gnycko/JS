const getProducts = async () => {
    const respuesta = await fetch('/assets/json/productos.json')
    return await respuesta.json()
}

const listadoProductos = document.getElementById('listadoProductos')
const procesadoresAMD = document.getElementById('procesadoresAMD')

//CARGA PROCESADORES
const productos = await getProducts()

//funcion a importar de una pagina de funciones
const renderProducts = (productos, elemento) => {
    
    for(const product of productos){
        const divCol1 = document.createElement('div')
        divCol1.classList.add('col')
        divCol1.innerHTML = `    
                    <div class="cardProduct">
                        <a href="procesador1.html?pid=${product.id}">  <img src='${product.imgURL}' class="card-img-top " alt="..."> </a>
                        <hr>
                        <div class="card-body text-center">
                            <h5 class="card-text">${product.titulo}</h5>
                            <p class="card-text text-danger fw-semibold fs-5 text"> U$S <span class="fw-semibold  text-danger">${product.precio}</span> </p>
                        </div>
                    </div>
        `
        elemento.append(divCol1)

    }
}

renderProducts(productos, listadoProductos)
