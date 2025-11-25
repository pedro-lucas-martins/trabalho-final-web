import { useState, useEffect } from 'react';
import { sessaoEstudoService, topicoService } from '../services/api';

interface Sessao {
  id: string;
  titulo: string;
  dataInicio: string;
  dataFim: string;
  topico: {
    id: string;
    titulo: string;
  };
}

interface Topico {
  id: string;
  titulo: string;
}

export default function Sessoes() {
  const [sessoes, setSessoes] = useState<Sessao[]>([]);
  const [topicos, setTopicos] = useState<Topico[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    titulo: '',
    dataInicio: '',
    dataFim: '',
    topicoId: '',
  });

  useEffect(() => {
    loadSessoes();
    loadTopicos();
  }, []);

  const loadSessoes = async () => {
    try {
      setLoading(true);
      const response = await sessaoEstudoService.getAll();
      setSessoes(response.data);
      setError(null);
    } catch (err) {
      setError('Erro ao carregar sessões');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const loadTopicos = async () => {
    try {
      const response = await topicoService.getAll();
      setTopicos(response.data);
    } catch (err) {
      console.error('Erro ao carregar tópicos:', err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await sessaoEstudoService.create(formData);
      setFormData({
        titulo: '',
        dataInicio: '',
        dataFim: '',
        topicoId: '',
      });
      setShowForm(false);
      loadSessoes();
    } catch (err) {
      setError('Erro ao criar sessão');
      console.error(err);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Tem certeza que deseja deletar esta sessão?')) {
      try {
        await sessaoEstudoService.delete(id);
        loadSessoes();
      } catch (err) {
        setError('Erro ao deletar sessão');
        console.error(err);
      }
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
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
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Sessões de Estudo</h1>
          <p className="text-gray-600 mt-1">Gerencie suas sessões agendadas</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium"
        >
          + Agendar Sessão
        </button>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
          {error}
        </div>
      )}

      {showForm && (
        <div className="mb-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Agendar Nova Sessão</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Título da Sessão
              </label>
              <input
                type="text"
                value={formData.titulo}
                onChange={(e) =>
                  setFormData({ ...formData, titulo: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                placeholder="Ex: Revisão de Cálculo"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tópico
              </label>
              <select
                value={formData.topicoId}
                onChange={(e) =>
                  setFormData({ ...formData, topicoId: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                required
              >
                <option value="">Selecione um tópico</option>
                {topicos.map((topico) => (
                  <option key={topico.id} value={topico.id}>
                    {topico.titulo}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Data e Hora de Início
                </label>
                <input
                  type="datetime-local"
                  value={formData.dataInicio}
                  onChange={(e) =>
                    setFormData({ ...formData, dataInicio: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Data e Hora de Fim
                </label>
                <input
                  type="datetime-local"
                  value={formData.dataFim}
                  onChange={(e) =>
                    setFormData({ ...formData, dataFim: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div className="flex gap-2">
              <button
                type="submit"
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium"
              >
                Agendar
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="px-6 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition font-medium"
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="space-y-4">
        {sessoes.map((sessao) => (
          <div
            key={sessao.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">
                  {sessao.titulo}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Tópico: {sessao.topico.titulo}
                </p>
              </div>
              <button
                onClick={() => handleDelete(sessao.id)}
                className="px-3 py-2 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700 transition"
              >
                Deletar
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-gray-600 font-medium">Início</p>
                <p className="text-sm text-gray-900">{formatDate(sessao.dataInicio)}</p>
              </div>
              <div>
                <p className="text-xs text-gray-600 font-medium">Fim</p>
                <p className="text-sm text-gray-900">{formatDate(sessao.dataFim)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {sessoes.length === 0 && !error && (
        <div className="text-center py-12 bg-white rounded-lg">
          <p className="text-gray-600 mb-4">Nenhuma sessão agendada</p>
          <button
            onClick={() => setShowForm(true)}
            className="inline-block px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            Agendar Primeira Sessão
          </button>
        </div>
      )}
    </div>
  );
}
