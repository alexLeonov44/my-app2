import React from 'react';
import classes from './Dialogs.module.css';
import DialogsItems from './DialogsItem/DialogsItem'
import Message from './Message/Message'
import { updateNewMessageTextCreator, sendMessageCreator } from '../Redux/dialogs-reduser'



const Dialogs = (props) => {

    let state = props.state.getState().dialogsPage

    let dialogsElement = state.dialogsData.map(d => <DialogsItems name={d.name} id={d.id} />)  //метод мап функия прог по циклу 
    let messagesElement = state.messagesData.map(m => <Message message={m.message} />)
    let newMessageText = state.newMessageText

    let onSendMessageClick = () => {
        props.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (event) => {
        let text = event.target.value
        props.dispatch(updateNewMessageTextCreator(text))
    }
    return (
        <div className={classes.dialogs}>

            <div className={classes.dialogsItems}>
                {dialogsElement}
            </div>

            <div className={classes.messages}>
                <div>{messagesElement}</div>
                <div>
                    <div><textarea onChange={onNewMessageChange} value={newMessageText} placeholder='enter your message' /></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>

        </div>

    )
}

export default Dialogs