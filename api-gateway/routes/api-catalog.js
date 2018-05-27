/*
============================================
; Title:  API Gateway Part II
; Author: Professor Krasso 
; Date:   16 May 2018
; Modified By: Heather Peterson
; Description: Assignment 2.3
;===========================================
*/ 
var User = require('../models/user');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../config');
var express = require('express');
var router = express.Router();
var auth_controller = require('../controllers/authController');

router.post('/auth/register', auth_controller.user_register);
router.get('/auth/token', auth_controller.user_token);
module.exports = router;