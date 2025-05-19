import type { Need } from '../types';

const NeedsList = ({ needs }: { needs: Need[] }) => {
  return (
    <div className="max-w-3xl mx-auto mt-10 space-y-4">
      <h2 className="text-2xl font-bold text-center text-white">Village Needs</h2>
      {needs.map((need) => (
        <div key={need._id} className="border p-4 rounded shadow bg-gray-50">
          <div className="font-semibold">{need.category} - {need.villageName}</div>
          <p>{need.description}</p>
          <p className="text-sm">Priority: {need.priority}</p>
          <p className="text-sm">Status: {need.verificationStatus || 'Not Verified'} / {need.progressStatus || 'Pending'}</p>
        </div>
      ))}
    </div>
  );
};

export default NeedsList;
