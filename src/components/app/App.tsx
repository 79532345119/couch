import React from "react";
import styles from "./app.module.scss";
import Header from "../header/Header";
import Home from "../home/Home";
import About from "../about/About";
import Contacts from "../contacts/Contacts";

function App() {
  return (
    <div className={styles.main}>
      <Header />
      <Home>
        <Contacts />
      </Home>
      <About />
    </div>
  );
}

export default App;
