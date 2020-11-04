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


    switch (action.type) {
        case SEND_MESSAGE:
            let message = state.newMessageText
            state.newMessageText = ''
            state.messagesData.push(
                { message: message }
            )
            return state
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.text



            return state
        default:
            return state
    }
}

export let sendMessageCreator = () => ({ type: SEND_MESSAGE })
export let updateNewMessageTextCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, text: text })

export default dialogsReduser
