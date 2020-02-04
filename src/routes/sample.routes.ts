import { Router } from 'express';
const router = Router();

import { createData, getSampleData, getDataById, deleteDataById, updateDataById } from '../controllers/sample.controller'

router.route('/').get(getSampleData);
router.route('/').post(createData);
router.route('/:elementId').get(getDataById);
router.route('/:elementId').delete(deleteDataById);
router.route('/:elementId').put(updateDataById);

export default router;