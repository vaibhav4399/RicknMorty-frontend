import './Register.css'

const Register = ({ loginView }: { loginView: boolean }) => {
    return (
        <div className={`register-section ${loginView ? 'hidden' : 'flex'} `}>
            <p className="section-title">Register</p>
            <div className='section-body'>
                <form className='section-form'>
                    <input type="text" placeholder="Enter username" />
                    <input type="text" placeholder="Enter FirstName" />
                    <input type="text" placeholder="Enter LastName" />
                    <input type="text" placeholder="Enter Email" />
                    <input type="password" placeholder='Enter Password'/>
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    );
}


export default Register;

