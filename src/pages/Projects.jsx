import React from "react";

export default function Projects() {
  return (
    <div>
      <h1 className="fw-bold mb-4">Mes Projets</h1>

      <div className="row g-4">

        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h4>Site E-commerce</h4>
              <p>Un site complet avec panier, produits et paiement.</p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h4>Portfolio Personnel</h4>
              <p>Un design moderne pour présenter mes compétences.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
