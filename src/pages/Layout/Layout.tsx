import React from "react";
import Dashboard from "../Dashboard/Dashboard";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import styles from "./Layout.module.scss";

const Layout = () => {
  const headerElement = (
    <>
      <Header />
    </>
  );
  const sideBarElement = (
    <>
      <SideBar />
    </>
  );
  const containerElement = (
    <>
      <Dashboard />
    </>
  );
  return (
    <div className={styles.div}>
      <div className={styles.sidebox}>{sideBarElement}</div>
      <div className={styles.headerbox}>
        {headerElement}
        {containerElement}
      </div>
    </div>
  );
};

export default Layout;
