import api from './api'

export interface Project {
  id: string,
  title: string,
  content: string,
  createdAt: string,
  updatedAt: string,
}

export const ProjectApi = {
  GetAll: async (): Promise<Project[]> => {
    const res = await api.get<Project[]>('/projects');
    return res.data;
  },
  GetById: async (id: string): Promise<Project> => {
    const res = await api.get<Project>(`/projects/${id}`);
    return res.data;
  }
};



