const userModel = require('../../model/user')

let userData = (req, res,next) => {
  
    let userDetails = req.body;
  
    userModel.create(userDetails, (err, saved) => {
        if (err)
        return res.status(400).json({
            success: false, message: 'Unable to create user',
        })
        else
        return res.status(200).json({
            success: true, message: 'user created successfully',
        })
      
    })
}
    
module.exports = userData
   