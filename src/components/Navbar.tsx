'use client'; // Necesario para usar el estado de React
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className="navbar is-transparent is-fixed-top" style={{ backgroundColor: 'rgba(15, 23, 42, 0.8)', backdropFilter: 'blur(10px)' }}>
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item navbar-logo has-text-weight-bold is-size-4" href="/">
            JZ<span className="navbar-logo-dot">.</span>
          </Link>

          {/* Menú Hamburguesa */}
          <button 
            className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
            aria-label="menu" 
            aria-expanded="false" 
            onClick={() => setIsActive(!isActive)}
            style={{ color: 'white' }}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>

        <div className={`navbar-menu ${isActive ? 'is-active' : ''}`} style={isActive ? { backgroundColor: '#1e293b' } : {}}>
          <div className="navbar-end">
            <a className="navbar-item navbar-item-white" href="#proyectos">Proyectos</a>
            <a className="navbar-item navbar-item-white" href="#infraestructura">Infraestructura</a>
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-info is-outlined" href="mailto:jzartesv09@gmail.com">
                  Contactar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}