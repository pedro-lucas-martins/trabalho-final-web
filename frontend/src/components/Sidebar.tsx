import { Link, useLocation } from 'react-router-dom';

export default function Sidebar() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <aside className="w-64 bg-gray-900 text-white shadow-lg">
      <div className="p-6 border-b border-gray-700">
        <h1 className="text-2xl font-bold">📚 Planejador</h1>
        <p className="text-sm text-gray-400 mt-1">Organize seus estudos</p>
      </div>

      <nav className="p-4">
        <ul className="space-y-2">
          <li>
            <Link
              to="/"
              className={`block px-4 py-3 rounded-lg transition ${
                isActive('/') 
                  ? 'bg-green-600 text-white' 
                  : 'text-gray-300 hover:bg-gray-800'
              }`}
            >
              📊 Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/materias"
              className={`block px-4 py-3 rounded-lg transition ${
                isActive('/materias') 
                  ? 'bg-green-600 text-white' 
                  : 'text-gray-300 hover:bg-gray-800'
              }`}
            >
              📖 Matérias
            </Link>
          </li>
          <li>
            <Link
              to="/sessoes"
              className={`block px-4 py-3 rounded-lg transition ${
                isActive('/sessoes') 
                  ? 'bg-green-600 text-white' 
                  : 'text-gray-300 hover:bg-gray-800'
              }`}
            >
              📅 Sessões de Estudo
            </Link>
          </li>
        </ul>
      </nav>

      <div className="absolute bottom-0 w-64 p-4 border-t border-gray-700">
        <p className="text-xs text-gray-400 text-center">
          © 2025 Planejador de Estudos
        </p>
      </div>
    </aside>
  );
}
