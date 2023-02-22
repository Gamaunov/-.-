import React from "react";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

const App = () => (
  <>
    <div className="">
      <Header />
      <Content />
    </div>
    <div className=" bg-gray-200">
      <Footer />
    </div>
  </>
);

export default App;
