import { useEffect, useState } from 'react';
import { deleteNeed, fetchNeeds, updateNeed } from '../api/api';
import type { Need } from '../types';

interface Props {
  token: string;
}

const AdminDashboard = ({ token }: Props) => {
  const [needs, setNeeds] = useState<Need[]>([]);

  const loadNeeds = async () => {
    const res = await fetchNeeds();
    setNeeds(res.data);
  };

  useEffect(() => {
    loadNeeds();
  }, []);

  const handleDelete = async (id: string) => {
    await deleteNeed(id, token);
    loadNeeds();
  };

  const handleUpdate = async (id: string, updates: Partial<Need>) => {
    await updateNeed(id, updates, token);
    loadNeeds();
  };

  return (
    <div className="max-w-5xl mx-auto mt-8 space-y-6 ">
      <h2 className="text-2xl font-bold text-center text-white">Admin Dashboard</h2>
      {needs.map((need) => (
        <div key={need._id} className="border p-4 rounded shadow bg-white">
          <p><strong>Category:</strong> {need.category}</p>
          <p><strong>Village:</strong> {need.villageName}</p>
          <p><strong>Description:</strong> {need.description}</p>
          <p><strong>Priority:</strong> {need.priority}</p>

          <div className="flex items-center gap-4 mt-2">
            <label>Verification:</label>
            <select
              value={need.verificationStatus || 'Not Verified'}
              onChange={(e) =>
                handleUpdate(need._id!, { verificationStatus: e.target.value as Need['verificationStatus'] })
              }
              className="border p-1 rounded"
            >
              <option value="Verified">Verified</option>
              <option value="Not Verified">Not Verified</option>
            </select>

            {need.verificationStatus === 'Verified' && (
              <>
                <label>Progress:</label>
                <select
                  value={need.progressStatus || 'Pending'}
                  onChange={(e) =>
                    handleUpdate(need._id!, { progressStatus: e.target.value as Need['progressStatus'] })
                  }
                  className="border p-1 rounded"
                >
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </>
            )}

            <button
              onClick={() => handleDelete(need._id!)}
              className="ml-auto bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminDashboard;
