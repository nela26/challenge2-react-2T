import React, { useContext } from "react";
import { Context } from "../Context";
import Heart from "../components/Heart";

const Galeria = () => {
  const { data, setData } = useContext(Context);
  const blod = (idImg) => {
    setData((current) =>
      current.map((obj) => {
        if (obj.id === idImg && obj.favorite === false) {
          return { ...obj, favorite: true };
        }
        if (obj.id === idImg && obj.favorite === true) {
          return { ...obj, favorite: false };
        }
        return obj;
      })
    );
  };
  return (
    <div className="container-images">
      {data.map((item) => (
        <div
          className="image"
          key={item.id}
          style={{
            backgroundImage: `url(${item.src.tiny})`,
          }}
        >
          <div className="heart" onClick={() => blod(item.id)}>
            <Heart filled={item.favorite} />
          </div>

          <div className="info-image">
            <p>{item.alt}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Galeria;
