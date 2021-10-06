import React from "react";
import "./styling/App.css";
import AdCreativeContainer from "./container/AdCreativeContainer";
import Header from "./components/Header";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="Pearmill Assessment"></header>
        <Header />
        <AdCreativeContainer />
      </div>
    );
  }
}

export default App;
