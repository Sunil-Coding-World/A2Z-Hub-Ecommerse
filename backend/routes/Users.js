const express = require('express');
const { fetchUserById, updateUser } = require('../controller/Users');

const router = express.Router();
//  /users is already added in base path
router.get('/:id', fetchUserById)
      .patch('/:id', updateUser)

exports.router = router;