const getProduct = async (pid) => {
    const respuesta = await fetch('/assets/json/productos.json')
    const products = await respuesta.json()

    return products.find (producto => producto.id ==  pid)
}

const getParamURL = (param) => {
    const urlParam = new URLSearchParams(window.location.search)
    return parseInt(urlParam.get(param))
}

const pid = getParamURL('pid')
const producto = await getProduct(pid)


//funcion a importar de una pagina de funciones
const detalleProducto = document.getElementById('detalle')
const titulo = document.getElementById('titulo')

const renderProduct = (product, elemento) => {

        titulo.textContent = product.titulo
        
        const divRow = document.createElement('div')
        divRow.className ='row'
        divRow.innerHTML = ` 
                    <div class="col">
                        <img src="${product.imgURL}" class="img-fluid" alt="image not found" >
                    </div>
                    <div class="col">
                        <p class="fs-3 fw-bolder">${product.titulo}</p>   
                        <p>
                            ${product.descripcion}
                        </p>
                        <p class="fs-3 fw-semibold text-danger"> USD ${product.precio} iva inc. </p>
                        <button type="button" class="btn btn-primary btn-lg" id="addCart">Agregar al Carrito</button>
                    </div>   
        `
        elemento.appendChild(divRow)
}

renderProduct(producto,detalleProducto)

let botonAgregar = document.querySelector('#addCart')
botonAgregar.addEventListener('click', () => agregarAlCarrito(producto))

const agregarAlCarrito = (producto) => {
    const carritoLS = JSON.parse(localStorage.getItem('carrito'))
    if (carritoLS) {
        console.log('hay algo en el LS')
        const prodIndex = carritoLS.findIndex((prod) => prod.id === producto.id)
        if (prodIndex === -1) {
            producto.cantidad = 1
            carritoLS.push(producto)
        }
        else {
            carritoLS[prodIndex].cantidad += 1
        }
        localStorage.setItem('carrito',JSON.stringify(carritoLS))
        Toastify({
            text: 'Agregado al Carrito ✔',
            duration: 3000,
            destination: 'carrito.html'
        }).showToast()  
    }
    else {
        console.log('no hay nada en el carrito')
        producto.cantidad = 1
        localStorage.setItem('carrito', JSON.stringify([producto]))
        Toastify({
            text: 'Agregado al Carrito ✔',
            duration: 3000,
            destination: 'carrito.html'
        }).showToast()
    }
}



