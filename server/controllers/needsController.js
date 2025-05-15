import Need from '../models/Need.js';

// Create a new village need
export const createNeed = async (req, res) => {
  try {
    const newNeed = new Need(req.body);
    const savedNeed = await newNeed.save();
    res.status(201).json(savedNeed);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all village needs
export const getAllNeeds = async (req, res) => {
  try {
    const needs = await Need.find().sort({ createdAt: -1 });
    res.json(needs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a need status or info
export const updateNeed = async (req, res) => {
try {
    const { verificationStatus, progressStatus } = req.body;

    // Optionally validate statuses:
    if (verificationStatus && !['Not Verified', 'Verified'].includes(verificationStatus)) {
      return res.status(400).json({ error: 'Invalid verificationStatus' });
    }

    if (progressStatus && !['Pending', 'In Progress', 'Completed'].includes(progressStatus)) {
      return res.status(400).json({ error: 'Invalid progressStatus' });
    }

    const need = await Need.findById(req.params.id);
    if (!need) {
      return res.status(404).json({ error: 'Need not found' });
    }

    // Update fields only if provided
    if (verificationStatus) need.verificationStatus = verificationStatus;

    // Only allow setting progressStatus if verified
    if (progressStatus) {
      if (need.verificationStatus !== 'Verified') {
        return res.status(400).json({ error: 'Cannot set progress status unless verified' });
      }
      need.progressStatus = progressStatus;
    }

    // Update other fields as needed (optional)
    // e.g. description, priority, etc.

    const updatedNeed = await need.save();
    res.json(updatedNeed);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a need
export const deleteNeed = async (req, res) => {
  try {
    await Need.findByIdAndDelete(req.params.id);
    res.json({ message: 'Need deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
