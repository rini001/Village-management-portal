import { useState } from 'react';
import AdminLogin from '../components/AdminLogin';
import AdminDashboard from '../components/AdminDashboard';

const Admin = () => {
  const [token, setToken] = useState<string | null>(() => localStorage.getItem('adminToken'));

  const handleLogin = (token: string) => {
    setToken(token);
    localStorage.setItem('adminToken', token);
  };

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem('adminToken');
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-500 to-purple-600">
      {token ? (
        <>
        <div className="flex justify-end">

          <button
            onClick={handleLogout}
            className="mb-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Logout
          </button>
        </div>
          <AdminDashboard token={token} />
        </>
      ) : (
        <AdminLogin onLogin={handleLogin} />
      )}
    </div>
  );
};

export default Admin;
