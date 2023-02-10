import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../context/DataProvider";
import { useParams } from "react-router-dom";
import { ProductoItem } from "./ProductoItem";

export const ProductoDetalles = () => {
  const value = useContext(DataContext);
  const [productos] = value.productos;
  const addCarrito = value.addCarrito;
  const [detalle, setDetalle] = useState([]);
  const [url, setUrl] = useState(0);
  const [images, setImages] = useState(``);
  const params = useParams();
  let item = 0;

  useEffect(() => {
    productos.forEach((producto) => {
      item = 0;
      if (producto.id === parseInt(params.id)) {
        setDetalle(producto);
        setUrl(0);
      }
    });
  }, [params.id, productos]);

  useEffect(() => {
    const values = `${detalle.img1}${url}${detalle.img2}`;
    setImages(values);
  }, [url, params.id]);

  const handleInput = (e) => {
    const number = e.target.value.toString().padStart(2, `01`);
    setUrl(number);
    console.log(number);
  };

  if (detalle.length < 1) return null;

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
          <button onClick={() => addCarrito(detalle.id)}>
            Añadir al carrito
          </button>
          {url ? (
            <img src={images} alt={detalle.title} />
          ) : (
            <img src={detalle.image} alt={detalle.title} />
          )}

          <input
            type="range"
            min="1"
            max="36"
            value={url}
            onChange={handleInput}
          />

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
          <br />
          <br />
          <br />
          <br />
        </div>
      }

      <h2 className="relacionados">Productos relacionados</h2>
      <div className="productos">
        {productos.map((producto) => {
          if (item < 6 && detalle.category === producto.category) {
            item++;
            return (
              <ProductoItem
                key={producto.id}
                title={producto.title}
                image={producto.image}
                category={producto.category}
                price={producto.price}
                id={producto.id}
              />
            );
          }
        })}
      </div>
    </>
  );
};
