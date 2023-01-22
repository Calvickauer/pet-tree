const express = require('express');
const app = express();
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'html');


app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/about', function(req, res) {
    res.sendFile(__dirname + '/views/about.html');
});

app.get('/dogs', function(req, res) {
    res.sendFile(__dirname + '/views/dogs.html');
});

app.get('/cats', function(req, res) {
    res.sendFile(__dirname + '/views/cats.html');
});

app.get('/petfamily', function(req, res) {
    res.sendFile(__dirname + '/views/animals.html');
});

app.get('*', function(req, res){
    res.send('This Page does not exist buddy!');
})


const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Youre listening to the buttery smooth sounds of Port ${PORT}`)
});