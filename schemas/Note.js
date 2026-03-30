import {DataTypes} from 'sequelize';
import {sequelize} from '../config/database.js';

export const Note = sequelize.define('note', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    userNote: {
        type: DataTypes.TEXT,
        allowNull: false,
    }
});

// module.exports = Note;