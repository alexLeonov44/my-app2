const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
    dialogsData: [
        { id: 1, name: 'Alex' },
        { id: 2, name: 'Petra' },
        { id: 3, name: 'Vano' },
    ],
    messagesData: [
        { id: 1, message: 'hey from props alex' },
        { id: 2, message: 'real fanny petra' },
        { id: 3, message: 'fuck you vano' },
        { id: 3, message: 'hello johny kaddilack' },
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
