import IDataContext from "../../interfaces/DataContext";
import axios from "axios";


type authProps = {
    username : string,
    password: string,
    firstname?: string,
    lastname?: string,
    email?: string,
    context: IDataContext
}


const backend_URL = import.meta.env.VITE_BACKEND_URL;

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
        console.error(error);
    })

}

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
        console.error(error);
    });

}