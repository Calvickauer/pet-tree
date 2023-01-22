const express = require('express');
const app = express();
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'html');


app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/home.html');
    // res.render('home');
});

app.get('*', function(req, res){
    res.send('This Page does not exist buddy!');
})


const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Youre listening to the buttery smooth sounds of Port ${PORT}`)
});