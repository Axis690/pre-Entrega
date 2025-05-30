import React from 'react';

function Carrito(items) {
 return (
    <div>
            <h1>Carrito de Compras</h1>
            {items.length > 0 ? (
                <ul>
                    {items.map((info, id) => (
                        <li key={id}>{info.nombre} - ${info.image}</li>
                    ))}
                </ul>
            ) : (
                <p>El carrito está vacío.</p>
            )}
            {items.length > 0 && <button onClick={vaciarCarrito}>Vaciar Carrito</button>}
        </div>
    );
}
export default Carrito;