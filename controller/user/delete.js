const userModel = require('../../model/user')

module.exports = function (req, res) {
   const uid = req.params.userId
   userModel.deleteOne({ "_id": uid }, function(err, deleted) { 
        if (err) return res.status(200).json({ success: false, message: 'error occured in delete info', err });

        else if (deleted.n > 0 && deleted.deletedCount > 0) {
            return res.status(200).json({ success: true, message: 'user info deleted scuccessfully', });
        } 
        return res.status(201).json({
            success: false, message: 'user info deleted already',
    });
    
    })
}