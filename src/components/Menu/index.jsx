import React from 'react'
import { Link } from 'react-router-dom'

export const Menu = ({ paginaAtual }) => {


    return (
        <>
            <nav
                className="navbar navbar-expand-lg navbar-light bg-light"
            >
                <div
                    className="container-fluid"
                >
                    <h3>Party Band</h3>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul
                            className="navbar-nav me-auto mb-2 mb-lg-0"
                        >
                            <li
                                className="nav-item"
                            >
                                <Link
                                    className={`nav-link ${paginaAtual === 'Home' && 'active'}`}
                                    to="/"
                                >
                                    Home
                                </Link>
                            </li>
                            <li
                                className="nav-item"
                            >
                                <Link
                                    className={`nav-link ${paginaAtual === 'QuemSomos' && 'active'}`}
                                    to="/quemsomos"
                                >
                                    Quem somos
                                </Link>
                            </li>
                            <li
                                className="nav-item"
                            >
                                <Link
                                    className={`nav-link ${paginaAtual === 'Contato' && 'active'}`}
                                    to="/contato"
                                >
                                    Contato
                                </Link>
                            </li>
                            <li
                                className="nav-item"
                            >
                                <Link
                                    className={`nav-link ${paginaAtual === 'Servicos' && 'active'}`}
                                    to="/servicos"
                                >
                                    Serviços
                                </Link>
                            </li>
                            <li
                                className="nav-item"
                            >
                                <Link
                                    className={`nav-link ${paginaAtual === 'ListarEmail' && 'active'}`}
                                    to="/listagem"
                                >
                                    Listar Email
                                </Link>

                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}