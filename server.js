//express
import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import Todo from './todos';

const app = express()
const port = 43000
const dbUrl = 'mongodb://localhost/crud'
//body-parser
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

//mongoose
//connect to DB
mongoose.connect(dbUrl,dbErr => {
    if(dbErr)throw new Error(dbErr)

    else console.log('db connected')
    // post request
    app.post('/api/todos',(request,response) => {
        // console.log('receive post request')//debug
        // console.log(request.body)//debug
        // response.status(200).send()//debug
        const {overview,memo} = request.body
        new Todo({
            overview,
            memo,
        }).save(err => {
            if(err) response.status(500)
            else response.status(200).send(`${overview}-${memo} _success`)
        })
    })

    //server
    app.listen(port, err=>{
        if(err)throw new Error(err)
        else console.log(`listening on port ${port}`)
    })
})