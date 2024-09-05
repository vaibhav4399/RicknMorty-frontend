import { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { dataContext } from '../Layout/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, faUser } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import {AnimatePresence, motion} from 'framer-motion';
import IDataContext from '../../interfaces/DataContext';

import Login from '../Login/Login';

import './Header.css'
import Register from '../Register/Register';

library.add(faBars, faXmark, faUser);

const Header = () => {

    const context: IDataContext | undefined = useContext(dataContext);
    
    if(!context){
        return (
            <div className="text-3xl text-center mt-3">
                Could not load the component. Something went wrong.
            </div>
        );
    }
    
    const {isLoggedIn} = context;
    const [isClicked, setIsClicked] = useState(false);
    const [isModal, setIsModal] = useState(false);
    const [loginView, setLoginView] = useState(false);

    const handleModal = () => {
        setIsModal(!isModal);
    }

    const handleLoginView = () => {
        setLoginView(!loginView);
    }

    const handleClick = () => {
        setIsClicked(!isClicked);
    }

    const handleResize = () => {
        if(window.innerWidth > 640) {
            setIsClicked(false);
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    },[])

    return (
        <>
        
            <header className={isClicked ? 'h-64': 'h-32'}>
                <div className='logo-section'>
                    <div onClick={handleClick} className='hamburger'>
                        <FontAwesomeIcon className='text-3xl' icon={faBars}/>
                    </div>
                    <div className='logo'>
                        <img alt="logo" src="/RickMorty_logo.webp" />
                    </div>
                </div>
                <nav className={isClicked ? 'mobile' : 'desktop' }>
                    <ul>
                        <li><Link to="/characters">Characters</Link></li>
                        <li><Link to="/locations">Locations</Link></li>
                        <li className={isLoggedIn ? '' : 'hidden'} ><a>Favourites ❤️ </a></li>
                    </ul>
                </nav>
                <div className={`user-section ${isLoggedIn ? 'border-l border-b border-black dark:border-white' : ''}`}>
                    <div className={`registration ${isLoggedIn ? 'hidden': 'flex'} `}>
                        <button onClick={handleModal} >Register/Login</button>
                    </div>
                    <div className={`profile ${isLoggedIn ? 'flex' : 'hidden'}`}>
                        <FontAwesomeIcon className='text-3xl' icon={faUser} />
                    </div>
                </div>
            </header>
            <div className={`modal-bg ${isLoggedIn ? 'hidden': isModal ? 'flex' : 'hidden'}` }>
                <div className='modal '>
                    <div className={`modal-close ${loginView ? 'left-0' : 'right-0'} `}>
                        <FontAwesomeIcon onClick={() => {handleModal(); setLoginView(false)}} className='text-black text-3xl cursor-pointer' icon={faXmark} />
                    </div>
                    <div className='forms'>
                        <Login loginView={loginView} />
                        <Register loginView={loginView} />
                    </div>
                    <AnimatePresence>
                        <motion.div
                            variants={{
                                hidden: { left: 0 },
                                visible: { left: loginView ? "50%" : 0 }
                            }}
                            initial="hidden"
                            animate="visible"
                            transition={{
                                duration: 0.8, ease: "easeInOut"
                            }}
                            style={{
                                top: 5,
                                bottom: 5,
                            }}
                            className={`side-panel ${loginView ? 'rounded-l-3xl' : 'rounded-r-3xl'}`}>

                            <div
                                className={` auth-section ${loginView ? "flex" : "hidden"}`}>
                                <h2>Hey there New Here !!</h2>
                                <p>Create an account first if you dont have one.</p>
                                <button onClick={handleLoginView}> Register </button>
                            </div>
                            <div className={` auth-section ${loginView ? "hidden" : "flex"}`}>
                                <h2>Already have an account !!</h2>
                                <p>Come on log into your account. Its waiting  for you !!.</p>
                                <button onClick={handleLoginView}> Login </button>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </>
    );
}

export default Header;