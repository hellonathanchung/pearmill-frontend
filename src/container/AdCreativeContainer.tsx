import React from "react";
import "../styling/AdCreativeContainer.css";

class AdCreativeContainer extends React.Component {
  state = {
    adData: [
      {
        ad_name: "BM_IMG_7traits_MentalGym_8.25_PM",
        ad_id: "6250837764092",
        thumbnail:
          "https://platform.pearmill.com/thumbnails/6250837764092?thumbnail_url=https://www.facebook.com/ads/image/?d=AQKxWEOBoQtsmbTJJ9T5c3lDjjYyNZ-TrqHSNOrlAZQDDqZXmDJsZO5WXpeR_KJ51V9COxSu72EAutEITGy9BYzUWRY3gif6bm6xK71jecIoUxp4bnw_K6isJEvneNOVPjypmD3HGNWMIY7UgSnEAShh",
        spend: 93.45,
      },
      {
        ad_name: "BM_IMG_7traits_MentalGym_8.25_PM",
        ad_id: "6250837764092",
        thumbnail:
          "https://platform.pearmill.com/thumbnails/6250837764092?thumbnail_url=https://www.facebook.com/ads/image/?d=AQKxWEOBoQtsmbTJJ9T5c3lDjjYyNZ-TrqHSNOrlAZQDDqZXmDJsZO5WXpeR_KJ51V9COxSu72EAutEITGy9BYzUWRY3gif6bm6xK71jecIoUxp4bnw_K6isJEvneNOVPjypmD3HGNWMIY7UgSnEAShh",
        spend: 78.68,
      },
      {
        ad_name: "IMG_7traits_MentalGym_8.25_PM",
        ad_id: "6249108753892",
        thumbnail:
          "https://platform.pearmill.com/thumbnails/6249108753892?thumbnail_url=https://www.facebook.com/ads/image/?d=AQKyn_TtXwyahcnic491pb9BZYNwJcpLXc5TS-YpmnS8cuMr2RCnu2PdS6RFr237LjGafm1dwT1E4sbuWsF-xDl2fJGHdcK_KYOv9OqKBt6I_UzygQ_h0CiEAydpa1cQTeXCHKm0tOzsUKU341llA0da",
        spend: 64.34,
      },
      {
        ad_name: "IMG_7traits_MentalGym_8.25_PM",
        ad_id: "6249108753892",
        thumbnail:
          "https://platform.pearmill.com/thumbnails/6249108753892?thumbnail_url=https://www.facebook.com/ads/image/?d=AQKyn_TtXwyahcnic491pb9BZYNwJcpLXc5TS-YpmnS8cuMr2RCnu2PdS6RFr237LjGafm1dwT1E4sbuWsF-xDl2fJGHdcK_KYOv9OqKBt6I_UzygQ_h0CiEAydpa1cQTeXCHKm0tOzsUKU341llA0da",
        spend: 44.37,
      },
      {
        ad_name: "BM_IMG_7traits_MentalGym_8.25_PM",
        ad_id: "6250837764092",
        thumbnail:
          "https://platform.pearmill.com/thumbnails/6250837764092?thumbnail_url=https://www.facebook.com/ads/image/?d=AQKxWEOBoQtsmbTJJ9T5c3lDjjYyNZ-TrqHSNOrlAZQDDqZXmDJsZO5WXpeR_KJ51V9COxSu72EAutEITGy9BYzUWRY3gif6bm6xK71jecIoUxp4bnw_K6isJEvneNOVPjypmD3HGNWMIY7UgSnEAShh",
        spend: 44.02,
      },
      {
        ad_name: "IMG_emotionallyfit_DudewSign_8.25_PM",
        ad_id: "6249108754092",
        thumbnail:
          "https://platform.pearmill.com/thumbnails/6249108754092?thumbnail_url=https://www.facebook.com/ads/image/?d=AQJW6misnJGrmfIbXMWI2Ai5WDPg-cvbd_zpbr_bXjoHE4Cmvmb9YKctgyoVoyNnNItvZepW6adO-iZoE2dp9ZS3ShcjWSpg9ioaZZ8OvR_l7iQwdPHxyDSJlmsURavDprjuJ__64Cn-vNZpTTzElFWE",
        spend: 41.47,
      },
      {
        ad_name: "VID_CoaColors_TextWorkConvo_9.13_PM",
        ad_id: "6250839060092",
        thumbnail:
          "https://platform.pearmill.com/thumbnails/6250839060092?thumbnail_url=https://scontent-iad3-2.xx.fbcdn.net/v/t15.13418-10/242677802_3138405046403752_63916071592004692_n.jpg?ccb=1-5&_nc_ohc=KgTWhVT-1IAAX8XwJJ3&_nc_ht=scontent-iad3-2.xx&edm=AAT1rw8EAAAA&oh=f0be5ae9863fd12df73bce077823d4ac&oe=6160979C",
        spend: 39.91,
      },
      {
        ad_name: "CAR_MentalHealth_SeriesTest_9.13_PM",
        ad_id: "6250848708092",
        thumbnail:
          "https://platform.pearmill.com/thumbnails/6250848708092?thumbnail_url=https://www.facebook.com/ads/image/?d=AQI33cvwbOYN7PvBYuqgHwdHeYuzz3P5byPkc1y71amo4JRfSPsh9w5Kz-zU5tN8Y9gk5_Ssvk45W7FMsMMsRdaKXzfeW2mH_7Kke0rqWqRK57LQjWCR0XC-bhe3RaXQSL4q7gY7IaSnwFp561jV2Mqj",
        spend: 38.26,
      },
      {
        ad_name: "CAR_MentalHealth_SeriesTest_9.13_PM",
        ad_id: "6250848708092",
        thumbnail:
          "https://platform.pearmill.com/thumbnails/6250848708092?thumbnail_url=https://www.facebook.com/ads/image/?d=AQI33cvwbOYN7PvBYuqgHwdHeYuzz3P5byPkc1y71amo4JRfSPsh9w5Kz-zU5tN8Y9gk5_Ssvk45W7FMsMMsRdaKXzfeW2mH_7Kke0rqWqRK57LQjWCR0XC-bhe3RaXQSL4q7gY7IaSnwFp561jV2Mqj",
        spend: 36.55,
      },
      {
        ad_name: "IMG_Profile_Explain_9.13_PM",
        ad_id: "6250842049692",
        thumbnail:
          "https://platform.pearmill.com/thumbnails/6250842049692?thumbnail_url=https://scontent-lga3-2.xx.fbcdn.net/v/t45.1600-4/242987532_6250842085092_8684356146947204871_n.png.jpg?ccb=1-5&_nc_ohc=5yZ1z7FQOQcAX9Y9FiI&_nc_ht=scontent-lga3-2.xx&edm=AAT1rw8EAAAA&oh=f15478b2f8e9fae658f3ffdb6b75c38e&oe=6160521D",
        spend: 36.32,
      },
    ],
  };

  renderTableData() {
    return this.state.adData.map((adCreative) => {
      const { thumbnail, ad_id, spend, ad_name } = adCreative;

      return (
        <tr key={ad_id}>
          <td>
            <img className="ad-image" src={thumbnail} alt="" />
          </td>
          <td> {ad_name}</td>
          <td> {spend}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <table className="ad-creative-container">
          <th>Image </th>
          <th>Name </th>
          <th>Spend </th>
          <tbody>{this.renderTableData()}</tbody>
        </table>
      </div>
    );
  }
}

export default AdCreativeContainer;
