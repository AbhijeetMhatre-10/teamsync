import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://team-sync-backend-n78w.onrender.com/api",
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalReq = error.config;

    if (!error.response || error.response.status !== 401) {
      return Promise.reject(error);
    }

    if (originalReq.url === "/auth/get-accessToken" || originalReq._retry) {
      window.location.href = "/user";
      return Promise.reject(error);
    }

    originalReq._retry = true;

    try {
      await axiosInstance.get("/auth/get-accessToken");
      return axiosInstance(originalReq);
    } catch (refreshError) {
      return Promise.reject(refreshError);
    }
  },
);
