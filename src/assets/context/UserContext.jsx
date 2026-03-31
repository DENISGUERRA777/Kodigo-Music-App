import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const UserContext = createContext(null);

export const Myprovider = ({children}) => {

    const [user,setUser] = useState(null);
    const [typeForm, setTypeForm] = useState("login"); 
    const [playState, setPlayState] = useState(false);
    return(
        <UserContext.Provider value = { {
            user, setUser,
            typeForm, setTypeForm,
            playState, setPlayState
            } }
        >
            {children}
        </UserContext.Provider>
    )
}

Myprovider.propTypes = {
    children: PropTypes.node.isRequired,
};