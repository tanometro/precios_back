import express from 'express';
import BusinessController from './business.controller';

const router = express.Router();

router.post('/', BusinessController.createBusiness);
router.get('/:id', BusinessController.readOneBusiness)
router.get('/', BusinessController.readAllBusiness);
router.patch('/:id', BusinessController.updateBusiness);
router.delete('/:id', BusinessController.deleteOneBusiness);
router.delete('/', BusinessController.deleteMoreBusiness);

export default router;