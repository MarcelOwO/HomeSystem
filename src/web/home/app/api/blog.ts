import api from "./api";

export interface Blog {
  Id: string,
  Title: string,
  Content: string,
  CreatedAt: string,
  UpdatedAt: string,
  AuthorId: string,
}

export const BlogApi = {
  GetAll: async (): Promise<Blog[]> => {
    try {
      const res = await api.get<Blog[]>('/projects');
      return res.data;
    } catch (err) {
      console.error(err);
      throw new Error("Failed to load Blogs");
    }
  },
  GetById: async (id: string): Promise<Blog> => {
    try {
      const res = await api.get<Blog>(`/projects/${id}`);
      return res.data;
    } catch (err) {
      console.error(err);
      throw new Error("Failed to get blog by id");
    }
  },
  GetLatest: async (): Promise<Blog> => {
    try {
      const res = await api.get<Blog>('/projects/latest');
      return res.data;

    } catch (err) {
      console.log(err);
      throw new Error("Failed to get latest blog");
    }
  }



}
