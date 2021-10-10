import React from "react";
import "../styling/AdCreativeContainer.scss";
import AdPreviews from "../components/AdSideBySideView";
class AdCreativeContainer extends React.Component {
  render() {
    return (
      <div>
        <AdPreviews />
      </div>
    );
  }
}

export default AdCreativeContainer;
