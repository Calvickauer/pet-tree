const db = require('./models'); // granting access to postgres database


//  C.R.U.D.

// CREATE

db.pet.create({
    name: "Dirk",
    nickname: "Dirk Diggler",
    breed: "Pit Chow Sheppard Mix",
    personality: 'Crazy beast of the weast'
}).then(creature =>{
    console.log("Inserted creature print: ", creature.toJSON());
}).catch(error => {
    console.log("ERROR %%%%%%%%%%%%%%%%%%%% === ",error, " === %%%%%%%%%%%%%%%%%%%%%%%%%");
})

// READ 

// db.pet.findOne({
//     where: {name: 'Dirk'}
// }).then( found =>{
//     console.log('Found pet: ', found.toJSON())
// }).catch( err => {
//     console.log('0-0-0-0-0-0-0 ', err, ' 090909090909090909')
// });


// db.pet.findOrCreate({
    //     where: {name: 'Olive', nickname: 'Sackio / The Lunchlady'},
    //     defaults: {breed: 'pug', personality: 'The sweetest and most loyal lardsack in all the lands'}
    // }).then(([file, Results]) => {
        //     console.log(file.toJSON())
        //     console.log("new file logged?",Results)
        // }).catch( err => {
            //     console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!: ',err, ' !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
            // });
            
// UPDATE
// db.pet.update({
//     personality: 'Crazy dog man thing and excitable'
// },{
//     where: {
//         name: 'Dirk'
//     }
// }).then(rowsChanged =>{
//     console.log(rowsChanged)
// }).catch(err => {
//     console.log(err)
// });
            
// DELETE

// db.pet.destroy({
//     where: {
//         name: "Dirk"
//     }
// }).then( deleted => {
//     console.log('Deleted: ', deleted)
// }).catch( err => {
//     console.log('errrerrrerrrerr ',err, ' -----------++++++======+++++++-----------')
// });