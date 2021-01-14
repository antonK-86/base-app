import React from "react";
import Logo from "./assets/img/logo.png";
import Avatar from "./components/Avatar";

const App = () => {
  let arr = [1, 2, 3];

  let a = arr.reduce((m, i) => {
    return Math.max(m, i);
  });

  console.log(a);

  return (
    <div className="container">
      <h1>WEBPACK APP ON REACT</h1>
      <div className="logo">
        <img src={Logo} alt="LOGO" width="300" height="300" />
      </div>
      <div className="cont">
        <div className="inner"></div>
      </div>
      <div className="main">
        <span>Использование webpack для верстки.</span>
        <a href="#">link</a>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <Avatar />
      <img src="./assets/img/icons.png" />
    </div>
  );
};

export default App;
