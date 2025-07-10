export type AcfHero = {
  hero_heading: string;
  hero_text: string;
};

export type AcfService = {
  id: number;
  acf: {
    service_item_thumbnail: string;
    service_item_title: string;
    service_item_text: string;
  };
};

export type AcfSns = {
  id: number;
  acf: {
    sns_img_thumbnail: string;
    sns_linkurl: string;
  };
};
