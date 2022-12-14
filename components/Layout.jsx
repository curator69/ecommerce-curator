import React from "react";
import Head from "next/head";

import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="layout">
        <Head>
          <title>Curator</title>
        </Head>
        <header>
          <Navbar></Navbar>
        </header>
        <main className="main-container">{children}</main>
        <footer>
          <Footer></Footer>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
