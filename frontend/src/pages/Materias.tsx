import { useState, useEffect } from 'react';
import { materiaService } from '../services/api';

interface Materia {
  id: string;
  nome: string;
  descricao?: string;
  topicos: any[];
  createdAt: string;
}

export default function Materias() {
  const [materias, setMaterias] = useState<Materia[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ nome: '', descricao: '' });
  const [editingId, setEditingId] = useState<string | null>(null);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingId) {
        await materiaService.update(editingId, formData);
      } else {
        await materiaService.create(formData);
      }
      setFormData({ nome: '', descricao: '' });
      setEditingId(null);
      setShowForm(false);
      loadMaterias();
    } catch (err) {
      setError('Erro ao salvar matéria');
      console.error(err);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Tem certeza que deseja deletar esta matéria?')) {
      try {
        await materiaService.delete(id);
        loadMaterias();
      } catch (err) {
        setError('Erro ao deletar matéria');
        console.error(err);
      }
    }
  };

  const handleEdit = (materia: Materia) => {
    setFormData({ nome: materia.nome, descricao: materia.descricao || '' });
    setEditingId(materia.id);
    setShowForm(true);
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
          <h1 className="text-3xl font-bold text-gray-900">Matérias</h1>
          <p className="text-gray-600 mt-1">Gerenciar suas disciplinas de estudo</p>
        </div>
        <button
          onClick={() => {
            setShowForm(!showForm);
            setFormData({ nome: '', descricao: '' });
            setEditingId(null);
          }}
          className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium"
        >
          + Adicionar Matéria
        </button>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
          {error}
        </div>
      )}

      {showForm && (
        <div className="mb-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">
            {editingId ? 'Editar Matéria' : 'Adicionar Nova Matéria'}
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nome da Matéria
              </label>
              <input
                type="text"
                value={formData.nome}
                onChange={(e) =>
                  setFormData({ ...formData, nome: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                placeholder="Ex: Matemática"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Descrição
              </label>
              <textarea
                value={formData.descricao}
                onChange={(e) =>
                  setFormData({ ...formData, descricao: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                placeholder="Descrição da matéria..."
                rows={3}
              />
            </div>
            <div className="flex gap-2">
              <button
                type="submit"
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium"
              >
                {editingId ? 'Atualizar' : 'Adicionar'}
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowForm(false);
                  setEditingId(null);
                  setFormData({ nome: '', descricao: '' });
                }}
                className="px-6 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition font-medium"
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {materias.map((materia) => (
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
                  {materia.topicos.length} tópicos
                </p>
              </div>
              <span className="text-2xl">📚</span>
            </div>

            {materia.descricao && (
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                {materia.descricao}
              </p>
            )}

            <div className="flex gap-2">
              <a
                href={`/materias/${materia.id}`}
                className="flex-1 px-3 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition text-center"
              >
                Ver Detalhes
              </a>
              <button
                onClick={() => handleEdit(materia)}
                className="px-3 py-2 bg-yellow-600 text-white rounded-lg text-sm font-medium hover:bg-yellow-700 transition"
              >
                Editar
              </button>
              <button
                onClick={() => handleDelete(materia.id)}
                className="px-3 py-2 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700 transition"
              >
                Deletar
              </button>
            </div>
          </div>
        ))}
      </div>

      {materias.length === 0 && !error && (
        <div className="text-center py-12 bg-white rounded-lg">
          <p className="text-gray-600 mb-4">Nenhuma matéria cadastrada</p>
          <button
            onClick={() => setShowForm(true)}
            className="inline-block px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            Criar Primeira Matéria
          </button>
        </div>
      )}
    </div>
  );
}
