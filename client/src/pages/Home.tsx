import { useEffect, useState } from 'react';
import NeedForm from '../components/NeedForm';
import NeedsList from '../components/NeedsList';
import { fetchNeeds } from '../api/api';
import type { Need } from '../types';

const Home = () => {
  const [needs, setNeeds] = useState<Need[]>([]);

  const loadNeeds = async () => {
    const res = await fetchNeeds();
    setNeeds(res.data);
  };

  useEffect(() => {
    loadNeeds();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-500 to-purple-600 p-[4rem]">
      <h1 className="text-3xl font-bold text-center mb-6 text-white">Village Development Portal</h1>
      <NeedForm onSuccess={loadNeeds} />
      <NeedsList needs={needs} />
    </div>
  );
};

export default Home;
