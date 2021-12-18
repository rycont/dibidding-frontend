import { TypeProduct } from "@/type";
import { createAPIConnector } from "..";

interface RegisteringProduct {
  photos: string[];
  name: string;
  category: string;
  condition: string;
  start_price: number;
  description: string;
  bidding_latency: number;
}

export const addNewBidding = createAPIConnector<
  {},
  RegisteringProduct,
  { product: TypeProduct }
>("uploadbid", {
  method: "POST",
  needAuth: true,
  mockHandler: () => ({
    product: {
      category: "일반",
      description: "설명",
      end_datetime: new Date("2021-12-20"),
      name: "마더텅",
      photo:
        "https://dnvefa72aowie.cloudfront.net/origin/article/202112/E6E7A6FE53523C5B1BE72CE4A49B226D733DB9E7E7436CCF482667F1427D3D4E.jpg",
      photo2: "",
      photo3: "",
      seller_id: "1010",
      start_datetime: new Date("2021-12-19"),
      start_price: 1000,
    },
  }),
});
