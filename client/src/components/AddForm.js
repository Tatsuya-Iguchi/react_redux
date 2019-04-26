import React from 'react'
import axios from 'axios'
import {changeOverview,changeMemo,initializeForm} from '../actions'

const AddForm =({store})=> {
    const{overview , memo} = store.getState().form//store form get
    
    //submit時にサーバーへ送る
    const handleSubmit = e =>{
        e.preventDefault()
        axios.post('/api/todos',{//2番目の引数を送る
            overview,
            memo,
        })
        //success
        .then(response => {
            console.log(response)//debug
            store.dispatch(initializeForm())
        })
        //failer
        .catch(err => {
            console.error(new Error(err))
        })
    }
    
    return(
        <div>
            <form onSubmit={e => handleSubmit(e)}>
                <label>
                    がいよう:
                    <input value={overview} onChange={e => store.dispatch(changeOverview(e.target.value)) } />                    
                </label>
                <label>
                    めも： 
                    <input value={memo} onChange={e => store.dispatch(changeMemo(e.target.value)) } />
                </label>
                <button type="submit">けてーい</button>
            </form>
        </div>
    )
}
export default AddForm