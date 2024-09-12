import { toast } from "react-toastify";
import IDataContext from "../../interfaces/DataContext";
import axios from "axios";

/**
 * * Type definations for the AuthProps
 */

type authProps = {
    username : string,
    password: string,
    firstname?: string,
    lastname?: string,
    email?: string,
    context: IDataContext
}


const backend_URL = import.meta.env.VITE_BACKEND_URL;

/**
 * * Function to send request to the login path for user login
 * * Function create and axios request and sets the user session and cookie based on the request
 * @param username ---> Username of user
 * @param password ---> Password of the user 
 * @param context ---> Context data shared across multiple component
 * 
 */

export const loginAuth = async ({username, password, context}: authProps) => {
    
    const {setUserID, setIsLoggedIn, setIsModal} = context;

    const url = backend_URL + '/api/auth/login';

    const data= {
        username: username,
        password: password
    }

     axios.post(url,data,{withCredentials: true})
    .then((response) => {
        sessionStorage.setItem("fa_ft", JSON.stringify(response.data));
        setUserID('1')
        sessionStorage.setItem("userID", response.data.userID)
        setIsLoggedIn(true);
        sessionStorage.setItem("isLoggedIn", "true");
        setIsModal(false);
    })
    .catch((error) => {
        toast.error(error.toString());
    })

}


/**
 * * Function to send request to the register path for user registration
 * * Creates and Axios request and sets the session and cookie based on the user data
 * @param usernaem ---> Username of the user
 * @param password ---> Password of the user
 * @param firstname ---> Firstname of the user
 * @param lastname ---> Lastname of the user
 * @param email ---> Email of the user
 * @param context ---> Context data shared across multiple components
 */

export const registerAuth = async ({username, password, firstname, lastname, email, context}: authProps) => {

    const {setUserID, setIsLoggedIn, setIsModal} = context;

    const url = backend_URL + '/api/auth/register';

    const data = {
        username: username,
        password: password,
        firstname: firstname,
        lastname: lastname,
        email: email
    }

    await axios.post(url, data, {withCredentials: true})
    .then((response) => {
        sessionStorage.setItem("fa_ft", JSON.stringify(response.data));
        setUserID('1');
        sessionStorage.setItem('userID', response.data.userID);
        setIsLoggedIn(true);
        sessionStorage.setItem("isLoggedIn", "true");
        setIsModal(false);
    })
    .catch((error) => {
        toast.error(error.toString());
    });

}