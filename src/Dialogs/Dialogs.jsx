import React from 'react';
import classes from './Dialogs.module.css';
import DialogsItems from './DialogsItem/DialogsItem'
import Message from './Message/Message'
import { Field, reduxForm } from 'redux-form'
import { lengthCreator, required } from '../utils/validators/validators';
import { Textarea } from '../common/formsControl/formsControl';

let maxLength10 = lengthCreator(10)

const DialogForm = (props) => {   // in props resive - handleSubmit
    return (
              <form onSubmit = {props.handleSubmit}> {/* prevent defuult упаковка в обьект  и передача данных в onSubmit*/}
                <div>
                    <Field placeholder={'message'} name={'message'}
                     component={Textarea} validate={[required,maxLength10]} /> 
                </div>
                <div>
                     <button>send message</button> {/* в форме auto submit */}
                </div>
            </form>

    )
}

const LoginReduxForm = reduxForm({   //связывает с редьюсером
    form:'login'  // после создания форм в редьюсере создается подъобьект логин
})(DialogForm)


const Dialogs = (props) => {

    const onSubmit = (dialogData)=>{  //придут сюда все значения из форм !! через submit!
        console.log(dialogData) // отобразим все данные!
        props.onSendMessageClick(dialogData)
    }

    let dialogsElement = props.dialogsPage.dialogsData.map(d => <DialogsItems key={d.id} name={d.name} id={d.id} />)  //метод мап функия прог по циклу 
    let messagesElement = props.dialogsPage.messagesData.map(m => <Message key={m.id} message={m.message} />)

    
     
    return (
        <div className={classes.dialogs}>

            <div className={classes.dialogsItems}>
                {dialogsElement}
            </div>

            <div className={classes.messages}>
                <div>{messagesElement}</div>
                <div>
                  <LoginReduxForm onSubmit={onSubmit} />  
                </div>
            </div>

        </div>

    )
}

export default Dialogs