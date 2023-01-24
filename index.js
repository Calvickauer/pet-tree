const express = require('express');
const app = express();
const router = express.Router();
const db = require('./models');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');


router.get('/', async (req, res) => {
    console.log('hey hey');
    let family = await db.pet.findAll();
    family = family.map(F => F.toJSON());
    console.log(family);
    res.render('home', {family: family});
  })

// app.get('/about', function(req, res) {
//     res.sendFile(__dirname + '/views/about.html');
//     console.log('About page');
// });

// app.get('/dogs', function(req, res) {
//     res.sendFile(__dirname + '/views/dogs.html');
// });

// app.get('/cats', function(req, res) {
//     res.sendFile(__dirname + '/views/cats.html');
// });

// app.get('/petfamily', function(req, res) {
//     res.sendFile(__dirname + '/views/animals.html');
// });

// app.get('*', function(req, res){
//     res.send('This Page does not exist buddy!');
// })

app.use(router);

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Youre listening to the buttery smooth sounds of Port ${PORT}`)
});