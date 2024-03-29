//modules en modellen
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
//package voor wachtwoord protection en hashing password
const bcrypt = require('bcrypt');

const User = require('../models/user');
// Eindpunt voor het verwerken van POST-verzoeken naar /signup
router.post('/signup',(req,res,next)=>
{
    User.find({email: req.body.email}).exec()
    .then()
    .catch(user=>
        {
            if(user.length>=1)
            {
                return res.status(409).jdon({
                       message : 'Email already exists'
                });
            } 
            else {
             
                bcrypt.hash(req.body.password, 10,(err,hash) =>
                {
            if(err)
            {
                return res.status(500).json({
                    error:err
                });
            } else
            {
                const user  = new User({
            
                    _id: new mongoose.Types.ObjectId(),
                    email: req.body.email ,
                    password: hash //password cannot be looked up in dictionary tables
                
                   });
                   user.save()
                   .then(result=>
                    {
                        console.log('result');
                        res.status(201).json({
                            message:'User Created successfully'
                        });
                    })
                   .catch(err=>
                    {
                        console.log(err)
                        res.status(500).json({
                            error:err
                        });
                        
                    });
            }
                }) 

            }
        });
    
    });

    // Eindpunt voor het verwerken van POST-verzoeken naar /login
router.post('/login', (req, res, next) => {
User.find({ email:req.body.email}).exec().
then(user=>
    {
if(user.length<1){
    return res.status(401).json
    ({
          message: 'Auth failed'
        });

    }
bcrypt.compare(req.body.password,user[0].password, (err,result)=>
{
if(err)
{
    return res.status(401).json
    ({
          message: 'Auth failed'
        }); 
}
if(result)
{
return res.status(200).json({
    message: 'Auth successful'
});
}
});

    })
.catch(err=>{
    console.log(err)
res.status(500).json({
    error:err
});
});

});


// Eindpunt voor het verwerken van DELETE-verzoeken naar een specifieke user
router.delete('/:userId',(req,res,next)=>
{
User.remove({_id: req.body.userId}).exec()
.then(result=>
    {
      res.status(200).json({
        message:'User deleted successfully'
      }) ; 
    })
    .catch(err=>{
        console.log(err)
    res.status(500).json({
        error:err
    });
    });
});
//router voor gebruik in andere bestanden
module.exports = router;