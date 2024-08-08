import { ReactElement } from "react";
import { Outlet } from "react-router-dom";
import { Header } from ".";
import { MovieProvider } from "../context/MovieProvider";

import "../css/App.css";

export function App(): ReactElement {
  return (
    <>
      <Header />
      <MovieProvider>
        <Outlet />
      </MovieProvider>
    </>
  );
}
