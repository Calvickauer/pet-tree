const db = require('./models'); // granting access to postgres database

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

db.pet.findOne({
    where: {name: 'Lily'}
}).then( found =>{
    console.log('Found pet: ', found.toJSON())
}).catch( err => {
    console.log('0-0-0-0-0-0-0 ', err, ' 090909090909090909')
});