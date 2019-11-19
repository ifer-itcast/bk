const express = require('express');

const admin = express.Router();

admin.get('/login', (req, res) => {
    res.render('admin/login');
});

module.exports = admin;