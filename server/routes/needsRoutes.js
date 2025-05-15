import express from 'express';
import {
  createNeed,
  getAllNeeds,
  updateNeed,
  deleteNeed,
} from '../controllers/needsController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// Public routes
router.post('/', createNeed);          // Anyone can post needs
router.get('/', getAllNeeds);          // Anyone can view needs

// Protected routes (admin only)
router.put('/:id', protect, updateNeed);
router.delete('/:id', protect, deleteNeed);

export default router;
