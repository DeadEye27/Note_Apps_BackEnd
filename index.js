const express = require("express");
const sequelize = require('./config/database');
const noteRoutes = require('./routes/noteRoutes');
const cors = require('cors');

const app = express();

app.use(cors({
    origin: ['http://localhost', 'http://localhost:5173', 'http://127.0.0.1:5500'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials:true,
}));

app.use(express.json());

app.get("/", (req, res) =>{
    res.send("Hello World!");
});

require('./schemas/Note');
app.use('/notes', noteRoutes);

const port = process.env.PORT || 3000;

sequelize.sync().then(() => {
    console.log('Database Synced');
    app.listen(port, () => console.log(`Server running on port ${port}`));
});
