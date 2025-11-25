export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="px-8 py-4 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Guia de Estudos - Enem 2025
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            Explore os fundamentos e aplicações da matemática em diversas áreas
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
            🔔
          </button>
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
            ⚙️
          </button>
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
            👤
          </button>
        </div>
      </div>
    </header>
  );
}
