const express = require('express');
const router = express.Router();
const api = require('../controllers/CommonController');
const schema = require('../schemas/VendorProductImagesSchema');

router.get('/get',(req,res)=>{
    api.getAllpro(req,res,schema)
});

router.get('/get/:id', (req,res)=>{
    api.getAllproById(req,res,schema)
})


router.post('/upload',(req,res)=>{
    api.imageUpload(req,res,schema)
});

router.delete('/del/:id', (req,res)=>{
    api.deleteById(req,res,schema)
});

router.put('/up/:id', (req,res)=>{
    api.updateById(req,res,schema)
});

module.exports = router