const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

app.use(express.static('website'))

port = 3000;
const data = [];

const server = app.listen(port,listening);

const facts = {
    fact: 'mohamed is amazing'
}

app.get('/',(req,res)=>{
    res.send('hello')
});

app.get('/dummy',callback)

app.get('/all',(req,res)=>{
    res.send(data)
});


app.post('/addMovie',(req,res)=>{
    console.log(req.body)
    data.push(req.body)
});


app.get('/facts',(req,res)=>{
    res.send(facts)
})

function listening(){
    console.log(`server running on port ${port}`);
};

function callback(req,res){

}