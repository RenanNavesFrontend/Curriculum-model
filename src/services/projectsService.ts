import { useQuery } from '@tanstack/react-query';
import axiosInstance from './axios';

export interface Project {
  id: string;
  name: string;
  description: string;
  imageUrl?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const useProjects = () => {
  return useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      try {
        const response = await axiosInstance.get('/projects');
        return response.data;
      } catch (error) {
        // Para desenvolvimento, retorne dados mockados
        return [
          {
            id: '1',
            name: 'Projeto 1',
            description: 'Descrição do projeto 1',
            technologies: ['React', 'TypeScript', 'Tailwind'],
            githubUrl: 'https://github.com/seu-usuario/projeto1'
          },
          {
            id: '2',
            name: 'Projeto 2',
            description: 'Descrição do projeto 2',
            technologies: ['React', 'JavaScript', 'CSS'],
            githubUrl: 'https://github.com/seu-usuario/projeto2'
          }
        ];
      }
    }
  });
}; 