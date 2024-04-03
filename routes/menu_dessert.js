import express from 'express';
var router = express.Router();

router.get('/', (req, res) => {
    res.send("This is dessert section");
});

router.get('/1', (req, res) => {
    res.send("Pudding");
});

router.get('/2', (req, res) => {
    
    throw(new Error("Loading dessert 2 failed!"));
    res.send("dessert 2");
});

router.get('/3', (req, res) => {
    try {
        throw(new Error("Loading dessert 3 failed!"));
        res.send("dessert 3");
    } catch {
        console.log("error");
        res.status(500).send("Error loading dessert");
    }
    
});


export default router;