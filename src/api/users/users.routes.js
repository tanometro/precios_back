"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_controller_1 = __importDefault(require("./users.controller"));
const router = express_1.default.Router();
router.post('/', users_controller_1.default.createUser);
router.get('/:id', users_controller_1.default.readOneUser);
router.get('/', users_controller_1.default.readAllUsers);
router.patch('/:id', users_controller_1.default.updateUser);
router.delete('/:id', users_controller_1.default.deleteOneUser);
router.delete('/', users_controller_1.default.deleteMoreUsers);
exports.default = router;
