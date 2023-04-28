import axios from "axios";

const apiURL = "https://elixir-strapi.4bees.io/";

const headers = {
  "Content-Type": "application/json",
};

const authorization = localStorage.getItem("token");

const api = axios.create({
  baseURL: apiURL,
  headers: headers,
});

const getToken = async () => {
  return new Promise((resolve) => {
    const checkToken = () => {
      const token = localStorage.getItem("token");
      if (token) {
        resolve(token);
      } else {
        setTimeout(checkToken, 100); // Retry after 100ms
      }
    };
    checkToken();
  });
};

api.interceptors.request.use(
  async (config) => {
    if (
      (config.method === "put" || config.method === "post") &&
      config.url !== "/admin/login"
    ) {
      const token = await getToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const loginRequest = async (email, password) => {
  const response = await api.post("/admin/login", {
    email: email,
    password: password,
  });
  return response.data;
};

const getItems = async () => {
  const response = await api.get("api/items");
  return response.data;
};

const getItem = async (id) => {
  const response = await api.get(`api/items/${id}?populate=*`);
  return response.data;
};

const postItem = async (item) => {
  const response = await api.post(
    "/content-manager/collection-types/api::item.item",
    item
  );
  return response.data;
};

const publishItem = async (id) => {
  const response = await api.post(
    `/content-manager/collection-types/api::item.item/${id}/actions/publish`
  );
  return response.data;
};

const putItem = async (id, item) => {
  const response = await api.put(
    `/content-manager/collection-types/api::item.item/${id}`,
    item
  );
  return response.data;
};

export { loginRequest, getItems, getItem, postItem, publishItem, putItem };
