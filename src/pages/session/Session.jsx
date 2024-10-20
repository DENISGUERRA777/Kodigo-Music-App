import {RegisterForm} from "./components/RegisterForm"
import { LoginForm } from "./components/LoginForm"
import { UserContext } from "../../assets/context/UserContext";
import { useContext } from "react"

export const Session = () => {

    const {typeForm,setTypeForm} = useContext(UserContext);
    return(
        <>

        { typeForm === "login" ? <LoginForm /> : <RegisterForm /> }
      
        </>
    )
}