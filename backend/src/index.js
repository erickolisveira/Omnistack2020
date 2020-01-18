const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes')

const app = express()

mongoose.connect('mongodb+srv://elderick:fullstack@fullstack-yajra.gcp.mongodb.net/omnistack?retryWrites=true&w=majority', {
   useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, 
})

app.use(cors())
app.use(express.json()) //Diz para o express entender JSON
app.use(routes)

//Query Params request.query (Filtros, ordenação, paginação, ...)
//Route Params resquest.params (Identificar um recurso na put ou delete)
//Body: request.body

app.listen(3333)