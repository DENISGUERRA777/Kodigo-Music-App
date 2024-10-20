import { NavBar } from "./components/NavBar";
import { Biblioteca } from "./components/Biblioteca";
import { PlayList} from "./components/PlayList"
export const Player = () => {
    return (
        <>
        <NavBar/>
        <div className="main-container">
            <Biblioteca></Biblioteca>
            <PlayList></PlayList> 
            
        </div>
        </>
    )
}