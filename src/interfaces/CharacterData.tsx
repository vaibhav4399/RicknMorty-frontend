/**
 * * Interface to define the parameters of the Characters
 */

interface ICharacter {
    id: number,
    name: string,
    gender: 'Male' | 'Female' | 'Genderless' | 'unknown',
    status: 'Alive' | 'Dead' | 'unknown',
    species: string,
    image: string
    type: string,
    last_location: {
        name: string,
        location: number
    }

}

/**
 * * Interface to define the info data coming from the API
 */

export interface Iinfo {
    count: string,
    pages: string,
    next: string,
    prev: string
}

export default ICharacter;