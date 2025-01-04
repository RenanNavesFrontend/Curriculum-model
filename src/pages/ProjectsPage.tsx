import { useProjects } from '../services/projects';

const ProjectsPage = () => {
  const { data, isLoading, error } = useProjects();

  if (isLoading) return <div>Carregando...</div>;
  if (error instanceof Error) return <div>Erro: {error.message}</div>;

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Meus Projetos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.map((project: { name: string; description: string }) => (
          <div key={project.name} className="border rounded-lg p-4 shadow-md">
            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
            <p className="text-gray-600">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage; 