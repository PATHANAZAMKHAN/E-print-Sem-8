const express = require('express');
const router = express.Router();
const api = require('../controllers/CommonController');
const schema = require('../schemas/VendorDetailSchema');

router.get('/get',(req,res)=>{
    api.get(req,res,schema)
});

router.get('/getall',(req,res)=>{
    api.getUserWithAll(req,res,schema)
})

router.get('/get/:id', (req,res)=>{
    api.getById(req,res,schema)
})

router.post('/add',(req,res)=>{
    api.add(req,res,schema)
});

router.delete('/del/:id', (req,res)=>{
    api.deleteById(req,res,schema)
});

router.put('/up/:id', (req,res)=>{
    api.updateById(req,res,schema)
});

module.exports = router