import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark text-light pt-4 mt-5">
      <div className="container">

        <div className="row">

          {/* COLONNE 1 */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">FreelanceCo</h5>
            <p className="small">
              Création de sites web modernes, rapides et responsives pour freelances et petites entreprises.
            </p>
          </div>

          {/* COLONNE 2 */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">Liens rapides</h5>
            <ul className="list-unstyled">
              <li><a className="text-light text-decoration-none" href="/">Accueil</a></li>
              <li><a className="text-light text-decoration-none" href="/about">À propos</a></li>
              <li><a className="text-light text-decoration-none" href="/services">Services</a></li>
              <li><a className="text-light text-decoration-none" href="/projects">Projets</a></li>
              <li><a className="text-light text-decoration-none" href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* COLONNE 3 */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">Contact</h5>
            <p className="small mb-1"><i className="bi bi-envelope-heart"></i> contact@freelanceco.com</p>
            <p className="small mb-1"><i className="bi bi-whatsapp"></i> +212 6 00 00 00 00</p>
            <p className="small"><i className="bi bi-geo-alt"></i> Agadir, Maroc</p>
          </div>

        </div>

        <hr className="border-light" />

        <div className="text-center pb-3">
          <small className="opacity-75">
            © {new Date().getFullYear()} FreelanceCo — Tous droits réservés.
          </small>
        </div>
      </div>
    </footer>
  );
}
