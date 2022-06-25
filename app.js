class Producto {
    constructor (nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = Number(precio);
        this.stock = stock;

    }
    actualizarStock(cantidad) {
        this.stock = this.stock - cantidad

    }   
}

const arrayProductos = [];
const producto1 = new Producto("Body Splash", 2000, 10);
const producto2 = new Producto("Esmalte de uñas", 1500, 15);
const producto3 = new Producto("Shampoo", 1750, 8);
const producto4 = new Producto("Mascaras en capsulas", 700, 10);
const producto5 = new Producto("Crema facial", 1250, 20);


arrayProductos.push(producto1);
arrayProductos.push(producto2);
arrayProductos.push(producto3);
arrayProductos.push(producto4);
arrayProductos.push(producto5);


//Ordenar lista
// const ordenarMenorMayor = () => {
//     arrayProductos.sort( (a,b,) => a.precio - b.precio);
//     mostrarListaOrdenada();
// };
// //---------------------------------

// const mostrarListaOrdenada = () => {
//     let array = [];
//     arrayProductos.forEach ( producto => array.push(producto.nombre+ " $" + producto.precio));
//     alert("Lista de precio: " + "\n" + array.join("\n"));
// };
// ordenarMenorMayor();
//---------------------------------

let total = 0;

const agregarProductosAlCarrito = () => {
    total = 0;
    let otroProducto = false; 
    let producto = "";
    let cantidad = 0;
    let precio = 0;

    do {
        producto = prompt("Cual de los siguientes productos queres comprar: \n-Body Splash \n-Esmalte de uñas \n-Shampoo \n-Mascaras en capsulas \n-Crema facial");
        let productoMin = producto.toLowerCase();

        cantidad = Number(prompt("¿Cuantos productos queres comprar?"));
        switch(productoMin) {
            case arrayProductos[0].nombre.toLowerCase():
                arrayProductos[0].actualizarStock(cantidad);
                if (arrayProductos[0].stock <= 0 || Number.isNaN(cantidad)) {
                    alert("Lo sentimos, en este momento no tenemos con stock");
                    precio = 0;
                    cantidad = 0;
                } else{
                    precio = arrayProductos[0].precio
                } 
                break;
            case arrayProductos[1].nombre.toLowerCase():
                arrayProductos[1].actualizarStock(cantidad);
                if (arrayProductos[1].stock <= 0 || Number.isNaN(cantidad)) {
                    alert("Lo sentimos, en este momento no tenemos con stock");
                    precio = 0;
                    cantidad = 0;
                } else{
                    precio = arrayProductos[1].precio
                } 
                break;
            case arrayProductos[2].nombre.toLowerCase():
                    arrayProductos[2].actualizarStock(cantidad);
                    if (arrayProductos[2].stock <= 0 || Number.isNaN(cantidad)) {
                        alert("Lo sentimos, en este momento no tenemos con stock");
                        precio = 0;
                        cantidad = 0;
                    } else{
                        precio = arrayProductos[2].precio
                    } 
                    break;
            case arrayProductos[3].nombre.toLowerCase():
                    arrayProductos[3].actualizarStock(cantidad);
                    if (arrayProductos[3].stock <= 0 || Number.isNaN(cantidad)) {
                        alert("Lo sentimos, en este momento no tenemos con stock");
                        precio = 0;
                        cantidad = 0;
                    } else{
                        precio = arrayProductos[3].precio
                    } 
                    break;
            case arrayProductos[4].nombre.toLowerCase():
                arrayProductos[4].actualizarStock(cantidad);
                if (arrayProductos[4].stock <= 0 || Number.isNaN(cantidad)) {
                    alert("Lo sentimos, en este momento no tenemos con stock");
                    precio = 0;
                    cantidad = 0;
                    } else{
                        precio = arrayProductos[4].precio
                    } 
                    break;     
            default: 
                alert("Alguno de los datos ingresados no es correcto");
                precio = 0;
                cantidad = 0;
        }
        total = total + precio*cantidad; //total =+ precio * cantidad (ES OTRA MANERA DE HACERLO)

        otroProducto = confirm("¿Queres agregar otro producto?");
    } while (otroProducto);
};

//-------------------------------------------------------

 const obtenerDescuento = (total) => {
    if (total >= 5000){
        total = total * 0.90;
        alert("Tenes un descuento del 10%");
    }
    return total;
};

const obtenerTotal = (total) => {
    // if (total == 0) {
    //     let totalCompra = obtenerDescuento(total);
    //     return totalCompra;
    // } else {
        total = 0;
        let totalCompra = obtenerDescuento(total);
        return totalCompra;

    // }
    // let totalCompra = obtenerDescuento(total);
    // return totalCompra;
}

// agregarProductosAlCarrito();
total = obtenerTotal(total);

// alert("El total de tu compra es: $" + total)

//Eventos

let boton = document.getElementById("comprar");
boton.addEventListener("click", iniciarCompra);

function iniciarCompra() {

    agregarProductosAlCarrito();
}

let boton1 = document.getElementById("terminarCompra");
boton1.addEventListener("click", comprarProductos);

function comprarProductos() {
    alert ("El total de tu compra es: $" + total)
}
