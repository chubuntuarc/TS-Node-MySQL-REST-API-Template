import { Router } from 'express';
const router = Router();

import { index } from '../controllers/index.controller'

// Main route
router.route('/').get(index);

export default router;