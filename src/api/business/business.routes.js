"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const business_controller_1 = __importDefault(require("./business.controller"));
const router = express_1.default.Router();
router.post('/', business_controller_1.default.createBusiness);
router.get('/:id', business_controller_1.default.readOneBusiness);
router.get('/', business_controller_1.default.readAllBusiness);
router.patch('/:id', business_controller_1.default.updateBusiness);
router.delete('/:id', business_controller_1.default.deleteOneBusiness);
router.delete('/', business_controller_1.default.deleteMoreBusiness);
exports.default = router;
