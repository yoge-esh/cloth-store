const router = require('express').Router();
const User = require("../models/Users");
const cryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

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
        !user && res.status(404).json({ message: "Wrong User Name" });

        const hashedPassword = cryptoJS.AES.decrypt(
            user.password,
            process.env.SECRET_KEY
        );

        const originalPassword = hashedPassword.toString(cryptoJS.enc.Utf8);

        const inputPassword = req.body.password;

        originalPassword != inputPassword && res.status(404).json({ message: "Wrong Password" });


        const accessToken = jwt.sign(
            {
                _id: user._id,
                isAdmin: user.isAdmin,
            },
            process.env.JWT_SECRET_KEY
            // { expireIn: "3d" } // not allwing to use this
        );

        // except password we will see all other data of user with below line
        const { password, ...others } = user._doc;
        // send token to client
        res.status(200).json({ ...others, accessToken });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


module.exports = router;