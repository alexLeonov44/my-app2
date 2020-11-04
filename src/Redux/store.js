import profileReduser from "./profile-reduser";
import dialogsReduser from "./dialogs-reduser";


let store = {


    _state: {
        profilePage: {
            postData: [
                { id: 1, message: 'hi first post', age: 23 },
                { id: 2, message: 'hi srcond post', age: 23 },
                { id: 3, message: 'its third post', age: 23 },
            ],
            newPostText: ''
        },
        dialogsPage: {
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
    },
    _callsubscriber() {
        console.log('rerender pussy')
    },

    getState() {
        return this._state
    },
    subscriber(observer) {
        this._callsubscriber = observer
    },


    dispatch(action) {

        this._state.profilePage = profileReduser(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReduser(this._state.dialogsPage, action)

        this._callsubscriber(this._state)

    }

}


export default store
