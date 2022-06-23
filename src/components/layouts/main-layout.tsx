import React from "react";
import Main from "components/main";
import Tabs from "components/UI/tabs";
import { Outlet } from "react-router-dom";

export default function MainLayout(): React.ReactElement {
  return (
    <>
      <Main />
      <Tabs />
      <Outlet />
    </>
  );
}