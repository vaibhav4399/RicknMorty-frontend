import axios from "axios";
import ICharacter, { Iinfo } from "../../interfaces/CharacterData";
import { toast } from "react-toastify";


type setState<s> = React.Dispatch<React.SetStateAction<s>>;

/**
 * * Type definations for the props passed for the API call
 */

type getAllCharacterProps = {
    info?: Iinfo | null,
    setInfo: setState<Iinfo | null>,
    setCharacterData: setState<ICharacter[]>,
    isLoading: boolean,
    setIsLoading: setState<boolean>,
    page: string
 }

/**
 * * Function to execute the API call using axios to get the character data from backend
 * @param setInfo --> to store the info value coming from API
 * @param setCharacterData ---> to set the CharacterData Array
 * @param isLoading ---> to show that new data is being loaded
 * @param setIsLoading ---> to change the isLoading parameter
 * @param page ---> to fetch the next page character data
 * @returns returns an array of character data and the info data to fetch the next page
 */

export const getAllCharacters = async ({ setInfo, setCharacterData, isLoading, setIsLoading, page}: getAllCharacterProps) => {

    if(isLoading) return;

    const backend_url = import.meta.env.VITE_BACKEND_URL;

    let url = backend_url + '/api/characters'

    if(page !== ''){
        url = url + '?page=' + page
        setIsLoading(true);
        await axios.get(url, { withCredentials: true })
            .then((response) => {
                setCharacterData(preData => [...preData, ...response.data.data]);
                setInfo(response.data.info);
            })
            .catch((err) => {
                toast.error("Something went wrong while fetching the character data");
            })
            .finally(() => {
                setIsLoading(false)
            })
    }


    


}