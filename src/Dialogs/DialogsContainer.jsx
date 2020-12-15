import Dialogs from './Dialogs'
import { updateNewMessageTextCreator, sendMessageCreator } from '../Redux/dialogs-reduser'  
import { connect } from 'react-redux';
import { withAuthRedirect } from '../hoc/withAuthRedirect';



 const mapStateToProps =(state)=>{
    return{
        dialogsPage: state.dialogsPage,
    }
 }
 
 const mapDispatchToProps =(dispatch)=>{
     return{
        onSendMessageClick: () =>  dispatch(sendMessageCreator()),
        onNewMessageChange: (text) =>  dispatch(updateNewMessageTextCreator(text)) 
     }
 }
 let redirectComponent = withAuthRedirect(Dialogs)
 const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(redirectComponent)  
 //зашит внутрь consumer и discriber ,локальные перерисовки ,убир rerender
 

export default DialogsContainer