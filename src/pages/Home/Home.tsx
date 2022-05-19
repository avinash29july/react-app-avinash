import React from "react";
import { Link } from "react-router-dom";
import Card from "../../Component/UI/Card/Card";
import styles from "./Home.module.scss";

const Home = () => {
  const hoverBox = (
    <>
      <div className={styles.hover}>
        <figure>
          <Link to="editableTable" title="React Editable Table Example">
            <img width={400} src="https://global-uploads.webflow.com/5c741219fd0819aad790e78b/5c9bb5a41e17481e7f88b6b6_react-code.png" alt="logo"/>
          </Link>
        </figure>
        <div>
          <Link to="editableTable" title="React Editable Table Example">React Editable Table Example</Link>
        </div>
      </div>
    </>
  );
  const boxElement = (
    <div className={styles.div}>
      <Card>{hoverBox}</Card>
    </div>
  );
  return <>{boxElement}</>;
};

export default Home;
