import Dialogs from './Dialogs'
import { sendMessageCreator } from '../Redux/dialogs-reduser'
import { connect } from 'react-redux';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';



const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSendMessageClick: (dialogData) => dispatch(sendMessageCreator(dialogData)),
    }
}






export default compose(
    connect(mapStateToProps, mapDispatchToProps),withAuthRedirect )(Dialogs)
