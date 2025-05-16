import NeedForm from '../components/NeedForm';
import NeedsList from '../components/NeedsList';

const Home = () => {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Village Development Portal</h1>
      <NeedForm />
      <NeedsList />
    </div>
  );
};

export default Home;
