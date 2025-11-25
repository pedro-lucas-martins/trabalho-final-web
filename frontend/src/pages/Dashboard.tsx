import { useState, useEffect } from 'react';
import { materiaService } from '../services/api';

interface Materia {
  id: string;
  nome: string;
  descricao?: string;
  topicos: any[];
}

export default function Dashboard() {
  const [materias, setMaterias] = useState<Materia[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadMaterias();
  }, []);

  const loadMaterias = async () => {
    try {
      setLoading(true);
      const response = await materiaService.getAll();
      setMaterias(response.data);
      setError(null);
    } catch (err) {
      setError('Erro ao carregar matérias');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Bem-vindo ao seu planejador de estudos</p>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {materias.map((materia) => {
          const totalTopicos = materia.topicos.length;
          const topicosCompletos = materia.topicos.filter(
            (t) => t.status === 'CONCLUIDO'
          ).length;
          const percentual =
            totalTopicos > 0
              ? Math.round((topicosCompletos / totalTopicos) * 100)
              : 0;

          return (
            <div
              key={materia.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {materia.nome}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {totalTopicos} tópicos
                  </p>
                </div>
                <span className="text-2xl">📚</span>
              </div>

              {materia.descricao && (
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {materia.descricao}
                </p>
              )}

              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">
                    Progresso
                  </span>
                  <span className="text-sm font-semibold text-green-600">
                    {percentual}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-600 h-2 rounded-full transition-all"
                    style={{ width: `${percentual}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex gap-2">
                <a
                  href={`/materias/${materia.id}`}
                  className="flex-1 px-3 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition text-center"
                >
                  Ver Detalhes
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {materias.length === 0 && !error && (
        <div className="text-center py-12">
          <p className="text-gray-600 mb-4">Nenhuma matéria cadastrada</p>
          <a
            href="/materias"
            className="inline-block px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            Adicionar Matéria
          </a>
        </div>
      )}
    </div>
  );
}
