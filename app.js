const express = require('express');
const app = express();
const port = 3000
const routes = require('./routes/routes.js')
const middleware = require('./middlewares/global_middlewares')

app.use(express.urlencoded({extended: false}));
app.use(express.json());

middleware(app)
routes(app)


app.listen(port, () => {
    console.log(`El servidor se encuentra escuchando en el puerto ${port}`)
} )
