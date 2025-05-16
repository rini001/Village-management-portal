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
    <div className="p-4 min-h-screen bg-gray-100">
      {token ? (
        <>
          <button
            onClick={handleLogout}
            className="mb-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Logout
          </button>
          <AdminDashboard token={token} />
        </>
      ) : (
        <AdminLogin onLogin={handleLogin} />
      )}
    </div>
  );
};

export default Admin;
