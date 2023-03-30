//CRUD API 

function get(req,res, schema){
    schema.find((err,data)=>{
        if (err) {
            res.status(404).json({
                message:`Error While Fetching Data From Database`,
                error:err
            });
        }
        else{
            res.status(200).json({
                data:data,
                message:"Data Found!"
            });
        }
    });
}

function add(req,res,schema){
    const user = new schema(req.body);
    user.save((err,data)=>{
        if (err) {
           res.status(500).json({
                message:"Data Insertion Failed!",
                error:err
           }) 
        } 
        else {
            res.status(201).json({
                data: data,
                message : "Data Inserted Successfully!"
            })
        }
    })
}

function getById(req,res,schema){
    const id = req.params.id

    schema.findById(id,(err,success)=>{
        if (err) {
            res.status(404).json({
                message:"Error Fetching Data By Id!"
            })
        } 
        else {
            if(success != null || success != undefined){
                res.status(200).json({
                    message:"Data found successfully!",
                    data : success
                })
            }
            else{
                res.status(500).json({
                    message:"Data Not Found!"
                })
            }
        }
    })
}

function deleteById(req,res,schema){
    const id = req.params.id

    schema.findByIdAndDelete(id,(err,success)=>{
        if (err) {
            res.status(500).json({
                message:"Error While Deleting From Database!"
            })
        } 
        else {
            if (success!=null || success != undefined) {
                res.status(200).json({
                    message:"Data Deleted Successfully!",
                    data : success
                })
            } 
            else {
                res.status(404).json({
                    message:"Data not found!"
                })
            }
            
        }
    })
}

function updateById(req,res, schema){
    const id = req.params.id

    schema.findByIdAndUpdate(id,req.body,(err,success)=>{
        if (err) {
            res.status(500).json({
                message: "Error Updating the Data!"
            })
        } 
        else {
            if (success != null || success != undefined) {
                res.status(200).json({
                    message:"Data updated successfully"
                })
            } else {
                res.status(404).json({
                    message:"Data not found!"
                })
            }
        }
    })
}

// CRUD ENDS

//AUTHENTICATION APIS

function loginUser(req,res,schema){
    const email = req.body.email;
    const password = req.body.password;

    if (email != null && email!= undefined && email.length!=0 && password!=null && password!=undefined && password.length!=0) {
        schema.findOne({email:email, password:password}).populate('role').exec((err,success)=>{
            if (err) {
                res.status(500).json({
                    message:"User not found!"
                })
            } 
            else {
                if (success!=null && success !=undefined && success.length!=0) {
                    res.status(200).json({
                        message:"User found successfully",
                        data:success
                    })
                } else {
                    res.status(500).json({
                        message:"User email or password is incorrect!"
                    })
                }
                
            }
        })
    } else {
        res.status(404).json({
            message:"Please enter both email and password!"
        })
    }
}

//AUTHENTICATION ENDS

//CUSTOM APIS

function getUserWithRoles(req, res, schema){
    
    schema.find().populate("role").exec((err,success)=>{ //The name of the field you giving here must be equal to the field name you defined in the userSchema
        if (err) {
            res.status(500).json({
                message:"Error in fetching users",
                error:err
            })
        } 
        else {
            if(success!=null && success!=undefined && success.length!=0){
                res.status(200).json({
                    message:"Users with roles fetched successfully",
                    users:success
                })
            }
            else{
                res.status(404).json({
                    message:"Users with roles not found",
                })
            }
        }
    })
}

function getUserWithRolesById(req,res,schema){
    const id = req.params.id

    schema.findById(id).populate("role").exec((err,success)=>{ //The name of the field you giving here must be equal to the field name you defined in the userSchema
        if (err) {
            res.status(500).json({
                message:"Error in fetching users",
                error:err
            })
        } 
        else {
            if(success!=null && success!=undefined && success.length!=0){
                res.status(200).json({
                    message:"Users with roles fetched successfully",
                    users:success
                })
            }
            else{
                res.status(404).json({
                    message:"Users with roles not found",
                })
            }
        }
    })

}

function getUserWithAll(req,res,schema){
    schema.find().populate("role").populate("country").populate("state").exec((err,success)=>{
        if (err) {
            res.status(500).json({
                message:"Error in fetching users",
                error:err
            })
        } 
        else {
            if(success!=null && success!=undefined && success.length!=0){
                res.status(200).json({
                    message:"Users fetched successfully",
                    users:success
                })
            }
            else{
                res.status(404).json({
                    message:"Users not found",
                })
            }
        }
    })
}

function getRecordByName(req,res,schema){
    const name = req.params.name

    schema.findOne({name:name},(err,success)=>{ //The name of the field you giving here must be equal to the field name you defined in the userSchema
        if (err) {
            res.status(500).json({
                message:"Error in fetching",
                error:err
            })
        } 
        else {
            if(success!=null && success!=undefined && success.length!=0){
                res.status(200).json({
                    message:"Items fetched successfully",
                    data:success
                })
            }
            else{
                res.status(404).json({
                    message:"Items not found",
                })
            }
        }
    })
}

//CUSTOM APIS ENDS

module.exports={get,add,getById,updateById,deleteById, loginUser, getUserWithRoles ,getUserWithAll, getUserWithRolesById, getRecordByName}