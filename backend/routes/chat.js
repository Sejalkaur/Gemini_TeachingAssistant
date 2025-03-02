//routes define what should happen when a req is made
const express = require("express");

const router = express.Router();
//import controller function
const { askGemini } = require("../controllers/chatController");

router.get('/test', (req, res) => {
    res.json({ message: "Chat API with gemini is working!" });
    
});

//post route to handle chat req
router.post('/chat', askGemini);


//with this we can use router in other files as well
module.exports = router;