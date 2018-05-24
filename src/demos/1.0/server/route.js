import express from 'express'
import DemoController from './controllers/demo'

const demoController = new DemoController();

const router = express.Router();

router.get('/', (req, res) => {
    res.redirect('/index');
});

router.get('/index', demoController.index.bind(demoController));

export default router;