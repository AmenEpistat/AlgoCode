export const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:3001/api";

export const AUTH_URLS = {
  GOOGLE: `${API_URL}/auth/google`,
  GITHUB: `${API_URL}/auth/github`,
};
