import React, { useState, useEffect } from "react";
import FormularioProducto from "../Componentes/FormularioProducto";

const Admin = () => {
    const [products, setProducts] = useState([]);
    const [form, setForm] = useState({ id: null, name: "", price: "" });
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false);


    useEffect(() => {
        fetch("/data/data.json")
            .then((response) => response.json())
            .then((data) => {
                setTimeout(() => {
                    setProducts(data);
                    setLoading(false);
                }, 2000);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setError(true);
                setLoading(false);
            });
    }, []);

    const agregarProducto = async (products) => {
        try{
           const respuesta = await fetch('https://683b8fd928a0b0f2fdc4efdc.mockapi.io/productos-ecommerce/productos' ,{
              method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(products)
           }) 
           if(!respuesta.ok){
            throw new Error("Error al agregar el producto");
           } 

        }catch(error){
            console.error("Error al agregar el producto:", error);

        }

    }

    return (
        <div className="container">
            {loading ? (
                <p>Cargando...</p>
            ) : (
                <>
                    <nav>
                        <ul className="nav">
                            <li className="navItem">
                                <button className="navButton">
                                    <i className="fa-solid fa-right-from-bracket"></i>
                                </button>
                            </li>
                            <li className="navItem">
                                <a href="/admin">Admin</a>
                            </li>
                        </ul>
                    </nav>
                    <h1 className="title">Panel Administrativo</h1>
       
                    <ul className="list">
                        {products.map((product) => (
                            <li key={product.id} className="listItem">
                                <img
                                    src={product.imagen}
                                    alt={product.nombre}
                                    className="listItemImage"
                                />
                                <span>{product.nombre}</span>
                                <span>${product.precio}</span>
                                <div>
                                    <button className="editButton">Editar</button>

                                    <button className="deleteButton">Eliminar</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </>
            )}
            <button onClick={() => setOpen(true)}>Agregar producto</button>
            {open && (<FormularioProducto onAgregar={agregarProducto}/>)}
        </div>
    );
};

export default Admin;