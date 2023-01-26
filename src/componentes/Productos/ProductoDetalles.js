import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../context/DataProvider";
import { useParams } from "react-router-dom";

export const ProductoDetalles = () => {
  const value = useContext(DataContext);
  const [productos] = value.productos;
  const [detalle, setDetalle] = useState([]);
  const params = useParams();

  useEffect(() => {
    productos.forEach((producto) => {
      if (producto.id === parseInt(params.id)) {
        setDetalle(producto);
      }
    });
  }, [params.id, productos]);

  return (
    <>
      {
        <div className="detalles">
          <h2>{detalle.title}</h2>
          <p className="price">${detalle.price}</p>
          <div className="grid">
            <p className="nuevo">Nuevo</p>
            <div className="size">
              <select placeholder="Tamaño">
                <option value="1">1</option>
                <option value="1">2</option>
                <option value="1">3</option>
                <option value="1">4</option>
                <option value="1">5</option>
                <option value="1">6</option>
                <option value="1">7</option>
                <option value="1">8</option>
                <option value="1">9</option>
              </select>
              <p>Tamaño</p>
            </div>
          </div>
          <button>Añadir al carrito</button>
          <img src={detalle.image} alt={detalle.title} />
          <input type="range" min="1" max="36" />
          <div className="description">
            <p>
              <b>description:</b> Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Voluptatibus maiores, sit quasi excepturi aut
              debitis. Fuga ipsam, praesentium inventore, recusandae velit
              nesciunt magni cumque veniam nisi dolore maiores enim amet. <br />
              <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate quasi laboriosam animi quod eos officiis praesentium
              quae beatae quo saepe, tempore ipsam quas? Dolore at qui id porro,
              exercitationem quibusdam.
            </p>
          </div>
        </div>
      }
    </>
  );
};
