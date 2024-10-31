import express, { Router } from 'express';
import controller from '../controllers/users-controller';

const router: Router = express.Router();

router.get('/test', controller.testConnection);

export default router;
