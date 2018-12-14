const   mongoose = require('mongoose'),
        Pet = mongoose.model('Pet'),
        pets = require('../controllers/pets')
module.exports = function(app){
    app.get('/pets', (req,res)=>{
        pets.getAll(req,res)
    })
    app.get('/pets/:id', (req,res)=>{
        pets.getOne(req,res)
    })
    app.post('/pets', (req,res)=>{
        pets.create(req,res)
        console.log("ROUTES JS")
    })
    app.put('/pets/:id', (req, res)=>{
        console.log("ROUTES",req.body)
        pets.update(req,res)
        
    })
    app.delete('/pets/:id', (req,res)=>{
        pets.destroy(req,res)
    })
    
}