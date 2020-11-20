import Dialogs from './Dialogs'
import { updateNewMessageTextCreator, sendMessageCreator } from '../Redux/dialogs-reduser'  
import { connect } from 'react-redux';



// const DialogsContainer = (props) => {

//     let dialogsPage = props.state.getState().dialogsPage  //state.dialogsPage

//     let onSendMessageClick = () => {
//         props.dispatch(sendMessageCreator())
//     }
//     let onNewMessageChange = (text) => {
//         props.dispatch(updateNewMessageTextCreator(text))
//     }
//     return (
//        <Dialogs onNewMessageChange={onNewMessageChange} onSendMessageClick={onSendMessageClick} dialogsPage={dialogsPage} />

//     )
// }


 const mapStateToProps =(state)=>{
    return{
        dialogsPage: state.dialogsPage
    }
 }
 
 const mapDispatchToProps =(dispatch)=>{
     return{
        onSendMessageClick: () =>  dispatch(sendMessageCreator()),
        onNewMessageChange: (text) =>  dispatch(updateNewMessageTextCreator(text)) 
     }
 }
 
 const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)  //зашит внутрь consumer и discriber ,локальные перерисовки ,убир rerender
 

export default DialogsContainer