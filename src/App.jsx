import React, { Suspense, useState } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<h1 className="text-2xl">Loading.....</h1>}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default App;
