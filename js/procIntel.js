const getProducts = async () => {
    const respuesta = await fetch('/assets/json/productos.json')
    return await respuesta.json()
}

const procesadoresIntel = document.getElementById('procesadoresIntel')

//CARGA PROCESADORES
const productos = await getProducts()

//funcion a importar de una pagina de funciones

const renderProductsAmd = (productos, elemento) => {
    for(const amd of productos){
        
        if(amd.marca == 'Intel'){
            const divCol = document.createElement('div')
            divCol.classList.add('col')
            divCol.innerHTML = `    
                    <div class="cardProduct">
                        <a href="procesador1.html?pid=${amd.id}">  <img src='${amd.imgURL}' class="card-img-top" alt="..."> </a>
                        <hr>
                        <div class="card-body text-center">
                            <h5 class="card-text">${amd.titulo}</h5>
                            <p class="card-text text-danger fw-semibold fs-5 text"> U$S <span class="fw-semibold  text-danger">${amd.precio}</span> </p>
                        </div>
                    </div>
        `
        elemento.appendChild(divCol)
        }
    }
}

renderProductsAmd(productos, procesadoresIntel)