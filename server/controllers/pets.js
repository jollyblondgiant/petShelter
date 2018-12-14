var     Pet = require('../models/pet'),
        mongoose = require('mongoose'),
        Pet = mongoose.model('Pet')
module.exports = {
    getAll: (req,res)=>{
        Pet.find({}, (err, pets)=>{
            res.json(pets)
        }).sort({type :1 })
    },
    getOne:(req,res)=>{
        var id = req.params.id
        Pet.findById(id, (err,pet)=>{
            if(err){res.json(err)}
            else{res.json(pet)}
        })
    },
    create:(req,res)=>{
        console.log("CONTROLLER")
        var pet = new Pet
        pet.name = req.body.name
        pet.type = req.body.type
        pet.description = req.body.description
        pet.skill1 = req.body.skill1
        pet.skill2 = req.body.skill2
        pet.skill3 = req.body.skill3
        
        pet.save(function(err){
            if(err){
                res.json(err)
            }else{
                res.json(pet)
            }
        })
    },
    update:(req,res)=>{
        console.log(req.body.name, req.body.type)
        Pet.findByIdAndUpdate(req.params.id,  {
            $set:{
                    name : req.body.name,
                    type : req.body.type,
                    description : req.body.description,
                    skill1 : req.body.skill1,
                    skill2 : req.body.skill2,
                    skill3 : req.body.skill3,
                    likes : req.body.likes
            },
        },
        { runValidators: true },
        (err, pet)=>{
            
            if(err){
                
                res.json(err)
            }else{res.json(pet)}
        })
    },
    destroy:(req,res)=>{
        Pet.findByIdAndRemove(req.params.id, ()=> res.redirect('/'))
    }
}