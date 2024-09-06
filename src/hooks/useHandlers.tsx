

type stateAction<s> = React.Dispatch<React.SetStateAction<s>>

export const handleModal = (isModal: boolean, setIsModal: stateAction<boolean>) => {
    setIsModal(!isModal);
}

export const handleLoginView = (loginView: boolean, setLoginView: stateAction<boolean>) => {
    setLoginView(!loginView);
}

export const handleClick = (isClicked: boolean, setIsClicked: stateAction<boolean>) => {
    setIsClicked(!isClicked);
}

export const handleResize = (setIsClicked: stateAction<boolean>) => {
    if (window.innerWidth > 640) {
        setIsClicked(false);
    }
}