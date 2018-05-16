
/*
============================================
; Title:  API Gateway Part II
; Author: Professor Krasso 
; Date:   16 May 2018
; Modified By: Heather Peterson
; Description: Assignment 2.3
;===========================================
*/ 

/** Fields username, password, and email
 */
var mongoose = require ('mongoose');
var userSchema = new mongoose.Schema ({
    username: String,
    password: String,
    email: String
});

module.exports = mongoose.model ('User', userSchema);

/** Database queries
 */