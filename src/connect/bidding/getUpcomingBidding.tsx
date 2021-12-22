import { TypeBiddingProduct } from "@/type";
import { createAPIConnector } from "..";

export const getUpcomingBidding = createAPIConnector<
  {},
  {},
  TypeBiddingProduct[]
>("upcomingbid", {
  method: "GET",
  needAuth: false,
  mockHandler: () => [
    {
      bidding_latency: 1000,
      category: "문예",
      condition: "약한 흠집",
      description:
        "다음주 월요일부터 짐정리 기간 시작입니다. 원거리 학생들을 위해 택배보관 장소로 학봉관 1층 1학년 열람실 개방해 놓을 예정인데 보낼 택배들 있으면 미리 가져다 놓으면 택배회사에 연락해서 배송전달하도록 하겠습니다",
      end_datetime: new Date("2021-12-18"),
      lastbid: 1000,
      name: "전희진",
      photo:
        "https://dnvefa72aowie.cloudfront.net/origin/article/202112/E6E7A6FE53523C5B1BE72CE4A49B226D733DB9E7E7436CCF482667F1427D3D4E.jpg",
      photo2: "",
      photo3: "",
      seller_id: "2443",
      start_datetime: new Date("2021-12-17"),
      start_price: 1000,
      lastbidder: "3240",
    },
  ],
});
