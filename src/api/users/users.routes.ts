import express from 'express';
import UserController from './users.controller';

const router = express.Router();

router.post('/', UserController.createUser);
router.get('/:id', UserController.readOneUser)
router.get('/', UserController.readAllUsers);
router.patch('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteOneUser);
router.delete('/', UserController.deleteMoreUsers);

export default router;