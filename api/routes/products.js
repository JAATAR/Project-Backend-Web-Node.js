//modules en modellen
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
//Package 'multer' voor het verwerken van bestandsuploads 
const multer = require('multer');
const upload = multer({dest: 'uploads/'});
const storage = multer.diskStorage({
    destination: function (req, file, cb) 
    {
cb(null, '../uploads');
    },
    filename: function (req, file, cb)
    {
cb(null, new Date().toISOString() + file.originalname);
    }
});

const Product = require('../models/product');
const { request } = require('../../app');

// Eindpunt voor het verwerken van GET-verzoeken naar /products
router.get('/', (req, res, next) => {
    Product.find()
    .select('name price _id productImage')
      .exec()
      .then(docs => {
      const response = {
        count : docs.length,
        products : docs.map(doc=>{
            return {
              name:doc.name,
              price: doc.price,
              productImage: doc.productImage,
              _id: doc._id,
              request :  {
                type: 'GET',
                url: 'http://localhost:3000/products/' +doc._id
              } 
            }
        })
      };
      //  if(docs.length>=0)
      //  {
            res.status(200).json(docs);
      //  }else
      //  {
       //  res.status(404).json({
       //     message: ' No entries found'
      //   });   
      //  }
        
      })
      .catch(err => {
        console.error(err);  // Log the error for debugging purposes
        res.status(500).json({
          error: err.message  // Send a meaningful error message in the response
        });
      });
  });
  
  // Eindpunt voor het verwerken van POST-verzoeken naar /products

router.post('/', upload.single('productImage'),(req,res,next) => {
    console.log(req.file);
   const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price,
    productImage: req.file.path
});

 


product.save().then(result=>{
    console.log(result);
    
    res.status(201).json({
    message:'Created product successfully',
    createdProduct:{
        name:result.name,
        price:result.price,
        _id:result._id,
        request:
        {
            type: 'GET',
            url: 'http://localhost:3000/products/' +result._id
        }

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
// Eindpunt voor het verwerken van GET-verzoeken naar een specifiek product
    router.get('/:productId', (req,res,next) => {
        const id = req.params.productId;
       Product.findById(id)
       .select('name price _id productImage')
       .exec()
       .then(doc=>{
console.log("From the Database", doc);
if(doc)
{
    res.status(200).json({
        product: doc,
        request:{
            type:'GET',
            description: 'Get all products'  ,
            url: 'http://localhost:3000/products'  
        }
    });
}else
{
    res.status(404).json({
        message: "no valid entry found for a provided ID "
    });
}

       })
       .catch(err=>console.log(err));
res.status(500).json({
    error:err
});
    
    });

// Eindpunt voor het verwerken van PATCH-verzoeken naar een specifiek product

    router.patch('/:productId', (req,res,next) => {
        const id = req.params.productId;
        const updateOps = {};
        for(const ops of req.body)
        {
updateOps[ops.propName] = ops.value;
        }
       Product.update({ _id: id}, { $set: updateOps})
       .exec()
       .then(res=>{
         res.status(200).json({
            message: "Product updated successfully",
            request: {
                type:'GET',
                url: 'http://localhost:3000/products/ '+ id
            }
         });
       })
       .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        });
       });
    });
// Eindpunt voor het verwerken van DELETE-verzoeken naar een specifiek product
    router.delete('/:productId', (req,res,next) => {
        const id = req.params.productId;
        Product.remove({
            _id: id
        }).exec()
        .then(result=>{
            res.status(200).json({
                message: "Product deleted successfully",
                request:{
                    type:'POST',
                    url: 'http://localhost:3000/products/',
                    body: {name:'String', price:'Number'}
                }
            });
        })
        .catch(err=>{
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
     });
//router voor gebruik in andere bestanden
    module.exports = router;