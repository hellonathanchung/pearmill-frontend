export class AdCreativeModel {
  ad_id: string;
  ad_name: string;
  thumbnail: string;
  spend: number;

  constructor(
    ad_id: string,
    ad_name: string,
    thumbnail: string,
    spend: number
  ) {
    this.ad_id = ad_id;
    this.ad_name = ad_name;
    this.thumbnail = thumbnail;
    this.spend = spend;
  }
}
