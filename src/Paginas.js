import React from "react";
import { Routes, Route } from "react-router-dom";
import { Inicio } from "./componentes/Inicio";
import { ProductosLista } from "./componentes/Productos";
import { ProductoDetalles } from "./componentes/Productos/ProductoDetalles";

export const Paginas = () => {
  return (
    <section>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<ProductosLista />} />
        <Route path="/producto/:id" element={<ProductoDetalles />} />
      </Routes>
    </section>
  );
};
