const express = require('express');
const router = express.Router();
const jwtAuthMiddleware = require('../middlewares/jwtAuthMiddleware');

const {
  createPackage,
  updatePackage,
  getAllPackages,
  getPackageById,
  deletePackage,
} = require('../controllers/packages.controller');
const {
  validateSignUpRequest,
  isRequestValidated,
  // validatePackageUpdate,
  handleValidationErrors,
} = require('../validations/packages.validation');

router.post(
  '/signup',
  validateSignUpRequest,
  isRequestValidated,
  // jwtAuthMiddleware,
  createPackage
);
router.put(
  '/:id',
  // validatePackageUpdate,
  // handleValidationErrors,
  updatePackage
);

router.get('/getall', jwtAuthMiddleware, getAllPackages);
router.get('/:id', jwtAuthMiddleware, getPackageById);

router.delete('/:id', jwtAuthMiddleware, deletePackage);

module.exports = router;
