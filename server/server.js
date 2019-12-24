const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const app = express();

//middleware 
app.use(bodyParser.json());


app.get('/api/data', (req,res) => {
    fetch('https://devapi.fitswarm.com/api/classes/filterByEnterprise/5d838b96f3d6e155bd95692b?visibility=PUBLIC')
    .then(res => res.json())
    .then((json) => {
        res.send(json)
    });   
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
    const timing = new Date();
    console.log(`App is listing on ${port} at: ${timing}`);
})