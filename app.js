const express = require('express');
const app = express();
const port = 3000;

const {index} = require('./controllers/homeAppController')
const blog = require("./controllers/posts");

app.use(express.json());

app.use(express.static('public'))

app.get('/', index);
app.get('/blog', blog.get);
app.post('/blog', blog.post);




app.listen(port, () =>{
    console.log(`server running at http://localhost:${port}`);
})