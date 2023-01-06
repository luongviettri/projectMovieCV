/* eslint-disable */

import { createBrowserHistory } from "history";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyles } from "twin.macro";
import BookingLayout from "./Layouts/User/BookingLayout";
import UserCommonLayout from "./Layouts/User/UserCommonLayout";
import NotFound from "./Pages/NotFound/NotFound";
import Booking from "./Pages/UserPages/Booking/Booking";
import ChooseSeat from "./Pages/UserPages/Booking/ChooseSeat";
import DetailTicket from "./Pages/UserPages/Booking/DetailTicket";
import Payment from "./Pages/UserPages/Booking/Payment";
import Success from "./Pages/UserPages/Booking/Success";
import HomePage from "./Pages/UserPages/HomePage/HomePage";
import LogIn from "./Pages/UserPages/LogIn/LogIn";
import MovieDetail from "./Pages/UserPages/MovieDetail";
import MovieList from "./Pages/UserPages/MovieList/MovieList";
import SignUp from "./Pages/UserPages/SignUp/SignUp";
import WelcomePage from "./Pages/UserPages/Welcome/WelcomePage";
import AdminLayout from "./Layouts/Admin/AdminLayout";
import PgManageFilm from "./Pages/AdminPages/FilmManagement/PgManageFilm";
import PgManageUsers from "./Pages/AdminPages/UserManagement/PgManageUsers";
import PgManageTicket from "./Pages/AdminPages/PgManageTicket";
import Loading from "./Components/Loading/Loading";
import CompAddFilm from "./Pages/AdminPages/FilmManagement/CompAddFilm";
import CompEditFilm from "./Pages/AdminPages/FilmManagement/CompEditFilm";
import CompAddUser from "./Pages/AdminPages/UserManagement/CompAddUser";
import CompEditUser from "./Pages/AdminPages/UserManagement/CompEditUser";
import "../src/Assets/Style/allScss";
import Test from "./Components/Test/Test";
import { useMediaQuery } from "react-responsive";
import Construction from "./Components/Construction/Construction";
import About from "./Pages/UserPages/About/About";
import Schedule from "./Pages/UserPages/Schedule/Schedule";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import PgExport from "./Pages/AdminPages/PgExport";
import ComingSoonAnimation from "./Assets/lotties/ComingSoonAnimation";
export const history = createBrowserHistory();
function App() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 930px)"
  });

  return (
    <HistoryRouter history={history}>
      {!isDesktopOrLaptop ? (
        // <Construction />
        <ComingSoonAnimation />
      ) : (
        // <>ok</>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<UserCommonLayout />}>
            <Route path="about" element={<About />} />
            <Route path="schedule" element={<Schedule />} />
            <Route index element={<HomePage />} />
          </Route>
          <Route path="/movies" element={<UserCommonLayout />}>
            <Route index element={<MovieList />} />
            <Route path=":id" element={<MovieDetail />} />
          </Route>
          <Route path="/booking" element={<BookingLayout />}>
            <Route path=":id/theater" element={<Booking />} />
            <Route path="seat" element={<ChooseSeat />} />
            <Route path="pay" element={<Payment />} />
            <Route path="success" element={<Success />} />
          </Route>
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="films" element={<PgManageFilm />} />
            <Route path="films/add" element={<CompAddFilm />} />
            <Route path="films/edit/:id" element={<CompEditFilm />} />
            <Route path="users" element={<PgManageUsers />} />
            <Route path="users/add" element={<CompAddUser />} />
            <Route path="users/edit/:account" element={<CompEditUser />} />
            <Route path="tickets" element={<PgManageTicket />} />
            <Route path="export" element={<PgExport />} />
          </Route>
          <Route path="detail" element={<DetailTicket />} />
          <Route path="/test" element={<Test />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
      <GlobalStyles />
    </HistoryRouter>
  );
}

export default App;
