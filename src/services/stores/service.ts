import { api } from "../../config/api";

export const StoresService = {
  getStores: () => api.get("/stores"),
  getStoresBy: (query : any) => api.get('/stores', {params: query})
};
