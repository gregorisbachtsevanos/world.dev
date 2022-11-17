import { Router } from 'express';

import asyncCatch from '../utils/asyncCatch.js';
import { registerLogic, register } from '../controllers/user_controller.js'
var router = Router();

//Get users
router.get('/register', (register))
router.post('/register', asyncCatch(registerLogic))
//Post user

//Get user by Id

//Put user

//Delete user

export default router;
