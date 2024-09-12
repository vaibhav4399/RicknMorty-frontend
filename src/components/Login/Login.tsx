import React, { useRef, useContext } from 'react';
import { toast } from 'react-toastify';
import { loginAuth } from '../utils/authApiCall';
import IDataContext from '../../interfaces/DataContext';
import { dataContext } from '../Layout/Layout';

import './Login.css'

/**
 * * Function to handle the User login
 * @param loginView ---> To open the login form on the modal
 * @returns Returns the login component 
 */

const Login = ({loginView}: {loginView: boolean}) => {

    const username = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);

    const context: IDataContext | undefined = useContext(dataContext);
    
    /**
     * * Function to handle the submit event for a form
     * @param e ---> Form Submit event
     * @returns Returns null or some error for the login component call or lgs in the user
     */

    const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const uname = username.current?.value ?? '';
        const pass = password.current?.value ?? '';

        if(uname){
            if (uname.length < 8 || uname.length > 15 ){
                toast.error("Username should be between 8 to 15 characters");
                return null
            }
        }else{
            toast.error("Invalid Input Username");
            return null;
        }

        if(pass){
            if(pass.length < 8 || pass.length > 15){
                toast.error("Password should be between 8 to 15 characters");
                return null;
            }
        }else{
            toast.error("Invalid Input password");
            return null;
        }

        
        if(context){
            const data = {
                username: uname,
                password: pass,
                context: context
            }
            loginAuth(data);
        }
        else{
            toast.error("Something went wrong");
        }

        
    }

    return(
        <div className={`login-section ${loginView ? 'flex' : 'hidden'} `}>
            <p className="section-title">Login</p>
            <div className='section-body'>
                <form onSubmit={handleLoginSubmit} className='section-form'>
                    <input ref={username} name="username" type="text" placeholder='Enter username' />
                    <input ref={password} name="password" type="password" placeholder='Enter password' />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}


export default Login;

