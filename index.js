const ProductManager = require('./ProductManager'); 

const manager = new ProductManager(); 

manager.addProduct({ id: 1, nombre: "Laptop", precio: 1000 });
manager.addProduct({ id: 2, nombre: "Mouse", precio: 50 });
manager.addProduct({ id: 3, nombre: "Teclado", precio: 70 }); 

console.log(manager.getProducts());

// Buscar un producto por ID
console.log(manager.getProductById(2)); 
console.log(manager.getProductById(99)); 
