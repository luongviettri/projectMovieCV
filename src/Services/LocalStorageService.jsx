import _ from "lodash";
import { LOCALSTORAGE_USER_INFO, SEATS, USER_BOOKED_FILM } from "../Utils/Settings/config";

export const localService = {
  setUserInfo(value) {
    const data = JSON.stringify(value);
    localStorage.setItem(LOCALSTORAGE_USER_INFO, data);
  },

  getUserInfo() {
    const userInfo = localStorage.getItem(LOCALSTORAGE_USER_INFO);
    if (!_.isEmpty(userInfo) && !_.isNull(userInfo)) return JSON.parse(userInfo);
  },
  removeUserInfo() {
    localStorage.removeItem(LOCALSTORAGE_USER_INFO);
  },
  // film storage
  setBookedFilm(value) {
    const data = JSON.stringify(value);
    localStorage.setItem(USER_BOOKED_FILM, data);
  },
  getBookedFilm() {
    const filmInfo = localStorage.getItem(USER_BOOKED_FILM);
    if (!_.isEmpty(filmInfo) && !_.isNull(filmInfo)) return JSON.parse(filmInfo);
  },
  // seat storage
  setSeat(value) {
    const data = JSON.stringify(value);
    localStorage.setItem(SEATS, data);
  },
  getSeat() {
    const seatInfo = localStorage.getItem(SEATS);
    if (!_.isEmpty(seatInfo) && !_.isNull(seatInfo)) return JSON.parse(seatInfo);
  },
  removeSeat() {
    localStorage.removeItem(SEATS);
  }
};
