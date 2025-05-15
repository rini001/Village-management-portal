import mongoose from 'mongoose';

const needSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
    enum: ['Roads', 'Water', 'Electricity', 'Healthcare', 'Education', 'Other'],
  },
  description: {
    type: String,
    required: true,
  },
  villageName: {
    type: String,
    required: true,
  },
  priority: {
    type: String,
    required: true,
    enum: ['Low', 'Medium', 'High'],
  },

  // New field: verification status
  verificationStatus: {
    type: String,
    enum: ['Not Verified', 'Verified'],
    default: 'Not Verified',
  },

  // Progress status only applicable if verified
  progressStatus: {
    type: String,
    enum: ['Pending', 'In Progress', 'Completed'],
    default: 'Pending',
  },

  createdAt: {
    type: Date,
    default: Date.now,
  }
});

const Need = mongoose.model('Need', needSchema);

export default Need;
