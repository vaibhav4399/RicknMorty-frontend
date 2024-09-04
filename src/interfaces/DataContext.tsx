/**
 * * Interface to define the Data Context to pass across the components
 */

interface IDataContext {
    userID: string,
    setUserID: (userID: string) => void,
    isLoggedIn: boolean,
    setIsLoggedIn: (isLoggedIn: boolean) => void
}

export default IDataContext;