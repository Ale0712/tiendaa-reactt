import React from "react";
import { Routes, Route } from "react-router-dom";
import { Inicio } from "./Inicio";
import { ProductosLista } from "./Productos/index";

export const Paginas = () => {
  return (
    <section>
      <Routes>
        <Route path="/" exact component={Inicio} />
        <Route path="/productos" exact component={ProductosLista} />
      </Routes>
    </section>
  );
};
