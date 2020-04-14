const userModel = require('../../model/user')
const utility = require('../../model/utility')

let checkEmail = (req, res, next) => {
    if (utility.isEmail(req.body.email)) {
        next();
    }
    else {
        return res.status(201).json({ success: false, message: 'please input valid email address', email: req.body.email });
    }
};

let userData = (req, res) => {
    const uid = req.params.userId;
    let userDetails = req.body;
    userModel.findByIdAndUpdate(uid,  userDetails, {new: true}, (err, saved) => {
        if (err)
        return res.status(400).json({
            success: false, message: 'Unable to update record',
        })
        else
        return res.status(200).json({
            success: true, message: 'user info updated successfully',
        })
    })
}
    
module.exports = [checkEmail, userData]