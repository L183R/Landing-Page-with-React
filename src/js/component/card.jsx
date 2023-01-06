import React from "react";

const Card = () => {
    return (<div className="card col-3">
    <img src="http://pm1.narvii.com/6328/5967ab741d861dc32f6ffd3580844b8d68df5752_00.jpg" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Las cartas andan</h5>
      <p className="card-text">Mis cartas muestran cartas.</p>
      <a href="#" className="btn btn-primary">Ste botón no hace nah</a>
    </div>
  </div>);
};

export default Card