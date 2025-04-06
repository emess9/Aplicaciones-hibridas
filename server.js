const http = require('http'); 
const ProductManager = require('./ProductManager');

const manager = new ProductManager(); 

// productos
manager.addProduct({ id: 1, nombre: "Laptop", precio: 1000 });
manager.addProduct({ id: 2, nombre: "Mouse", precio: 50 });
manager.addProduct({ id: 3, nombre: "Teclado", precio: 70 });
manager.addProduct({id:4, nombre:"Samsung galaxy", precio: 2000});

const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Probando el servidor');
    }

    else if (req.url === '/products' && req.method === 'GET') {
        const productos = manager.getProducts(); 
        res.writeHead(200, { 'Content-Type': 'application/json' }); 
        res.end(JSON.stringify(productos)); 
    }

    else if (req.url.startsWith('/products/') && req.method === 'GET') {
        const idStr = req.url.split('/')[2]; 
        const id = parseInt(idStr); 
    
        const producto = manager.getProductById(id);
    
        if (producto) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(producto));
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Producto no encontrado');
        }
    }
    
    
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
