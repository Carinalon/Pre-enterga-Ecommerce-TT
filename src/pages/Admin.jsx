import React, { useState, useEffect, useContext } from "react";
import FormularioProducto from "../Componentes/Admin/FormularioProducto";
import FormularioEdicion from "../Componentes/Admin/FormularioEdicion";
import { CartContext } from "../context/CartContext";
import { AdminContext } from "../context/AdminContext";
import { useNavigate } from "react-router-dom";
import "/src/pages/stylesAdmin.css";

const Admin = () => {
  const { setIsAuth } = useContext(CartContext);

  const {
    productos,
    loading,
    open,
    setOpen,
    openEditor,
    setOpenEditor,
    seleccionado,
    setSeleccionado,
    agregarProducto,
    actualizarProducto,
    eliminarProducto,
  } = useContext(AdminContext);

  const navigate = useNavigate();

  return (
    <div className="container">{loading ? (
       <p>Cargando...</p>) : (
        <>
          <nav>
            <ul className="nav">
              <li className="navItem">
                <button className="navButton" onClick={() => {
                    setIsAuth(false);
                    navigate("/");
                    localStorage.removeItem("isAuth");
                  }}
                >
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
            {productos.map((product) => (
              <li key={product.id} className="listItem">
                <img
                  src={product.imagen}
                  alt={product.nombre}
                  className="listItemImage"
                />
                <span>{product.nombre}</span>
                <span>${product.precio}</span>
                <div>
                  <button
                    className="editButton" onClick={() => {
                      setOpenEditor(true);
                      setSeleccionado(product);
                    }}>Editar</button>

                  <button
                    className="deleteButton" onClick={() => eliminarProducto(product.id)}>Eliminar</button>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
      <button onClick={() => setOpen(true)}>Agregar producto nuevo</button>
      {open && (<FormularioProducto onAgregar={agregarProducto} />)}
      {openEditor && (<FormularioEdicion productoSeleccionado={seleccionado} onActualizar={actualizarProducto}
        />
      )}
    </div>
  );
};

export default Admin;
