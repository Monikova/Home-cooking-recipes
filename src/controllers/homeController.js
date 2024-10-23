import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.render('home', {title: 'Home Cooking Recipes'});
}); 

export default router;