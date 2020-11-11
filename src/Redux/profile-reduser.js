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
        case ADD_POST:
            let newPost = {
                id: 4,
                message: state.newPostText,
                age: 2
            }
            let stateCopy = {...state}
            stateCopy.newPostText = ''
            stateCopy.postData.push(newPost)
            return stateCopy                 //вернет копию state 
        case UPDATE_NEW_POST_TEXT:
            let stateCopy2 = {...state}
            stateCopy2.newPostText={...state.newPostText}
            stateCopy2.newPostText = action.newText
            return stateCopy2
        default:
            return state
    }

}

export let addPostActionCreator = () => ({ type: ADD_POST })
export let onPostChangeActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReduser
