import React from "react";
import "../styling/LoadingSpinner.scss";
import { Dimmer, Loader } from "semantic-ui-react";

let randomStrings = {
  1: "Hi, I'm grabbing the data",
  2: "Working on it...",
  3: "Data is on its way!",
  4: "Hello, thanks for your patience.",
  5: "We're working on it!",
  6: "Hey Nima, thanks for waiting!",
};

const LoadingSpinner = () => {
  function grabRandomString() {
    const values = Object.values(randomStrings);
    const prop = values[Math.floor(Math.random() * values.length)];

    return prop;
  }
  return (
    <div className="Loader">
      <Dimmer active inverted size="massive">
        <Loader inverted>{grabRandomString()}</Loader>
      </Dimmer>
    </div>
  );
};

export default LoadingSpinner;
