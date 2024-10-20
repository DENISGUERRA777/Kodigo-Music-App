import { Link, useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import { UserContext } from "../../../assets/context/UserContext";



export const NavBar = () => {
    const navigate = useNavigate();
    const {typeForm,setTypeForm} = useContext(UserContext);
    return(
        <header className="nav-bar-container">
        <nav className="navbar navbar-dark w-80 ">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/" ><h2>Kodigo Music</h2></Link>
                <form className="d-flex mx-auto">
                    <input className="form-control me-2" type="search" placeholder="Que quieres escuchar?" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Buscar</button>
                </form>
                <form className="d-flex credenciales-buttons">
                    <button className="btn btn-outline-success me-2" type="button" onClick={() =>{ setTypeForm('signup'), navigate('/session')}}>Registrarte</button>
                    <button className="btn btn-sm btn-outline-secondary" type="button" onClick={() =>{ setTypeForm('login'), navigate('/session')}}>Iniciar sesion</button>
                </form>
            </div>
        </nav>
        </header>
    )
}