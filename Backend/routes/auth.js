const express = require('express');
const router = express.Router();
const User = require('../models/User');


// CREATE A USER USING POST:  'api/auth/'

router.post('/', (req, res) => {
    console.log(req.body);
    const user = User(req.body)
    user.save();

})

module.exports = router;