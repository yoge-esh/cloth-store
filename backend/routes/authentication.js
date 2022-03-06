const router = require('express').Router();
const User = require("../models/Users");
const cryptoJS = require("crypto-js");

// REGISTER 
router.post('/register', async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        // password encrypted with cryptoJS
        password: cryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString()
    })

    try {
        const saveUser = await newUser.save();
        res.status(200).json(saveUser)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

});





// LOGIN
router.post("/login", async (req, res) => {
    try {
        // find user by username
        const user = await User.findOne({ username: req.body.username });
        // if user not found
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }
        // decrypt password
        const decryptedPassword = cryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY).toString(cryptoJS.enc.Utf8);
        // compare password with decrypted password
        if (decryptedPassword !== req.body.password) {
            return res.status(400).json({ message: "Incorrect username or password" });
        }

        // except password we will see all other data of user with below line
        const {password, ...others} = user._doc;
        // login successful
        res.status(200).json(others);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;


