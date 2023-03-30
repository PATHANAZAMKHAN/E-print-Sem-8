const express = require('express');
const router = express.Router()
const api = require('../controllers/CommonController');
const schema = require('../schemas/UserSchema')


router.get('/get',(req,res)=>{
    api.getUserWithRoles(req,res,schema)
});

router.get('/getall',(req,res)=>{
    api.getUserWithAll(req,res,schema)
})

router.post('/add', (req,res)=>{
    api.add(req,res,schema)
});

router.get('/get/:id', (req,res)=>{
    api.getUserWithRolesById(req,res,schema)
});

router.delete('/del/:id', (req,res)=>{
    api.deleteById(req,res,schema)
});

router.put('/up/:id', (req,res)=>{
    api.updateById(req,res,schema)
});

router.post('/login', (req,res)=>{
    api.loginUser(req,res,schema)
});

module.exports = router;