const mongoose = require('mongoose');

const url = "mongodb+srv://mojassamraza7:123ABCDefgh@mojassam.f11ttvz.mongodb.net/mydb1?retryWrites=true&w=majority&appName=Mojassam";

mongoose.connect(url)
.then((result) => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.log(error);
    
});

module.exports = mongoose;