const mongoose = require('mongoose')


var PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please name your pet"],
        minlength: [3, "Please give your pet a real name"]
    },
    type: {
        type: String,
        required: [true, "What kind of pet is your pet?"],
        minlength: [3, "What type of pet is your pet, really?"]
    },
    description : {
        type: String,
        required: [true, "Tell us about your pet"],
        minlength: [3, "Tell us more about your pet, you cro-magnon"]
    },
    likes: {
        type: Number,
        default: 0
    },
    skill1:{
        type: String
    },
    skill2:{
        type: String
    },
    skill3:{
        type: String
    },
})

mongoose.model('Pet', PetSchema)