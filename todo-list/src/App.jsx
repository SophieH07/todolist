import { useState } from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./utils/Header";
import Content from "./components/Content";

function App() {
  return (
    <div>
      <Header />
      <Content />
    </div>
  );
}

export default App;
