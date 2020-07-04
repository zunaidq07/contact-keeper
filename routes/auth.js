const express = require('express')
const router = express.Router()

//@route    Get api/auth
//@desc     Get user Logged in
//@access   private
router.get('/', (req, res) => {
    res.send('Get user Logged in')
})

//@route    POST api/auth
//@desc     Authenticate a user & Get token
//@access   Public
router.post('/', (req, res) => {
    res.send('Authenticate a user')
})

module.exports = router