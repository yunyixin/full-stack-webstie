const express = require('express');
const router = express.Router();

import {User} from '../lib/controller'

router.post('/register', User.registerAction)

router.post('/login', User.loginAction)

router.get('/users', User.getUsersAction)

module.exports = router
