// requirements 
const express = require('express');
const app = express();
const mongo = require('mongoose');


// import routes
const userRoutes = require('./routes/user');
const authRoutes = require('./routes/authentication');

// connect to env file 
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 3000;


// connect to mongoDB
mongo.connect(process.env.SERVER_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.log('Error: ' + err);
});



// routes 
app.use(express.json());
app.use('/api/auth', authRoutes); // use: /api/auth/register
app.use('/api/users', userRoutes); 


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});