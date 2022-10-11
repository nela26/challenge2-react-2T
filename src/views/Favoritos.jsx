import React, { useContext } from "react";
import { Context } from "../Context";

const Favoritos = () => {

  const { data } = useContext(Context);
  return (
    <div>
     
    <div>
    <h1>Fotos Favoritas</h1>
      </div> 
   
   <div className="container-images">
      {data
        .filter((a) => a.favorite === true)
        .map((item) => (
          <div
              className="image"
              key={item.id}
              src={item.src.tiny}
              style={{backgroundImage: `url(${item.src.tiny})`,
            }}
            >

            <div className="info-images">
              <p>{item.alt}</p>
            </div>

          </div>
        ))}
    </div>
    </div>
  );
};

export default Favoritos;