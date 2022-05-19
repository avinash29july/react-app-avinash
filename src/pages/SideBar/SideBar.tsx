import React from "react";
import { Link } from "react-router-dom";
import styles from "./SideBar.module.scss";

const SideBar = () => {
  const dashboardIconElement = (
    <div className={styles.icon}>
      <Link to="/" title="Dashboard"><img src="./assets/dashboard-svgrepo-com.svg" alt="github-icon" /></Link>
    </div>
  );
  const githubIconElement = (
    <div className={styles.icon}>
      <a href="https://github.com/avinash29july" title="Github" target="_blank" rel="noreferrer"><img src="./assets/icons8-github.svg" alt="github-icon" /></a>
    </div>
  );
  const linkedInIconElement = (
    <div className={styles.icon}>
       <a href="https://www.linkedin.com/in/avinash-thakur-34046128/" title="LinkedIn" target="_blank" rel="noreferrer"><img src="./assets/icons8-linkedin-circled.svg" alt="linkedIn-icon" /></a>
    </div>
  );
  const sideBarElement = (
    <div className={styles.div}>
      {dashboardIconElement}
      {githubIconElement}
      {linkedInIconElement}
    </div>
  );
  return <>{sideBarElement}</>;
};

export default SideBar;
