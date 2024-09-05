import './Login.css'

const Login = ({loginView}: {loginView: boolean}) => {
    return(
        <div className={`login-section ${loginView ? 'flex' : 'hidden'} `}>
            <p className="section-title">Login</p>
            <div className='section-body'>
                <form className='section-form'>
                    <input type="text" placeholder='Enter username' />
                    <input type="password" placeholder='Enter password' />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}


export default Login;

