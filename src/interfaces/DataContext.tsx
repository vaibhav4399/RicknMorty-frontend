/**
 * * Interface to define the Data Context to pass across the components
 */

type stateAction<s> = React.Dispatch<React.SetStateAction<s>>

interface IDataContext {
    userID: string,
    setUserID: stateAction<string>,
    isLoggedIn: boolean,
    setIsLoggedIn: stateAction<boolean>,
    isModal: boolean,
    setIsModal: stateAction<boolean>
}

export default IDataContext;