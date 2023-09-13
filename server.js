// Importing required modules
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const zoneRoutes = require('./Routes/zoneRoutes')
const sequelize = require('./sequelize.js')
const Zone = require('./Models/zone.js');
const User = require('./Models/user.js');
const Files = require('./Models/file.js')

// Creating an Express application
const app = express();

// Sync the database and create the tables if they don't exist
sequelize.sync({ force: false }).then(() => {
    console.log('Database synced successfully');
}).catch((error) => {
    console.error('Error syncing database:', error);
});

// Middleware setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

// Create a super user when the app starts
app.use((req, res, next) => {
    console.log('Checking if super user exists');
    User.findOrCreate({
        where: { userId: 1 }, // Assuming super user ID is 1
        defaults: { userId: 1 }, // Set the super user ID
    })
        .then(([user, created]) => {
            req.user = user; // Set the user in the request object
            next();
        })
        .catch((error) => {
            console.error('Error creating super user:', error);
            next();
        });
});

// Routes setup
app.use('/zone', zoneRoutes);
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Starting the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});