import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  materiaService,
  topicoService,
  recursoService,
  sessaoEstudoService,
} from "../services/api";

interface Topico {
  id: string;
  titulo: string;
  prioridade: string;
  status: string;
  recursos: Recurso[];
  sessoesEstudo: any[];
}

interface Recurso {
  id: string;
  titulo: string;
  url: string;
}

interface Materia {
  id: string;
  nome: string;
  descricao?: string;
  topicos: Topico[];
}

export default function MateriaDetail() {
  const { id } = useParams<{ id: string }>();
  const [materia, setMateria] = useState<Materia | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showTopicoForm, setShowTopicoForm] = useState(false);
  const [topicoFormData, setTopicoFormData] = useState({
    titulo: "",
    prioridade: "MEDIA",
    status: "NAO_INICIADO",
  });

  useEffect(() => {
    if (id) {
      loadMateria();
    }
  }, [id]);

  const loadMateria = async () => {
    try {
      setLoading(true);
      const response = await materiaService.getById(id!);
      setMateria(response.data);
      setError(null);
    } catch (err) {
      setError("Erro ao carregar matéria");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddTopico = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await topicoService.create({
        ...topicoFormData,
        materiaId: id,
      });
      setTopicoFormData({
        titulo: "",
        prioridade: "MEDIA",
        status: "NAO_INICIADO",
      });
      setShowTopicoForm(false);
      loadMateria();
    } catch (err) {
      setError("Erro ao adicionar tópico");
      console.error(err);
    }
  };

  const handleDeleteTopico = async (topicoId: string) => {
    if (window.confirm("Tem certeza que deseja deletar este tópico?")) {
      try {
        await topicoService.delete(topicoId);
        loadMateria();
      } catch (err) {
        setError("Erro ao deletar tópico");
        console.error(err);
      }
    }
  };

  // --- NOVAS FUNÇÕES DE ATUALIZAÇÃO ---

  const handleUpdateStatusTopico = async (
    topicoId: string,
    novoStatus: string
  ) => {
    try {
      await topicoService.update(topicoId, { status: novoStatus });
      loadMateria(); // Recarrega para atualizar a cor e o estado
    } catch (err) {
      console.error("Erro ao atualizar status do tópico:", err);
      // Opcional: mostrar mensagem de erro
    }
  };

  const handleUpdateStatusSessao = async (
    sessaoId: string,
    novoStatus: string
  ) => {
    try {
      await sessaoEstudoService.update(sessaoId, { status: novoStatus });
      loadMateria(); // Recarrega para atualizar a cor e o estado
    } catch (err) {
      console.error("Erro ao atualizar status da sessão:", err);
    }
  };

  // --- FUNÇÕES DE ESTILIZAÇÃO ---

  const getPrioridadeColor = (prioridade: string) => {
    switch (prioridade) {
      case "ALTA":
        return "bg-red-100 text-red-800";
      case "MEDIA":
        return "bg-yellow-100 text-yellow-800";
      case "BAIXA":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  // Cores dinâmicas para os Dropdowns
  const getStatusColor = (status: string) => {
    switch (status) {
      case "CONCLUIDO":
        return "bg-green-100 text-green-800";
      case "EM_ANDAMENTO":
        return "bg-blue-100 text-blue-800";
      case "NAO_INICIADO":
      case "AGENDADA": // Para sessões
        return "bg-gray-100 text-gray-800";
      case "CANCELADA": // Para sessões
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
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

  if (!materia) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">Matéria não encontrada</p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <a
          href="/materias"
          className="text-green-600 hover:text-green-700 mb-4 inline-block"
        >
          ← Voltar para Matérias
        </a>
        <h1 className="text-3xl font-bold text-gray-900">{materia.nome}</h1>
        {materia.descricao && (
          <p className="text-gray-600 mt-2">{materia.descricao}</p>
        )}
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
          {error}
        </div>
      )}

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Tópicos</h2>
        <button
          onClick={() => setShowTopicoForm(!showTopicoForm)}
          className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium"
        >
          + Adicionar Tópico
        </button>
      </div>

      {showTopicoForm && (
        <div className="mb-8 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Novo Tópico</h3>
          <form onSubmit={handleAddTopico}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Título do Tópico
              </label>
              <input
                type="text"
                value={topicoFormData.titulo}
                onChange={(e) =>
                  setTopicoFormData({
                    ...topicoFormData,
                    titulo: e.target.value,
                  })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                placeholder="Ex: Álgebra Linear"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Prioridade
                </label>
                <select
                  value={topicoFormData.prioridade}
                  onChange={(e) =>
                    setTopicoFormData({
                      ...topicoFormData,
                      prioridade: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                >
                  <option value="BAIXA">Baixa</option>
                  <option value="MEDIA">Média</option>
                  <option value="ALTA">Alta</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Status
                </label>
                <select
                  value={topicoFormData.status}
                  onChange={(e) =>
                    setTopicoFormData({
                      ...topicoFormData,
                      status: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                >
                  <option value="NAO_INICIADO">Não Iniciado</option>
                  <option value="EM_ANDAMENTO">Em Andamento</option>
                  <option value="CONCLUIDO">Concluído</option>
                </select>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                type="submit"
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium"
              >
                Adicionar
              </button>
              <button
                type="button"
                onClick={() => setShowTopicoForm(false)}
                className="px-6 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition font-medium"
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="space-y-4">
        {materia.topicos.map((topico) => (
          <div
            key={topico.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">
                  {topico.titulo}
                </h3>
                <div className="flex gap-2 mt-2 items-center">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getPrioridadeColor(
                      topico.prioridade
                    )}`}
                  >
                    {topico.prioridade}
                  </span>

                  {/* SELECT: Edição de Status do Tópico */}
                  <select
                    value={topico.status}
                    onChange={(e) =>
                      handleUpdateStatusTopico(topico.id, e.target.value)
                    }
                    className={`text-xs font-semibold px-3 py-1 rounded-full border-0 cursor-pointer focus:ring-2 focus:ring-offset-1 focus:outline-none
                      ${getStatusColor(topico.status)}`}
                  >
                    <option value="NAO_INICIADO">Não Iniciado</option>
                    <option value="EM_ANDAMENTO">Em Andamento</option>
                    <option value="CONCLUIDO">Concluído</option>
                  </select>
                </div>
              </div>
              <button
                onClick={() => handleDeleteTopico(topico.id)}
                className="px-3 py-2 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700 transition"
              >
                Deletar
              </button>
            </div>

            {topico.recursos.length > 0 && (
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">
                  Recursos ({topico.recursos.length})
                </h4>
                <ul className="space-y-1">
                  {topico.recursos.map((recurso) => (
                    <li key={recurso.id}>
                      <a
                        href={recurso.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 text-sm"
                      >
                        🔗 {recurso.titulo}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* LISTA: Sessões de Estudo */}
            {topico.sessoesEstudo && topico.sessoesEstudo.length > 0 && (
              <div className="mt-4 border-t pt-4">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">
                  Sessões de Estudo
                </h4>
                <div className="space-y-2">
                  {topico.sessoesEstudo.map((sessao) => (
                    <div
                      key={sessao.id}
                      className="flex justify-between items-center bg-gray-50 p-3 rounded-lg border border-gray-100"
                    >
                      <div className="text-sm text-gray-600">
                        {/* Data */}
                        📅 {new Date(sessao.dataInicio).toLocaleDateString()}
                        <span className="mx-2 text-gray-300">|</span>
                        {/* Hora */}
                        {new Date(sessao.dataInicio).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </div>

                      {/* SELECT: Edição de Status da Sessão */}
                      <select
                        value={sessao.status}
                        onChange={(e) =>
                          handleUpdateStatusSessao(sessao.id, e.target.value)
                        }
                        className={`text-xs font-semibold px-3 py-1.5 rounded-full border-0 cursor-pointer transition-colors focus:ring-2 focus:ring-offset-1 focus:outline-none
                          ${getStatusColor(sessao.status)}`}
                      >
                        <option value="AGENDADA">Agendada</option>
                        <option value="EM_ANDAMENTO">Em Andamento</option>
                        <option value="CONCLUIDA">Concluída</option>
                        <option value="CANCELADA">Cancelada</option>
                      </select>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {materia.topicos.length === 0 && (
        <div className="text-center py-12 bg-white rounded-lg">
          <p className="text-gray-600 mb-4">Nenhum tópico cadastrado</p>
          <button
            onClick={() => setShowTopicoForm(true)}
            className="inline-block px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            Criar Primeiro Tópico
          </button>
        </div>
      )}
    </div>
  );
}
