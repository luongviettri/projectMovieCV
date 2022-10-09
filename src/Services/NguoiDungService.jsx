/* eslint-disable */

import AxiosClient from "../Utils/Http/AxiosClient";
import paths from "../Utils/Settings/paths";

let pathsArr = paths.NguoiDung;
const QuanLyNguoiDungService = {};
for (const item of pathsArr) {
  QuanLyNguoiDungService[item.name] = (payload = {}, params = {}, isLoading = true) => {
    // truyền đúng thứ tự payload --> path param
    switch (item.method) {
      case "get":
        return AxiosClient.get(item.path, { headers: { isLoading }, params });
      case "post":
        return AxiosClient.post(item.path, payload, { headers: { isLoading }, params });
      case "put":
        return AxiosClient.put(item.path, payload, { headers: { isLoading }, params });
      case "delete":
        return AxiosClient.delete(item.path, { headers: { isLoading }, params });
      default:
        break;
    }
  };
}

QuanLyNguoiDungService.CapNhatUser = (payload) => {
  // console.log("call Cap nhat User")
  return AxiosClient.post("https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung", payload)
}


export default QuanLyNguoiDungService;

