import { Button, Description, Hexile, Product, Vexile } from "@/component";
import { getDailyBiddingProduct } from "@/connect";
import React from "react";
import { useNavigate } from "react-router-dom";
import { WaitingBidProduct } from "./partial";

export const BiddingMain: React.FC = () => {
  const navigate = useNavigate();
  const { data } = getDailyBiddingProduct.useHook();

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
      <Product {...data?.[0]} />

      <Vexile gap={1.5}>
        <Description>진행 예정</Description>
        <WaitingBidProduct />
        <WaitingBidProduct />
      </Vexile>
    </Vexile>
  );
};
