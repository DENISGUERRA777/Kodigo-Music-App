import { useNavigate } from "react-router-dom";

export const ArtistCard = (props) => {
    const navigate = useNavigate();

    return (
        <div className="artist-card">
            
            <img src={props.imagen} alt={`foto-de-${props.alternativo}`} />
            <button className="artist-card-link" onClick={() =>navigate('/player')}><img src="https://cdn-icons-png.flaticon.com/512/7187/7187472.png" alt="" /></button>
            <h4>{props.artista}</h4>
            <p>Artista</p>
        
        </div>
    )
}