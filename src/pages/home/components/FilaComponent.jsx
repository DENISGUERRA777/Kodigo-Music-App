import { Link } from "react-router-dom"

export const FilaCard = (props) => {
    return (
        <section className="fila-card-container">
            <div className="fila-title-container">
            <Link><h3>{props.lista}</h3></Link><Link className="boton-mostrar">Mostrar todo</Link>
            </div>
            <div>
            {props.children}
            </div>
        </section>
    )
}