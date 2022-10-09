import { localService } from "../../Services/LocalStorageService";

export const baseURL = "https://movienew.cybersoft.edu.vn";
export const TokenCybersoft =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAwNSIsIkhldEhhblN0cmluZyI6IjA2LzA2LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY4NjAwOTYwMDAwMCIsIm5iZiI6MTY2MjMxMDgwMCwiZXhwIjoxNjg2MTU3MjAwfQ.JaQIua4G2WIvghH9KPp4MFSdMTIao0ZX9SYeelLmZXM";
export const maNhom = "GP04";
export const LOCALSTORAGE_USER_INFO = "user";
export const USER_BOOKED_FILM = "BookedFilm";
export const SEATS = "SEATS";
export const Authorization = `Bearer ${localService.getUserInfo()?.accessToken || ""}`;
// ! Phân loại  người dùng:
export const QUAN_TRI = "QuanTri";
export const KHACH_HANG = "KhachHang";