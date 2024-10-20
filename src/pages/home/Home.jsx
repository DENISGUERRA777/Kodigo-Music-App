
import { NavBar } from "./components/NavBar";
import { Biblioteca } from "./components/Biblioteca";
import { Carrusel } from "./components/Carrusel";
export const Home = () => {
    
    return (
        <>
        <NavBar/>
        <div className="main-container">
            <Biblioteca></Biblioteca>
            <Carrusel/> 
            
        </div>
        </>
    )
}