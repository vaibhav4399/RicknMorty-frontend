import { useState, createContext } from "react";
import { ToastContainer, Bounce } from "react-toastify";
import IDataContext from "../../interfaces/DataContext";
import { Outlet } from "react-router-dom";

import 'react-toastify/ReactToastify.min.css'


export const dataContext = createContext<IDataContext | undefined>(undefined);

/**
 * * Layout Component to define the Layout of the web page
 * @returns Returns the Layout component
 */

const Layout = () => {

    const [userID, setUserID] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <dataContext.Provider value={{userID, setUserID, isLoggedIn, setIsLoggedIn}}>
            <div>
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
            </div>
        </dataContext.Provider>
    );

}


export default Layout;