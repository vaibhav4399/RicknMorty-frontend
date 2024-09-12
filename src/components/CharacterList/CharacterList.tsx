import { useEffect, useState } from 'react';
import ICharacter, { Iinfo } from '../../interfaces/CharacterData';
import { debounce } from 'lodash';
import CharacterCard from './CharacterCard';
import { getAllCharacters } from '../utils/getCharacter';

import './CharacterList.css'

/**
 * * Function to render the Character List page
 * @returns Calls the character card component and returns the list of characters
 */

const CharacterList = () => {

    const [characterData , setCharacterData] = useState<ICharacter[]>([]);
    const [info, setInfo] = useState<Iinfo | null>(null);
    const [page, setPage] = useState("1")
    const [isLoading, setIsLoading] = useState(false);


    /**
     * * Function to detect the scroll to the end of page for implementing infinte scroll
     * * ScrollTop ---> Gives the current scroll location
     * * windowHeight ---> Gives the viewport height of the window
     * * documentHeight ---> Gives the total height of the document 
     * 
     * * API call is made once the sum of scrollTop and windowHeight is less than documentHeight - 100px
     */

    const handleScroll = debounce(
        () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            if (scrollTop + windowHeight >= documentHeight - 100 && !isLoading) {
                setPage(info?.next?? '')
            }
        }       
    );

    /**
     * * UseEffect to execute the API Call whenever  the page is changed
     */

    useEffect(() => {
        getAllCharacters({ setInfo, setCharacterData, isLoading, setIsLoading, page})
    },[page])


    /**
     * * UseEffect to add the scroll event listener to the window to detect the scrolling
     */

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }

    },[isLoading])

    return (
        <div className='characterList'>
            <div>
                {
                    characterData.map((character) => (
    
                        <CharacterCard key={character.id} data={character} />
    
                    ))
                }
            </div>
            {
                isLoading &&
                <p className='loading'>..... Loading More Characters .....</p>
            }
        </div>
    );
}


export default CharacterList;