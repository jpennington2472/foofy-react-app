import React from "react";
import Profile from "./Profile.tsx";

const onClickHandler = () => {
  <Profile></Profile>;
};

const Welcome = () => {
  return (
    <div>
      <h1>This is the page of my app you should see after signing in</h1>
      <button onClick={onClickHandler}>Click me to see my profile</button>
    </div>
  );
};
export default Welcome;
