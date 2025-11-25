import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Materias from './pages/Materias';
import MateriaDetail from './pages/MateriaDetail';
import Sessoes from './pages/Sessoes';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular carregamento inicial
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando...</p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/materias" element={<Materias />} />
          <Route path="/materias/:id" element={<MateriaDetail />} />
          <Route path="/sessoes" element={<Sessoes />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
