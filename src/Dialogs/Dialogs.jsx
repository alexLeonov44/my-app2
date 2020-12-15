import React from 'react';
import { Redirect } from 'react-router-dom';
import classes from './Dialogs.module.css';
import DialogsItems from './DialogsItem/DialogsItem'
import Message from './Message/Message'




const Dialogs = (props) => {

    let dialogsElement = props.dialogsPage.dialogsData.map(d => <DialogsItems name={d.name} id={d.id} />)  //метод мап функия прог по циклу 
    let messagesElement = props.dialogsPage.messagesData.map(m => <Message message={m.message} />)

    let onSendMessageClick = () => {
        props.onSendMessageClick()
    }
    let onNewMessageChange = (event) => {
        let text = event.target.value
        props.onNewMessageChange(text)
    }
    if(!props.isAuth)return <Redirect to={'/login'}/>
    return (
        <div className={classes.dialogs}>

            <div className={classes.dialogsItems}>
                {dialogsElement}
            </div>

            <div className={classes.messages}>
                <div>{messagesElement}</div>
                <div>
                    <div><textarea onChange={onNewMessageChange} value={props.dialogsPage.newMessageText} placeholder='enter your message'/></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>

        </div>

    )
}

export default Dialogs