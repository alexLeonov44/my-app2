const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postData: [
        { id: 1, message: 'hi first post', age: 23 },
        { id: 2, message: 'hi second post', age: 23 },
        { id: 3, message: 'its third post', age: 23 },
    ],
    newPostText: ''

}

const profileReduser = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_POST_TEXT:
            return{
            ...state,
            newPostText: action.newText  //перезатираем данные сразу во время инициализвции копии!!!!!
            }
        case ADD_POST:
                let newPost = {
                    id: 4,
                    message: state.newPostText,
                    age: 2
                }
                let stateCopy = {...state,postData:[...state.postData]}   //быстрый способ скопировать обьект и вложенности
                stateCopy.postData.push(newPost)
                stateCopy.newPostText = ''
                return stateCopy                 //вернет копию state 
        default:
            return state
    }

}

export let addPostActionCreator = () => ({ type: ADD_POST })
export let onPostChangeActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReduser
