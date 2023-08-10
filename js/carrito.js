const carritoContainer = document.querySelector("#carritoContainer")
const vaciarCarritoContainer = document.querySelector("#vaciarCarrito")
const carrito = JSON.parse(localStorage.getItem('carrito'))


const renderizarCarrito = () => {
        
        if (carrito) {
                carrito.forEach(element => {
                let carritoContent = document.createElement('div')
                carritoContent.className = "carrito-content"
                carritoContent.innerHTML = `
                
                        <img src='${element.imgURL}' class="card-img-top" alt="...">
                        <h5>${element.titulo}</h5>
                        <p>${element.precio} USD</p>
                        <p class="restar"> ◀ </p>
                        <p> Cantidad: ${element.cantidad}</p>
                        <p class="sumar"> ▶ </p>
                        <p> Total: ${element.cantidad * element.precio} USD</p>
                        <p> <button onclick="borrarProducto(this)" data-id="${element.id}"class="btn btn-light" id="deleteButton"> ❌ </button> </p>
                        
                        `
                carritoContainer.append(carritoContent)

                let restar = carritoContent.querySelector(".restar")
                let sumar = carritoContent.querySelector(".sumar")

                

                restar.addEventListener('click', () => {
                        if(element.cantidad !== 1){
                                element.cantidad--
                                carritoContainer.innerHTML = ""
                                renderizarCarrito()
                        }
                })

                sumar.addEventListener('click', () => {
                        element.cantidad++
                        carritoContainer.innerHTML = ""
                        renderizarCarrito()
                })
        
                });

                

                let total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0)

                if (total > 0){
                        let totalCompra = document.createElement('div')
                        totalCompra.className = "total-content"
                        totalCompra.innerHTML = `
                                <p>Total a pagar: ${total} USD </p>
                        `
                        carritoContainer.append(totalCompra)
                        
                        
                }else {
                        let carritoContent = document.createElement('div')
                        carritoContent.className = "carrito-content"
                        carritoContent.innerHTML = `
                        <p> Tu carrito esta vacio.</p>   
                        `
                        carritoContainer.append(carritoContent)  

                }
                
        }


        
}

renderizarCarrito()

//eliminar producto carrito
const eliminar = document.getElementById('deleteButton')

const borrarProducto = (elemento) => {

        let dataID = elemento.getAttribute('data-id')
        let productos = JSON.parse(localStorage.getItem('carrito'))

        productos = productos.filter(function(producto) {
                return producto.id !== parseInt(dataID);
        })

        localStorage.setItem('carrito',JSON.stringify(productos))
        location.reload()
        carritoContainer.innerHTML = ""
        renderizarCarrito()
        
}












