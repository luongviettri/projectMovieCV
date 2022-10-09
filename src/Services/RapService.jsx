import AxiosClient from "../Utils/Http/AxiosClient";
import paths from "../Utils/Settings/paths";

let pathsArr = paths.Rap;
const QuanLyRapService = {};
for (const item of pathsArr) {
  QuanLyRapService[item.name] = (payload = {}, params = {}, isLoading = true) => {
    // truyền đúng thứ tự payload --> path param
    switch (item.method) {
      case "get": {
        return AxiosClient.get(item.path, { headers: { isLoading }, params });
      }
      case "post":
        return AxiosClient.post(item.path, payload, { headers: { isLoading } });

      case "put":
        return AxiosClient.put(item.path, payload, { headers: { isLoading } });

      case "delete":
        return AxiosClient.delete(item.path, payload, { headers: { isLoading } });

      default:
        break;
    }
  };
}

export default QuanLyRapService;
