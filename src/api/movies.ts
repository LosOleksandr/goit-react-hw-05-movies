import axios, { AxiosError } from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common["Authorization"] = `Bearer ${
  import.meta.env.VITE_AUTH as string
}`;

export const fetchMovies = async <T>(url: string) => {
  try {
    const response = await axios.get(url);

    return response.data as T;
  } catch (err) {
    const error = err as AxiosError;
    throw new Error(error.message);
  }
};
