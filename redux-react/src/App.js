import React from "react";
import logo from "./logo.svg";

import { Provider } from "react-redux";
import store from "./redux/store";
// import Counter from "./components/Counter";
// import Info from "./components/Info";
import Fruits from "./components/Fruits";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div>
        {/* <Counter/>
        <Info/> */}
        <Fruits/>
      </div>{" "}
    </Provider>
  );
}

export default App;
