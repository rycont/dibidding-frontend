import { Button, Description, Hexile, Product, Vexile } from "@/component";
import React from "react";
import { useNavigate } from "react-router-dom";
import { WaitingBidProduct } from "./partial";

export const BiddingMain: React.FC = () => {
  const navigate = useNavigate();
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
      <Product
        category="농기구"
        description="콤푸레샤가 뭐냐면 하루에 백만대가 팔리는 최첨단 4차산업혁명 디바이스
        현실세계와 유비쿼터스 세계를 연결시켜주는 다리같은 존재이지요"
        name="콤푸레샤"
        photo="https://dnvefa72aowie.cloudfront.net/origin/article/202112/E6E7A6FE53523C5B1BE72CE4A49B226D733DB9E7E7436CCF482667F1427D3D4E.jpg"
        startAt={0}
        uploader={{
          banned: false,
          name: "최재현",
          uid: "2020200",
        }}
        onClickAction={() => navigate("/product/1010")}
        challenge={[
          {
            created_at: 0,
            price: 1200,
          },
        ]}
        finished={false}
        hasSucceed={false}
        usage="사용감 있음"
        quotation={100}
      />

      <Vexile gap={1.5}>
        <Description>진행 예정</Description>
        <WaitingBidProduct />
        <WaitingBidProduct />
      </Vexile>
    </Vexile>
  );
};
