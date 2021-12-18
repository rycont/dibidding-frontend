import { modalContentAtom } from "@/coil";
import { Button, Description, Hexile, Product, Vexile } from "@/component";
import {
  getDailyBiddingProduct,
  getUpcomingBidding,
  participateBidding,
} from "@/connect";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { UpcomingBidProduct } from "./partial";

export const BiddingMain: React.FC = () => {
  const navigate = useNavigate();
  const { data, loaded } = getDailyBiddingProduct.useHook();
  const { data: upcoming } = getUpcomingBidding.useHook();
  const showAlert = useRecoilState(modalContentAtom)[1];

  return (
    <Vexile padding={3} gap={3}>
      <Hexile x="space" y="center">
        <Description css={{ flex: 1 }}>디비딩 :)</Description>
        <Button
          label="내 물건 올리기"
          small
          onClick={() => navigate("/register")}
        />
      </Hexile>
      {loaded && data?.[0] && (
        <Product
          onClickAction={() =>
            showAlert(() => ({
              button: {
                action() {
                  console.log("ASDF");
                  participateBidding.request(
                    {
                      bidId: data[0]._id,
                    },
                    {
                      userRequestedPrice:
                        data[0].bidding_latency + data[0].lastBid,
                    }
                  );
                },
                label: "네, 이해했습니다",
              },
              content:
                "입찰은 취소할 수 없어요. 구매 의사가 확실할 때에만 경매에 참여해주세요.",
              title: "경고!",
            }))
          }
          {...data[0]!}
        />
      )}

      <Vexile gap={1.5}>
        <Description>진행 예정</Description>
        {upcoming?.map((product) => (
          <UpcomingBidProduct {...product} />
        ))}
      </Vexile>
    </Vexile>
  );
};
