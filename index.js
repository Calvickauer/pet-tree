const db = require('./models'); // granting access to postgres database

db.pet.create({
    name: "Tyson",
    nickname: "Chicken Nugget",
    breed: "Pug",
    personality: 'Sweet big pig'
}).then(creature =>{
    console.log(creature);
}).catch(error => {
    console.log("ERROR %%%%%%%%%%%%%%%%%%%% === ",error);
})