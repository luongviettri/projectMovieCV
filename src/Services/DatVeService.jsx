import AxiosClient from "../Utils/Http/AxiosClient";
import paths from "../Utils/Settings/paths";
import { Authorization } from "../Utils/Settings/config";
let pathsArr = paths.DatVe;
const QuanLyDatVeService = {};
for (const item of pathsArr) {
  QuanLyDatVeService[item.name] = (payload = {}, params = {}, isLoading = true) => {
    // truyền đúng thứ tự payload --> path param
    switch (item.method) {
      case "get": {
        return AxiosClient.get(item.path, { headers: { isLoading, Authorization }, params });
      }
      case "post":
        return AxiosClient.post(item.path, payload, { headers: { isLoading, Authorization } });

      case "put":
        return AxiosClient.put(item.path, payload, { headers: { isLoading, Authorization } });

      case "delete":
        return AxiosClient.delete(item.path, payload, { headers: { isLoading, Authorization } });

      default:
        break;
    }
  };
}

export default QuanLyDatVeService;
