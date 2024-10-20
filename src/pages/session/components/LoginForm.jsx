import { useForm } from 'react-hook-form'
import { useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import { UserContext } from "../../../assets/context/UserContext"

export const LoginForm = () => {

    const {register, handleSubmit, formState: { errors }} = useForm();
    const onSubmitForm = data => console.log(data)
    const navigate = useNavigate();
    const {typeForm,setTypeForm} = useContext(UserContext);
    return(
        <>
        <form onSubmit={handleSubmit(onSubmitForm)} className='form-container'>
            <legend>Kodigo Music</legend>
            <div className="mb-3">
                <label htmlFor="InputEmail" className="form-label">Email address</label>
                <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" {... register('email', {required: true}) }/>
                {errors?.email?.type === "required" && <p>This field is required</p>}
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="InputPassword" className="form-label">Password</label>
                <input type="password" className="form-control" id="InputPassword" {... register('password',{required: true} ) }/>
                {errors?.password?.type === "required" && <p>This field is required</p>}
            </div>
            
            <button type="submit" className="btn btn-success ">Sing in</button>
            <button type="button" className="btn btn-secondary ms-3 " onClick={() =>{ setTypeForm('signup'), navigate('/session')}}>Sign up</button>
        </form>
        </>
    )
}