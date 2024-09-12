import { useState, createContext, useEffect } from "react";
import { ToastContainer, Bounce, toast } from "react-toastify";
import IDataContext from "../../interfaces/DataContext";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import 'react-toastify/ReactToastify.min.css'
import axios from "axios";


export const dataContext = createContext<IDataContext | undefined>(undefined);

/**
 * * Layout Component to define the Layout of the web page
 * @returns Returns the Layout component
 */

const Layout = () => {

    const [userID, setUserID] = useState(sessionStorage.getItem('userID')?? '' );
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        return sessionStorage.getItem("isLoggedIn") === 'true'
    });
    const [isModal, setIsModal] = useState(false);

    const backend_URL = import.meta.env.VITE_BACKEND_URL;

    const url = backend_URL + '/check-session';

    const checkSession = async () => {
        try {
            const response = await axios.get(url,{
                withCredentials: true
            })

            console.log(response)

            if(response.data){

                setUserID(response.data.userID);
                setIsLoggedIn(true);
                setIsModal(false);
                sessionStorage.setItem("fa_ft", JSON.stringify(response.data));
                sessionStorage.setItem("userID", response.data.userID)
                sessionStorage.setItem("isLoggedIn", "true");
            }
        }
        catch(err) {
            console.error(err?.toString());
        }
    }

    useEffect(() => {
        checkSession();
    },[])

    return (
        <dataContext.Provider value={{userID, setUserID, isLoggedIn, setIsLoggedIn, isModal, setIsModal}}>
            <>
                <Header />
                <main>
                    <ToastContainer
                        newestOnTop={true}
                        theme="colored"
                        pauseOnHover
                        transition={Bounce}
                        draggable
                    />
                    <Outlet />
                </main>
                <Footer />
            </>
        </dataContext.Provider>
    );

}


export default Layout;