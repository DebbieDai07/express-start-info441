import express from 'express';
import menuDessertRouter from './menu_dessert.js'
var router = express.Router();

router.get('/', (req, res) => {
    res.send("Menu");
});

// router.get('/dessert', (req, res) => {
//     res.send("Dessert");
// });

router.use("/dessert", menuDessertRouter)


export default router;