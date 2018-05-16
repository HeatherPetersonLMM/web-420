
/*
============================================
; Title:  API Gateway Part II
; Author: Professor Krasso 
; Date:   16 May 2018
; Modified By: Heather Peterson
; Description: Assignment 2.3
;===========================================
*/ 


var config = {};
config.web = {};
config.web.port = process.env.PORT || 3000;
module.exports = config;

config.web.secret = 'topsecret'