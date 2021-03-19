import express from 'express'
import bodyParser from 'body-parser'
import usersRout from './routes/users.js'
const app = express()

const PORT = process.env.PORT || 5000

app.use(bodyParser.json())
app.use('/users', usersRout)

app.get('/', (req,res)=>{
    res.send('hello test')
})

app.listen(PORT, console.log( `server was starter at port ${PORT}`))
