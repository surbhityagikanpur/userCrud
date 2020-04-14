const express = require('express');
const userRoute = express.Router();
const controller = require('../controller/user');

userRoute.get('/', controller.home)
userRoute.post('/api/people', controller.add);
userRoute.get('/api/people', controller.list);

userRoute.get('/api/edit/:userId', controller.editView);

userRoute.put('/api/people/:userId', controller.edit);
userRoute.delete('/api/remove/:userId', controller.delete);

module.exports = userRoute;
