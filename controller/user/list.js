const userModel = require('../../model/user')

module.exports = function (req, res) {
    userModel.find({}).exec(function(err, data) {
        if (err) return err;
     
         res.render('list', {data}  );
    })

}

