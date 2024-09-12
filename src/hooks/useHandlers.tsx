

type stateAction<s> = React.Dispatch<React.SetStateAction<s>>

/**
 * * Function to handle the Display of the modal
 * @param isModal ---> If true displays the modal
 * @param setIsModal ---> Used to set the isModal value
 */

export const handleModal = (isModal: boolean, setIsModal: stateAction<boolean>) => {
    setIsModal(!isModal);
}

/**
 * * Function to handle the LoginView 
 * @param loginView --> If true shows the Login form on modal
 * @param setLoginView  ---> Used to set the loginview for the modal
 */

export const handleLoginView = (loginView: boolean, setLoginView: stateAction<boolean>) => {
    setLoginView(!loginView);
}

/**
 * * Function to handle the Click event for the Hamburger
 * @param isClicked ---> If true opens the navigation menu in mobile view
 * @param setIsClicked ---> Used to set the isClicked value for the hamburger
 */

export const handleClick = (isClicked: boolean, setIsClicked: stateAction<boolean>) => {
    setIsClicked(!isClicked);
}

/**
 * * Function to handle the Resize of the window
 * @param setIsClicked  ---> Used to set the isClicked value for the hamburger
 */

export const handleResize = (setIsClicked: stateAction<boolean>) => {
    if (window.innerWidth > 640) {
        setIsClicked(false);
    }
}