const SEND_MESSAGE = 'SEND-MESSAGE'

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

}

const dialogsReduser = (state = initialState, action) => {

    let stateCopy   //способ через глоб переменую
    switch (action.type) {
        case SEND_MESSAGE: 
            stateCopy = { ...state }
            let message = action.dialogData.message
            action.dialogData.message = ''
            stateCopy.messagesData = [ ...state.messagesData ,{message:message}]  // вместо push новый синтаксис
            // stateCopy.messagesData.push({ message: message })

            return stateCopy
        default:
            return state
    }
}

export let sendMessageCreator = (dialogData) => ({ type: SEND_MESSAGE,dialogData })

export default dialogsReduser
