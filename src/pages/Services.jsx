import React from "react";

export default function Services() {
  return (
    <div>
      <h1 className="fw-bold mb-4">Mes Services</h1>

      <div className="row g-4">

        <div className="col-md-4">
          <div className="card shadow-sm p-3">
            <h4>Création de sites Web</h4>
            <p>Sites professionnels, modernes et responsives.</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm p-3">
            <h4>Design UI/UX</h4>        
                <p>Interfaces élégantes, simples et adaptées à vos besoins.</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm p-3">
            <h4>Optimisation & SEO</h4>
            <p>Amélioration de la vitesse et visibilité Google.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
