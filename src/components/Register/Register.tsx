import { useRef, useContext } from 'react';
import { dataContext } from '../Layout/Layout';
import { toast } from 'react-toastify';
import IDataContext from '../../interfaces/DataContext';

import './Register.css'
import { registerAuth } from '../utils/authApiCall';

const Register = ({ loginView }: { loginView: boolean }) => {

    const username = useRef<HTMLInputElement>(null);
    const firstname = useRef<HTMLInputElement>(null);
    const lastname = useRef<HTMLInputElement>(null);
    const email = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);


    const context: IDataContext | undefined = useContext(dataContext);

    const handleRegisterSubmit = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();
        
        const uname = username.current?.value?? '';
        const pass = password.current?.value?? '';
        
        if(uname){
            if(uname.length < 8 || uname.length > 15){
                toast.error("Username should be between 8 to 15 characters");
                return null;
            }
        }

        if(pass){
            if(pass.length < 8 || pass.length > 15){
                toast.error("Password should be between 8 to 15 characters");
                return null;
            }
        }

        if(!firstname.current?.value?? '') return null;
        if(!lastname.current?.value?? '') return null;
        if(!email.current?.value?? '') return null;

       

        if(context){
            const data = {
                username: uname,
                password: pass,
                firstname: firstname.current.value,
                lastname: lastname.current.value,
                email: email.current.value,
                context: context
            }
            registerAuth(data)
        }

    }

    return (
        <div className={`register-section ${loginView ? 'hidden' : 'flex'} `}>
            <p className="section-title">Register</p>
            <div className='section-body'>
                <form onSubmit={handleRegisterSubmit} className='section-form'>
                    <input ref={username} type="text" placeholder="Enter username" />
                    <input ref={firstname} type="text" placeholder="Enter FirstName" />
                    <input ref={lastname} type="text" placeholder="Enter LastName" />
                    <input ref={email} type="email" placeholder="Enter Email" />
                    <input ref={password} type="password" placeholder='Enter Password'/>
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    );
}


export default Register;

