import { combineReducers } from 'redux'
import { CHANGE_OVERVIEW, CHANGE_MEMO, INITIALIZE_FORM} from './actions'

// storeの初期状態を書く
// TODO: controlled uncontrolled　storeに持たせるか　stateに持たせるか　実装してみる　リアルタイム　
const initialState = {
    form:{// Fromに入れる文字
        overview:'',
        memo:'',
    },
    todos:{// Todo情報
        isFetching: false, //server connecting...　アプリの通信状態を知るため
        todoArray:[], // todo Array
    },
}
// action列挙する
// READ form 初期化
// READ form overview 変更
// READ form memo 変更
const formReducer = (state = initialState.form, action) =>{
    switch(action.type) {
        case CHANGE_OVERVIEW://overview change
            return{
                ...state,
                overview:action.overview,
            }
        case CHANGE_MEMO://memo change
            return{
                ...state,
                memo:action.memo,
            }
        case INITIALIZE_FORM://form initialize
            return initialState.form
        default:
            return state
    }
}
//TODO: combineReducersについてもう少し理解を深めて処理を書く。
const todosReducer = (state = initialState.todos,action) => {
    switch(action.type){
        default:
            return state
    }
}
const rootReducer = combineReducers ({
    form: formReducer,
    todos: todosReducer,
})
export default rootReducer