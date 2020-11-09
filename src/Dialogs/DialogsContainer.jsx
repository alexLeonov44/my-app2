import React from 'react';
import Dialogs from './Dialogs'
import { updateNewMessageTextCreator, sendMessageCreator } from '../Redux/dialogs-reduser'  



const DialogsContainer = (props) => {

    let dialogsPage = props.state.getState().dialogsPage  //state.dialogsPage

    let onSendMessageClick = () => {
        props.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (text) => {
        props.dispatch(updateNewMessageTextCreator(text))
    }
    return (
       <Dialogs onNewMessageChange={onNewMessageChange} onSendMessageClick={onSendMessageClick} dialogsPage={dialogsPage} />

    )
}

export default DialogsContainer