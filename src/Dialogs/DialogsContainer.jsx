import Dialogs from './Dialogs'
import { updateNewMessageTextCreator, sendMessageCreator } from '../Redux/dialogs-reduser'
import { connect } from 'react-redux';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';



const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSendMessageClick: () => dispatch(sendMessageCreator()),
        onNewMessageChange: (text) => dispatch(updateNewMessageTextCreator(text))
    }
}






export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs)