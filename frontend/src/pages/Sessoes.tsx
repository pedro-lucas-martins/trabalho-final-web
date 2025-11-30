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
  
  // Estado para controlar os inputs separados
  const [formData, setFormData] = useState({
    titulo: '',
    topicoId: '',
    // Guardamos separado para facilitar o controle do formulário
    dateInicio: '',
    timeInicio: '',
    dateFim: '',
    timeFim: ''
  });

  useEffect(() => {
    loadSessoes();
    loadTopicos();
  }, []);

  const loadSessoes = async () => {
    try {
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
    
    // 1. Validar preenchimento
    if (!formData.dateInicio || !formData.timeInicio || !formData.dateFim || !formData.timeFim) {
      setError("Por favor, preencha todas as datas e horários.");
      return;
    }

    // 2. Montar as strings ISO completas para o Backend
    const isoInicio = `${formData.dateInicio}T${formData.timeInicio}:00.000Z`;
    const isoFim = `${formData.dateFim}T${formData.timeFim}:00.000Z`;

    // 3. Validação Lógica: Fim não pode ser antes do Início
    if (new Date(isoFim) <= new Date(isoInicio)) {
      setError("A data/hora de fim deve ser posterior ao início.");
      return;
    }

    try {
      setLoading(true);
      await sessaoEstudoService.create({
        titulo: formData.titulo,
        topicoId: formData.topicoId,
        dataInicio: isoInicio,
        dataFim: isoFim
      });
      
      // Limpar formulário
      setFormData({
        titulo: '',
        topicoId: '',
        dateInicio: '',
        timeInicio: '',
        dateFim: '',
        timeFim: ''
      });
      setShowForm(false);
      setError(null);
      await loadSessoes();
    } catch (err) {
      setError('Erro ao criar sessão');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Tem certeza que deseja deletar esta sessão?')) {
      try {
        await sessaoEstudoService.delete(id);
        await loadSessoes();
      } catch (err) {
        setError('Erro ao deletar sessão');
        console.error(err);
      }
    }
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    // Ajuste simples para exibir corretamente ignorando timezone no display visual se necessário,
    // mas aqui usamos o padrão do navegador
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (loading && sessoes.length === 0) {
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
    <div className="p-6 max-w-4xl mx-auto font-sans text-gray-900">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Sessões de Estudo</h1>
          <p className="text-gray-600 mt-1">Gerencie suas sessões agendadas</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium shadow-sm"
        >
          {showForm ? 'Cancelar' : '+ Agendar Sessão'}
        </button>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 animate-fade-in">
          {error}
        </div>
      )}

      {showForm && (
        <div className="mb-8 bg-white rounded-lg shadow-md p-6 border border-gray-100 animate-fade-in">
          <h2 className="text-xl font-semibold mb-6 text-gray-800 border-b pb-2">Agendar Nova Sessão</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Título da Sessão
                </label>
                <input
                  type="text"
                  value={formData.titulo}
                  onChange={(e) =>
                    setFormData({ ...formData, titulo: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition"
                  placeholder="Ex: Revisão de Cálculo"
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tópico Relacionado
                </label>
                <select
                  value={formData.topicoId}
                  onChange={(e) =>
                    setFormData({ ...formData, topicoId: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none bg-white"
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

              {/* SELEÇÃO DE INÍCIO */}
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h3 className="text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">Início</h3>
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Dia</label>
                    <input
                      type="date"
                      lang="pt-BR"
                      value={formData.dateInicio}
                      onChange={(e) => setFormData({ ...formData, dateInicio: e.target.value })}
                      onClick={(e) => e.currentTarget.showPicker()}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none cursor-pointer"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Horário</label>
                    <input
                      type="time"
                      value={formData.timeInicio}
                      onChange={(e) => setFormData({ ...formData, timeInicio: e.target.value })}
                      onClick={(e) => e.currentTarget.showPicker()}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none cursor-pointer"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* SELEÇÃO DE FIM */}
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h3 className="text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">Fim</h3>
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Dia</label>
                    <input
                      type="date"
                      lang="pt-BR"
                      value={formData.dateFim}
                      // AQUI ESTÁ A MÁGICA: O 'min' impede selecionar datas anteriores ao início
                      min={formData.dateInicio} 
                      onChange={(e) => setFormData({ ...formData, dateFim: e.target.value })}
                      onClick={(e) => e.currentTarget.showPicker()}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none cursor-pointer"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Horário</label>
                    <input
                      type="time"
                      value={formData.timeFim}
                      onChange={(e) => setFormData({ ...formData, timeFim: e.target.value })}
                      onClick={(e) => e.currentTarget.showPicker()}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none cursor-pointer"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3 justify-end pt-4 border-t border-gray-100">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="px-6 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-medium"
              >
                Cancelar
              </button>
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium shadow-sm disabled:opacity-50"
              >
                {loading ? 'Agendando...' : 'Confirmar Agendamento'}
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="space-y-4">
        {sessoes.map((sessao) => (
          <div
            key={sessao.id}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition duration-200"
          >
            <div className="flex flex-col sm:flex-row items-start justify-between mb-4 gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-800">
                  {sessao.titulo}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs font-semibold bg-blue-50 text-blue-700 px-2 py-0.5 rounded">
                    Tópico
                  </span>
                  <p className="text-sm text-gray-600">
                    {sessao.topico?.titulo || 'Tópico não encontrado'}
                  </p>
                </div>
              </div>
              <button
                onClick={() => handleDelete(sessao.id)}
                className="self-start px-3 py-1.5 bg-red-50 text-red-600 border border-red-100 rounded-md text-sm font-medium hover:bg-red-100 transition"
              >
                Deletar
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-gray-100 mt-2">
              <div className="flex items-center gap-3">
                <div className="bg-green-50 p-2 rounded-full">
                  <span className="text-green-600 text-lg leading-none">▶</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wide">Início</p>
                  <p className="text-sm text-gray-900 font-medium">{formatDate(sessao.dataInicio)}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-red-50 p-2 rounded-full">
                  <span className="text-red-500 text-lg leading-none">■</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wide">Fim</p>
                  <p className="text-sm text-gray-900 font-medium">{formatDate(sessao.dataFim)}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {sessoes.length === 0 && !error && (
        <div className="text-center py-16 bg-white rounded-lg border-2 border-dashed border-gray-200">
          <div className="text-4xl mb-4">📅</div>
          <p className="text-gray-600 mb-4 font-medium">Nenhuma sessão agendada</p>
          <button
            onClick={() => setShowForm(true)}
            className="inline-block px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition shadow-sm"
          >
            Agendar Primeira Sessão
          </button>
        </div>
      )}
    </div>
  );
}