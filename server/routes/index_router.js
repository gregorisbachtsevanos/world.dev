import { Router } from 'express';
var router = Router();

// GET index page
router.get('/', (req, res) => {
    res.json({ page: 'index' })
})

// GET login page
router.route('/login')
    .get((req, res) => {
        res.json({ page: 'login' })
    })

// GET signup page

// GET profile page

// GET settings page

// GET home page

// GET about page

export default router;
