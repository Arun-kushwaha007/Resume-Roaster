import express from 'express';
import Plan from '../models/Plan.js'; // Ensure this path is correct

const router = express.Router();

// @route   GET /api/plans
// @desc    Get all plans
// @access  Public
router.get('/', async (req, res) => {
  try {
    const plans = await Plan.find();
    res.json(plans);
  } catch (err) {
    console.error('Error fetching plans:', err.message);
    res.status(500).send('Server Error');
  }
});

export default router;
