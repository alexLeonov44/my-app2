const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let initialState = {
    dialogsData: [
        { id: 1, name: 'Alex' },
        { id: 2, name: 'Petra' },
        { id: 3, name: 'Vano' },
    ],
    messagesData: [
        { message: 'hey from props alex' },
        { message: 'real fanny petra' },
        { message: 'fuck you vano' },
    ],
    newMessageText: ''

}

const dialogsReduser = (state = initialState, action) => {

    let stateCopy   //способ через глоб переменую
    switch (action.type) {
        case SEND_MESSAGE: 
            stateCopy = { ...state }
            let message = stateCopy.newMessageText
            stateCopy.newMessageText = ''
            stateCopy.messagesData = [ ...state.messagesData ,{message:message}]  // вместо push новый синтаксис
            // stateCopy.messagesData.push({ message: message })

            return stateCopy
        case UPDATE_NEW_MESSAGE_TEXT:
            stateCopy = { ...state }
            stateCopy.newMessageText = action.text

            return stateCopy
        default:
            return state
    }
}

export let sendMessageCreator = () => ({ type: SEND_MESSAGE })
export let updateNewMessageTextCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, text: text })

export default dialogsReduser
