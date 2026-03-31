import { Link } from "react-router-dom"
import PropTypes from "prop-types";

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

FilaCard.propTypes = {
    lista: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};