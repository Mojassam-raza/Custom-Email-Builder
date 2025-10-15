import { Router } from 'express';
const router =  Router();
import Model, { find, findByIdAndDelete, findById, findByIdAndUpdate } from '../models/productModel';
import { model } from 'mongoose';


router.post('/add', (req, res) => {
    console.log(req.body);
   new Model(req.body).save()
      .then((result) => {
       res.status(200).json(result);
      }).catch((err) =>{
       console.log(err);
        res.status(500).json(err);
      });
});


router.get('/getall', (req, res) => {
   find()
        .then((result) => {
       res.status(200).json(result);
      }).catch((err) =>{
       console.log(err);
        res.status(500).json(err);
      });
});
router.delete('/delete/:id', (req, res) => {
    findByIdAndDelete(req.params.id)
        .then((result) => {
            res.status(200).json(result);
           }).catch((err) =>{
            console.log(err);
             res.status(500).json(err);
           });
});

router.get('/getbyid/:id', (req, res) => {
    findById(req.params.id)
     .then((result) => {
    res.status(200).json(result);
   }).catch((err) =>{
    console.log(err);
     res.status(500).json(err);
   });
     
});


router.put('/update/:id', (req, res) => {
    findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((result) => {
        res.status(200).json(result);
       }).catch((err) =>{ 
        console.log(err);
        res.status(500).json(err);
       });
});

export default router;