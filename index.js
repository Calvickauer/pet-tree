const db = require('./models'); // granting access to postgres database


//  C.R.U.D.

// CREATE

// db.pet.create({
//     name: "Lily",
//     nickname: "Lily Pop",
//     breed: "Pug",
//     personality: 'Guard Pig'
// }).then(creature =>{
//     console.log("Inserted creature print: ", creature.toJSON());
// }).catch(error => {
//     console.log("ERROR %%%%%%%%%%%%%%%%%%%% === ",error, " === %%%%%%%%%%%%%%%%%%%%%%%%%");
// })

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
db.pet.update({
    personality: 'Crazy pig and excitable'
},{
    where: {
        name: 'Dirk'
    }
}).then(rowsChanged =>{
    console.log(rowsChanged.toJSON())
}).catch(err => {
    console.log(err)
});
            
// DELETE