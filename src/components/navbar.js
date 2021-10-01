import React from 'react';
import NavbarItem from './navbarItem';

function Navbar(){
    return (
        <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
            <div className="container">
                <div href="" className="navbar-brand">Iziw Serviços</div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav">
                        <NavbarItem href="#/home" Label="Home" />
                        <NavbarItem href="#/cadastro" Label="Cadastro" />
                        <NavbarItem href="#/login" Label="Login" />
                        <NavbarItem href="#/lancamentos" Label="Extrato" />
        
                   
                    </ul>

                </div>
            </div>
        </div>

   )
}
export default Navbar