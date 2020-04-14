const userModel = require('../../model/user')
module.exports = function (req, res) {
    const uid = req.params.userId
    userModel.find({"_id":uid}, (err, data) => {
        if (err) return err;
         res.render('edit',{ resdata:data });
    })

}