/* eslint-disable */

import axios, { Axios } from "axios";
import AxiosClient from "../Utils/Http/AxiosClient";
import paths from "../Utils/Settings/paths";

let pathsArr = paths.Phim;
const QuanLyPhimService = {};
for (const item of pathsArr) {
    QuanLyPhimService[item.name] = (payload = {}, params = {}, isLoading = true) => {
        // truyền đúng thứ tự payload --> path param
        switch (item.method) {
            case "get":
                return AxiosClient.get(item.path, { headers: { isLoading }, params });

            case "post":
                return AxiosClient.post(item.path, payload, { headers: { isLoading }, params });

            case "put":
                return AxiosClient.put(item.path, payload, { headers: { isLoading } });

            case "delete":
                return AxiosClient.delete(item.path, { headers: { isLoading }, params });

            default:
                break;
        }
    };
}
QuanLyPhimService.CapNhatPhimUpload = (FormData = "") => {
    return AxiosClient.post("https://movienew.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhimUpload", FormData)
    // return axios({
    //     url: `https://movienew.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhimUpload`,
    //     method: 'POST',
    //     data: FormData,
    //     headers:
    //     {
    //         Authorization: "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiNEhvYW5ndnVhb2tvayIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6ImhvYW5nX3hhbUBnbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOlsiUXVhblRyaSIsImhvYW5nX3hhbUBnbWFpbC5jb20iLCJHUDAxIl0sIm5iZiI6MTY2NDI4NDM4MSwiZXhwIjoxNjY0Mjg3OTgxfQ.yFY0EbSGuDd9FBmmIkTPM1NPVpIhD_HEnyXVSIjvQ7g"
    //         ,
    //         TokenCybersoft: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAwNCIsIkhldEhhblN0cmluZyI6IjA1LzAzLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY3Nzk3NDQwMDAwMCIsIm5iZiI6MTY1NDEwMjgwMCwiZXhwIjoxNjc4MTIyMDAwfQ.FunqYipkHrCbBATBzuJXyjGpZZxDekx1oY2qxW3_yfw"
    //     }

    // })
}

export default QuanLyPhimService;
