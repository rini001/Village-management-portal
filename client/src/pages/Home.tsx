import NeedForm from '../components/NeedForm';
import NeedsList from '../components/NeedsList';

const Home = () => {
  return (
    <div className=" min-h-screen bg-gradient-to-tr from-blue-500 to-purple-600 p-[4rem]">
      <h1 className="text-3xl font-bold text-center mb-6  text-white">Village Development Portal</h1>
      <NeedForm />
      <NeedsList />
    </div>
  );
};

export default Home;
