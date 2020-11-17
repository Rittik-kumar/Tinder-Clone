import React from "react";
import './App.css';
import Header from "./Header";
import TinderCards from "./TinderCards";
function App() {
  return (
    // BEM class naming convention
    <div className="app">
      <Header />
      <TinderCards />
      {/*swiperButton*/}


    </div>
  );
}

export default App;
