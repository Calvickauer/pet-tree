const express = require('express');
const app = express();
const router = express.Router();
const db = require('./models');
const layouts = require('express-ejs-layouts');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.use(layouts);

router.get('/', async (req, res) => {
    console.log('hey hey');
    let family = await db.pet.findAll();
    family = family.map(F => F.toJSON());
    console.log(family);
    res.render('home', {family: family});
  })

// router.delete('/pet/:id', (req, res) => {
//     const petId = req.params.id;
//     const sql = `DELETE FROM pet WHERE id = ${id}`;
//     connection.query(sql, (error, results) => {
//         if (error) throw error;
//     // delete user logic here
//     res.status(200).json({
//       message: `Pet with ID ${petId} successfully deleted.`
//     });
//   });

// router.get("/:petId", (req, res) => {
//     console.log('*************************** -------------------- hitting route --------------------- **************************')
//   });

  router.post("/:petId", (req, res) => {
    console.log('*************************** -------------------- hitting delete route --------------------- **************************')
    db.pet.destroy({
        where: {id: req.params.petId}
      }).then(deleted => {
        console.log('Destroyed')
        console.log(deleted);
        res.render('home');
      })
  });

//   router.get('/:id' , (req, res) => {
//     ('SELECT * FROM pet WHERE id = ?',[req.params.id], (err, rows, fields) => {
//     if (!err)
//     res.send(rows);
//     else
//     console.log(err);
//     })
//     } );

router.get('/about', function(req, res) {
    res.render('about');
    console.log('About page');
});

router.get('/dogs', function(req, res) {
    res.render('dogs');
});

router.get('/cats', function(req, res) {
    res.render('cats');
});

router.get('/petfamily', function(req, res) {
    res.render('animals');
});

router.get('*', function(req, res){
    res.send('This Page does not exist buddy!');
})

app.use(router);

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Youre listening to the buttery smooth sounds of Port ${PORT}`)
});