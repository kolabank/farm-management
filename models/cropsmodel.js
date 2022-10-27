const express = require('express');
const mongoose = require('mongoose');
const Farm = require('./farmmodel');
const Schema = mongoose.Schema;

const cropSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    specie: [{
        type: String,
        required: true
    }]
})

const FarmModel = mongoose.Model(cropSchema, 'FarmModel')

module.exports = FarmModel;