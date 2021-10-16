import React from "react";
import "../styling/AdPreviews.scss";
import { Button } from "semantic-ui-react";
import { AdCreativeModel } from "../models/AdCreative.model";
import LoadingSpinner from "./LoadingSpinner";

const creativesData = "https://platform.pearmill.com/tests/creatives";

class AdPreviews extends React.Component {
  state = {
    open: true,
    selectedViewOption: "DESKTOP_FEED_STANDARD",
    adIds: [],
    adData: [],
    iFramesLoading: false,
    iFrames: [],
  };

  componentDidMount(): void {
    fetch(creativesData)
      .then((response) => response.json())
      .then((adCreativeData) => this.handleAdData(adCreativeData.data))
      .catch(function (error) {
        console.log(error);
      });
  }

  onChangeValue(event: any) {
    const view: string = event.target.value;
    this.setState({
      selectedViewOption: view,
    });
  }

  handleAdData(adCreativeData: AdCreativeModel[]): void {
    this.setState({ adData: adCreativeData });
    this.createAdIdArray(adCreativeData);
  }

  createAdIdArray(adCreativeData: AdCreativeModel[]): void {
    const adIds = adCreativeData.map((adCreative) => adCreative.ad_id);
    this.setState({ adIds });
    this.fetchiFrames();
  }

  async fetchiFrames(): Promise<void> {
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
      const formatPreview = this.formatIframePreviews(
        iFrameInstance.iframe_preview
      );
      return (
        <div key={index} dangerouslySetInnerHTML={{ __html: formatPreview }} />
      );
    });

    return iFramePreviews;
  }

  formatIframePreviews(iFrameString: string): string {
    let formattedStringArray = iFrameString.split(" ");
    formattedStringArray[4] = 'scrolling= "no"';

    return formattedStringArray.join(" ");
  }

  renderTableData() {
    return this.state.adData.map((adCreative) => {
      const { thumbnail, ad_id, spend, ad_name } = adCreative;

      return (
        <tr key={ad_id}>
          <td>
            <img className="ad-image" src={thumbnail} alt="" />
          </td>
          <td> {ad_name}</td>
          <td>${spend}</td>
        </tr>
      );
    });
  }

  toggleTable() {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <div className="ad-preview-container">
        <Button className="ui violet button" onClick={() => this.toggleTable()}>
          Toggle Table
        </Button>
        {this.state.adData.length > 0 ? (
          <div>
            {this.state.open ? (
              <table className="ad-creative-table">
                <tr>
                  <th>Image </th>
                  <th>Name </th>
                  <th>Spend </th>
                </tr>
                <tbody>{this.renderTableData()}</tbody>
              </table>
            ) : null}
          </div>
        ) : (
          <LoadingSpinner />
        )}
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
        <Button
          className="ui violet button"
          onClick={() => this.fetchiFrames()}
        >
          Update View
        </Button>
        {this.state.iFrames.length > 0 ? (
          <div className="iframe-views">{this.renderIframes()}</div>
        ) : (
          <LoadingSpinner />
        )}
      </div>
    );
  }
}

export default AdPreviews;
