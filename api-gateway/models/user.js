
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

// user.save is used to add a new user in our database
module.exports.add = (user, callback) => {
    user.save(callback);
};

// getById
module.exports.getById = (id, callback) => {
    var query = {_id: id};
    User.findById(query, callback);
};

/** Database queries
 */