import React from "react";
import "./styling/App.scss";
import AdCreativeContainer from "./container/AdCreativeContainer";
import Header from "./components/Header";
import Footer from "./components/Footer";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="Pearmill Assessment"></header>
        <Header />
        <AdCreativeContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
