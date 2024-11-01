import express, { Router } from 'express';
import controller from '../controllers/users-controller';

const router: Router = express.Router();

router.get('/', controller.GETUsers);
router.get('/:id', controller.GETUserID);
router.post('/', controller.POSTUser);

export default router;
