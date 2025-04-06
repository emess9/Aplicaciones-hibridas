class ProductManager {
    constructor() {
        this.products = []; 
    }

    addProduct(producto) {
        if (!producto.id || !producto.nombre || !producto.precio) {
            console.log("Todos los campos son obligatorios.");
            return;
        }

        const existe = this.products.find(p => p.id === producto.id);
        if (existe) {
            console.log("Error: El ID ya existe.");
            return;
        }

        this.products.push(producto); 
        console.log("Producto agregado correctamente.");
    }

    getProducts() {
        return this.products; 
    }

    getProductById(id) {
        const producto = this.products.find(p => p.id === id);
        if (!producto) {
            console.log("Not found");
            return null;
        }
        return producto;
    }
}

module.exports = ProductManager;
