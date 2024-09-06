import { useState, createContext } from "react";
import { ToastContainer, Bounce } from "react-toastify";
import IDataContext from "../../interfaces/DataContext";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import 'react-toastify/ReactToastify.min.css'


export const dataContext = createContext<IDataContext | undefined>(undefined);

/**
 * * Layout Component to define the Layout of the web page
 * @returns Returns the Layout component
 */

const Layout = () => {

    const [userID, setUserID] = useState(sessionStorage.getItem("userID")?? "");
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        return sessionStorage.getItem("isLoggedIn") === 'true';
    });
    const [isModal, setIsModal] = useState(false);

    return (
        <dataContext.Provider value={{userID, setUserID, isLoggedIn, setIsLoggedIn, isModal, setIsModal}}>
            <div>
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
            </div>
        </dataContext.Provider>
    );

}


export default Layout;