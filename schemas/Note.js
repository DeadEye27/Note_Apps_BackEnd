const { Datatypes } = require('sequelize');
const sequelize = require('../config/database');

const Note = sequelize.define('Note', {
    title: {
        type: Datatypes.STRING,
        allowNull: false,
    },
    userNote: {
        type: Datatypes.TEXT,
        allowNull: false,
    }
});

module.exports = Note;