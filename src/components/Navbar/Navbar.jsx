import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav-container">
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink 
            to="/generar" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            Generar Solicitud
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
            to="/aprovar" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            Aprobar Solicitud
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
            to="/consultar" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            Consultar Solicitudes
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;