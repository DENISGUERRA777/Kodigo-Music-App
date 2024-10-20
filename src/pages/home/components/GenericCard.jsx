
import { useNavigate } from "react-router-dom";

export const GenericCard = (props) => {
    const navigate = useNavigate();
    return(
        <div className="generic-card">
                <img src={props.imagen} alt={props.alternativo} />
                
                <button className="generic-card-link" onClick={() =>navigate('/player')}><img src="https://cdn-icons-png.flaticon.com/512/7187/7187472.png" alt="" /></button>
            <h4>{props.infografia}</h4>
            <p>{props.artista}</p>
        
        </div>
    )
}