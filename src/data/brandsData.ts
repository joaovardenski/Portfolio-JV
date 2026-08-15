import { images } from "../constants";

export interface Brand {
  name: string;
  imgUrl: string;
}

export const brandsData: Brand[] = [
  { name: "UEPG", imgUrl: images.uepg },
  { name: "Solarman", imgUrl: images.solarman },
  { name: "Diocese de União da Vitória", imgUrl: images.dioceseUV },
  { name: "Baston Aerosóis", imgUrl: images.baston },
];
