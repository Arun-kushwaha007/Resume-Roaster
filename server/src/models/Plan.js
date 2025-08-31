import mongoose from 'mongoose';

const PlanSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  features: {
    type: [String],
    required: true,
  },
});

// Avoid OverwriteModelError in development (e.g., with nodemon)
const Plan = mongoose.models.Plan || mongoose.model('Plan', PlanSchema);

export default Plan;
