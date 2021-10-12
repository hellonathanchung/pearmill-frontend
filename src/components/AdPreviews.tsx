import React from "react";
import "../styling/AdPreviews.scss";
import { Button } from "semantic-ui-react";
import { AdCreativeModel } from "../models/AdCreative.model";

const creativesData = "https://platform.pearmill.com/tests/creatives";

class AdPreviews extends React.Component {
  state = {
    open: false,
    selectedViewOption: "DESKTOP_FEED_STANDARD",
    adIds: [],
    adData: [],
    iFrames: [],
  };

  componentDidMount() {
    fetch(creativesData)
      .then((response) => response.json())
      .then((adCreativeData) => this.handleAdData(adCreativeData.data));
  }

  onChangeValue(event: any) {
    const view: string = event.target.value;
    this.setState({
      selectedViewOption: view,
    });
  }

  handleAdData(adCreativeData: AdCreativeModel[]) {
    this.setState({ adData: adCreativeData });
    this.createAdIdArray(adCreativeData);
  }

  createAdIdArray(adCreativeData: AdCreativeModel[]) {
    const adIds = adCreativeData.map((adCreative) => adCreative.ad_id);
    this.setState({ adIds });
    this.fetchiFrames();
  }

  async fetchiFrames() {
    let selectedView = this.state.selectedViewOption;
    let adIdsArray = this.state.adIds;
    let url = `https://platform.pearmill.com/tests/iframes?ad_ids=${adIdsArray}&format=${selectedView}`;

    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ iFrames: data.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  renderIframes() {
    const iFrames: any[] = this.state.iFrames;

    let iFramePreviews = iFrames.map((iFrameInstance, index) => {
      return (
        <div
          key={index}
          dangerouslySetInnerHTML={{ __html: iFrameInstance.iframe_preview }}
        />
      );
    });

    return iFramePreviews;
  }

  render() {
    return (
      <div>
        <h1>Please select a view</h1>
        <div className="view-select-container">
          <div
            className="radio-select"
            onChange={this.onChangeValue.bind(this)}
          >
            <label>
              <input
                type="radio"
                className="radio-input"
                checked={
                  this.state.selectedViewOption === "DESKTOP_FEED_STANDARD"
                }
                onChange={(e) => {}}
                value="DESKTOP_FEED_STANDARD"
              />
              Desktop View
            </label>
            <label>
              <input
                type="radio"
                className="radio-input"
                checked={
                  this.state.selectedViewOption === "FACEBOOK_STORY_MOBILE"
                }
                onChange={(e) => {}}
                value="FACEBOOK_STORY_MOBILE"
              />
              Facebook Story View
            </label>
            <label>
              <input
                type="radio"
                className="radio-input"
                checked={
                  this.state.selectedViewOption === "MOBILE_FEED_STANDARD"
                }
                onChange={(e) => {}}
                value="MOBILE_FEED_STANDARD"
              />
              Mobile Feed Standard
            </label>
          </div>
        </div>
        {this.state.iFrames.length > 0 ? (
          <div className="iframe-views">{this.renderIframes()}</div>
        ) : null}
        <Button>Update View</Button>
      </div>
    );
  }
}

export default AdPreviews;
